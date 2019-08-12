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
def assertCorrectInfo():
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
							print(itemID, "different " + stat, itemGuide["stats"][stat], item[stat])
					else:
						print(itemID, "has no " + stat, item[stat])
		elif len({x: item[x] for x in props if item[x]}) > 0:
			print(itemID, "missing stats", {x: item[x] for x in props if item[x]})				



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
			#print(itemID, " not in eden guide craftings")
			for recipe in recipes[itemID]:
				print("\nnew Craft('{}', {}).add({});\n".format(itemID, recipe["chance"], json.dumps(recipe["items"])))	

						


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
		elif " if" in line or "\nif" in line or "elseif" in line:
			depth -=1
		idx = newIdx	

		if depth > 2:
			raise Exception("unlimited loop", code[original:original+100].encode("utf-8"))

	return line.split("if")[1].split("()")[0].split("then")[0].strip("( ")


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
		chest = re.search("GetManipulatedItem[^']*'(....)'", funcs[func]).group(1)

		drops[chest].append({"id": id, "chance": chance})
	
	for m in re.finditer("call itemdrop.*'(....)'.*,\s*(\d+\.?\d*).*'(....)'", code):
		drops[m.group(3)].append({"id": m.group(1), "chance": float(m.group(2))})

	for m in re.finditer("call CreateItemLoc\('(....)'", code):
		func = funcBefore(m.start())
		if "udg_Chiruno_P_Unit" in funcs[func] or m.group(1) in ["I0JV", "I012"]:
			continue

		if "GetRandomInt" in funcs[func]:
			chest, chance = resolveRandom(m, funcs[func], "GetUnitTypeId[^']*'(....)'")
		elif "GetHeroLevel" in funcs[func]:
			func = funcBefore(m.start(), 2)	
			chest, chance = re.search("GetUnitTypeId[^']*'(....)'", funcs[func]).group(1), 100
		else:	
			chest = funcs[func].split("GetUnitTypeId")[1].split("'")[1]
			chance = 100

		drops[chest].append({"id": m.group(1), "chance": float(chance)})	

	for m in re.finditer("call UnitAddItemByIdSwapped(.*)", code):
		line = m.group(1)
		if "'" in line:
			id = line.split("'")[1]
			func = funcBefore(m.start())
			
			
			if "Random" in func:
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
			print(chest, " not in item guide")	

	for chest in itemsGuide["drops"]:
		if chest not in drops:
			print(chest, " not calculated in jass")		


def processLine(line, txt, id, pendingDamage, pendingHpRegen):
	if "udg_Plus_Demige" in line or "udg_Minus_Demige" in line or "udg_Shied_Int" in line or "udg_HP_Amor" in line:
		try:
			if "+" in txt:
				damage = round(float(line.split("+")[1].split(")")[0].strip()) * 100)
			elif "-" in txt:
				damage = round(float(line.split("-")[1].split(")")[0].strip()) * 100)	
			else:
				damage = round(float(line.split("=")[-1]))	
		except Exception as ex:
			print(txt, ex)		
			raise ex

		if damage == 0:
			return	

	if "udg_Plus_Demige" in line:
		if id in itemsGuide["items"] and "stats" in itemsGuide["items"][id]:
			if "damage_increase" not in itemsGuide["items"][id]["stats"]:
				print(id, "does not have damage_increase", damage)
			else:
				if itemsGuide["items"][id]["stats"]["damage_increase"] != damage:
					print(id, "different bonus damage", itemsGuide["items"][id]["stats"]["damage_increase"], damage)
		else:
			if id not in ["I00Z", "I010", "I02X", "I03N"]:
				print(id, "not in guide bonus dmg")				

	elif "udg_Minus_Demige" in line or "udg_Shied_Int" in line:
		if "udg_Shied_Int" in line:
			damage *= -1
		if id in itemsGuide["items"]:
			pendingDamage.discard(id)
			if "damage_taken" not in  itemsGuide["items"][id]["stats"]:
				print(id, "does not have damage_taken")
			else:
				if itemsGuide["items"][id]["stats"]["damage_taken"] != damage:
					print(id, "different damage taken", itemsGuide["items"][id]["stats"]["damage_taken"], damage)

		else:
			if id not in ["I00Z", "I010", "I02X", "I03N"]:
				print(id, "not in guide bonus dmg")
	elif "udg_HP_Amor" in line:
		if id in itemsGuide["items"]:
			pendingHpRegen.discard(id)
			if "hp_regen_percent" not in  itemsGuide["items"][id]["stats"]:
				print(id, "does not have hp_regen_percent")
			else:
				if itemsGuide["items"][id]["stats"]["hp_regen_percent"] != damage:
					print(id, "different hp regen percent", itemsGuide["items"][id]["stats"]["hp_regen_percent"], damage)
		else:
			print(id, "not in guide regen percent")		
			

def processDamage(func, pendingDamage, pendingHpRegen):

	for func in re.findall(func, code):
		idx = code.index("GetManipulatedItem()) == '", code.find(func)) + len("GetManipulatedItem()) == '")
		id = code[idx:idx + 4]
		funcName = func.split(" ")[1]

		idx = code.find(funcName, code.find(func) + 100)

		txt = code[idx:code.find("else", idx)]

		for line in txt.split("\n")[1:-1]:
			processLine(line, txt, id, pendingDamage, pendingHpRegen)
	
def processDamage2(pendingDamage, pendingHpRegen):
	for m in re.finditer("Item\s?==\s?'(\w\w\w\w)'", code):
		id = m.group(1)
		for line in code[m.start():code.find("endif", m.start())].split("\n"):
			processLine(line, line, id, pendingDamage, pendingHpRegen)	

def assertCorrectBonusDamage():
	loadCode()

	pendingDamage = set()
	pendingHpRegen = set()

	for id in itemsGuide["items"]:
		if "stats" in itemsGuide["items"][id]:
			if "damage_taken" in itemsGuide["items"][id]["stats"]:
				pendingDamage.add(id)
			if "hp_regen_percent" in itemsGuide["items"][id]["stats"]:
				pendingHpRegen.add(id)	


	processDamage("function Trig_Plus_demige_.*Func.*", pendingDamage, pendingHpRegen)
	processDamage("function Trig_Item_GG_Func.*", pendingDamage, pendingHpRegen)
	processDamage2(pendingDamage, pendingHpRegen)

	if len(pendingDamage):
		print("missing damage taken", pendingDamage)					


def process(itemId, type, func):
	for fun in re.findall("if.*" + func.split(" ")[1] + "\(\).*then", code):
		funcCode = code[code.find(fun):code.find("endif", code.find(fun))]


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

	assertItemScaling("I074", "if", "set udg_Attack_Item_Real[IT]=20")

	assertItemScaling("I0CD", "if", "set udg_Attack_Item_Real[IT]=20")
	
	assertItemScaling("I075", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I075')", "call UnitAddAbilityBJ('A09Z', s__TrigVariables_unit0[GlobalTV])")
	assertItemScaling("I075", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I075')", "call s__TrigVariables_SleepForStageNext(GlobalTV,10.00)")
	assertItemScaling("I075", "if", "set udg_Int_Tick_Item_Real[IT]=52")

	if abilities["A09Z"]["int"] != 1000:
		print("A09Z",  "does not provide 1000 int")

	assertItemScaling("I073", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I073')", "300000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 120.00")	

	assertItemScaling("I07B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07B')", "call UnitAddAbilityBJ('A09Z', s__TrigVariables_unit0[GlobalTV])")
	assertItemScaling("I07B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07B')", "call s__TrigVariables_SleepForStageNext(GlobalTV,2.30)")
	assertItemScaling("I07B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07B')", "call s__TrigVariables_SleepForStageNext(GlobalTV,7.70)")
	assertItemScaling("I07B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07B')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 80.00")

	assertItemScaling("I07D", "if", "set udg_Attack_Item_Real[IT]=9")
	assertItemScaling("I07D", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07D')", "300000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 55.00")

	assertItemScaling("I07E", "if", "set udg_Str_Int_Tick_Item_Real[IT]=22")

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

	assertItemScaling("I08V", "if", "set udg_Attack_Item_Real[IT]=28")

	assertItemScaling("I0CE", "if", "set udg_Attack_Item_Real[IT]=30")

	assertItemScaling("I08W", "if", "set udg_Contract[IT]=( GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[IT]) * ( ( 0.01 * 0.01 ) * ( 0.35 * 0.10 ) ) )")
	assertItemScaling("I08W", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I08W'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.04", depth = 2)

	assertItemScaling("I08Y", "if", "udg_Attack_Item_Real[IT]=7") 
	assertItemScaling("I08Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I08Y'", "300000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 70.00")

	assertItemScaling("I095", "if", "set udg_Str_Int_Tick_Item_Real[IT]=28")

	assertItemScaling("I094", "if", "set udg_Int_Tick_Item_Real[IT]=70")

	assertItemScaling("I09T", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09T')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09T", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09T')", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 4.00", 2)

	assertItemScaling("I09U", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09U'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09U", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09U')", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 4.00", 2)

	assertItemScaling("I09V", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09V')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 6.00")
	assertItemScaling("I09V", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09V')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 5.00")

	assertItemScaling("I06B", "GetItemTypeId(GetManipulatedItem()) == 'I06B'", "set udg_HP_UP_Item02[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.10")

	assertItemScaling("SEVERAL", "if ( not ( udg_Fire_Amor[GetForLoopIndexA()] >= 1 ) ) then", "8000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, udg_hero[GetForLoopIndexA()], true)) * I2R(udg_Fire_Amor[GetForLoopIndexA()]")

	assertItemScaling("I06R", " GetItemTypeId(GetManipulatedItem()) == 'I06R'", "set udg_Fire_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=15")
	assertItemScaling("I06R", " GetItemTypeId(GetManipulatedItem()) == 'I06R'", "set udg_Fire_Amor_Minus[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=500")

	assertItemScaling("I03H", "GetItemTypeId(GetManipulatedItem()) == 'I03H'", "set udg_Fire_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=23")
	assertItemScaling("I03H", "GetItemTypeId(GetManipulatedItem()) == 'I03H'", "set udg_Fire_Amor_Minus[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=800")

	assertItemScaling("I07N", "GetItemTypeId(GetManipulatedItem()) == 'I07N'", "set udg_Mana_Shild_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=0.25")

	assertItemScaling("I0BJ", "GetItemTypeId(GetManipulatedItem()) == 'I0BJ'", "set udg_HP_UP_Item03[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.16")

	assertItemScaling("I0BL", "GetItemTypeId(GetManipulatedItem()) == 'I0BL'", "set udg_Fire_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=33")
	assertItemScaling("I0BL", "GetItemTypeId(GetManipulatedItem()) == 'I0BL'", "set udg_Fire_Amor_Minus[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=1100")

	assertItemScaling("I0BN", "GetItemTypeId(GetManipulatedItem()) == 'I0BN'", "set udg_HP_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=2.00")

	assertItemScaling("I0BO", "GetItemTypeId(GetManipulatedItem()) == 'I0BO'", "set udg_Mana_Shild_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=0.32")

	assertItemScaling("I0BK", "GetItemTypeId(GetManipulatedItem()) == 'I0BK'", "set udg_HP_UP_Item04[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.21")

	assertItemScaling("I07J", "GetItemTypeId(GetManipulatedItem()) == 'I07J'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] + 0.40")
	assertItemScaling("I07J", "GetItemTypeId(GetManipulatedItem()) == 'I07J'", "call s__TrigVariables_SleepForStageNext(GlobalTV,15.00)")
	assertItemScaling("I07J", "GetItemTypeId(GetManipulatedItem()) == 'I07J'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] - 0.40")

	assertItemScaling("I08F", "GetItemTypeId(GetManipulatedItem()) == 'I08F'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] + 0.60")
	assertItemScaling("I08F", "GetItemTypeId(GetManipulatedItem()) == 'I08F'", "call s__TrigVariables_SleepForStageNext(GlobalTV,15.00)")
	assertItemScaling("I08F", "GetItemTypeId(GetManipulatedItem()) == 'I08F'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] - 0.60")

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

	assertItemScaling("I0CG", "if", "set udg_Attack_Item_Real[IT]=48")

	assertItemScaling("I096", "if", "set udg_Attack_Item_Real[IT]=42")

	assertItemScaling("I09E", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09E'", "340000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 225.00")

	assertItemScaling("I0AE", "if", "set udg_Contract[IT]=( GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[IT]) * ( ( 0.01 * 0.01 ) * ( 0.44 * 0.10 ) ) )")
	assertItemScaling("I0AE", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AE'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.04", depth = 2)

	assertItemScaling("I0AH", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AH'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 7.50")
	assertItemScaling("I0AH", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AH'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 5.50", 2)

	assertItemScaling("I0AK", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AK'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 7.50")
	assertItemScaling("I0AK", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AK'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 5.50", 2)

	assertItemScaling("I0AN", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AN'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 7.50")
	assertItemScaling("I0AN", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AN')", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 6.50")

	assertItemScaling("I09A", "if", "set udg_Attack_Item_Real[IT]=15")
	assertItemScaling("I09A", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09A')", "400000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 105.00")

	assertItemScaling("I09Q", "if", "set udg_Str_Int_Tick_Item_Real[IT]=45.6")

	assertItemScaling("I09M", "if", "set udg_Int_Tick_Item_Real[IT]=114")

	assertItemScaling("I09I", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09I'", "500000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 230.00")

	assertItemScaling("I0CH", "if", "set udg_Attack_Item_Real[IT]=56")

	assertItemScaling("I0AI", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AI'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 8.00")
	assertItemScaling("I0AI", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AI'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 6.00", 2)
	
	assertItemScaling("I09F", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09F'", "380000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 250.00")	

	assertItemScaling("I097", "if", "set udg_Attack_Item_Real[IT]=48")

	assertItemScaling("I0AF", "if", "set udg_Contract[IT]=( GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[IT]) * ( ( 0.01 * 0.01 ) * ( 0.46 * 0.10 ) ) )")
	assertItemScaling("I0AF", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AF'", "GetUnitStateSwap(UNIT_STATE_MANA, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) - ( GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.04", depth = 2)

	assertItemScaling("I0AL", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AL'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 8.00")
	assertItemScaling("I0AL", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AL'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 6.00", 2)

	assertItemScaling("I0AO", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AO'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 8.00")
	assertItemScaling("I0AO", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AO'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 7.00")

	assertItemScaling("I09B", "if", "set udg_Attack_Item_Real[IT]=17")
	assertItemScaling("I09B", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09B'", "400000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 120.00")	

	assertItemScaling("I09R", "if", "set udg_Str_Int_Tick_Item_Real[IT]=50.4")

	assertItemScaling("I09N", "if", "set udg_Int_Tick_Item_Real[IT]=126")

	assertItemScaling("I09J", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09J'", "600000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 260.00")	

	assertItemScaling("I0CI", "if", "set udg_Attack_Item_Real[IT]=64")

	assertItemScaling("I0AJ", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AJ'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 8.70")
	assertItemScaling("I0AJ", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AJ'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 6.70", depth = 2)

	assertItemScaling("I09G", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09G'", "420000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 280.00")

	assertItemScaling("I098", "if", "set udg_Attack_Item_Real[IT]=53")

	assertItemScaling("I0AG", "if", "set udg_Contract[IT]=( GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[IT]) * ( ( 0.01 * 0.01 ) * ( 0.49 * 0.10 ) ) )")	
	assertItemScaling("I0AG", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AG'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.04", depth = 2)

	assertItemScaling("I0AM", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AM'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 8.70")
	assertItemScaling("I0AM", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AM'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 6.70", depth = 2)
	
	assertItemScaling("I0AP", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0AP'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 8.70")
	assertItemScaling("I0AP", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I0AP'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 7.50", depth = 2)

	assertItemScaling("I09C", "if", "set udg_Attack_Item_Real[IT]=19")

	assertItemScaling("I09S", "if", "set udg_Str_Int_Tick_Item_Real[IT]=60")

	assertItemScaling("I09O", "if", "set udg_Int_Tick_Item_Real[IT]=147")

	assertItemScaling("I09K", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09K'", "700000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 300.00")

	assertItemScaling("I06G", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I06G')", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.40")

	assertItemScaling("I082", "GetItemTypeId(GetManipulatedItem()) == 'I082'", "set udg_HP_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=1.50")

	assertItemScaling("I03A", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I03A'", "50000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 8.00")

	assertItemScaling("I041", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I041'", "GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) + 15000.00")

	assertItemScaling("I03D", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I03D'", "call UnitAddAbilityBJ('A09P', s__TrigVariables_unit0[GlobalTV])")
	assertItemScaling("I03D", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I03D'", "call s__TrigVariables_SleepForStageNext(GlobalTV,10.00)")

	if abilities["A09P"]["int"] != 700:
		print("A09Z",  "does not provide 700 int")

	assertItemScaling("I062", "GetItemTypeId(GetManipulatedItem()) == 'I062'", "set udg_HP_UP_Item01[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.06")

	assertItemScaling("I064", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I064'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 3.00")

	assertItemScaling("I061", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I061'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 3.00")

	assertItemScaling("I063", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I063'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 3.00")

	assertItemScaling("I067", "if", "set udg_Attack_Item_Real[IT]=5")

	assertItemScaling("I068", "GetItemTypeId(GetManipulatedItem()) == 'I068'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=6000.00")

	assertItemScaling("I066", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I066'", "100000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) ) ) * 15.00")

	assertItemScaling("I07O", "if", "set udg_Contract[IT]=( GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[IT]) * ( ( 0.01 * 0.01 ) * ( 0.28 * 0.10 ) ) )")
	assertItemScaling("I07O", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07O'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.04")

	assertItemScaling("I07G", "'I07G') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.30")

	assertItemScaling("I045", "'I045') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.30")

	assertItemScaling("I07F", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I07F'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 70.00", depth = 2)
	assertItemScaling("I0IC", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IC'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 95.00", depth = 2)
	assertItemScaling("I0ID", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0ID'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 110.00", depth = 2)
	assertItemScaling("I0IE", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IE'", "150000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 130.00", depth = 2)

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

	assertItemScaling("I09D", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09D'", "300000.00 + ( ( I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) ) ) * 200.00")

	assertItemScaling("I093", "if", "set udg_Attack_Item_Real[IT]=37")

	assertItemScaling("I0A4", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0A4'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.04", depth = 2)
	assertItemScaling("I0A4", "if", "set udg_Contract[IT]=( GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[IT]) * ( ( 0.01 * 0.01 ) * ( 0.42 * 0.10 ) ) )")

	assertItemScaling("I09W", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09W'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 7.00")
	assertItemScaling("I09W", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09W'", "I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 5.00", 2)

	assertItemScaling("I09Y", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09Y'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true)) * 7.00")
	assertItemScaling("I09Y", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09Y'", "I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, s__TrigVariables_unit0[GlobalTV], true)) * 5.00", 2)

	assertItemScaling("I09X", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09X'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetTriggerUnit(), true)) * 7.00")	
	assertItemScaling("I09X", "UnitHasItemOfTypeBJ(s__TrigVariables_unit0[GlobalTV], 'I09X'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, s__TrigVariables_unit0[GlobalTV], true)) * 6.00")	

	assertItemScaling("I099", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I099')", "400000.00 + ( I2R(( GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true) + GetHeroStatBJ(bj_HEROSTAT_AGI, GetTriggerUnit(), true) )) * 90.00")
	assertItemScaling("I099", "if", "set udg_Attack_Item_Real[IT]=11")

	assertItemScaling("I09P", "if", "set udg_Str_Int_Tick_Item_Real[IT]=38.4")

	assertItemScaling("I09L", "if", "set udg_Int_Tick_Item_Real[IT]=96")

	assertItemScaling("I09H", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I09H'", "400000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetTriggerUnit(), true)) * 200.00")

	assertItemScaling("I0CF", "if", "set udg_Attack_Item_Real[IT]=40")

	assertItemScaling("I0D3", "GetItemTypeId(GetManipulatedItem()) == 'I0D3'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.30")

	assertItemScaling("I0D8", "GetEventDamageSource(), 'I0D8'", "0.10 * 0.08")
	assertItemScaling("I0D8", "GetEventDamageSource(), 'I0D8'", "30000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetEventDamageSource()))], true)) * 16.00")

	assertItemScaling("SEVERAL", "if ( not ( udg_Fire_Wepon[GetForLoopIndexA()] >= 1 ) ) then", "20000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, udg_hero[GetForLoopIndexA()], true)) * I2R(udg_Fire_Wepon[GetForLoopIndexA()]")

	assertItemScaling("I0D6", "GetItemTypeId(GetManipulatedItem()) == 'I0D6'", "50000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 20.00")
	assertItemScaling("I0D6", "GetItemTypeId(GetManipulatedItem()) == 'I0D6'", "set udg_Fire_Wepon[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=10")

	assertItemScaling("I0D9", "GetItemTypeId(GetManipulatedItem()) == 'I0D9'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] + 0.40")
	assertItemScaling("I0D9", "GetItemTypeId(GetManipulatedItem()) == 'I0D9'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] - 0.40")
	assertItemScaling("I0D9", "GetItemTypeId(GetManipulatedItem()) == 'I0D9'", "call s__TrigVariables_SleepForStageNext(GlobalTV,20.00)")

	assertItemScaling("I0D7", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0D7'", "call SetUnitLifeBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.04", depth = 2)
	assertItemScaling("I0D7", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0D7'", "call SetUnitManaBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_MANA, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.04", depth = 2)
	assertItemScaling("I0D7", "if", "set udg_Contract[IT]=0.4")

	assertItemScaling("I0CZ", "GetItemTypeId(GetManipulatedItem()) == 'I0CZ'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.35")

	assertItemScaling("I0DB", "GetItemTypeId(GetManipulatedItem()) == 'I0DB'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))]=( udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] + 1.50")

	assertItemScaling("I0DP", "'I0DP') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.50")

	assertItemScaling("I0DO", "'I0DO') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.50")

	assertItemScaling("I0DN", "GetManipulatedItem()) == 'I0DN'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] + 0.80")

	assertItemScaling("I0DM", "GetItemTypeId(GetManipulatedItem()) == 'I0DM'", "set udg_Mana_Shild_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=0.48")

	assertItemScaling("I0DK", "GetItemTypeId(GetManipulatedItem()) == 'I0DK'", "set udg_Fire_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=45")
	assertItemScaling("I0DK", "GetItemTypeId(GetManipulatedItem()) == 'I0DK'", "set udg_Fire_Amor_Minus[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=1500")

	assertItemScaling("I0DC", "GetItemTypeId(GetManipulatedItem()) == 'I0DC'", "set udg_HP_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=2.70")

	assertItemScaling("I0CV", "GetManipulatedItem()) == 'I0CV'", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.80")

	assertItemScaling("I038", "GetItemTypeId(GetManipulatedItem()) == 'I038'", "call SetUnitManaPercentBJ(GetTriggerUnit(), 100)", depth = 2)

	assertItemScaling("I039", "GetItemTypeId(GetManipulatedItem()) == 'I039'", "60000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, s__TrigVariables_unit0[GlobalTV], true)) * 25.00")
	assertItemScaling("I039", "GetItemTypeId(GetManipulatedItem()) == 'I039'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, s__TrigVariables_unit0[GlobalTV]) * 0.02")
	assertItemScaling("I039", "GetItemTypeId(GetManipulatedItem()) == 'I039'", "set udg_Fire_Wepon[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=14")

	assertItemScaling("I047", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I047'", "call SetUnitLifeBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.04 ) ))", depth = 2)
	assertItemScaling("I047", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I047'", "call SetUnitManaBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_MANA, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.04 ) ))", depth = 2)
	assertItemScaling("I047", "if", "set udg_Contract[IT]=0.6")

	assertItemScaling("I04F", "GetEventDamageSource(), 'I04F'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetEventDamageSource()) * ( 0.10 * 0.08")
	assertItemScaling("I04F", "GetEventDamageSource(), 'I04F'", "30000.00 + ( I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetEventDamageSource()))], true)) * 20.00")

	assertItemScaling("I0DZ", "GetItemTypeId(GetManipulatedItem()) == 'I0DZ'", "set udg_Mana_Shild_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=0.58")

	assertItemScaling("I0E0", "GetItemTypeId(GetManipulatedItem()) == 'I0E0'", "set udg_Fire_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=55")
	assertItemScaling("I0E0", "GetItemTypeId(GetManipulatedItem()) == 'I0E0'", "set udg_Fire_Amor_Minus[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=2000")

	assertItemScaling("I0E1", "GetItemTypeId(GetManipulatedItem()) == 'I0E1'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]) * 0.30")

	assertItemScaling("I0E5", "GetItemTypeId(GetManipulatedItem()) == 'I0E5' )", "set udg_HP_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=3.00")

	assertItemScaling("I0EC", "'I0EC') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.55")

	assertItemScaling("I0ED", "'I0ED') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.55")

	assertItemScaling("I0EE" , "GetManipulatedItem()) == 'I0EE'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] + 0.90")
	assertItemScaling("I0EE" , "GetManipulatedItem()) == 'I0EE'", "call s__TrigVariables_SleepForStageNext(GlobalTV,15.00)")
	assertItemScaling("I0EE" , "GetManipulatedItem()) == 'I0EE'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] - 0.90")

	assertItemScaling("I0CL", "'I0CL') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.40")

	assertItemScaling("I0EL", "GetItemTypeId(GetManipulatedItem()) == 'I0EL'", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.30")

	assertItemScaling("I0EN", "GetItemTypeId(GetManipulatedItem()) == 'I0EN'", "call SetUnitManaPercentBJ(GetTriggerUnit(), 100)", depth = 2)

	assertItemScaling("I0FL", "if ( not ( GetRandomInt(1, 100) <= 13 ) ) then", "UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetEventDamage() * 5.00")
	assertItemScaling("I0FL", "if ( not ( GetRandomInt(1, 100) <= 10 ) ) then", "UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetEventDamage() * 5.00")

	assertItemScaling("I0FM", "if UnitHasItemOfTypeBJ(udg_hero[ID], 'I0FM') then", "200000.00 + ( 60.00 * ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, udg_hero[ID], true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, udg_hero[ID], true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_INT, udg_hero[ID], true))", untilFunctionEnd=True)

	assertItemScaling("I0G4", "GetItemTypeId(GetManipulatedItem()) == 'I0G4'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))] - 0.55")
	assertItemScaling("I0G4", "GetItemTypeId(GetManipulatedItem()) == 'I0G4'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))] + 0.55")

	assertItemScaling("I0G5", "GetItemTypeId(GetManipulatedItem()) == 'I0G5'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))] - 0.60")
	assertItemScaling("I0G5", "GetItemTypeId(GetManipulatedItem()) == 'I0G5'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))] + 0.60")

	assertItemScaling("I0G6", "GetItemTypeId(GetManipulatedItem()) == 'I0G6'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))] - 0.65")
	assertItemScaling("I0G6", "GetItemTypeId(GetManipulatedItem()) == 'I0G6'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))] + 0.65")

	assertItemScaling("I0G7", "GetItemTypeId(GetManipulatedItem()) == 'I0G7'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))] - 0.70")
	assertItemScaling("I0G7", "GetItemTypeId(GetManipulatedItem()) == 'I0G7'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))] + 0.70")

	assertItemScaling("I0FA", "UnitHasItemOfTypeBJ(GetEventDamageSource(), 'I0FA'", "I2R(GetHeroStatBJ(bj_HEROSTAT_INT, GetEventDamageSource(), true)) + ( I2R(GetHeroStatBJ(bj_HEROSTAT_STR, GetEventDamageSource(), true)) + I2R(GetHeroStatBJ(bj_HEROSTAT_AGI, GetEventDamageSource(), true)) ) ) * 80.00 ) + 300000.00")

	assertItemScaling("I0GC", "if", "set udg_Attack_Item_Real[IT]=23")
	
	assertItemScaling("I0HD", "if", "set udg_Attack_Item_Real[IT]=60")
	
	assertItemScaling("I0GD", "if", "set udg_Attack_Item_Real[IT]=80")

	assertItemScaling("I0IP", "if", "set udg_Contract[IT]=0.8")
	assertItemScaling("I0IP", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IP'", "call SetUnitLifeBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.04 ) ))", depth = 2)
	assertItemScaling("I0IP", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IP'", "call SetUnitManaBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_MANA, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.04 ) ))", depth = 2)

	assertItemScaling("I0IQ", "if", "set udg_Contract[IT]=0.95")
	assertItemScaling("I0IQ", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IQ'", "call SetUnitLifeBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.04 ) ))", depth = 2)
	assertItemScaling("I0IQ", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IQ'", "call SetUnitManaBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_MANA, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.04 ) ))", depth = 2)

	assertItemScaling("I0IR", "if", "set udg_Contract[IT]=1.1")
	assertItemScaling("I0IR", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IR'", "call SetUnitLifeBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.04 ) ))", depth = 2)
	assertItemScaling("I0IR", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IQ'", "call SetUnitManaBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_MANA, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.04 ) ))", depth = 2)

	assertItemScaling("I0IS", "if", "set udg_Contract[IT]=1.35")
	assertItemScaling("I0IS", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IS'", "call SetUnitLifeBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_LIFE, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_LIFE, GetTriggerUnit()) * 0.04 ) ))", depth = 2)
	assertItemScaling("I0IS", "UnitHasItemOfTypeBJ(GetTriggerUnit(), 'I0IS'", "call SetUnitManaBJ(GetTriggerUnit(), ( GetUnitStateSwap(UNIT_STATE_MANA, GetTriggerUnit()) - ( GetUnitStateSwap(UNIT_STATE_MAX_MANA, GetTriggerUnit()) * 0.04 ) ))", depth = 2)

	assertItemScaling("I0HH", "if", "udg_Contract[IT]=( GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[IT]) * ( ( 0.01 * 0.01 ) * ( 0.56 * 0.10 ) ) )")

	assertItemScaling("I0HN", "if", "set udg_Int_Tick_Item_Real[IT]=180")

	assertItemScaling("I0HL", "if", "set udg_Str_Int_Tick_Item_Real[IT]=72")

	assertItemScaling("SEVERAL", "if udg_Int_Tick_Item_Real[ID] >= 1.00 then", "if ( GetRandomInt(1, 100) <= 8 ) then")
	assertItemScaling("SEVERAL", "if udg_Int_Tick_Item_Real[ID] >= 1.00 then", "( 30000.00 + ( GetHeroInt(udg_hero[ID], true) * udg_Int_Tick_Item_Real[ID]")
	assertItemScaling("SEVERAL", "if udg_Str_Int_Tick_Item_Real[ID] >= 1.00 then", "if ( GetRandomInt(1, 100) <= 8 ) then")
	assertItemScaling("SEVERAL", "if udg_Str_Int_Tick_Item_Real[ID] >= 1.00 then", "30000.00 + ( ( GetHeroInt(udg_hero[ID], true) + GetHeroStr(udg_hero[ID], true) ) * udg_Str_Int_Tick_Item_Real[ID]")


	assertItemScaling("SEVERAL", "if ( udg_Attack_Item[ID] == true )", "and ( GetRandomInt(1, 100) <= 12 ) then")

	assertItemScaling("I0I9", "GetItemTypeId(GetManipulatedItem()) == 'I0I9'", "set udg_Gaho_Item_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=1000.00")

	assertItemScaling("I0IA", "GetItemTypeId(GetManipulatedItem()) == 'I0IA'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=38000.00")

	assertItemScaling("I0IB", "GetItemTypeId(GetManipulatedItem()) == 'I0IB'", "set udg_Shield_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=50000.00")

	assertItemScaling("I0J4", "udg_Power_Skill_Enjuy[GetConvertedPlayerId(GetO", "call s__TrigVariables_Setinteger(GlobalTV,0 , 65)")

	assertItemScaling("I0KN", "GetManipulatedItem()) == 'I0KN'", "set udg_Fire_Amor[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=70")
	assertItemScaling("I0KN", "GetManipulatedItem()) == 'I0KN'", "set udg_Fire_Amor_Minus[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=3000")

	assertItemScaling("I0KO", "GetManipulatedItem()) == 'I0KO'", "set udg_Mana_Shild_Real[GetConvertedPlayerId(GetOwningPlayer(GetTriggerUnit()))]=0.70")

	assertItemScaling("I0L0", "if", "set udg_Gaho_Item_Real[IT]=2500.00")

	assertItemScaling("I0L1", "GetItemTypeId(GetManipulatedItem()) == 'I0L1'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] + 1.20")
	assertItemScaling("I0L1", "GetItemTypeId(GetManipulatedItem()) == 'I0L1'", "udg_Plus_Demige[GetConvertedPlayerId(GetOwningPlayer(s__TrigVariables_unit0[GlobalTV]))] - 1.20")

	assertItemScaling("I0L2", "'I0L2') == true", "GetUnitStateSwap(UNIT_STATE_MAX_MANA, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.65")

	assertItemScaling("I0L4", "'I0L4') == true", "GetUnitStateSwap(UNIT_STATE_MAX_LIFE, udg_hero[s__TrigVariables_integer0[GlobalTV]]) * 0.65")

	#I0JD active
	


getItemData()	

loadItems()

assertCorrectInfo()
assertCorrectDropRates()
assertCorrectBonusDamage()

assertCorrectCraftings()

assertCorrectScalings()

