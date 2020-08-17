import json
import re

with open("items.txt", "r+", encoding="latin-1") as f:
	itemFile = f.read()


with open("abilities.txt", "r+", encoding="latin-1") as f:
	abilitiesFile = f.read()


def find_between( s, first, last ):
    try:
        start = s.index( first ) + len( first )
        end = s.index( last, start )
        return s[start:end]
    except ValueError:
        return ""


class Parser:

	def __init__(self, file):
		self.idx = 0
		self.file = file

	def parseItems(self):
		
		self.props = ['class', 'Level', 'oldLevel', 'abilList', 'cooldownID', 'ignoreCD', 'HP', 'morph', 'armor', 'Name', 'Hotkey']
		
		return self.parse()		

	def parseAbilities(self):
	
		self.props = ['code', 'hero', 'item', 'checkDep', 'levels', 'targs1', 'Cast1', 'Dur1', 'HeroDur1', 'Cool1', 'Cost1', 'Area1', 'Rng1', 'DataA1', 'DataB1', 'DataC1', 'DataD1', 'DataE1', 'DataF1', 'DataG1', 'DataH1', 'DataI1', 'BuffID1', 'EfctID1', 'targs2', 'Cast2', 'Dur2', 'HeroDur2', 'Cool2', 'Cost2', 'Area2', 'Rng2', 'DataA2', 'DataB2', 'DataC2', 'DataD2', 'DataE2', 'DataF2', 'DataG2', 'DataH2', 'DataI2', 'BuffID2', 'EfctID2', 'targs3', 'Cast3', 'Dur3', 'HeroDur3', 'Cool3', 'Cost3', 'Area3', 'Rng3', 'DataA3', 'DataB3', 'DataC3', 'DataD3', 'DataE3', 'DataF3', 'DataG3', 'DataH3', 'DataI3', 'BuffID3', 'EfctID3', 'targs4', 'Cast4', 'Dur4', 'HeroDur4', 'Cool4', 'Cost4', 'Area4', 'Rng4', 'DataA4', 'DataB4', 'DataC4', 'DataD4', 'DataE4', 'DataF4', 'DataG4', 'DataH4', 'DataI4', 'BuffID4', 'EfctID4', 'Name', 'comments']			

		return self.parse()
	
	def parse(self):
		self.props = tuple(self.props)
		items  = {}
		item = {}

		while(self.readLine()):
			id = self.isIdLine(self.line)
			
			if id:
				if item:
					items[item["id"]] = item
				item = {}
				item["id"] = id
			else:
				if self.isInterestingLine(self.line) and "=" in self.line:
					item[self.line.split("=")[0].strip()] = self.line.split("=")[1].strip()

		if item:
			items[item["id"]] = item			
							
		return items		


	def readLine(self):
		idx = self.file.find("\n", self.idx)
		
		if idx == -1:
			return False
		else:
			self.line = self.file[self.idx:idx]
			self.idx = idx + len("\n")
			return True	

	def isIdLine(self, line):
		m = re.search("\[(\w{4})(:\w{4})?\]", line)
		if m:
			return m.groups()[0] 

	def isInterestingLine(self, line):
		if line.strip().startswith(self.props):
			return True				

def parseItems():
	items = {}
	idx = 0
	itemId = itemFile



items = Parser(itemFile).parseItems()
abilites = Parser(abilitiesFile).parseAbilities()

with open("items.json", "w") as f:
	json.dump(items, f, indent=4)

with open("abilities.json", "w") as f:
	json.dump(abilites, f, indent=4)


