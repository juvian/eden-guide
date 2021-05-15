# -*- coding: utf-8 -*-
import os
import re
from code import *

FOLDER = "eden 5.8k"

code = Code(FOLDER + "/war3map.j")

with open("ignore.txt", "r", encoding = "utf-8") as f:
	ignore = set([x.strip() for x in f.readlines()])


def add(line):
	if len(line.split('"')) > 1:
		s = line.split('"')[1]
		ignore.add(f't["{s}"] = "{s}";')

for line in re.findall(r'udg_PlayerName\[GetConvertedPlayerId\(GetTriggerPlayer\(\)\)\] ==.*|set udg_Plyer_C\[.*|set udg_Player_S_Name\[.*', code.functions):
	add(line)

chars = u'[\u3131-\uea60]'

for file in ["tl_abilities", "tl_units", "tl_buffs", "tl_items", "tl_upgrades", "script", "strings"]:
	print (file)
	with open(FOLDER + "/eden_" + file + ".lua", "r", encoding = "utf8") as f:
		for i, line in enumerate(f.readlines()):
			if any([re.search(chars, line)]) and not line.strip() in ignore:
				if (file == "script" or file == "strings"):
					if not any([re.search(chars, line[line.find("="):])]):
						continue
				if "ㄴ" in line and len([re.search(chars, line[line.find("="):])]) < 2:
					continue
				print(i + 1)
