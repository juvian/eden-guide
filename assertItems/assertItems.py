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
			
			if len(recipe) > 1:
				recipes[recipe[0]].append({"items": recipe[1:], "chance": eval(info[-1].split("//")[0])})
	
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
					if jassRecipe["items"] != guideRecipe["items"] or jassRecipe["chance"] != guideRecipe["chance"]:
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

def funcBefore(idx, depth = 1):
	original = idx
	while depth != 0:
		newIdx = code.rfind("\n", 0, idx)
		line = code[newIdx:idx]

		if "endif" in line:
			depth += 1
		elif " if" in line or "\nif" in line or "elseif" in line or "function" in line:
			depth -=1
		idx = newIdx	

		if depth > 2:
			raise Exception("unlimited loop " + str(code[original:original+100].encode("utf-8")))

	return line.split("function")[1].split("takes")[0].strip() if "function" in line else line.split("if")[1].split("()")[0].split("then")[0].strip("( ")


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
	d = re.search("GetRandom.*\((\d*\.?\d*)\s*,\s*(\d*\.?\d*).*<=\s*(\d*)", func)
	func = funcBefore(m.start(), 2)		
	chest = re.search(key, funcs[func]).group(1)
	chance = (100 / (int(d.group(2)) - int(d.group(1)) + 1)) * int(d.group(3))

	return chest, chance

def assertCorrectDropRates():
	loadCode()
	
	drops = defaultdict(list)	

	for m in re.finditer("call ITD[^']*'(....)'\s*,\s*([^\)]*)", code):
		id, chance = m.group(1), eval(m.group(2).strip("( "))
		func = funcBefore(m.start())

		if "Trig________________________007_Actions" in func:
			continue
		if "GetItemTypeId(GetManipulatedItem" in func:
			funcCode = code[code.rfind('if GetItemTypeId(GetManipulatedItem', 0, m.start()):m.start()].split("\n")[0]
		else:
			funcCode = 	funcs[func]

		chest = re.search("GetManipulatedItem[^']*'(....)'", funcCode).group(1)

		drops[chest].append({"id": id, "chance": chance})
	
	for m in re.finditer("call itemdrop.*'(....)'.*,\s*(\d+\.?\d*).*'(....)'", code):
		drops[m.group(3)].append({"id": m.group(1), "chance": float(m.group(2))})

	for m in re.finditer("call CreateItemLoc\('(....)'", code):
		func = funcBefore(m.start())
		if "udg_Chiruno_P_Unit" in funcs[func] or m.group(1) in ["I0JV", "I012"]:
			continue

		chance = 100	

		if func == "Trig_SSS_Boss_D_Func008Func002C":
			chest = "e0D8"
		elif func.startswith("Trig_Itrm_Drop_AcAngel_"):
			chest = "n027"
		elif func.startswith("Trig_Itrm_Drop_AcDvil_"):
			chest = "n02Y"
		elif func.startswith("Trig_Itrm_Drop_Destroy_GOD_"):
			chest = 'n03Z'
		elif func.startswith("Trig_Itrm_Drop_Clean_GOD"):
			chest = 'n04Q'
		elif func.startswith("Trig_Acangel_GOD_04_Dead"):
			chest = "n05Z"
		elif "GetRandomInt" in funcs[func]:
			chest, chance = resolveRandom(m, funcs[func], "GetUnitTypeId[^']*'(....)'")
		elif "GetHeroLevel" in funcs[func]:
			func = funcBefore(m.start(), 2)	
			chest, chance = re.search("GetUnitTypeId[^']*'(....)'", funcs[func]).group(1), 100
		else:	
			chest = funcs[func].split("GetUnitTypeId")[1].split("'")[1]

		drops[chest].append({"id": m.group(1), "chance": float(chance)})	

	for m in re.finditer("call UnitAddItemByIdSwapped(.*)", code):
		line = m.group(1)
		if "'" in line:
			id = line.split("'")[1]
			func = funcBefore(m.start())
			
			if func == "GetClickedButtonBJ":
				continue
			if "Item ==" in func:
				chest, chance = func.split("'")[1], 100
				drops[chest].append({"id": id, "chance": chance})
			elif "Random" in func:
				chest, chance = getChest(m, func, 1)
				drops[chest].append({"id": id, "chance": chance})
			elif "== true" in func: #exhange items
				continue	
			elif "udg_Point" in funcs[func]: #buy item
				continue
			elif "UnitHasItemOfTypeBJ" in funcs[func]: #echange item
				continue
			elif "Trig_Point".lower() in func.lower() or "GetSoldItem()" in funcs[func]: #sell item
				continue
			elif "GetItemCharges" in funcs[func]: #exchange coupons
				continue
			elif "Chiruno_Event_Bay" in func:
				continue	
			elif "udg_GOD02_Amor_BTN01" in funcs[func] or "udg_GOD02_Amor_BTN02" in funcs[func] or "udg_GOD01_Bag_Skill_BTN" in funcs[func]:
				continue	
			elif "udg_GOD_Moster02_Clear_Count" in funcs[func]: #buy item
				continue	
			elif "<=" in funcs[func]:
				if "GetRandomInt" in funcs[func]:
					chest, chance = resolveRandom(m, funcs[func], "GetManipulatedItem[^']*'(....)'")
				else:	
					chest, chance = getChest(m, funcs[func], 1)
				drops[chest].append({"id": id, "chance": chance})
			else:	
				chest = re.search("GetManipulatedItem[^']*'(....)'", funcs[func]).group(1)
				drops[chest].append({"id": id, "chance": 100})
		elif "GetRandomInt" in line:
			data = re.search("\((.*)\[GetRandomInt\((\d*)\s*,\s*(\d*)", line)
			name, first, last = data.group(1), int(data.group(2)), int(data.group(3))
			

			if "Gamble" in name:
				continue

			if len(arrays[name]) != last - first + 1:
				print("not all chest items are being obtained ", name)	

			func = funcBefore(m.start())

			chance = 100/(last - first + 1)

			if re.search("Item == '....'", func):
				chest = func.split("'")[1]
			elif re.search("GetManipulatedItem[^']*'(....)'", funcs[func]):
				chest = re.search("GetManipulatedItem[^']*'(....)'", funcs[func]).group(1)
			else:	
				chest, chance = getChest(m, funcs[func], last - first + 1)
	

			for item in arrays[name][first:last+1]:
				drops[chest].append({"id": item, "chance": chance})		


	for chest in drops.keys():
		if chest in itemsGuide["drops"]:
			drops[chest] = sorted(drops[chest], key=lambda x: x["id"])
			itemsGuide["drops"][chest] = sorted(itemsGuide["drops"][chest], key=lambda x: x["id"])

			if len(drops[chest]) == len(itemsGuide["drops"][chest]):
				for item, guideItem in zip(drops[chest], itemsGuide["drops"][chest]):
					item["chance"] = str("%.2f" % item["chance"])
					if item["id"] != guideItem["id"] or item["chance"] != str("%.2f" % float(guideItem["chance"])):
						print("different id/chance ", item, "(jass)", guideItem, "(guide)", " in ", chest)
						break
			else:
				print("different drops ", chest)
				print("jass", drops[chest])
				print("guide", itemsGuide["drops"][chest])			
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

def processLine(line, txt, id, missing):
	if len(list(filter(lambda x: x in line, ["udg_Plus_Demige", "udg_Minus_Demige", "udg_Shied_Int", "udg_Fire_Amor", "udg_Fire_Amor_Minus", "udg_Gaho_Item_Real", "udg_Save_Stat", "udg_Skill_Damage_UP", "udg_Plus_damage", "udg_HP_And_Dead_Item_PD_Real", "udg_HP_And_Dead_Item_HP_Real", "udg_Citical_Item_real"]))):
		try:
			if "+" in txt:
				damage = round(float(line.split("+")[1].split(")")[0].strip()) * 100)
			elif "-" in txt:
				damage = round(float(line.split("-")[1].split(")")[0].strip()) * 100)	
			else:
				damage = float(line.split("=")[-1])
		except Exception as ex:
			print(txt, ex)		
			raise ex

		if damage == 0:
			return			

	if ("udg_Plus_Demige" in line or "udg_Plus_damage" in line) and id not in ["I00Z", "I010", "I02X", "I03N"]:
		processStat("damage_increase", line, damage, id, missing)	
	elif "udg_Fire_Amor_Minus" in line:
		processStat("hp_regen", line, damage * -1, id, missing)		
	elif "udg_Gaho_Item_Real" in line:
		processStat("hp_regen", line, damage , id, missing)										
	elif "udg_Minus_Demige" in line or "udg_Shied_Int" in line:
		if "udg_Shied_Int" in line:
			damage *= -1
			processStat("damage_taken", line, damage, id, missing)
	elif "udg_Fire_Amor" in line:
		processStat("flame", line, damage, id, missing)
	elif "udg_Save_Stat_Str_UP" in line:
		processStat("str_increase", line, damage, id, missing)
	elif "udg_Save_Stat_Agi_UP" in line:
		processStat("agi_increase", line, damage, id, missing)
	elif "udg_Save_Stat_Int_UP" in line:
		processStat("int_increase", line, damage, id, missing)
	elif "udg_Save_Stat_HPUP" in line:
		processStat("max_health", line, damage, id, missing)					
	elif "udg_Save_Stat_MPUP" in line:
		processStat("max_mana", line, damage, id, missing)	
	elif "udg_Skill_Damage_UP" in line:
		processStat("skill_damage", line, damage, id, missing)			
	elif "udg_HP_And_Dead_Item_PD_Real" in line:
		processStat("purgatory_damage", line, damage * 100, id, missing)	
	elif "udg_HP_And_Dead_Item_HP_Real" in line:
		processStat("purgatory_recovery", line, damage * 100, id, missing)
	elif "udg_Citical_Item_real" in line:
		processStat("bamboo_damage", line, damage * 100, id, missing)


def processDamage2(missing):
	for m in re.finditer("Item\s?==\s?'(\w\w\w\w)'", code):
		id = m.group(1)
		idx1 = code.find("endif", m.start())
		idx2 = code.find("elseif", m.start())
		text = code[code.find(id, m.start()):min(idx1, idx2)]

		if not ("if" in text and "Item ==" in text):
			for line in text.split("\n"):
					processLine(line, line, id, missing)

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
			'ps': 100,
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

		damage = float(line.split(",")[-1].split(")")[0])
		damage = round(damage * multiplier) if multiplier != 1 else damage
		processStat(stat, line , damage, id, missing)


def processDamage(missing):
	for m in re.finditer("set udg_Plus_Demige|set udg_Minus_Demige|set udg_Shied_Int|set udg_Fire_Amor|set udg_Fire_Amor_Minus|set udg_Gaho_Item_Real|set udg_Save_Stat|set udg_Skill_Damage_UP|set", code):
		line = code[m.start():code.find("\n", m.start())]
		idx = code.rfind("if", 0, m.start())

		if "Player" in line:
			idx = code.rfind("if", 0, m.start())
			funcName = code[idx:m.start()].split("()")[0].split(" ")[-1]
			if "Item" in funcName or "Plus_demige" in funcName:
				idx = code.find("function " + funcName)
				func = code[idx:code.find("endfunction", idx)]

				if code.find("GetManipulatedItem", idx) > code.find("endfunction", idx):
					funcName = func.split("()")[0].split(" ")[-1]
					idx = code.find("function " + funcName)
					func = code[idx:code.find("endfunction", idx)]

				for l in func.split("\n"):
					if "GetManipulatedItem()) == '" in l:
						id = l.split("GetManipulatedItem()) == '")[1][0:4]
						processLine(line, line, id, missing)


def assertCorrectInfo(missing):
	guide = itemsGuide["items"]

	for itemID in guide:
		if itemID not in items:
			print(itemID, "not in jass")
			continue
		itemGuide = guide[itemID]
		item = items[itemID]

		if "stats" in itemGuide:
			for stat in props:
				if stat in item and item[stat] != 0:
					if stat in itemGuide["stats"]:
						if itemGuide["stats"][stat] != item[stat]:
							if (stat == "movement_speed" or stat == "attack_speed") and itemID in ['I07F', 'I0ID', 'I0IE', 'I0IC']:
								continue
							if (stat == "hp_regen") and itemID in ["I081", "I0DK", "I06R", "I03H", "I0E0", "I0BL", "I07J"]:
								continue	
							reportBug(itemID, "different " + stat, itemGuide["stats"][stat], item[stat])
						else:
							if stat in missing:
								missing[stat].discard(itemID)			
					else:
						print(itemID, "has no " + stat, item[stat])
		elif len({x: item[x] for x in props if item[x]}) > 0:
			print(itemID, "missing stats", {x: item[x] for x in props if item[x]})		


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
		'udg_Contract': 'contract',
		'udg_Int_Tick_Item': 'int_tick',
		'udg_Int_Tick_Item_Real': 'attack_int_real',
		'udg_Str_Int_Tick_Item_Real': 'attack_str_int_real'
	}


	safeIdx = code.find('function InitSounds')

	seen = defaultdict(dict)
	unseen = defaultdict(dict)

	for m in re.finditer("set udg_Attack_Item|set udg_Contract|set udg_Int_Tick_Item|set udg_Str_Int_Tick_Item_Real", code):
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

			elif funcName == "Trig_Item_Tick_New_Actions":
				seen[id][stat] = True	
				processStat(stat, line, val, id, missing)				
		

	checkSeenUnseen(seen, unseen, "unseen")			
	checkSeenUnseen(unseen, seen, "seen")			

	toCheck = {
		"30000.00 + ( GetHeroInt(udg_hero[ID], true) * udg_Int_Tick_Item_Real[ID] )": 8,
		"30000.00 + ( GetHeroAgi(udg_hero[ID], true) * udg_Attack_Item_Real[ID]": 20,
		"30000.00 + ( GetHeroAgi(udg_hero[ID], true) + GetHeroStr(udg_hero[ID], true) ) * udg_Attack_Item_Real[ID]": 16,
		"30000.00 + ( GetHeroStr(udg_hero[ID], true) * udg_Attack_Item_Real[ID] )": 12,
		"30000.00 + ( ( GetHeroInt(udg_hero[ID], true) + GetHeroStr(udg_hero[ID], true) ) * udg_Str_Int_Tick_Item_Real[ID]": 8
	}

	for text in toCheck:
		idx = code.find(text)
		idx = code.rfind("GetRandomInt(1, 100) <=", 0, idx)
		chance = code[idx:idx + 30].split("<=")[1].split(")")[0].strip()

		if chance != str(toCheck[text]):
			print("wrong chance", chance, toCheck[text])


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

def assertCorrectBonusDamage():
	loadCode()
	removeStatSystemAbilities()

	missing = dict()
	stats = ["damage_taken", "hp_regen_percent", "damage_increase", "hp_regen", "atk", "int", "str", "agi", 'armor', 'hp', 'mp', 'max_health', "mps", "attack_agi", "attack_real", "attack_str", "attack_str_agi", "contract", "attack_int_real", "attack_str_int_real", "int_tick", "hp_consume", "max_mana", "skill_damage", "str_increase", "int_increase", "agi_increase", "purgatory_recovery", "purgatory_damage", "bamboo_damage", "magic_resistance", "flame"]

	for stat in stats:
		missing[stat] = set()

	for id in itemsGuide["items"]:
		if "stats" in itemsGuide["items"][id]:
			for stat in stats:
				if stat in itemsGuide["items"][id]["stats"]:
					missing[stat].add(id)

	for id in ["I0AS", "I08T", "I0AT", "I0C1", "I0C2", "I0HI", "I0GI", "I07C", "I04E", "I0NF", "I08U", "I0HV", "I0BP"]:
		missing["damage_increase"].discard(id)

	for id in ["I00Z", "I010", "I02X", "I03N"]:
		missing["damage_taken"].discard(id)		


	assertCorrectInfo(missing)	
	processDamage(missing)
	processDamage2(missing)
	processProcs(missing)
	processHPConsume(missing)

	for stat in stats:
		for id in missing[stat]:
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

	assertItemScaling("I06D", "if","set udg_Attack_Item_Real[IT]=10")
	
	assertItemScaling("I06C", "if", "set udg_Attack_Item_Real[IT]=13")

	assertItemScaling("I06E", "if", "set udg_Int_Tick_Item_Real[IT]=42")

	assertItemScaling("I06M", "if", "set udg_Attack_Item_Real[IT]=5")

	assertItemScaling("I06N", "if", "set udg_Str_Int_Tick_Item_Real[IT]=20")
	
	assertItemScaling("I06K", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06K')", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 100.00")
	assertItemScaling("I06K", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06K')", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 70.00")

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

	assertItemScaling("I07Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07Y')", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 160.00")
	assertItemScaling("I07Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07Y')", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 120.00")


	assertItemScaling("I08R", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I08R')", "300000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 150.00")

	assertItemScaling("I08S", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I08S')", "call UnitApplyTimedLifeBJ(20.00, 'BHwe', GetLastCreatedUnit())")

	assertItemScaling("I08Y", "if", "udg_Attack_Item_Real[IT]=7") 
	assertItemScaling("I08Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I08Y'", "300000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 70.00")

	assertItemScaling("I09T", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09T')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09T", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09T')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 4.00", 2)

	assertItemScaling("I09U", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09U'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09U", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09U')", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 4.00", 2)

	assertItemScaling("I09V", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09V')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09V", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09V')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 5.00")

	assertItemScaling("SEVERAL", "if ( not ( udg_Fire_Amor[GetForLoopIndexA()] >= 1 ) ) then", "8000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, udg_hero[GetForLoopIndexA()], true)) * I2R(udg_Fire_Amor[GetForLoopIndexA()]")

	assertItemScaling("I07J", "GetItemTypeId(GetManipulatedItem()) == 'I07J'", "call s__TrigVariables_SleepForStageNext(GlobalTV,15.00)")

	assertItemScaling("I08F", "GetItemTypeId(GetManipulatedItem()) == 'I08F'", "call s__TrigVariables_SleepForStageNext(GlobalTV,15.00)")

	assertItemScaling("I0CK", "'I0CK') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.40")

	if "call TriggerRegisterTimerEventPeriodic(gg_trg_Timer_20Sec, 28.00)" not in code:
		print("timer changed")

	assertItemScaling("I0CJ", "GetItemTypeId(GetManipulatedItem()) == 'I0CJ'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.60")	

	assertItemScaling("I06H", "GetItemTypeId(GetManipulatedItem()) == 'I06H'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=10000.00")

	if "call TriggerRegisterTimerEventPeriodic(gg_trg_Timer_10sec, 10.00)" not in code:
		print("timer changed")

	assertItemScaling("I088", "GetItemTypeId(GetManipulatedItem()) == 'I088'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=15000.00")

	assertItemScaling("I08G", "GetItemTypeId(GetManipulatedItem()) == 'I08G'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=25000.00")

	assertItemScaling("I0BE", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BE')", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.30", 1, 40)
	assertItemScaling("I0BE", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BE')", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.12")
	assertItemScaling("I0BE", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BE')", "call s__TrigVariables_SleepForStageNext(GlobalTV,120.00)")

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

	assertItemScaling("I09B", "if", "set udg_Attack_Item_Real[IT]=17")
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

	assertItemScaling("I068", "GetItemTypeId(GetManipulatedItem()) == 'I068'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=6000.00")

	assertItemScaling("I066", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I066'", "100000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) ) ) * 15.00")

	assertItemScaling("I07G", "'I07G') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.30")

	assertItemScaling("I045", "'I045') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.30")

	assertItemScaling("I07F", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07F'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 70.00", depth = 2)
	assertItemScaling("I0IC", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IC'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 95.00", depth = 2)
	assertItemScaling("I0ID", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0ID'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 110.00", depth = 2)
	assertItemScaling("I0IE", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IE'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 130.00", depth = 2)
	assertItemScaling("I0NJ", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0NJ'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 150.00", depth = 2)

	assertItemScaling("I0BD", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BD'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.30")
	assertItemScaling("I0BD", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BD'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.08")
	assertItemScaling("I0BD", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BD'", "call s__TrigVariables_SleepForStageNext(GlobalTV,120.00)")

	assertItemScaling("I080", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I080'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 0.28")
	assertItemScaling("I080", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I080'", "call s__TrigVariables_SleepForStageNext(GlobalTV,20.00)")
	assertItemScaling("I080", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I080'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 40.00")
	assertItemScaling("I080", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I080'", "GetUnitStateSwap(UNIT_STATE_LIFE, s__TrigVariables_unit0[GlobalTV]) + 20000.00")

	assertItemScaling("I081", "GetItemTypeId(GetManipulatedItem()) == 'I081'", "set udg_Gaho_Item_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=700.00")
	assertItemScaling("I081", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I081'", "call s__TrigVariables_Setreal(GlobalTV,0 , 2.00)", depth = 2)
	assertItemScaling("I0I9", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0I9'", "call s__TrigVariables_Setreal(GlobalTV,0 , 2.50)", depth = 2)
	assertItemScaling("I0IJ", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IJ'", "call s__TrigVariables_Setreal(GlobalTV,0 , 3.50)", depth = 2)
	assertItemScaling("I0IK", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IK'", "call s__TrigVariables_Setreal(GlobalTV,0 , 4.00)", depth = 2)

	assertItemScaling("I09Z", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09Z'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.35")

	assertItemScaling("I03C", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I03C'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.30")

	assertItemScaling("I0BR", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BR'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.30" , 1, 40)
	assertItemScaling("I0BR", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BR'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.16")
	assertItemScaling("I0BR", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0BR'", "call s__TrigVariables_SleepForStageNext(GlobalTV,120.00)")

	assertItemScaling("I0BS", "GetItemTypeId(GetManipulatedItem()) == 'I0BS'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=33000.00")

	assertItemScaling("I09W", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09W'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 7.00")
	assertItemScaling("I09W", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09W'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 5.00", 2)

	assertItemScaling("I09Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09Y'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 7.00")
	assertItemScaling("I09Y", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09Y'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 5.00", 2)

	assertItemScaling("I09X", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09X'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 7.00")	
	assertItemScaling("I09X", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09X'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 6.00")	

	assertItemScaling("I099", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I099')", "400000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 90.00")
	assertItemScaling("I099", "if", "set udg_Attack_Item_Real[IT]=11")

	assertItemScaling("I09H", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09H'", "400000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 200.00")

	assertItemScaling("I0D3", "GetItemTypeId(GetManipulatedItem()) == 'I0D3'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.30")

	assertItemScaling("I0D8", "GetEventDamageSource(), 'I0D8'", "0.10 * 0.08")
	assertItemScaling("I0D8", "GetEventDamageSource(), 'I0D8'", "16000.00 + ( 16.00 * I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetEventDamageSource()))], true))")

	assertItemScaling("SEVERAL", "if ( not ( udg_Fire_Wepon[GetForLoopIndexA()] >= 1 ) ) then", "20000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, udg_hero[GetForLoopIndexA()], true)) * I2R(udg_Fire_Wepon[GetForLoopIndexA()]")

	assertItemScaling("I0D6", "GetItemTypeId(GetManipulatedItem()) == 'I0D6'", "50000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 20.00")
	assertItemScaling("I0D6", "GetItemTypeId(GetManipulatedItem()) == 'I0D6'", "set udg_Fire_Wepon[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=10")

	assertItemScaling("I0D9", "GetItemTypeId(GetManipulatedItem()) == 'I0D9'", "call s__TrigVariables_SleepForStageNext(GlobalTV,20.00)")

	assertItemScaling("I0CZ", "GetItemTypeId(GetManipulatedItem()) == 'I0CZ'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.35")

	assertItemScaling("I0DP", "'I0DP') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.50")

	assertItemScaling("I0DO", "'I0DO') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.50")

	assertItemScaling("I0CV", "GetManipulatedItem()) == 'I0CV'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.80")

	assertItemScaling("I038", "GetItemTypeId(GetManipulatedItem()) == 'I038'", "call SetUnitManaPercentBJ(GetTriggerUnit(), 100)", depth = 2)

	assertItemScaling("I039", "GetItemTypeId(GetManipulatedItem()) == 'I039'", "60000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 25.00")
	assertItemScaling("I039", "GetItemTypeId(GetManipulatedItem()) == 'I039'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.02")
	assertItemScaling("I039", "GetItemTypeId(GetManipulatedItem()) == 'I039'", "set udg_Fire_Wepon[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=14")

	assertItemScaling("I04F", "GetEventDamageSource(), 'I04F'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetEventDamageSource()) * ( 0.10 * 0.08")
	assertItemScaling("I04F", "GetEventDamageSource(), 'I04F'", "16000.00 + ( 20.00 * I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetEventDamageSource()))], true)) ")

	assertItemScaling("I0EC", "'I0EC') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.55")

	assertItemScaling("I0ED", "'I0ED') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.55")

	assertItemScaling("I0EE" , "GetManipulatedItem()) == 'I0EE'", "call s__TrigVariables_SleepForStageNext(GlobalTV,15.00)")

	assertItemScaling("I0CL", "'I0CL') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.40")

	assertItemScaling("I0EL", "GetItemTypeId(GetManipulatedItem()) == 'I0EL'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.30")

	assertItemScaling("I0EN", "GetItemTypeId(GetManipulatedItem()) == 'I0EN'", "call SetUnitManaPercentBJ(GetTriggerUnit(), 100)", depth = 2)

	assertItemScaling("I0FM", "if UnitHasItemOfTypeBJ(udg_hero[ID], 'I0FM') then", "200000.00 + ( 60.00 * ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, udg_hero[ID], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, udg_hero[ID], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_INT, udg_hero[ID], true))", untilFunctionEnd=True)

	assertItemScaling("I0FA", "UnitHasItemOfTypeBJ(GetEventDamageSource(), 'I0FA'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetEventDamageSource(), true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetEventDamageSource(), true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetEventDamageSource(), true)) ) ) * 80.00 ) + 300000.00")
		
	assertItemScaling("SEVERAL", "if udg_Int_Tick_Item_Real[ID] >= 1.00 then", "if ( GetRandomInt(1, 100) <= 8 ) then")
	assertItemScaling("SEVERAL", "if udg_Int_Tick_Item_Real[ID] >= 1.00 then", "( 30000.00 + ( GetHeroInt(udg_hero[ID], true) * udg_Int_Tick_Item_Real[ID]")
	assertItemScaling("SEVERAL", "if udg_Str_Int_Tick_Item_Real[ID] >= 1.00 then", "if ( GetRandomInt(1, 100) <= 8 ) then")
	assertItemScaling("SEVERAL", "if udg_Str_Int_Tick_Item_Real[ID] >= 1.00 then", "30000.00 + ( ( GetHeroInt(udg_hero[ID], true) + GetHeroStr(udg_hero[ID], true) ) * udg_Str_Int_Tick_Item_Real[ID]")


	assertItemScaling("SEVERAL", "if ( udg_Attack_Item[ID] == true )", "and ( GetRandomInt(1, 100) <= 12 ) then")

	assertItemScaling("I0I9", "GetItemTypeId(GetManipulatedItem()) == 'I0I9'", "set udg_Gaho_Item_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=1000.00")

	assertItemScaling("I0IA", "GetItemTypeId(GetManipulatedItem()) == 'I0IA'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=38000.00")

	assertItemScaling("I0IB", "GetItemTypeId(GetManipulatedItem()) == 'I0IB'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=50000.00")

	assertItemScaling("I0J4", "udg_Power_Skill_Enjuy[GetConvertedPlayerId(GetO", "call s__TrigVariables_Setinteger(GlobalTV,0 , 65)")

	assertItemScaling("I0L0", "if", "set udg_Gaho_Item_Real[IT]=2500")


	assertItemScaling("I0L2", "'I0L2') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.65")

	assertItemScaling("I0L4", "'I0L4') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.65")

	assert "call SetUnitLifeBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.06 ) ))" in code

	assertItemScaling("I0OV", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0OV'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 10.00", depth = 2)
	assertItemScaling("I0OV", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0OV'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 6.70", depth = 2)
	
	assertItemScaling("I0P3", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0P3'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 10.00", depth = 2)
	assertItemScaling("I0P3", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0P3'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 6.70", depth = 2)

	assertItemScaling("I09D", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09D')", "300000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 200.00")

	assertItemScaling("I09E", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09E')", "340000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 225.00")

	assertItemScaling("I09F", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09F')", "380000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 250.00")

	assertItemScaling("I09G", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09G')", "420000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 280.00")

	assertItemScaling("I0HF", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0HF')", "420000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 350.00")

	assertItemScaling("I0MK", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0MK')", "420000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 380.00")

	assertItemScaling("I0P8", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0P8')", "call GroupimpactDamage(s__TrigVariables_unit15[GlobalTV] , ( 420000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 420.00")



getItemData()	

loadItems()

assertCorrectDropRates()
assertCorrectBonusDamage()

assertCorrectCraftings()

assertCorrectScalings()

