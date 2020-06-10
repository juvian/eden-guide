import json

with open("items.json", "r+", encoding="latin-1") as f:
	items = json.load(f)

with open("abilities.json", "r+", encoding="latin-1") as f:
	abilities = json.load(f)

props = ["str", "int", "atk", "agi", "hp", "attack_speed", "movement_speed", "armor", "mp", "hp_regen", "critical_hit", "critical_hit_chance", "magic_resistance"]

def addAbilities(obj, abilityIds, multiplier = 1):
	if not isinstance(abilityIds, set):
		abilityIds = abilityIds.strip().split(",")
	for abilityId in abilityIds:
		if not abilityId or abilityId not in abilities:
			continue
		ab = abilities[abilityId]
		
		for prop in props:
			obj[prop] += ab[prop] * multiplier

		if "cd" in ab:
			obj["cd"] = ab["cd"]	

def initObjectProperties(obj):
	for prop in props:
		obj[prop] = 0

for abilityId in abilities:
	ability = abilities[abilityId]
	
	initObjectProperties(ability)

	if "code" not in ability:
		continue

	if ability["code"] == 'AIat':
		ability["atk"] = int(ability["DataA1"])
	elif ability["code"] == 'AIab':
		ability["agi"] = int(ability["DataA1"])
		ability["int"] = int(ability["DataB1"])
		ability["str"] = int(ability["DataC1"])
	elif ability["code"] == 'ANcl':
		ability["cd"] = int(float(ability["Cool1"]))
	elif ability["code"] == 'AIml':
		ability["hp"] = int(ability["DataA1"])		
	elif ability["code"] == 'AIas':
		ability["attack_speed"] = int(float(ability["DataA1"]) * 100)	
	elif ability["code"] == 'AIms':
		ability["movement_speed"] = int(ability["DataA1"])	
	elif ability["code"] == 'AIde':
		ability["armor"] = int(ability["DataA1"])
	elif ability["code"] == 'AImm':
		ability["mp"] = int(ability["DataA1"])
	elif ability["code"] == 'Arel':
		ability["hp_regen"] = int(ability["DataA1"])
	elif ability["code"] == 'AOcr':
		ability["critical_hit"] = float(ability["DataB1"])	
		ability["critical_hit_chance"] = float(ability["DataA1"])	
	elif ability["code"] == '' or ability['code'] == 'AIdd':
		ability["magic_resistance"] = round(100 - float(ability["DataE1"]) * 100)

for abilityId in abilities:
	ability = abilities[abilityId]

	if "code" not in ability:
			continue

	if ability["code"] == 'Aspb':
		addAbilities(ability, ability["DataA1"])	


for itemId in items:
	item = items[itemId]

	initObjectProperties(item)

	if "abilList" in item and item["abilList"] != '_':
		addAbilities(item, item["abilList"])


