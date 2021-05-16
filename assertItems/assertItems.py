from processJson import *
import requests
import json
import re
import math
from collections import defaultdict

code = None
itemsGuide = None
lastRun = None
funcs = None
arrays = None
bugs = set()

def getItemData():
	data = requests.get("http://eden-item-guide.glitch.me/items.json").json()

	with open("itemsGuide.json", "w+", encoding="latin-1") as f:
		json.dump(data, f, indent=4)

def loadItems():
	global itemsGuide
	
	if itemsGuide == None:
		with open("itemsGuide.json", "r+", encoding="latin-1") as f:
			itemsGuide = json.load(f)
		
		itemsGuide["drops"] = {x["id"]: x["drops"] for x in itemsGuide["drops"]}		

		temp = defaultdict(list)

		for crafting in itemsGuide['craftings']:
			temp[crafting["id"]].append(crafting)
		
		itemsGuide['craftings'] = temp

		for id in itemsGuide["items"]:
			if "bugged" in itemsGuide["items"][id]:
				bugs.add(id)
			if "stats" in itemsGuide["items"][id] and "stats_increase" in itemsGuide["items"][id]["stats"]:
				itemsGuide["items"][id]["stats"]["str_increase"] = itemsGuide["items"][id]["stats"]["stats_increase"]
				itemsGuide["items"][id]["stats"]["agi_increase"] = itemsGuide["items"][id]["stats"]["stats_increase"]
				itemsGuide["items"][id]["stats"]["int_increase"] = itemsGuide["items"][id]["stats"]["stats_increase"]

def assertCorrectCraftings():
	loadCode()
	lines = [l for l in code.split("\n") if "sc___prototype" in l and "evaluate" in l]
	
	recipes = defaultdict(list)
	chances = dict()

	for line in lines:
		if "_evaluate(1,('" in line or "evaluate(1,(udg" in line and "udg_ITEMTYPE_Imsi" not in line:
			id = None
			qty = 0
			recipe = []
			info = line.replace("(", "").replace(")", "").split(",")[1:]
			idQty = None

			if "udg" in info[0]:
				info = info[1:]

			for x in range(0, len(info)):
				if info[x].strip()[0] == "'":
					id = info[x].strip().split("'")[1]
				elif id != None:
					qty = int(info[x].strip())
					for i in range(0, qty):
						recipe.append(id)
					id = None	
					if idQty is None:
						idQty = qty

			if len(recipe) > 1:
				recipes[recipe[0]].append({"items": recipe[idQty:], "chance": eval(info[-1].split("//")[0]), "qty": idQty})
	
	for itemID in recipes:
		if itemID in itemsGuide["craftings"]:
			jassRecipes = sorted(recipes[itemID], key= lambda x: x["chance"])
			guideRecipes = sorted(itemsGuide["craftings"][itemID], key= lambda x: x["chance"])

			if len(jassRecipes) != len(guideRecipes):
				print("different crafting length", itemID)
				print("jass", jassRecipes)
				print("guide", guideRecipes)
			else:
				for jassRecipe, guideRecipe in zip(jassRecipes, guideRecipes):
					if sorted(jassRecipe["items"]) != sorted(guideRecipe["items"]) or jassRecipe["chance"] != guideRecipe["chance"] or jassRecipe["qty"] != guideRecipe["qty"]:
						print("different crafting in", itemID)
						print("jass", jassRecipe)
						print("guide", guideRecipes)	

		else:
			for recipe in recipes[itemID]:
				print("\nnew Craft('{}', {}).add({});\n".format(itemID, recipe["chance"], json.dumps(recipe["items"])))	

						
def reportBug(id, *args):
	if id in itemsGuide["items"] and ("bugged" in itemsGuide["items"][id] or "disabled" in itemsGuide["items"][id]):
		bugs.discard(id)
	else:
		print(id, *args)	


def loadCode():
	global code
	global funcs
	global arrays
	
	if code == None:
		with open("war3map.j", "r+", encoding="utf-8") as f:
			code = f.read()

	funcs = dict()
	arrays = defaultdict(list)

	for m in re.finditer("\nfunction(.+?)(?=endfunction)", code, re.MULTILINE | re.DOTALL):
		funcs[m.group(1).split("takes")[0].strip()] = m.group(1) 

	for m in re.finditer("set (.*)\[\d+\].*'(.*)'", code):
		arrays[m.group(1)].append(m.group(2))	


	loadingCode = ['Trig_setup_HeroItem2_Actions', 'Trig_setup_SaveData_Actions', 'Trig_setup_HeroItem_Actions']

	with open('war3map.txt', 'w', encoding='utf-8') as f:
		f.write("\n".join(map(lambda x: funcs[x] + 'endfunction', loadingCode)))


def getProbs(func):
	start = 0
	end = None

	try:
		for m in re.finditer(">=\s*(\d+\.?\d*)", func):
			start = float(m.group(1)) - 1
		for m in re.finditer(">\s*(\d+\.?\d*)", func):
			start = float(m.group(1))
		for m in re.finditer("<=\s*(\d+\.?\d*)", func):
			end = float(m.group(1))
	except Exception as ex:
		print(line)
		raise ex		

	return start, end		

def funcBefore(idx, depth = 1, process=True):
	original = idx
	while depth != 0:
		newIdx = code.rfind("\n", 0, idx)
		line = code[newIdx:idx]

		if line.strip().startswith('//'):
			pass
		elif "endif" in line:
			depth += 1
		elif " if" in line or "\nif" in line or "elseif" in line or "function" in line:
			depth -=1

		idx = newIdx	

		if depth > 8:
			raise Exception("unlimited loop " + str(code[original:original+100].encode("utf-8")))

	if "function" in line:
		l = line.split("function")[1].split("takes")[0].strip() 
	else:
		l = re.split(r' if|\nif|elseif', line)[1];
		if "()" in l:
			l = l.split("()")[0]
		l = l.split("then")[0].strip("( ")

	return l if l in funcs else line


def getGlobalProb(idx):
	m = None

	while m is None:
		newIdx = code.rfind("\n", 0, idx)
		m = re.search("set .*GetRandom(.*)\((\d*\.?\d*)\s*,\s*(\d*\.?\d*)", code[newIdx:idx])
		idx = newIdx
	return m

def getChest(m, func, itemQty):
	start, end = getProbs(func)	

	globalProb = getGlobalProb(m.start())

	chance = ((end - start - (1 if globalProb.group(1) == "Real" and ">=" in func else 0)) / (itemQty)) * (int(float(globalProb.group(3))) - int(float(globalProb.group(2))) + (1 if globalProb.group(1) == "Int" else 0) ) / 100

	chestFunc = funcBefore(code.rfind(globalProb.group(0), 0, m.start()))

	if re.search("Item == '....'", chestFunc):
		chest = chestFunc.split("'")[1]
	else:	
		chest = re.search("GetManipulatedItem[^']*'(....)'", funcs[chestFunc]).group(1)

	return chest, chance

def resolveRandom(m, func, key):
	add = (1 if "GetRandomInt" in func else 0)
	d = re.search("GetRandom.*\((\d*\.?\d*)\s*,\s*(\d*\.?\d*).*<=\s*(\d*)", func)
	func = funcBefore(m.start(), 2)		
	chest = re.search(key, funcs[func]).group(1)
	chance = (100 / (float(d.group(2)) - float(d.group(1)) + add)) * float(d.group(3))
	return chest, chance


#id, chance = m.group(1), eval(m.group(2).strip("( ").replace("* pCountChance", ""))

def processDropFunc(m, drops):
	func = funcBefore(m.start())
	chance = 100	

	line = m.group(0)
	#print(line)
	if "AddAttributedItem(whichUnit , itemId ," in line or "FindAdd(pId , itemId , false)" in line or "eventRefillChance" in func:
		return

	if "set eventBagChance" in line:
		chest, chance =  func.split("'")[1], float(line.split('=')[1])
		return drops[chest].append({"id": "I0EX", "chance": chance})

	if "Play_Bool[loopA] then" in func or "GetUnitState(udg_Cirno_P_Unit[loopA], UNIT_STATE_LIFE) > 0 then" in func or "if GetUnitState(udg_SSS_Boss_Unit[loopA], UNIT_STATE_LIFE) > 0 then" in func:
		func = funcBefore(m.start(), 2)
	#print(line, func)	
	if "'" in line:
		id = line.split("'")[1]

		if "GiveItem" in line:
			chest = funcBefore(m.start(), 2).split("unitId == ")[1].split("'")[1]
			return drops[chest].append({"id": id, "chance": 100})
		if "AddAttributedItem" in line:
			chest, chance = func.split("'")[1] ,100
			return drops[chest].append({"id": id, "chance": chance})
		if "ItemChance" in line or "ITD" in line:
			if "eventBagChance" in line:
				return
			if func in funcs:
				func =  funcs[func]

			if "if eventBagChance then" in func:
				idx = code.rfind("takes nothing returns nothing", 0, m.start())
				if code.find("local boolean eventBagChance= false", idx, m.start()) != -1:
					return
				else:
					func = funcBefore(m.start(), 3)
			chest, chance = func.split("'")[1], eval(")".join(line.split(',')[-1].split(')')[0:-1]).replace("* addChance", ""))
			return drops[chest].append({"id": id, "chance": chance})
		if "GetClickedButtonBJ" in func:
			return
		if "Item ==" in func or "itemId" in func:
			chest, chance = func.split("'")[1], 100
			return drops[chest].append({"id": id, "chance": chance})
		elif "Random" in func:
			func2 = funcBefore(m.start(), 2)

			if "unitId == '" in func:
				start, end = getProbs(func)
				chest = func.split("'")[1]
				chance = (end - start) 
			elif "unitId == '" in func2:
				start, end = getProbs(func)
				chest = func2.split("'")[1]
				chance = (end - start)
			else:	
				chest, chance = getChest(m, func, 1)
			#print(line, func, chest, chance)
			return drops[chest].append({"id": id, "chance": chance})
		elif "== true" in func: #exhange items
			return	
		elif "Chiruno_Event_Bay" in func:
			return	
		elif "Trig_Point".lower() in func.lower(): #sell item
			return
		elif func.startswith("Trig_Exchange_God_Item"): #exchange
			return
		elif func.startswith("Trig_scvscvgo_Func001C"):
			return
		elif func in funcs:
			if "udg_Point" in funcs[func]: #buy item
				return
			elif "GetSoldItem()" in funcs[func]: #sell item
				return
			elif "UnitHasItemOfTypeBJ" in funcs[func]: #echange item
				return
			elif "GetItemCharges" in funcs[func]: #exchange coupons
				return
			elif "udg_GOD02_Amor_BTN01" in funcs[func] or "udg_GOD02_Amor_BTN02" in funcs[func] or "udg_GOD01_Bag_Skill_BTN" in funcs[func]:
				return	
			elif "udg_GOD_Moster02_Clear_Count" in funcs[func]: #buy item
				return	
			elif "<=" in funcs[func]:
				if "GetRandom" in funcs[func]:
					chest, chance = resolveRandom(m, funcs[func], "(?:GetManipulatedItem|GetUnitTypeId)[^']*'(....)'")
				else:	
					chest, chance = getChest(m, funcs[func], 1)
				if chest == None:
					raise Exception(func, funcs[func])	
				return drops[chest].append({"id": id, "chance": chance})
			elif "CreateItemLoc" not in line:	
				chest = re.search("GetManipulatedItem[^']*'(....)'", funcs[func]).group(1)
				return drops[chest].append({"id": id, "chance": 100})
	elif "GetRandomInt" in line:
		data = re.search("\((.*)\[GetRandomInt\((\d*)\s*,\s*(\d*)", line)
		name, first, last = data.group(1).split(" ")[-1], int(data.group(2)), int(data.group(3))
		

		if "Gamble" in name:
			return

		chance = 100/(last - first + 1)

		if "GetRandomReal" in func:
			data = re.search("GetRandomReal\((\d*)\s*,\s*(\d*)", func)
			start, end = int(data.group(1)), int(data.group(2))
			newC = float(func.split('<= ')[1].split(" ")[0]) / (end - start)

			if code.rfind("if", m.start() - 1000, m.start()) > code.rfind("else",  m.start() - 1000, m.start()):
				chance *= newC
			else:
				chance *= (1 - newC)

			func = funcBefore(m.start(), 2)
			
			if "Play_Bool[loopA] then" in func or "GetUnitState(udg_Cirno_P_Unit[loopA], UNIT_STATE_LIFE) > 0 then" in func or "if GetUnitState(udg_SSS_Boss_Unit[loopA], UNIT_STATE_LIFE) > 0 then" in func:
				func = funcBefore(m.start(), 3)

		if re.search("Item == '....'|itemId == '....'|unitId == '....'", func):
			chest = func.split("'")[1]
		
		for item in arrays[name][first:last+1]:
			drops[chest].append({"id": item, "chance": chance})		


		if len(arrays[name]) != last - first + 1 and name != "udg_AcAngel_GOD_Item":
			print("not all chest items are being obtained ", name, first, last)	

		return

	if "udg_saveItem[LoadInteger" in line:
		return
	
	chest = None

	if "GetRandomReal" in func:
		start, end = getProbs(func)
		chance = (end - start) / 100
		func = funcBefore(m.start(), 2)
	if "Item ==" in func:
		chest = func.split("'")[1]
	elif "Random" in func:
		chest, chance = getChest(m, func, 1)
	elif "GetItemTypeId(GetManipulatedItem())" in func:
		chest = func.split("GetItemTypeId(GetManipulatedItem())")[1].split("'")[1]
	elif func == "Trig_SSBoss_1_Func008Func002C":
		chest = "e0D8"
	elif func.startswith("Trig_Item_Drop_ArcAngel"):
		chest = "n027"
	elif func.startswith("Trig_Item_Drop_ArcDevil_"):
		chest = "n02Y"
	elif func.startswith("Trig_Item_Drop_Destroy_GOD_"):
		chest = 'n03Z'
	elif func.startswith("Trig_Item_Drop_Clean_GOD"):
		chest = 'n04Q'
	elif func.startswith("Trig_Acangel_GOD_04_Dead"):
		chest = "n05Z"
	elif func.startswith("Trig_Item_Drop_Doom_GOD"):
		chest = "n03Z"
	elif func.startswith("Trig_Item_Drop_Purify_GOD"):
		chest = "n04Q"
	elif func.startswith("Trig_Item_Drop_DevilGOD_King"):
		chest = "n05P"
	elif func.startswith("Trig_Item_Drop_Dimension_GOD"):
		chest = "n062"
	elif func.startswith("Trig_Dead_Func009Func002Func006C"):
		chest = "n04E"
	elif "if not FindAdd(pId , itemId , showText) then" in func:
		return
	elif "udg_Cirno_P_Unit" in funcs[func] or m.group(1) in ["I0JV", "I012"] or func in ["Trig_sdfsdf_Actions"] or func.startswith("Trig_LoadTyping_Func"):
		return
	elif "GetRandomInt" in funcs[func]:
		chest, chance = resolveRandom(m, funcs[func], "GetUnitTypeId[^']*'(....)'")
	elif "GetRandomReal" in funcs[func]:
		chest, chance = resolveRandom(m, funcs[func], "GetItemTypeId[^']*'(....)'")
	elif "GetHeroLevel" in funcs[func]:
		func = funcBefore(m.start(), 2)	
		chest, chance = re.search("GetUnitTypeId[^']*'(....)'", funcs[func]).group(1), 100
	elif "GetItemTypeId(GetManipulatedItem())" in funcs[func]:
		chest = funcs[func].split("GetItemTypeId(GetManipulatedItem())")[1].split("'")[1]
	else:	
		chest = funcs[func].split("GetUnitTypeId")[1].split("'")[1]

	id = m.group(1)
	if "'" in id:
		id = id.split("'")[1]

	if len(id) == 4:	
		drops[chest].append({"id": id, "chance": float(chance)})	
	else:
		raise Exception("error", chest, chance, func, line, m.group(1))

import decimal

def byId(drops):
	s = dict()
	for d in drops:
		if d["id"] not in s:
			s[d["id"]] = []
		dic = dict(d)
		dic["chance"] = "%.2f" % (float(d["chance"]) + 10**-10)
		if "l__r" in dic and dic["l__r"] == None:
			del dic["l__r"]
		if "l__r" in dic:
			dic["l__r"] = "%.2f" % float(dic["l__r"]) 
		s[d["id"]].append(dic)
	return s

def assertCorrectDropRates():
	loadCode()
	
	drops = defaultdict(list)	

	for m in re.finditer("call ItemChance\((.*'.*)", code):
		processDropFunc(m, drops)

	for m in re.finditer("call itemdrop.*'(....)'.*,\s*(\d+\.?\d*).*'(....)'", code):
		drops[m.group(3)].append({"id": m.group(1), "chance": float(m.group(2))})

	for m in re.finditer("CreateItemLoc\('(....)'", code):
		processDropFunc(m, drops)

	for m in re.finditer("call UnitAddItemByIdSwapped(.*)", code):
		processDropFunc(m, drops)

	for m in re.finditer("call AddAttributedItem\((.*)", code):
		processDropFunc(m, drops)

	for m in re.finditer("set eventBagChance=(.*)", code):
		processDropFunc(m, drops)

	for m in re.finditer("GiveItem\((.*)", code):
		processDropFunc(m, drops)

	for m in re.finditer("AddRewardItem\((.*'.*)", code):
		processDropFunc(m, drops)

	for m in re.finditer("call ITD.*'(....)'.*", code):
		processDropFunc(m, drops)		

	for chest in drops.keys():
		if chest in itemsGuide["drops"]:
			jass, gu = byId(drops[chest]), byId(itemsGuide["drops"][chest])

			for id in jass:
				if id not in gu:
					print("missing in guide", id, jass[id],  "at chest ", chest)
				elif len(jass[id]) != len(gu[id]):
					print("different lengths", jass[id], gu[id])
				else:
					for j, g in zip(jass[id], gu[id]):
						if j["chance"] != g["chance"] or (("l__r" in j) != ("l__r" in g)) or ("l__r" in j and (g["l__r"] != j["l__r"])):
							print("different", id, g, "(guide)", j, chest)
			for id in gu:
				if id not in jass:
					print(chest, " does not drop ", id)

		else:
			print(chest, " not in item guide", drops[chest])	

	for chest in itemsGuide["drops"]:
		if chest not in drops:
			print(chest, " not calculated in jass")		


def processStat(stat, line, val, id, missing):
	missing[stat].discard(id)

	if id in itemsGuide["items"]:
		if stat not in  itemsGuide["items"][id]["stats"]:
			reportBug(id, "does not have " + stat, line)
		else:
			if abs(itemsGuide["items"][id]["stats"][stat] - val) > 1e-8:
				reportBug(id, "different " + stat, itemsGuide["items"][id]["stats"][stat], val, line)
	else:
		print(id, "not in guide " + id)			



def processLine(line, id, missing, context = dict()):
	if len(list(filter(lambda x: x in line, ["udg_Plus_Demige", "udg_Attack_Plus_Item_Real", "udg_Reflect_Item_Real", "udg_Minus_Demige", "udg_Shield_Real", "udg_Shied_Int", "udg_Fire_Amor", "udg_Fire_Wepon", "udg_Fire_Amor_Minus", "udg_Gaho_Item_Real", "udg_Save_Stat", "udg_Skill_Damage_UP", "udg_Plus_damage", "udg_HP_And_Dead_Item_PD_Real", "udg_HP_And_Dead_Item_HP_Real", "udg_Critical_Item_real", "udg_Save_Stat_Str", "udg_Save_Stat_Agi", "udg_Save_Stat_Int", "udg_Save_Stat_HP"]))):
		try:
			if "+" in line:
				damage = round(float(line.split("+")[1].split(")")[0].strip()) * 100)
			elif "-" in line:
				damage = round(float(line.split("-")[1].split(")")[0].strip()) * 100)	
			else:
				damage = float(line.split("=")[-1])
		except Exception as ex:
			print(line, ex)		
			raise ex

		if damage == 0:
			return			

	if ("udg_Plus_Demige" in line or "udg_Plus_damage" in line) and id not in ["I00Z", "I010", "I02X", "I03N"]:
		processStat("damage_increase", line, damage, id, missing)	
	elif "udg_Fire_Amor_Minus" in line:
		processStat("hp_regen", line, damage * -1, id, missing)		
	elif "udg_Gaho_Item_Real" in line:
		processStat("recovery", line, damage , id, missing)										
	elif "udg_Minus_Demige" in line or "udg_Shied_Int" in line:
		if "udg_Shied_Int" in line:
			damage *= -1
			processStat("damage_taken", line, damage, id, missing)
	elif "udg_Fire_Amor" in line:
		processStat("flame_armor", line, damage, id, missing)
	elif "udg_Fire_Wepon" in line:
		processStat("flame_weapon", line, damage, id, missing)
	elif "udg_Save_Stat_Str_UP" in line:
		processStat("str_increase", line, damage, id, missing)
	elif "udg_Save_Stat_Agi_UP" in line:
		processStat("agi_increase", line, damage, id, missing)
	elif "udg_Save_Stat_Int_UP" in line:
		processStat("int_increase", line, damage, id, missing)
	elif "udg_Save_Stat_HPUP" in line:
		if "stat" in context:
			processStat(context["stat"], line, damage, id, missing)
		else:					
			processStat("max_health", line, damage, id, missing)					
	elif "udg_Save_Stat_MPUP" in line:
		processStat("max_mana", line, damage, id, missing)	
	elif "udg_Skill_Damage_UP" in line:
		processStat("skill_damage", line, damage, id, missing)			
	elif "udg_HP_And_Dead_Item_PD_Real" in line:
		processStat("purgatory_damage", line, damage * 100, id, missing)	
	elif "udg_HP_And_Dead_Item_HP_Real" in line:
		processStat("purgatory_recovery", line, damage * 100, id, missing)
	elif "udg_Critical_Item_real" in line:
		processStat("bamboo_damage", line, damage * 100, id, missing)
	elif "udg_Save_Stat_Str[" in line:
		processStat("str", line, damage / 100, id, missing)
	elif "udg_Save_Stat_Agi[" in line:
		processStat("agi", line, damage / 100, id, missing)
	elif "udg_Save_Stat_Int[" in line:
		processStat("int", line, damage / 100, id, missing)
	elif "udg_Save_Stat_HP[" in line:
		processStat("hp", line, damage / 100, id, missing)	
	elif "udg_Shield_Real" in line:
		processStat("shield", line, damage, id, missing)
	elif "udg_Attack_Plus_Item_Real" in line:
		processStat("angra_dmg", line, damage * 100, id, missing)
	elif "udg_Reflect_Item_Real" in line:
		processStat("grasp", line, damage, id, missing)



def processDamage2(missing):
	for m in re.finditer("Item\s?==\s?'(\w\w\w\w)'", code):
		id = m.group(1)
		idx1 = code.find("endif", m.start())
		idx2 = code.find("elseif", m.start())
		text = code[code.find(id, m.start()):min(idx1, idx2)]

		if not ("if" in text and "Item ==" in text):
			for line in text.split("\n"):
				processLine(line, id, missing)

	for m in re.finditer("call SaveReal\(Itemtable, '(\w\w\w\w)', Stri", code):
		id = m.group(1)
		line = code[m.start():code.find('\n', m.start())]

		stats = {
			'df': 'damage_taken',
			'md': 'damage_taken',
			'pd': 'damage_increase',
			'at': 'atk',
			'str': 'str',
			'agi': 'agi',
			'int': 'int',
			'amor': 'armor',
			'hp': 'hp',
			'mp': 'mp',
			'hpup': 'max_health',
			"mps": "mps",
			'ps': 'skill_damage',
			'strup' : 'str_increase',
			'agiup' : 'agi_increase',
			'intup' : 'int_increase',
			'hpr': 'hp_regen_percent'
		}

		multipliers = {
			'df': -100,
			'md': 100,
			'pd': 100,
			'mps': 100,
			'hpup': 100,
			'ps': 1000,
			'strup' : 100,
			'agiup' : 100,
			'intup' : 100
		}

		s = line.split("StringHash(")[1].split('"')[1].lower()

		if s in ["fd"]:
			reportBug(id, s)
			continue

		stat = stats[s]
		multiplier = 1 if s not in multipliers else multipliers[s]
		divisor = 10 if s == 'ps' else 1

		damage = float(line.split(",")[-1].split(")")[0])
		damage = (round(damage * multiplier) if multiplier != 1 else damage) / divisor
		processStat(stat, line , damage, id, missing)


def processDamage(missing):
	for m in re.finditer("set.*\[IT\]", code):
		line = code[m.start():code.find("\n", m.start())]

		idx = code.rfind("if", 0, m.start())

		for m2 in re.finditer("itemId == '(....)'", code[idx:code.find('\n', idx)]):
			id = m2.group(1)
			processLine(line, id, missing)


def assertCorrectInfo(missing):
	guide = itemsGuide["items"]

	for itemID in guide:
		if itemID not in items:
			if "disabled" not in guide[itemID]:
				print(itemID, "not in jass")
			continue

		for stat in props:
			if stat in items[itemID] and items[itemID][stat] > 0:
				processStat(stat, "", items[itemID][stat], itemID, missing)


def removeStatSystemAbilities():
	ids = set()
	for match in re.finditer('set udg_Stat_System', code):
		idx = code.find("='", match.start())
		id = code[idx+2:idx+6]
		ids.add(id)

	for id in items:
		item = items[id]
		if "abilList" in item and item["abilList"] != '_':
			addAbilities(item, set(item["abilList"].strip().split(",")) & ids, -1)


def processProcs(missing):	
	stats = {
		'udg_Attack_Item': 'attack_agi',
		'udg_Attack_Item_Real': 'attack_real',
		'udg_Attack_Item_Str': 'attack_str',
		'udg_Attack_Item_Str_Aig': 'attack_str_agi',
		'udg_ManaProp': 'contract',
		'udg_Int_Tick_Item': 'int_tick',
		'udg_Int_Tick_Item_Real': 'attack_int_real',
		'udg_Str_Int_Tick_Item_Real': 'attack_str_int_real'
	}


	safeIdx = code.find('function InitSounds')

	seen = defaultdict(dict)
	unseen = defaultdict(dict)

	for m in re.finditer("set udg_Attack_Item|set udg_ManaProp|set udg_Int_Tick_Item|set udg_Str_Int_Tick_Item_Real", code):
		if m.start() < safeIdx:
			continue
		line = code[m.start():code.find("\n", m.start())]

		if "udg_Attack_Item_Unit" in line:
			continue

		idx = code.rfind("if", 0, m.start())

		for m2 in re.finditer("'(\w\w\w\w)'", code[idx:code.find('\n', idx)]):
			id = m2.group(1)
			stat = stats[line.split('set')[1].split("=")[0].split("[")[0].strip()]
			val = line.split("=")[1]
			val = True if val == 'true' else False if val == 'false' else float(val)

			funcIdx = code.rfind("takes nothing returns nothing", 0, m.start())
			funcName = code[code.rfind("function", 0, funcIdx):funcIdx].split("function")[1].strip()

			if funcName == "Trig_Item_Tick_GG_Actions":
				unseen[id][stat] = False

			elif funcName == "Trig_Item_Pick_Actions": 
				seen[id][stat] = True	
				processStat(stat, line, val, id, missing)				
		

	checkSeenUnseen(seen, unseen, "unseen")			
	checkSeenUnseen(unseen, seen, "seen")			

	toCheck = {
		"30000 + I2R(GetHeroInt(udg_hero[ID], true)) * udg_Int_Tick_Item_Real[ID]": 8,
		"30000 + I2R(GetHeroAgi(udg_hero[ID], true)) * udg_Attack_Item_Real[ID]": 20,
		"30000 + I2R(GetHeroStr(udg_hero[ID], true) + GetHeroAgi(udg_hero[ID], true)) * udg_Attack_Item_Real[ID]": 16,
		"30000 + I2R(GetHeroStr(udg_hero[ID], true)) * udg_Attack_Item_Real[ID]": 12,
		"30000 + I2R(GetHeroInt(udg_hero[ID], true) + GetHeroStr(udg_hero[ID], true)) * udg_Str_Int_Tick_Item_Real[ID]": 8
	}

	for text in toCheck:
		idx = code.find(text)
		if idx == -1:
			print(text, "not found")
		else:
			idx = code.rfind("GetRandomInt(1, 100) <=", 0, idx)
			chance = code[idx:idx + 50].split("<=")[1].split("then")[0].strip()
			if chance != str(toCheck[text]):
				print("wrong chance", chance, toCheck[text], text)


def checkSeenUnseen(s1, s2, msg):
	for id in s1.keys():
		if id not in s2:
			reportBug(id, "missing " + msg)
		else:
			for stat in s1[id]:
				if stat not in s2[id]:
					reportBug(id, stat, "missing " + msg)	

def processHPConsume(missing):
	for m in re.finditer("'(\w\w\w\w)'",funcs["Trig_item_skill_Func006Func001C"]):
		id = m.group(1)
		processStat("hp_consume", "", True, id, missing)

def processRecovery(missing):
	duration = float(funcs["Trig_Read_item017_Actions"].split("call s__TrigVariables_Setinteger(GlobalTV,0 ,")[1].split(")")[0])
	f = funcs["Trig_Read_item017_Actions"]
	for m in re.finditer("itemId == '(....)'", f):
		id = m.group(1)
		func = f[m.start():min(f.find('endif', m.start()), f.find('elseif', m.start()))]
		multiplier = float(func.split("call s__TrigVariables_Setreal(GlobalTV,0 , ")[1].split(")")[0])

		if "s__TrigVariables_Setinteger" in func:
			duration = float(func.split("call s__TrigVariables_Setinteger(GlobalTV,0 ,")[1].split(")")[0])

		processStat("recovery_duration", "", duration, id, missing)
		processStat("recovery_multiplier", "", multiplier, id, missing)

def processVampiric(missing):
	for m in re.finditer("function (Trig_Read_itemHP_UP_Amor_.._Conditions)", code):
		id = funcs[m.group(1)].split("'")[1]
		actions = funcs[m.group(1).replace("Conditions", "Actions")]
		lines = list(filter(lambda l: "set udg_Save_Stat_HPUP" in l, actions.split("\n")))
		processLine(lines[0], id, missing, {'stat': 'vampiric'})
		processLine(lines[1], id, missing, {'stat': 'vampiric'})

def processExtraArmor(missing):
	actions = funcs["Trig_Read_itemTant_Helm_01_Actions"]

	for m in re.finditer("function (Trig_Read_itemTant_Helm_01_Func004Func...C)", code):
		id = funcs[m.group(1)].split("'")[1]
		idx = actions.find(m.group(1))
		func = actions[idx:actions.find('endif', idx)]

		armor = float(func.split("call s__TrigVariables_Setreal(GlobalTV,0 ,")[1].split(")")[0])
		ability = abilities[items[id]["abilList"]]

		processStat("extra_armor", "", armor, id, missing)
		processStat("extra_armor_cd", "", float(ability["Cool1"]) , id, missing)
		processStat("extra_armor_range", "", float(ability["Area1"]) , id, missing)


def assertCorrectBonusDamage():
	loadCode()
	removeStatSystemAbilities()

	missing = defaultdict(set)

	for id in itemsGuide["items"]:
		if "stats" in itemsGuide["items"][id]:
			for stat in itemsGuide["items"][id]["stats"]:
				missing[stat].add(id)

	del missing["stats_increase"]

	for id in ["I0AS", "I08T", "I0AT", "I0C1", "I0C2", "I0HI", "I0GI", "I07C", "I04E", "I0NF", "I08U", "I0HV", "I0BP"]:
		missing["damage_increase"].discard(id)

	for id in ["I00Z", "I010", "I02X", "I03N"]:
		missing["damage_taken"].discard(id)		


	assertCorrectInfo(missing)	
	processDamage(missing)
	processDamage2(missing)
	processProcs(missing)
	processHPConsume(missing)
	processRecovery(missing)
	processVampiric(missing)
	processExtraArmor(missing)

	for stat in missing.keys():
		for id in missing[stat]:
			if (stat == "movement_speed" or stat == "attack_speed") and id in ['I07F', 'I0ID', 'I0IE', 'I0IC', 'I0NJ', 'I0QK', 'I0SI', 'I0SL', 'I026', 'I0QO']:
				continue
			reportBug(id, "missing", stat)
			
	for id in bugs:
		print("didnt find any bug for ", id)		



def assertItemScaling(itemId, text, scaling, qty = 1, percentChance = 0, untilFunctionEnd = False, depth = 1):
	global lastRun

	count = 0

	if lastRun != None and percentChance == 0 and untilFunctionEnd == False and depth == 1 and itemId == lastRun[0] and text == lastRun[1]:
		funcCodes = lastRun[2]
	else:	
		funcCodes = []

		if text == "if":
			text = "if Item == '"+itemId+"' then"
			for m in re.finditer(re.escape(text), code):
				funcCodes.append(code[m.start():code.find("if", m.start() + len(text))])
		else:		
			for m in re.finditer(re.escape(text), code):
				func = code[code[:m.start()].rfind("function "):code.find("endfunction", m.start())]

				if percentChance != 0:
					if "<= " + str(percentChance) not in func:
						print(itemId, "incorrect percent chance")

				funcName = func.split("function ")[1].split(" ")[0].replace("_Conditions", "_Actions")

				realDepth = depth

				while (realDepth > 0):
					if "_Actions" in funcName:
						for m in re.finditer("function.*" + funcName, code):
							funcCode = code[m.start():code.find("endfunction", m.start())]
							funcCodes.append(funcCode)
							
							if "call ForGroupBJ" in funcCode:
								for m in re.finditer("call ForGroupBJ.*, function (.*)\)", funcCode):
									funcCodes.append(code[code.find("function " + m.group(1)): code.find("endfunction", code.find("function " + m.group(1)))])

					else:		
						if itemId == "I0BE":
							print(funcName)
						for m in re.finditer("if.*" + funcName + "\(\)", code):
							funcCode = code[m.start():code.find("endfunction" if untilFunctionEnd else "endif", m.start())]
							funcName = code[code[:m.start()].rfind("function "):code.find("endfunction", m.start())].split("function ")[1].split(" ")[0].replace("_Conditions", "_Actions")

							if "call ForGroupBJ" in funcCode:
								for m in re.finditer("call ForGroupBJ.*, function (.*)\)", funcCode):
									funcCodes.append(code[code.find("function " + m.group(1)): code.find("endfunction", code.find("function " + m.group(1)))])
							
							if "call TriggerExecute(" in funcCode:
								for m in re.finditer("call TriggerExecute\((.*)\)", funcCode):
									funcCodes.append(code[code.find("function " + m.group(1).replace("gg_trg_", "Trig_") + "_Actions"): code.find("endfunction", code.find("function " + m.group(1).replace("gg_trg_", "Trig_") + "_Actions"))])	

							funcCodes.append(funcCode)

					realDepth -= 1
		
			lastRun = [itemId, text, funcCodes]		

	for funcCode in funcCodes:
		if itemId == "I0BE":
			print(funcCode)
		if scaling in funcCode:
			count += 1
			if count == qty:
				return True

	print(itemId, "incorrect scaling", text)					

def assertCorrectScalings():
	loadCode()

	assertItemScaling("I07U", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07U')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 4.00")
	assertItemScaling("I07U", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I07U')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 3.00", 2)
	
	assertItemScaling("I07V", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07V')", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 4.00")
	assertItemScaling("I07V", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I07V')", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 3.00", 2)
	
	assertItemScaling("I07W", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07W')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 4.00")
	assertItemScaling("I07W", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I07W')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 3.00")
	
	assertItemScaling("I06K", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06K')", "150000.00 + ( s__TrigVariables_real1[GlobalTV] * 100.00")
	assertItemScaling("I06K", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06K')", "150000.00 + ( s__TrigVariables_real1[GlobalTV] * 70")

	assertItemScaling("I06P", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06P')", "300000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 120.00")

	assertItemScaling("I06Q", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06Q')", "call UnitAddAbilityBJ('A09L', s__TrigVariables_unit0[GlobalTV])")
	assertItemScaling("I06Q", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06Q')", "call s__TrigVariables_SleepForStageNext(GlobalTV,12.00)")

	if abilities["A09L"]["int"] != 2000:
		print("A09L",  "does not provide 2000 int")

	
	assertItemScaling("I075", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I075')", "call UnitAddAbilityBJ('A09Z', s__TrigVariables_unit0[GlobalTV])")
	assertItemScaling("I075", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I075')", "call s__TrigVariables_SleepForStageNext(GlobalTV,10.00)")

	if abilities["A09Z"]["int"] != 1000:
		print("A09Z",  "does not provide 1000 int")

	assertItemScaling("I073", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I073')", "300000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 120.00")	

	assertItemScaling("I07B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07B')", "call UnitAddAbilityBJ('A09Z', s__TrigVariables_unit0[GlobalTV])")
	assertItemScaling("I07B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07B')", "call s__TrigVariables_SleepForStageNext(GlobalTV,2.30)")
	assertItemScaling("I07B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07B')", "call s__TrigVariables_SleepForStageNext(GlobalTV,7.70)")
	assertItemScaling("I07B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07B')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 80.00")

	assertItemScaling("I07D", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07D')", "300000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 55.00")

	assertItemScaling("I085", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I085'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 5.00")
	assertItemScaling("I085", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I085')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 4.00")

	assertItemScaling("I083", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I083')", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 5.00")
	assertItemScaling("I083", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I083'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 3.50", 2)

	assertItemScaling("I084", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I084')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 5.00")
	assertItemScaling("I084", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I084'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 3.50", 2)

	assertItemScaling("I07Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07Y')", "150000.00 + ( s__TrigVariables_real1[GlobalTV] * 160.00")
	assertItemScaling("I07Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07Y')", "150000.00 + ( s__TrigVariables_real1[GlobalTV] * 120.00")


	assertItemScaling("I08R", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I08R')", "300000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 150.00")

	assertItemScaling("I08S", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I08S')", "call UnitApplyTimedLifeBJ(20.00, 'BHwe', GetLastCreatedUnit())")

	assertItemScaling("I08Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I08Y'", "300000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 70.00")

	assertItemScaling("I09T", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09T')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09T", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09T')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 4.00", 2)

	assertItemScaling("I09U", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09U'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09U", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09U')", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 4.00", 2)

	assertItemScaling("I09V", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09V')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09V", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09V')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 5.00")

	assertItemScaling("SEVERAL", "if ( not ( udg_Fire_Amor[GetForLoopIndexA()] >= 1 ) ) then", "8000.00 + ( ( StatManage_CurrentStr[bj_forLoopAIndex] * ( 0.5 * ( udg_Save_Stat_Str_UP[bj_forLoopAIndex] - 1 ) + 1 ) ) * I2R(udg_Fire_Amor[GetForLoopIndexA()])")

	assertItemScaling("I07J", "GetItemTypeId(GetManipulatedItem()) == 'I07J'", "call s__TrigVariables_SleepForStageNext(GlobalTV,15.00)")

	assertItemScaling("I08F", "GetItemTypeId(GetManipulatedItem()) == 'I08F'", "call s__TrigVariables_SleepForStageNext(GlobalTV,15.00)")

	assertItemScaling("I0CK", "'I0CK') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.40")

	if "call TriggerRegisterTimerEventPeriodic(gg_trg_Timer_28Sec, 28.00)" not in code:
		print("timer changed")

	assertItemScaling("I0CJ", "GetItemTypeId(GetManipulatedItem()) == 'I0CJ'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.60")	


	if "call TriggerRegisterTimerEventPeriodic(gg_trg_Timer_10sec, 10.00)" not in code:
		print("timer changed")


	assertItemScaling("I0AH", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AH'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 7.50")
	assertItemScaling("I0AH", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AH'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 5.50", 2)

	assertItemScaling("I0AK", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AK'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 7.50")
	assertItemScaling("I0AK", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AK'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 5.50", 2)

	assertItemScaling("I0AN", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AN'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 7.50")
	assertItemScaling("I0AN", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AN')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 6.50")

	assertItemScaling("I09A", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09A')", "400000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 105.00")

	assertItemScaling("I09I", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09I'", "500000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 230.00")


	assertItemScaling("I0AI", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AI'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 8.00")
	assertItemScaling("I0AI", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AI'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 6.00", 2)
	
	assertItemScaling("I0AL", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AL'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 8.00")
	assertItemScaling("I0AL", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AL'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 6.00", 2)

	assertItemScaling("I0AO", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AO'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 8.00")
	assertItemScaling("I0AO", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AO'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 7.00")

	assertItemScaling("I09B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09B'", "400000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 120.00")	


	assertItemScaling("I09J", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09J'", "600000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 260.00")	

	assertItemScaling("I0AJ", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AJ'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 8.70")
	assertItemScaling("I0AJ", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AJ'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 6.70", depth = 2)

	assertItemScaling("I0AM", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AM'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 8.70")
	assertItemScaling("I0AM", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AM'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 6.70", depth = 2)
	
	assertItemScaling("I0AP", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AP'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 8.70")
	assertItemScaling("I0AP", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AP'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 7.50", depth = 2)

	assertItemScaling("I09K", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09K'", "700000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 300.00")

	assertItemScaling("I06G", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06G')", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.40")

	assertItemScaling("I03A", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I03A'", "50000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 8.00")

	assertItemScaling("I041", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I041'", "GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) + 15000.00")

	assertItemScaling("I03D", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I03D'", "call UnitAddAbilityBJ('A09P', s__TrigVariables_unit0[GlobalTV])")
	assertItemScaling("I03D", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I03D'", "call s__TrigVariables_SleepForStageNext(GlobalTV,10.00)")

	if abilities["A09P"]["int"] != 700:
		print("A09Z",  "does not provide 700 int")


	assertItemScaling("I064", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I064'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 3.00")

	assertItemScaling("I061", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I061'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 3.00")

	assertItemScaling("I063", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I063'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 3.00")

	assertItemScaling("I066", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I066'", "100000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) ) ) * 15.00")

	assertItemScaling("I07G", "'I07G') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.30")

	assertItemScaling("I045", "'I045') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.30")

	assertItemScaling("I07F", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07F'", "150000.00 + ( s__TrigVariables_real0[GlobalTV] * 70.00", depth = 2)
	assertItemScaling("I0IC", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IC'", "150000.00 + ( s__TrigVariables_real0[GlobalTV] * 95.00", depth = 2)
	assertItemScaling("I0ID", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0ID'", "150000.00 + ( s__TrigVariables_real0[GlobalTV] * 110.00", depth = 2)
	assertItemScaling("I0IE", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IE'", "150000.00 + ( s__TrigVariables_real0[GlobalTV] * 130.00", depth = 2)
	assertItemScaling("I0NJ", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0NJ'", "150000.00 + ( s__TrigVariables_real0[GlobalTV] * 150.00", depth = 2)
	assertItemScaling("I0QK", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0QK'", "150000.00 + ( s__TrigVariables_real0[GlobalTV] * 200.00", depth = 2)
	assertItemScaling("I0SI", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0SI'", "150000.00 + ( s__TrigVariables_real0[GlobalTV] * 220.00", depth = 2)

	assertItemScaling("I09Z", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09Z'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.35")

	assertItemScaling("I03C", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I03C'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.30")

	assertItemScaling("I09W", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09W'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 7.00")
	assertItemScaling("I09W", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09W'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 5.00", 2)

	assertItemScaling("I09Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09Y'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 7.00")
	assertItemScaling("I09Y", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09Y'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 5.00", 2)

	assertItemScaling("I09X", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09X'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 7.00")	
	assertItemScaling("I09X", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09X'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 6.00")	

	assertItemScaling("I099", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I099')", "400000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 90.00")

	assertItemScaling("I09H", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09H'", "400000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 200.00")

	assertItemScaling("I0D3", "GetItemTypeId(GetManipulatedItem()) == 'I0D3'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.30")

	assertItemScaling("I0D8", "UnitHasItemOfTypeBJ(D, 'I0D8')", "GetUnitState(D, UNIT_STATE_MAX_LIFE) * 0.008")
	assertItemScaling("I0D8", "UnitHasItemOfTypeBJ(D, 'I0D8')", "16000 + 16 * I2R(GetHeroAgi(udg_hero[ID], true))")

	assertItemScaling("SEVERAL", "if ( not ( udg_Fire_Wepon[GetForLoopIndexA()] >= 1 ) ) then", "20000.00 + ( ( StatManage_CurrentStr[bj_forLoopAIndex] * ( 0.5 * ( udg_Save_Stat_Str_UP[bj_forLoopAIndex] - 1 ) + 1 ) ) * I2R(udg_Fire_Wepon[GetForLoopIndexA()])")

	assertItemScaling("I0D6", "GetItemTypeId(GetManipulatedItem()) == 'I0D6'", "50000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 20.00")

	assertItemScaling("I0D9", "GetItemTypeId(GetManipulatedItem()) == 'I0D9'", "call s__TrigVariables_SleepForStageNext(GlobalTV,20.00)")

	assertItemScaling("I0CZ", "GetItemTypeId(GetManipulatedItem()) == 'I0CZ'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.35")

	assertItemScaling("I0DP", "'I0DP') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.50")

	assertItemScaling("I0DO", "'I0DO') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.50")

	assertItemScaling("I0CV", "GetManipulatedItem()) == 'I0CV'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.80")

	assertItemScaling("I038", "GetItemTypeId(GetManipulatedItem()) == 'I038'", "call SetUnitManaPercentBJ(GetTriggerUnit(), 100)", depth = 2)

	assertItemScaling("I039", "GetItemTypeId(GetManipulatedItem()) == 'I039'", "60000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 25.00")
	assertItemScaling("I039", "GetItemTypeId(GetManipulatedItem()) == 'I039'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.02")

	assertItemScaling("I04F", "UnitHasItemOfTypeBJ(D, 'I04F')", "GetUnitState(D, UNIT_STATE_MAX_LIFE) * 0.008")
	assertItemScaling("I04F", "UnitHasItemOfTypeBJ(D, 'I04F')", "16000 + 20 * I2R(GetHeroAgi(udg_hero[I")

	assertItemScaling("I0EC", "'I0EC') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.55")

	assertItemScaling("I0ED", "'I0ED') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.55")

	assertItemScaling("I0CL", "'I0CL') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.40")

	assertItemScaling("I0EL", "GetItemTypeId(GetManipulatedItem()) == 'I0EL'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.30")

	assertItemScaling("I0EN", "GetItemTypeId(GetManipulatedItem()) == 'I0EN'", "call SetUnitManaPercentBJ(GetTriggerUnit(), 100)", depth = 2)

	assertItemScaling("I0FM", "UnitHasItemOfTypeBJ(udg_hero[ID], 'I0FM')", "200000 + 60 * I2R(GetHeroStr(udg_hero[ID], true) + GetHeroAgi(udg_hero[ID], true) + GetHeroInt(udg_hero[ID], true)", untilFunctionEnd=True)

	assertItemScaling("I0FA", "UnitHasItemOfTypeBJ(D, 'I0FA')", "300000 + 80 * I2R(GetHeroStr(D, true) + GetHeroAgi(D, true) + GetHeroInt(D, true))")
		
	assertItemScaling("SEVERAL", "if udg_Int_Tick_Item_Real[ID] >= 1", "GetRandomInt(1, 100) <= 8 then")
	assertItemScaling("SEVERAL", "if udg_Int_Tick_Item_Real[ID] >= 1", "30000 + I2R(GetHeroInt(udg_hero[ID], true)) * udg_Int_Tick_Item_Real[ID")
	assertItemScaling("SEVERAL", "if udg_Str_Int_Tick_Item_Real[ID] >= 1", "GetRandomInt(1, 100) <= 8 then")
	assertItemScaling("SEVERAL", "if udg_Str_Int_Tick_Item_Real[ID] >= 1", "30000 + I2R(GetHeroInt(udg_hero[ID], true) + GetHeroStr(udg_hero[ID], true)) * udg_Str_Int_Tick_Item_Real[ID]")


	assertItemScaling("SEVERAL", "if udg_Attack_Item[ID]", "and GetRandomInt(1, 100) <= 20")


	assert """if udg_Power_Skill_Enju[pId] then
            set udg_Enju_Combo[pId]=65
        else
            set udg_Enju_Combo[pId]=50
        endif""" in code


	assertItemScaling("I0L2", "'I0L2') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.65")

	assertItemScaling("I0L4", "'I0L4') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.65")

	assert "call SetUnitLifeBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) * 0.97 ))" in code

	assertItemScaling("I0OV", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0OV'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 10.00", depth = 2)
	assertItemScaling("I0OV", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0OV'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 6.70", depth = 2)
	
	assertItemScaling("I0P3", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0P3'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 10.00", depth = 2)
	assertItemScaling("I0P3", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0P3'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 6.70", depth = 2)

	assertItemScaling("I09D", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09D')", "300000.00 + ( s__TrigVariables_real3[GlobalTV] * 200.00")

	assertItemScaling("I09E", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09E')", "340000.00 + ( s__TrigVariables_real3[GlobalTV] * 225.00")

	assertItemScaling("I09F", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09F')", "380000.00 + ( s__TrigVariables_real3[GlobalTV] * 250.00")

	assertItemScaling("I09G", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09G')", "420000.00 + ( s__TrigVariables_real3[GlobalTV] * 280.00")

	assertItemScaling("I0HF", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0HF')", "420000.00 + ( s__TrigVariables_real3[GlobalTV] * 350.00")

	assertItemScaling("I0MK", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0MK')", "420000.00 + ( s__TrigVariables_real3[GlobalTV] * 380.00")

	assertItemScaling("I0P8", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0P8')", "call GroupimpactDamage(s__TrigVariables_unit15[GlobalTV] , ( 420000.00 + ( s__TrigVariables_real3[GlobalTV] * 420.00")




getItemData()	

loadItems()

assertCorrectDropRates()

assertCorrectBonusDamage()

assertCorrectCraftings()

assertCorrectScalings()

