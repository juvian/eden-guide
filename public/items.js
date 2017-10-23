var items = {
	"swordman_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["insanity_dagger", "agile_dagger"],
		"rate" : 100,
		"stats" : {
			"atk" : 30000,
			"agi" : 1800,
			"damage_increase" : 15
		},
		"label" : "Sword of the Swordman",
		"id" : "I07P"
	},
	"warden_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["intelligence_sword", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"atk" : 30000,
			"int" : 1800,
			"damage_increase" : 15
		},
		"label" : "Warden's Staff",
		"id" : "I0BV"
	},
	"chaos_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["agile_dagger", "power_sword", "destruction_essence", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"atk" : 35000,
			"agi" : 1800,
			"str" : 1800
		},
		"label" : "Sword of Chaos",
		"id" : "I03Q"
	},
	"combat_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["intelligence_sword", "power_sword", "destruction_essence", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"atk" : 30000,
			"int" : 2000,
			"str" : 1800
		},
		"label" : "Combat Staff",
		"id" : "I060"
	},
	"treant_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["elemental_staff", "elemental_spirit", "intelligence_sword"],
		"rate" : 100,
		"stats" : {
			"atk" : 30000,
			"int" : 2200
		},
		"label" : "Treant Staff",
		"effects" : ["On use: summon 2 Treant (120s cooldown)"],
		"id" : "I078"
	},
	"holy_sword_valdrix" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["swordman_sword", "heaven_sigil", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"agi" : 2700,
			"damage_increase" : 20
		},
		"label" : "Holy Sword Valdrix",
		"id" : "I07S"
	},
	"greater_magic_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["warden_staff", "heaven_sigil", "elemental_spirit"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"int" : 2700,
			"damage_increase" : 20
		},
		"label" : "Greater Magic Staff",
		"id" : "I0BW"
	},
	"life_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["elemental_sword", "elemental_spirit", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"str" : 2500,
			"hp" : 10000
		},
		"label" : "Sword of life",
		"effects" : ["Every 10th attack will recover STR x3 HP", "Every 6th spell will recover STR x3 HP", "On use, recovers STR x4 HP (120s cooldown)"],
		"id" : "I07U"
	},
	"life_bow" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 2,
		"materials" : ["spirit_bow", "elemental_spirit", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"agi" : 2500,
			"hp" : 10000
		},
		"label" : "Bow of life",
		"effects" : ["Every 10th attack will recover AGI x3 HP", "Every 6th spell will recover AGI x3 HP", "On use, recovers AGI x4 HP (120s cooldown)"],
		"id" : "I07V"
	},
	"life_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 2,
		"materials" : ["elemental_staff", "elemental_spirit", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"int" : 2500,
			"hp" : 10000
		},
		"label" : "Staff of life",
		"effects" : ["Every 4th spell will recover INT x3 HP", "On use: Recovers INT x4 HP to all allies within range (80s cooldown)"],
		"id" : "I07W"
	},
	"divine_light_dagger" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 2,
		"materials" : ["light_sword", "agile_dagger", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"agi" : 2600
		},
		"label" : "Dagger of Divine Light",
		"effects" : ["Each attack has 10% chance to deal 10000 + AGI x10 bonus damag"],
		"id" : "I06D"
	},
	"divine_light_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 2,
		"materials" : ["light_sword", "power_sword", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"str" : 2600
		},
		"label" : "Sword of Divine Light",
		"effects" : ["Each attack has a 15% chance to deal 30000 + STR x15 bonus damage"],
		"id" : "I06C"
	},
	"divine_light_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 2,
		"materials" : ["light_sword", "intelligence_sword", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"int" : 2600
		},
		"label" : "Staff of Divine Light",
		"effects" : ["Each spell has a 10% chance to deal 30000 + INT x20 bonus damage"],
		"id" : "I06E"
	},
	"chaotic_light_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 2,
		"materials" : ["chaos_sword", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"str" : 2300,
			"agi" : 2300
		},
		"label" : "Sword of Chaotic Light",
		"effects" : ["Each attack has a 12% chance to deal 30000 + (STR + AGI) x5 bonus damage"],
		"id" : "I06M"
	},
	"resplendent_light_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 2,
		"materials" : ["combat_staff", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"str" : 2300,
			"int" : 2500
		},
		"label" : "Sword of Resplendent Light",
		"effects" : ["Each spell has a 10% chance to deal 30000 + (STR + AGI) x8 bonus damage"],
		"id" : "I06N"
	},
	"judge_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 2,
		"materials" : ["treant_staff", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 60000,
			"int" : 2700
		},
		"label" : "Judge's Staff",
		"effects" : ["On use: summons 2 judges (120s cooldown)"],
		"id" : "I07A"
	},
	"holy_sword_excalibur" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 3,
		"materials" : ["caliburn", "heaven_sigil", "waterstone_fragment", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800
		},
		"label" : "Divine Sword Excalibur",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 150000 + (Strength + Agility + Intelligence) x70-100 (depends on location/stage?))(120s cooldown)"],
		"id" : "I06K"
	},
	"fire_axe" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 3,
		"materials" : ["destroyer_axe", "destruction_essence", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 75000,
			"str" : 2700
		},
		"label" : "Axe of Fire",
		"effects" : ["On Use: Causes a massive explosion, dealing 300000 + STR x120 damage (120s cooldown)"],
		"id" : "I06P"
	},
	"mysterious_fireworks_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 3,
		"materials" : ["bloodied_staff", "destruction_essence", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 75000,
			"int" : 2700
		},
		"label" : "Mysterious Fireworks Staff",
		"effects" : ["On use, increase INT by 2000 (duration 12s, 120s cooldown)"],
		"id" : "I06Q"
	},
	"flame_dagger" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 3,
		"materials" : ["insanity_dagger", "insanity_essence", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 75000,
			"agi" : 2700,
			"attack_speed" : 200
		},
		"label" : "Dagger of Flame",
		"id" : "I06O"
	},
	"meteorite_dagger" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 3,
		"materials" : ["divine_light_dagger", "flame_dagger", "black_clay_powder", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"agi" : 3300,
			"attack_speed" : 100
		},
		"label" : "Meteorite Dagger",
		"effects" : ["Each attack has a 14% chance to deal 30000 + AGI x14 bonus damage"],
		"id" : "I074"
	},
	"black_earth_mace" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 3,
		"materials" : ["divine_light_sword", "black_clay_powder", "waterstone_fragment", "mastermind_token", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"str" : 3500
		},
		"label" : "Black Earth Mace",
		"effects" : ["Each attack has a 15% chance to deal 40000 + STR x20 bonus damage"],
		"id" : "I0CD"
	},
	"judgement_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 3,
		"materials" : ["mysterious_fireworks_staff", "divine_light_staff", "black_clay_powder", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"int" : 3300
		},
		"label" : "Staff of Judgement",
		"effects" : ["Each spell has a 15% chance to deal 30000 + INT x25 bonus damage", "Intelligence increased by 1000 (duration 10s, 120s cooldown)"],
		"id" : "I075"
	},
	"black_earth_sword" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 3,
		"materials" : ["fire_axe", "destroyer_axe", "black_clay_powder", "waterstone_fragment", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"str" : 3500
		},
		"label" : "Black Earth Sword",
		"effects" : ["On use: Cause a large explosion of Black Earth, dealing 300000 + STR x120 damage (60s cooldown)"],
		"id" : "I073"
	},
	"holy_sword_fragarach" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 4,
		"materials" : ["holy_sword_valdrix", "dragon_slayer_mark", "heaven_sigil", "mastermind_token", "agile_dagger"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"agi" : 3500,
			"damage_increase" : 30
		},
		"label" : "Holy Sword Fragarach",
		"id" : "I07T"
	},
	"dragonic_jewel_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 4,
		"materials" : ["greater_magic_staff", "dragon_slayer_mark", "waterstone_fragment", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"int" : 3500,
			"damage_increase" : 30
		},
		"label" : "Dragonic Jewel Staff",
		"id" : "I0BX"
	},
	"death_claws" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 4,
		"materials" : ["helgainer_claw", "waterstone_fragment", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"agi" : 3500,
			"damage_increase" : 40,
			"damage_taken" : 15
		},
		"label" : "Claws of Death",
		"id" : "I0BZ"
	},
	"meteor_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 4,
		"materials" : ["judge_staff", "mysterious_fireworks_staff", "black_clay_powder", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"int" : 3500
		},
		"label" : "Meteor Staff",
		"effects" : ["On use, summons powerful infernal (lasts 20s)", "Intelligence increased by 1000 (duration 10s, cooldown 120s)"],
		"id" : "I07B"
	},
	"chaotic_meteorite_sword" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 4,
		"materials" : ["chaotic_light_sword", "fire_axe", "black_clay_powder", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"str" : 2600,
			"agi" : 2600
		},
		"label" : "Chaotic Meteorite Sword",
		"effects" : ["Each attack has a 14% chance to deal 30000 + (STR + AGI) x6 bonus damage", "On Use: An outward explosion of Black Eart, dealing 300000 + (STR + AGI) x55 damage (120s cooldown)"],
		"id" : "I07D"
	},
	"chaos_judge_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 4,
		"materials" : ["resplendent_light_sword", "black_clay_powder", "waterstone_fragment", "mastermind_token", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"int" : 2800,
			"str" : 2600
		},
		"label" : "Judge's Staff of Chaos",
		"effects" : ["Each spell has a 15% chance to deal 30000 + (STR + INT) x8 bonus damage"],
		"id" : "I07E"
	},
	"infinite_life_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 4,
		"materials" : ["life_staff", "mother_tree_bark", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"int" : 3500,
			"hp" : 20000
		},
		"label" : "Staff of Infinite Life",
		"effects" : ["Every 4 spell casts will recover INT x4 HP", "On use, restore INT x5 health to nearby allies (80s cooldown)"],
		"id" : "I085"
	},
	"infinite_life_bow" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 4,
		"materials" : ["life_bow", "mother_tree_bark", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"agi" : 3500,
			"hp" : 20000
		},
		"label" : "Bow of Infinite Life",
		"effects" : ["Every 10 attacks will recover AGI x3.5 HP", "Every 6 spells will recover AGI x3.5 HP", "On Use: Recover AGI x5 HP (120s cooldown)"],
		"id" : "I083"
	},
	"infinite_life_sword" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 5,
		"materials" : ["life_sword", "mother_tree_bark", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"str" : 3500,
			"hp" : 20000
		},
		"label" : "Sword of Infinite Life",
		"effects" : ["Every 10 attacks will recover STR x3.5 HP", "Every 6 spells will recover STR x3.5 HP", "On Use: Recover STR x5 HP (120s cooldown)"],
		"id" : "I084"
	},
	"excalibur_morgan" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 5,
		"materials" : ["holy_sword_excalibur", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"str" : 3800,
			"int" : 3800,
			"agi" : 3800
		},
		"label" : "Excalibur Morgan",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 150000 + (Strength + Agility + Intelligence) x120-160 (depends on location/stage?))(120s cooldown)"],
		"id" : "I07Y"
	},
	"kanshou_bakuya" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 5,
		"materials" : ["holy_sword_fragarach", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"agi" : 5000,
			"damage_increase" : 40
		},
		"label" : "Kanshou and Bakuya",
		"id" : "I07Z"
	},
	"akashic_records" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 5,
		"materials" : ["dragonic_jewel_staff", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"damage_increase" : 40
		},
		"label" : "Akashic Records",
		"id" : "I0BY"
	},
	"hellfire_gloves" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 5,
		"materials" : ["death_claws", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"agi" : 5000,
			"damage_increase" : 57,
			"damage_taken" : 20
		},
		"label" : "Hellfire Gloves",
		"id" : "I0C0"
	},
	"ascalon" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 5,
		"materials" : ["black_earth_sword", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"str" : 5000
		},
		"label" : "Ascalon",
		"effects" : ["On Use: Release a powerful explosion, dealing 300000 + STR x150 (45s cooldown)"],
		"id" : "I08R"
	},
	"phoenix_staff" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 5,
		"materials" : ["meteor_staff", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"int" : 5000
		},
		"label" : "Phoenix Staff",
		"effects" : ["On use, summons a phoenix (lasts 20s, 120s cooldown)"],
		"id" : "I08S"
	},
	"laevateinn" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 5,
		"materials" : ["gloomy_staff", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"damage_increase" : 20
		},
		"label" : "Laevateinn",
		"effects" : ["Nearby allies gain 20% bonus damage"],
		"id" : "I08T"
	},
	"moonlight_dagger" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 6,
		"materials" : ["meteorite_dagger", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"agi" : 5000,
			"attack_speed" : 150
		},
		"label" : "Moonlight Dagger",
		"effects" : ["Each attack has a 15% chance to deal 45000 + AGI x19 bonus damage"],
		"id" : "I08V"
	},
	"mjollnir" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 6,
		"materials" : ["black_earth_mace", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"str" : 5000
		},
		"label" : "Mjollnir",
		"effects" : ["Each attack has a 17% chance to deal 50000 + STR x24 bonus damage"],
		"id" : "I0CE"
	},
	"sage_staff" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 6,
		"materials" : ["mana_storm_staff", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"mp" : 20000
		},
		"label" : "Sage's Staff",
		"effects" : ["Generates Bonus Damage based on maximum mana (3.5% per 10,000) <br/> Deals an additional of 6.5% of bonus damage if over 10% maximum HP <br/> Consumes 4% of maximum mana per cast <br/> This passive will not work if below 10% maximum mana"],
		"id" : "I08W"
	},
	"bloody_moonlight_dagger" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 6,
		"materials" : ["chaotic_meteorite_sword", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"str" : 4000,
			"agi" : 4000
		},
		"label" : "Bloody Moonlight Dagger",
		"effects" : ["Each attack has a 10% chance to deal 45000 + (STR + AGI) x9.5 bonus damage", "On Use: Causes an explosion of moonlight, dealing 300000 + (STR + AGI) x70 (80s cooldown)"],
		"id" : "I08Y"
	},
	"hades_chaos_staff" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 6,
		"materials" : ["chaos_judge_staff", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"str" : 4000,
			"int" : 4000
		},
		"label" : "Hades Chaos Staff",
		"effects" : ["Each spell has a 15% chance to deal 40000 + (STR + INT) x12 bonus damage"],
		"id" : "I095"
	},
	"hades_staff" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 6,
		"materials" : ["judgement_staff", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"int" : 5000
		},
		"label" : "Hades Staff",
		"effects" : ["Each spell has a 20% chance to deal 40000 + INT x30 bonus damage"],
		"id" : "I094"
	},
	"waterstone_sword" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 6,
		"materials" : ["infinite_life_sword", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"str" : 5000,
			"hp" : 30000
		},
		"label" : "Waterstone Sword",
		"effects" : ["Every 10 attacks will recover STR x4 HP", "Every 6 spells will recover STR x4 HP", "On Use: Restores STR x6 HP (120s cooldown)"],
		"id" : "I09T"
	},
	"waterstone_dagger" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 6,
		"materials" : ["infinite_life_bow", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"agi" : 5000,
			"hp" : 30000
		},
		"label" : "Waterstone Dagger",
		"effects" : ["Every 10 attacks will recover AGI x4 HP", "Every 6 spells will recover AGI x4 HP", "On Use: Restores AGI x6 HP (120s cooldown)"],
		"id" : "I09U"
	},
	"waterstone_staff" : {
		"type" : "weapon",
		"color" : "blue",
		"page" : 7,
		"materials" : ["infinite_life_staff", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"hp" : 30000
		},
		"label" : "Waterstone Staff",
		"effects" : ["Every 4 spells will recover INT x5 HP", "On use, restore INT x6 health to nearby allies (80s cooldown"],
		"id" : "I09V"
	},
	"high_blood_robes" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_robes", "insanity_essence", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"armor" : 400,
			"int" : 1000,
			"max_int" : 10
		},
		"label" : "High Blood Robes",
		"id" : "I089"
	},
	"dwarven_high_leather_armor" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ["leather_approval_armor", "elemental_spirit", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"agi" : 1200,
			"hp" : 10000,
			"damage_taken" : -9
		},
		"label" : "Dwarven High Leather Armor",
		"id" : "I08J"
	},
	"dwarven_high_armor" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_armor", "approval_armor", "elemental_spirit", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"armor" : 700,
			"str" : 1200,
			"hp" : 10000,
			"damage_taken" : -9
		},
		"label" : "Dwarven High Armor",
		"id" : "I08I"
	},
	"dwarven_high_robe" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_robes", "approval_robes", "elemental_spirit", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"armor" : 500,
			"int" : 1300,
			"hp" : 10000,
			"damage_taken" : -9
		},
		"label" : "Dwarven High Robe",
		"id" : "I08K"
	},
	"earth_armor" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ["nature_armor", "elemental_spirit", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"str" : 1200,
			"agi" : 1200,
			"int" : 1200,
			"hp" : 10000,
			"max_health" : 16
		},
		"label" : "Earth Armor",
		"id" : "I06B"
	},
	"masters_robe" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ["high_blood_robes", "elemental_spirit", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"armor" : 500,
			"int" : 1700,
			"max_int" : 14
		},
		"label" : "The Master's Robe",
		"id" : "I08A"
	},
	"magical_flame_armor" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ["colloseum_armor", "elemental_spirit", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"armor" : 800,
			"str" : 1700,
			"hp" : 10000,
			"hp_regen" : -500
		},
		"label" : "Magical Flame Armor",
		"id" : "I06R",
		"effects" : ["Deals 8000 + STR x5 damage to nearby enemies each second"]
	},
	"maestras_flame_robe" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ["archwizard_robe", "elemental_spirit", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"armor" : 300,
			"int" : 1700,
			"damage_taken" : 5,
			"damage_increase" : 25
		},
		"label" : "Maestra's Flame Robe",
		"id" : "I06S"
	},
	"dwarven_exquisite_leather_armor" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 2,
		"materials" : ["dwarven_high_leather_armor", "mastermind_token", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"armor" : 700,
			"agi" : 1700,
			"hp" : 15000,
			"damage_taken" : -12
		},
		"label" : "Dwarven Exquisite Leather Armor",
		"id" : "I08M"
	},
	"dwarven_exquisite_armor" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 2,
		"materials" : ["dwarven_high_armor", "mastermind_token", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"armor" : 800,
			"str" : 1700,
			"hp" : 15000,
			"damage_taken" : -12
		},
		"label" : "Dwarven Exquisite Armor",
		"id" : "I08L"
	},
	"dwarven_exquisite_robe" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 2,
		"materials" : ["dwarven_high_robe", "mastermind_token", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"int" : 1800,
			"hp" : 15000,
			"damage_taken" : -12
		},
		"label" : "Dwarven Exquisite Robe",
		"id" : "I08N"
	},
	"black_earth_flame_armor" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 2,
		"materials" : ["magical_flame_armor", "mastermind_token", "black_clay_powder", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"armor" : 1000,
			"str" : 2500,
			"hp" : 15000,
			"hp_regen" : -800
		},
		"label" : "Black Earth Flame Armor",
		"effects" : ["Deals 10000 + STR x8 damage per second to all enemies within range"],
		"id" : "I03H"
	},
	"black_earth_flame_robe" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 2,
		"materials" : ["maestras_flame_robe", "mastermind_token", "black_clay_powder", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"int" : 2500,
			"hp" : 15000,
			"damage_taken" : 10,
			"damage_increase" : 40
		},
		"label" : "Black Earth Flame Robe",
		"id" : "I042"
	},
	"refined_mana_robe" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 2,
		"materials" : ["archwizard_robe", "dragon_slayer_mark", "black_clay_powder", "dragon_meat"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"int" : 2500,
			"mp" : 15000
		},
		"label" : "Refined Mana Robe",
		"effects" : ["On use: consumes 30% of max mana and creates a shield that blocks max man x1.5 for 50 seconds (75s cooldown). Does not stack"],
		"id" : "I07N"
	},
	"agile_leather_vest" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 2,
		"materials" : ["agile_leather_armor", "mother_tree_bark", "elemental_spirit", "insanity_leather_armor"],
		"rate" : 100,
		"stats" : {
			"armor" : 700,
			"agi" : 2400,
			"movement_speed" : 150,
			"damage_increase" : 22
		},
		"label" : "Agile Leather Vest",
		"id" : "I0B8"
	},
	"agile_plate_armor" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 2,
		"materials" : ["agile_armor", "mother_tree_bark", "elemental_spirit", "colloseum_armor"],
		"rate" : 100,
		"stats" : {
			"armor" : 800,
			"str" : 2400,
			"movement_speed" : 150,
			"damage_increase" : 22
		},
		"label" : "Agile Plate Armor",
		"id" : "I0B7"
	},
	"agile_cloak" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 3,
		"materials" : ["nimble_robe", "mother_tree_bark", "elemental_spirit", "archwizard_robe"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"int" : 2400,
			"movement_speed" : 150,
			"damage_increase" : 22
		},
		"label" : "Agile Cloak",
		"id" : "I0B9"
	},
	"mother_tree_life_armor" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 3,
		"materials" : ["earth_armor", "mother_tree_bark", "elemental_spirit", "tea_leaves"],
		"rate" : 100,
		"stats" : {
			"armor" : 800,
			"int" : 2100,
			"str" : 2100,
			"agi" : 2100,
			"hp" : 15000,
			"max_health" : 22
		},
		"label" : "Mother Tree's Life Armor",
		"id" : "I0BJ"
	},
	"mithril_armor" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 3,
		"materials" : ["dwarven_exquisite_armor", "mother_tree_bark", "elemental_spirit"],
		"rate" : 100,
		"stats" : {
			"armor" : 900,
			"str" : 2500,
			"hp" : 20000,
			"damage_taken" : -15
		},
		"label" : "Mithril Armor",
		"id" : "I08O"
	},
	"mithril_greaves" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 3,
		"materials" : ["dwarven_exquisite_leather_armor", "mother_tree_bark", "elemental_spirit"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"agi" : 2600,
			"hp" : 20000,
			"damage_taken" : -15
		},
		"label" : "Mithril Greaves",
		"id" : "I08P"
	},
	"mithril_robe" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 3,
		"materials" : ["dwarven_exquisite_robe", "mother_tree_bark", "elemental_spirit"],
		"rate" : 100,
		"stats" : {
			"armor" : 700,
			"agi" : 2700,
			"hp" : 20000,
			"damage_taken" : -15
		},
		"label" : "Mithril Robe",
		"id" : "I08Q"
	},
	"hellfire_armor" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 3,
		"materials" : ["black_earth_flame_armor", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 1200,
			"str" : 3500,
			"hp_regen" : -1100
		},
		"label" : "Hellfire Armor",
		"effects" : ["Deals 10000 + STR x11 damage per second to all enemies within range"],
		"id" : "I0BL"
	},
	"hellfire_robe" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 3,
		"materials" : ["black_earth_flame_robe", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 700,
			"int" : 3500,
			"damage_taken" : 15,
			"damage_increase" : 55
		},
		"label" : "Hellfire Robe",
		"id" : "I0BM"
	},
	"waterstone_armor" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 3,
		"materials" : ["elderwood_armor", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 800,
			"int" : 2700,
			"str" : 2700,
			"agi" : 2700,
			"hp" : 20000,
			"hp_regen_percent" : 2
		},
		"label" : "Waterstone Armor",
		"id" : "I0BN"
	},
	"refined_mana_crystal_robe" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["refined_mana_robe", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 700,
			"int" : 3500,
			"mp" : 25000,
			"hp_regen_percent" : 2
		},
		"label" : "Refined Mana Crystal Robe",
		"effects" : ["On use: consumes 30% of max mana and creates a shield that blocks max man x1.8 for 50 seconds (75s cooldown). Does not stack"],
		"id" : "I0BO"
	},
	"gaia_armor" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["mother_tree_life_armor", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 900,
			"int" : 2800,
			"str" : 2800,
			"agi" : 2800,
			"hp" : 20000,
			"max_health" : 28
		},
		"label" : "Gaia's Armor",
		"id" : "I0BK"
	},
	"wind_leather_armor" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["agile_leather_vest", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 900,
			"agi" : 3500,
			"movement_speed" : 150,
			"damage_increase" : 30
		},
		"label" : "Leather Armor of Wind",
		"id" : "I0BA"
	},
	"armor_of_wind" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["agile_plate_armor", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 1000,
			"str" : 3500,
			"movement_speed" : 150,
			"damage_increase" : 30
		},
		"label" : "Armor of Wind",
		"id" : "I0BB"
	},
	"aqua_robes" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["agile_cloak", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 800,
			"int" : 3500,
			"movement_speed" : 150,
			"damage_increase" : 30
		},
		"label" : "Aqua Robes",
		"id" : "I0BC"
	},
	"exquisite_mithril_armor" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["mithril_armor", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 1000,
			"str" : 3500,
			"hp" : 25000,
			"damage_taken" : -18
		},
		"label" : "Exquisite Mithril Armor",
		"id" : "I0BH"
	},
	"exquisite_mithril_greaves" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["mithril_greaves", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 900,
			"agi" : 3500,
			"hp" : 25000,
			"damage_taken" : -18
		},
		"label" : "Exquisite Mithril Greaves",
		"id" : "I0BI"
	},
	"exquisite_mithril_robe" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["mithril_robe", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 800,
			"int" : 3500,
			"hp" : 25000,
			"damage_taken" : -18
		},
		"label" : "Exquisite Mithril Robe",
		"id" : "I0BG"
	},	
	"madness_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_ring", "destruction_essence", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"int" : 1000,
			"str" : 1000,
			"agi" : 1000,
			"hp" : 6000,
			"mp" : 6000,
			"movement_speed" : 150
		},
		"label" : "The Ring of Madness",
		"id" : "I03L"
	},
	"destruction_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_enhanced_ring", "destruction_essence", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"int" : 1000,
			"str" : 1000,
			"agi" : 1000,
			"damage_increase" : 15
		},
		"label" : "Ring of Destruction",
		"id" : "I044"
	},
	"mother_tree_branches" : {
		"type" : "accessory",
		"color" : "purple",
		"page" : 1,
		"materials" : ["mother_tree_leaves", "elemental_spirit", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"int" : 1200,
			"str" : 1200,
			"agi" : 1200,
			"movement_speed" : 150,
			"magic_resistance" : 22
		},
		"label" : "Branches of the Mother Tree",
		"id" : "I04X"
	},
	"blazing_demonic_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"page" : 1,
		"materials" : ["destruction_ring", "destruction_essence", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"int" : 1100,
			"str" : 1100,
			"agi" : 1100,
			"damage_increase" : 20
		},
		"label" : "Blazing Demonic Ring",
		"id" : "I06W"
	},
	"blazing_vitality_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"page" : 1,
		"materials" : ["madness_ring", "elemental_spirit", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"int" : 1200,
			"str" : 1200,
			"agi" : 1200,
			"hp" : 20000,
			"mp" : 10000,
			"movement_speed" : 150,
			"hp_regen" : 700

		},
		"label" : "Ring of Blazing Vitality",
		"id" : "I06U"
	},
	"blueberry_ring" : {
		"type" : "accessory",
		"color" : "orange",
		"page" : 1,
		"materials" : ["blazing_demonic_ring", "dragon_slayer_mark", "mastermind_token", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"int" : 1700,
			"str" : 1700,
			"agi" : 1700,
			"damage_increase" : 15,
			"hp_regen" : 700

		},
		"label" : "Blueberry Ring",
		"effects" : ["On Use: Increase Bonus Damage by 40% for 15 seconds (120s cooldown)"],
		"id" : "I07J"
	},
	"diamond_ring" : {
		"type" : "accessory",
		"color" : "orange",
		"page" : 1,
		"materials" : ["blazing_vitality_ring", "dragon_slayer_mark", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"int" : 1700,
			"str" : 1700,
			"agi" : 1700,
			"hp" : 30000,
			"mp" : 30000,
			"movement_speed" : 150,
			"hp_regen" : 1000

		},
		"label" : "Diamond Ring",
		"id" : "I08B"
	},
	"frozen_spirit_ring" : {
		"type" : "accessory",
		"color" : "orange",
		"page" : 1,
		"materials" : ["blazing_demonic_ring", "dragon_slayer_mark", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"int" : 1700,
			"str" : 1700,
			"agi" : 1700,
			"damage_increase" : 30
		},
		"label" : "Frozen Spirit Ring",
		"id" : "I08C"
	},
	"black_soul_ring" : {
		"type" : "accessory",
		"color" : "blue",
		"page" : 2,
		"materials" : ["blueberry_ring", "mother_tree_bark", "dragon_slayer_mark", "black_clay_powder", "approval_enhanced_ring"],
		"rate" : 100,
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
			"damage_increase" : 23
		},
		"label" : "Black Soul Ring",
		"effects" : ["On Use: Increased Bonus Damage by 60% for 15 seconds (120s cooldown)"],
		"id" : "I08F"
	},
	"blue_sky_jewel" : {
		"type" : "accessory",
		"color" : "blue",
		"page" : 2,
		"materials" : ["frozen_spirit_ring", "mother_tree_bark", "dragon_slayer_mark", "black_clay_powder", "approval_ring"],
		"rate" : 100,
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
			"damage_increase" : 40
		},
		"label" : "Blue Sky Jewel",
		"id" : "I08E"
	},
	"blight_stone" : {
		"type" : "accessory",
		"color" : "blue",
		"page" : 2,
		"materials" : ["diamond_ring", "mother_tree_bark", "dragon_slayer_mark", "black_clay_powder", "approval_enhanced_ring"],
		"rate" : 100,
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
			"hp" : 33000,
			"mp" : 30000,
			"movement_speed" : 150,
			"hp_regen" : 1500
		},
		"label" : "Stone of Blight",
		"id" : "I08D"
	},
	"refined_dragon_heart" : {
		"type" : "accessory",
		"color" : "blue",
		"page" : 2,
		"materials" : ["dragon_heart", "mother_tree_bark", "dragon_slayer_mark", "black_clay_powder"],
		"rate" : 100,
		"stats" : {
			"str" : 4000,
			"hp" : 40000
		},
		"label" : "Refined Dragon Heart",
		"effects" : ["Recover 40% of MAX HP every 28 seconds"],
		"id" : "I0CK"
	},
	"dazzling_light_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"page" : 1,
		"materials" : ["light_helm", "heaven_sigil", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"armor" : 500,
			"int" : 600,
			"str" : 600,
			"agi" : 600,
			"damage_taken" : -10
		},
		"label" : "Dazzling Light Helmet",
		"id" : "I03S"
	},	
	"earth_helmet" : {
		"type" : "helmet",
		"color" : "purple",
		"page" : 1,
		"materials" : ["knight_helm", "elemental_spirit", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"armor" : 400,
			"int" : 600,
			"str" : 600,
			"agi" : 600
		},
		"label" : "Helmet of the Earth",
		"effects" : ["On Use: Create a Anti Magic Shield for 5 seconds (150s cooldown)"],
		"id" : "I04S"
	},	
	"mage_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"page" : 1,
		"materials" : ["insanity_helmet", "insanity_essence", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"armor" : 400,
			"int" : 600,
			"str" : 600,
			"agi" : 600,
			"damage_increase" : 15
		},
		"label" : "Mage's Helm",
		"id" : "I04R"
	},
	"black_earth_helmet" : {
		"type" : "helmet",
		"color" : "orange",
		"page" : 1,
		"materials" : ["mage_helm", "black_clay_powder", "mastermind_token", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"int" : 900,
			"str" : 900,
			"agi" : 900,
			"damage_increase" : 20
		},
		"label" : "Black Earth Helmet",
		"id" : "I03R"
	},
	"dragonic_helmet" : {
		"type" : "helmet",
		"color" : "orange",
		"page" : 1,
		"materials" : ["earth_helmet", "dragon_slayer_mark", "waterstone_fragment", "elemental_spirit"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"int" : 900,
			"str" : 900,
			"agi" : 900
		},
		"label" : "Dragonic Helmet",
		"effects" : ["On Use: Create a Anti Magic Shield for 10 seconds (180s cooldown)"],
		"id" : "I07I"
	},
	"dragon_leather_helm" : {
		"type" : "helmet",
		"color" : "orange",
		"page" : 1,
		"materials" : ["dazzling_light_helm", "dragon_slayer_mark", "waterstone_fragment", "heaven_sigil"],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"int" : 900,
			"str" : 900,
			"agi" : 900,
			"damage_taken" : -15
		},
		"label" : "Dragon Leather Helm",
		"id" : "I07H"
	},
	"wise_foresight" : {
		"type" : "helmet",
		"color" : "orange",
		"page" : 1,
		"materials" : ["heavenly_wisdom_helm", "dragon_slayer_mark", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"armor" : 400,
			"int" : 1500,
			"mp" : 10000
		},
		"label" : "Foresight of the wise",
		"effects" : ["Recover 60% of maximum Mana on use (120s cooldown)"],
		"id" : "I0CJ"
	},
    "demonic_sovereign_horn" : {
		"type" : "helmet",
		"color" : "orange",
		"page" : 1,
		"materials" : ["beresa_horn", "demonic_leather_helm"],
		"rate" : 100,
		"stats" : {
			"armor" : 400,
			"int" : 900,
			"str" : 900,
			"agi" : 900,
			"damage_increase" : 35,
			"damage_taken" : 15
		},
		"label" : "Demonic Sovereign's Horn",
		"id" : "I08X"
	},
	"corrupting_mask" : {
		"type" : "artifact",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_wings", "insanity_essence", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"damage_increase" : 10
		},
		"label" : "Corrupting Mask",
		"id" : "I03B"
	},
	"heavenly_spirit_barrier" : {
		"type" : "artifact",
		"color" : "purple",
		"page" : 1,
		"materials" : ["light_barrier", "heaven_sigil", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"str" : 900,
			"agi" : 900,
			"int" : 900,
			"hp" : 8000
		},
		"label" : "Heavenly Spirit Barrier",
		"effects" : ["Generates a shield that blocks up to 8500 damage every 10 seconds"],
		"id" : "I06H"
	},	
	"dark_wings" : {
		"type" : "artifact",
		"color" : "orange",
		"page" : 1,
		"materials" : ["corrupting_mask", "black_clay_powder", "mastermind_token", "waterstone_fragment", "elemental_spirit"],
		"rate" : 100,
		"stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"damage_increase" : 25
		},
		"label" : "Dark Wings",
		"id" : "I04Q"
	},
	"darkened_boots" : {
		"type" : "artifact",
		"color" : "orange",
		"page" : 1,
		"materials" : ["swiftness_boots", "black_clay_powder", "mastermind_token", "waterstone_fragment", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"str" : 1200,
			"agi" : 1200,
			"int" : 1200,
			"attack_speed" : 100,
			"movement_speed" : 150
		},
		"label" : "Darkened Boots",
		"effects" : ["On use: Dashes forward (20s cooldown)"],
		"id" : "I079"
	},
	"dazzling_heavenly_spirit_barrier" : {
		"type" : "artifact",
		"color" : "orange",
		"page" : 1,
		"materials" : ["heavenly_spirit_barrier", "approval_wings", "mother_tree_bark", "waterstone_fragment"],
		"rate" : 100,
		"stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"hp" : 13000
		},
		"label" : "Dazzling Heavenly Spirit Barrier",
		"effects" : ["Generates a shield that blocks up to 12000 damage every 10 seconds"],
		"id" : "I088"
	},
	"rho_aias" : {
		"type" : "artifact",
		"color" : "blue",
		"page" : 1,
		"materials" : ["dazzling_heavenly_spirit_barrier", "approval_wings", "mother_tree_bark", "dragon_slayer_mark", "black_clay_powder"],
		"rate" : 100,
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"hp" : 20000
		},
		"label" : "Rho Aias",
		"effects" : ["Generates a shield that blocks up to 20000 damage every 10 seconds"],
		"id" : "I08G"
	},
	"nightmare_wings" : {
		"type" : "artifact",
		"color" : "blue",
		"page" : 1,
		"materials" : ["dark_wings", "approval_wings", "mother_tree_bark", "dragon_slayer_mark", "black_clay_powder"],
		"rate" : 100,
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"damage_increase" : 35
		},
		"label" : "Nightmare Wings",
		"id" : "I08H"
	},
	"despair_wings" : {
		"type" : "artifact",
		"color" : "blue",
		"page" : 1,
		"materials" : ["helgainer_inner_wings", "approval_wings", "mother_tree_bark", "dragon_slayer_mark", "black_clay_powder"],
		"rate" : 100,
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"damage_increase" : 17
		},
		"label" : "Wings of Despair",
		"effects" : ["Enemies within range take an additional 17% Damage"],
		"id" : "I08U"
	},
	"archangel_wings" : {
		"type" : "artifact",
		"color" : "blue",
		"page" : 2,
		"label" : "Archangel's Wings",
		"materials" : ["angel_wings", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
 		"rate" : 100,
	   	"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"hp" : 15000
		},
		"effects" : ["When HP is below 40%, any damage taken will restore 30% of MAX HP", "On use restore 12% of MAX HP every second for 10 seconds (120s cooldown)"],
		"id" : "I0BE"
	},
	"lightning_boots" : {
		"type" : "artifact",
		"color" : "blue",
		"page" : 2,
		"label" : "Lightning Boots",
		"materials" : ["darkened_boots", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
    	"stats" : {
			"str" : 2100,
			"agi" : 2100,
			"int" : 2100,
			"attack_speed" : 150,
			"movement_speed" : 150
		},
		"effects" : ["On Use: Dash forward (17s cooldown)"],
		"id" : "I0BF"
	},
	"archangel_judgement_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"label" : "Archangel's Judgement +1",
		"materials" : ["archangel_judgement", "mjollnir", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 7000
		},
		"effects" : ["Each attack has a 20% chance to deal 60000 + STR x32 bonus damage"],
		"id" : "I0CG"
	},
	"archangel_amber_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"label" : "Archangel's Amber Staff +1",
		"materials" : ["archangel_amber_staff", "akashic_records", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"damage_increase" : 60
		},
		"id" : "I0C6"
	},
	"archangel_gauntlets_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"label" : "Archangel's Gauntlets +1",
		"materials" : ["archangel_gauntlets", "hellfire_gloves", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"damage_increase" : 90,
			"damage_taken" : 29
		},
		"id" : "I0CA"
	},
	"archangel_dagger_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"label" : "Archangel's Dagger +1",
		"materials" : ["archangel_dagger", "moonlight_dagger", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"attack_speed" : 200
		},
		"effects" : ["Each attack has a 18% chance to deal 65000 + AGI x26 bonus damage"],
		"id" : "I096"
	},
	"excalibur_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"label" : "Excalibur +1",
		"materials" : ["excalibur", "excalibur_morgan", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 5300,
			"agi" : 5300,
			"int" : 5300
		},
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 340000 + (Strength + Agility + Intelligence) x225 (120s cooldown)"],
		"id" : "I09E"
	},
	"archangel_blade_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"label" : "Archangel's Blade +1",
		"materials" : ["archangel_blade", "kanshou_bakuya", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"damage_increase" : 60
		},
		"id" : "I090"
	},
	"archangel_mana_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"label" : "Archangel's Mana Staff +1",
		"materials" : ["archangel_mana_staff", "sage_staff", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"mp" : 28000
		},
		"effects" : ["Generates Bonus Damage based on maximum mana (4.4% per 10,000) <br/> Consumes 4% of maximum mana per cast <br/> This passive will not work if below 10% maximum mana"],
		"id" : "I0AE"
	},
	"angelic_life_sword_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"label" : "Angelic Sword of Life +1",
		"materials" : ["angelic_life_sword", "waterstone_sword", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 7000,
			"hp" : 45000
		},
		"effects" : ["Every 10 attacks will recover STR x5.5 HP", "Every 6 spells will recover STR x5.5 HP", "On Use: Restores STR x7.5 HP (120s cooldown)"],
		"id" : "I0AH"
	},
	"archangel_life_bow_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"label" : "Angelic Bow of Life +1",
		"materials" : ["archangel_life_bow", "waterstone_dagger", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"hp" : 45000
		},
		"effects" : ["Every 10 attacks will recover AGI x5.5 HP", "Every 6 spells will recover AGI x5.5 HP", "On Use: Restores AGI x7.5 HP (120s cooldown)"],
		"id" : "I0AK"
	},
	"archangel_life_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"label" : "Archangel's Life Staff +1",
		"materials" : ["archangel_life_bow", "waterstone_staff", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 250000,
			"int" : 7000,
			"hp" : 45000
		},
		"effects" : ["Every 4 spells will recover INT x6.5 HP", "On Use: Restore INT x7.5 HP of all allies within range(80s cooldown)"],
		"id" : "I0AN"
	},
	"archangel_sword_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"label" : "Archangel's Sword +1",
		"materials" : ["archangel_sword", "bloody_moonlight_dagger", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 5900,
			"agi" : 5900
		},
		"effects" : ["Each attack has a 13% chance to deal 65000 + (STR + AGI) x14 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x105 damage (80s cooldown)"],
		"id" : "I09A"
	},
	"archangel_battle_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"label" : "Archangel's Battle Staff +1",
		"materials" : ["archangel_battle_staff", "hades_chaos_staff", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 5900,
			"int" : 5900
		},
		"effects" : ["Each spell has a 20% chance to deal 60000 + (STR + INT) x20 bonus damage"],
		"id" : "I09Q"
	},
	"archangel_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"label" : "Archangel's Staff +1",
		"materials" : ["archangel_staff", "hades_staff", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000
		},
		"effects" : ["Each spell has a 24% chance to deal 60000 + (INT) x43 bonus damage"],
		"id" : "I09M"
	},
	"archangel_glaive_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"label" : "Archangel's Glaive +1",
		"materials" : ["archangel_glaive", "ascalon", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 7000
		},
		"effects" : ["On Use: Causes an explosion, dealing 500000 + STR x230 damage (45s cooldown)"],
		"id" : "I09I"
	},
	"blessed_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"label" : "Blessed Staff +1",
		"materials" : ["blessed_staff", "phoenix_staff", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000
		},
		"effects" : ["On Use: Summons an angel"],
		"id" : "I0AR"
	},
	"archangel_light_staff_l" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"label" : "Archangel's Light Staff +1",
		"materials" : ["archangel_light_staff", "laevateinn", "superlative_aggregate_energy", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"damage_increase" : 27
		},
		"effects" : ["Increases nearby allies damage by 27%"],
		"id" : "I0AT"
	},
	"archangel_judgement_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"label" : "Archangel's Judgement +2",
		"materials" : ["archangel_judgement_1", "archangel_judgement", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 7500
		},
		"effects" : ["Each attack has a 20% chance to deal 70000 + STR x36 bonus damage"],
		"id" : "I0CH"
	},
	"archangel_gauntlets_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"label" : "Archangel's Gauntlets +2",
		"materials" : ["archangel_gauntlets_1", "archangel_gauntlets", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"damage_increase" : 105,
			"damage_taken" : 33
		},
		"id" : "I0CB"
	},
	"angelic_life_sword_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"label" : "Angelic Sword of Life +2",
		"materials" : ["angelic_life_sword_1", "angelic_life_sword", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 7500,
			"hp" : 50000
		},
		"effects" : ["Every 10 attacks will recover STR x6 HP", "Every 6 spells will recover STR x6 HP", "On Use: Restores STR x8 HP (120s cooldown)"],
		"id" : "I0AI"
	},
	"excalibur_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"label" : "Excalibur +2",
		"materials" : ["excalibur_1", "excalibur", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 5600,
			"agi" : 5600,
			"int" : 5600
		},
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 380000 + (Strength + Agility + Intelligence) x250 (120s cooldown)"],
		"id" : "I09F"
	},
	"archangel_dagger_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"label" : "Archangel's Dagger +2",
		"materials" : ["archangel_dagger_1", "archangel_dagger", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"attack_speed" : 200
		},
		"effects" : ["Each attack has a 18% chance to deal 70000 + AGI x30 bonus damage"],
		"id" : "I097"
	},
	"archangel_blade_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"label" : "Archangel's Blade +2",
		"materials" : ["archangel_blade_1", "archangel_blade", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"damage_increase" : 65
		},
		"id" : "I091"
	},
	"archangel_light_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"label" : "Archangel's Light Staff +2",
		"materials" : ["archangel_light_staff_l", "archangel_light_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"damage_increase" : 33
		},
		"effects" : ["Increases nearby allies damage by 33%"],
		"id" : "I0C1"
	},
	"archangel_mana_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"label" : "Archangel's Mana Staff +2",
		"materials" : ["archangel_mana_staff_1", "archangel_mana_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"mp" : 32000
		},
		"effects" : ["Generates Bonus Damage based on maximum mana (4.6% per 10,000) <br/> Consumes 4% of maximum mana per cast <br/> This passive will not work if below 10% maximum mana"],
		"id" : "I0AF"
	},
	"archangel_life_bow_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"label" : "Archangel's Bow of Life +2",
		"materials" : ["archangel_life_bow_1", "archangel_life_bow", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"hp" : 50000
		},
		"effects" : ["Every 10 attacks will recover AGI x6 HP", "Every 6 spells will recover AGI x6 HP", "On Use: Restores AGI x8 HP (120s cooldown)"],
		"id" : "I0AL"
	},
	"archangel_life_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"label" : "Archangel's Life Staff +2",
		"materials" : ["archangel_life_staff_1", "archangel_life_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"hp" : 50000
		},
		"effects" : ["Every 4 spells will recover INT x7 HP", "On Use: Restore INT x8 HP of all allies within range(80s cooldown)"],
		"id" : "I0AO"
	},
	"archangel_amber_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"label" : "Archangel's Amber Staff +2",
		"materials" : ["archangel_amber_staff_1", "archangel_amber_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"damage_increase" : 65
		},
		"id" : "I0C7"
	},
	"archangel_sword_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"label" : "Archangel's Sword +2",
		"materials" : ["archangel_sword_1", "archangel_sword", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 6300,
			"agi" : 6300
		},
		"effects" : ["Each attack has a 13% chance to deal 70000 + (STR + AGI) x16 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x120 damage (80s cooldown)"],
		"id" : "I09B"
	},
	"archangel_battle_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"label" : "Archangel's Battle Staff +2",
		"materials" : ["archangel_battle_staff_1", "archangel_battle_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 6300,
			"int" : 6300
		},
		"effects" : ["Each spell has a 20% chance to deal 70000 + (STR + INT) x23 bonus damage"],
		"id" : "I09R"
	},
	"archangel_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"label" : "Archangel's Staff +2",
		"materials" : ["archangel_staff_1", "archangel_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500
		},
		"effects" : ["Each spell has a 24% chance to deal 70000 + (INT) x48 bonus damage"],
		"id" : "I09N"
	},
	"archangel_glaive_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"label" : "Archangel's Glaive +2",
		"materials" : ["archangel_glaive_1", "archangel_glaive", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 7500
		},
		"effects" : ["On Use: Causes an explosion, dealing 600000 + STR x260 damage (45s cooldown)"],
		"id" : "I09J"
	},
	"blessed_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"label" : "Blessed Staff +2",
		"materials" : ["blessed_staff_1", "blessed_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500
		},
		"effects" : ["On Use: Summons an angel"],
		"id" : "I0AR"
	},
	"archangel_judgement_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"label" : "Archangel's Judgement +3",
		"materials" : ["archangel_judgement_2", "archangel_judgement", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 8000
		},
		"effects" : ["Each attack has a 20% chance to deal 80000 + STR x40 bonus damage"],
		"id" : "I0CI"
	},
	"archangel_gauntlets_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"label" : "Archangel's Gauntlets +3",
		"materials" : ["archangel_gauntlets_2", "archangel_gauntlets", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"damage_increase" : 130,
			"damage_taken" : 37
		},
		"id" : "I0CC"
	},
	"angelic_life_sword_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"label" : "Angelic Sword of Life +3",
		"materials" : ["angelic_life_sword_2", "angelic_life_sword", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 8000,
			"hp" : 55000
		},
		"effects" : ["Every 10 attacks will recover STR x6.7 HP", "Every 6 spells will recover STR x6.7 HP", "On Use: Restores STR x8.7 HP (120s cooldown)"],
		"id" : "I0AJ"
	},
	"excalibur_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"label" : "Excalibur +3",
		"materials" : ["excalibur_2", "excalibur", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000
		},
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 420000 + (Strength + Agility + Intelligence) x280 (120s cooldown)"],
		"id" : "I09G"
	},
	"archangel_dagger_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"label" : "Archangel's Dagger +3",
		"materials" : ["archangel_dagger_2", "archangel_dagger", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"attack_speed" : 200
		},
		"effects" : ["Each attack has a 18% chance to deal 75000 + AGI x35 bonus damage"],
		"id" : "I098"
	},
	"archangel_blade_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"label" : "Archangel's Blade +3",
		"materials" : ["archangel_blade_2", "archangel_blade", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"damage_increase" : 70
		},
		"id" : "I092"
	},
	"archangel_mana_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"label" : "Archangel's Mana Staff +3",
		"materials" : ["archangel_mana_staff_2", "archangel_mana_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"mp" : 36000
		},
		"effects" : ["Generates Bonus Damage based on maximum mana (4.9% per 10,000) <br/> Consumes 4% of maximum mana per cast <br/> This passive will not work if below 10% maximum mana"],
		"id" : "I0AG"
	},
	"archangel_life_bow_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"label" : "Angelic Bow of Life +3",
		"materials" : ["archangel_life_bow_2", "archangel_life_bow", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"hp" : 55000
		},
		"effects" : ["Every 10 attacks will recover AGI x6.7 HP", "Every 6 spells will recover AGI x6.7 HP", "On Use: Restores AGI x8.7 HP (120s cooldown)"],
		"id" : "I0AM"
	},
	"archangel_life_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"label" : "Archangel's Life Staff +3",
		"materials" : ["archangel_life_staff_2", "archangel_life_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 7500,
			"hp" : 55000
		},
		"effects" : ["Every 4 spells will recover INT x7.5 HP", "On Use: Restore INT x8.7 HP of all allies within range(80s cooldown)"],
		"id" : "I0AP"
	},
	"archangel_sword_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"label" : "Archangel's Sword +3",
		"materials" : ["archangel_sword_2", "archangel_sword", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 300000,
			"str" : 6700,
			"agi" : 6700
		},
		"effects" : ["Each attack has a 13% chance to deal 70000 + (STR + AGI) x19.5 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x135 damage (80s cooldown)"],
		"id" : "I09C"
	},
	"archangel_battle_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"label" : "Archangel's Battle Staff +3",
		"materials" : ["archangel_battle_staff_2", "archangel_battle_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 300000,
			"str" : 6700,
			"int" : 6700
		},
		"effects" : ["Each spell has a 20% chance to deal 80000 + (STR + INT) x26 bonus damage"],
		"id" : "I09S"
	},
	"archangel_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"label" : "Archangel's Staff +3",
		"materials" : ["archangel_staff_2", "archangel_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000
		},
		"effects" : ["Each spell has a 24% chance to deal 80000 + (INT) x53 bonus damage"],
		"id" : "I09O"
	},
	"archangel_glaive_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"label" : "Archangel's Glaive +3",
		"materials" : ["archangel_glaive_2", "archangel_glaive", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 8000
		},
		"effects" : ["On Use: Causes an explosion, dealing 700000 + STR x300 damage (45s cooldown)"],
		"id" : "I09K"
	},
	"archangel_light_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"label" : "Archangel's Light Staff +3",
		"materials" : ["archangel_light_staff_2", "archangel_light_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"damage_increase" : 37
		},
		"effects" : ["Increases nearby allies damage by 37%"],
		"id" : "I0C2"
	},
	"blessed_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"label" : "Blessed Staff +3",
		"materials" : ["blessed_staff_2", "blessed_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000
		},
		"effects" : ["On Use: Summons an angel"],
		"id" : "I0C4"
	},
	"archangel_amber_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"label" : "Archangel's Amber Staff +3",
		"materials" : ["archangel_amber_staff_2", "archangel_amber_staff", "superlative_aggregate_energy", "superlative_aggregate_energy", "superlative_aggregate_energy", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"damage_increase" : 70
		},
		"id" : "I0C8"
	},
	"lower_aggregate_energy" : {
	  	"type" : "material",
	  	"color" : "black",
	  	"label" : "Lower Aggregate Energy",
	  	"page" : 1,
	  	"materials" : ["destruction_essence", "insanity_essence", "heaven_sigil", "elemental_spirit"],
	  	"id" : "I0A7"
	},
	"intermediate_aggregate_energy" : {
	  	"type" : "material",
	  	"color" : "black",
	  	"label" : "Intermediate Aggregate Energy",
	  	"page" : 1,
	  	"materials" : ["lower_aggregate_energy", "mastermind_token", "waterstone_fragment"],
	  	"id" : "I0A8"
	},
	"greater_aggregate_energy" : {
	  	"type" : "material",
	  	"color" : "black",
	  	"label" : "Greater Aggregate Energy",
	  	"page" : 1,
	  	"materials" : ["intermediate_aggregate_energy", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
	  	"id" : "I0A9"
	},	
	"superlative_aggregate_energy" : {
	  	"type" : "material",
	  	"color" : "black",
	  	"label" : "Superlative Aggregate Energy",
	  	"page" : 1,
	  	"materials" : ["greater_aggregate_energy", "archangel_sigil"],
	  	"id" : "I0AA"
	},	
	"beresa_horn" : {
		"type" : "helmet",
		"color" : "orange",
		"label" : "Beresa's Horn",
		"raid" : "Beresa of the Black Earth",
    "chest" : "Archangel Treasure Piece",
		"stats" : {
			"armor" : 500,
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"damage_increase" : 17
		},
		"id" : "I04D",
		"chances" : [2.2, 7.36]
	},
	"beresa_sword" : {
		"type" : "weapon",
		"color" : "blue",
		"label" : "Beresa’s Sword",
		"raid" : "Beresa of the Black Earth",
    "chest" : "Archangel Treasure Piece",
		"stats" : {
			"atk" : 160000,
			"str" : 5000
		},
		"effects" : ["On Use: Deals 200000 + STR x100 aoe dmg per pillar for a total of 8 pillars in a clockwise motion)(Cooldown: 180 seconds)"],
		"id" : "I04C",
		"chances" : [0.2, 1.75]
	},
	"demonic_leather_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"label" : "Demonic Leather Helm",
		"raid" : "Devil Lord Hellgainer",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"damage_increase" : 20,
			"damage_taken" : 10
		},
		"id" : "I06V",
		"chances" : 5
	},
	"heavenly_wisdom_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"label" : "Helm of Heavenly Wisdom",
		"raid" : "Celestial Waterstone",
		"stats" : {
			"armor" : 300,
			"int" : 1000,
			"mp" : 5000
		},
		"effects" : ["Restore 40% of maximum MP on use (180s cooldown)"],
		"id" : "I06G",
		"chances" : 5
	},
	"approval_enhanced_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"label" : "Enhanced Ring of Approval",
		"boss" : "Revenant of Meditation",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"damage_increase" : 12
		},
		"id" : "I043" ,
		"chances" : 10
	},
	"elderwood_armor" : {
		"type" : "armor",
		"color" : "orange",
		"label" : "Elderwood Armor",
		"raid" : "Mother Tree",
    "chest" : "Archangel Treasure Piece",
		"stats" : {
			"armor" : 600,
			"str" : 1800,
			"agi" : 1800,
			"int" : 1800,
			"hp" : 15000,
			"hp_regen_percent" : 1.5
		},
		"id" : "I082",
		"chances" : [2.2, 7.36]
	},
	"approval_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"label" : "Ring of Approval",
		"boss" : "Revenant of Meditation",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"hp" : 3000,
			"mp" : 2000,
			"movement_speed" : 150
		},
		"id" : "I03K",
		"chances" : 10
	},
	"approval_wings" : {
		"type" : "artifact",
		"color" : "purple",
		"label" : "Wings of Approval",
		"boss" : "Revenant of Meditation",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
		"id" : "I04W",
		"chances" : 10
	},
	"agile_dagger" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Agile Dagger",
		"boss" : "Silverback Wolf",
		"stats" : {
			"atk" : 28000,
			"agi" : 1000
		},
		"id" : "I03Y",
		"chances" : 10
	},
	"power_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Sword of Power",
		"boss" : "Silverback Wolf",
		"stats" : {
			"atk" : 25000,
			"str" : 1000
		},
		"id" : "I03E",
		"chances" : 10
	},
	"intelligence_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Sword of Intelligence",
		"boss" : "Silverback Wolf",
		"stats" : {
			"atk" : 20000,
			"int" : 1300
		},
		"id" : "I05U",
		"chances" : 10
	},
	"approval_armor" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Armor of Approval",
		"boss" : "Dwarven Siege Machine",
		"stats" : {
			"armor" : 400,
			"str" : 500,
			"hp" : 6000
		},
		"id" : "I05V",
		"chances" : 10
	},
	"leather_approval_armor" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Leather Armor of Approval",
		"boss" : "Dwarven Siege Machine",
		"stats" : {
			"armor" : 300,
			"agi" : 500,
			"damage_increase" : 8
		},
		"id" : "I04M",
		"chances" : 10
	},
	"approval_robes" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Robes of Approval",
		"boss" : "Dwarven Siege Machine",
		"stats" : {
			"armor" : 250,
			"int" : 700,
			"mp" : 4000
		},
		"id" : "I040",
		"chances" : 10
	},
	"destroyer_axe" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Destroyer's Axe",
		"raid" : "Destroyer",
		"stats" : {
			"atk" : 25000,
			"str" : 1700
		},
		"effects" : ["On use: Deals 50000 + STR x8 aoe damage and stuns  (120s cooldown)"],
		"id" : "I03A",
		"chances" : 6
	},
	"colloseum_armor" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "The Colosseum Armor",
		"raid" : "Destroyer",
		"stats" : {
			"armor" : 600,
			"str" : 1000
		},
		"effects" : ["On use, recover 15000 HP (120s cooldown)"],
		"id" : "I041",
		"chances" : 6
	},
	"archwizard_robe" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Arc’s Wizard Robe",
		"raid" : "Destroyer",
		"stats" : {
			"armor" : 400,
			"int" : 1000,
			"damage_increase" : 10
		},
		"id" : "I03I",
		"chances" : 6
	},
	"knight_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"label" : "Knight's Helm",
		"raid" : "Destroyer",
		"stats" : {
			"armor" : 300,
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_increase" : 10
		},
		"effects" : ["On Use: Grants a 5 second anti magic shield (200s cooldown)"],
		"id" : "I04Y",
		"chances" : 6
	},
	"bloodied_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Bloodied Staff",
		"raid" : "Destroyer",
		"stats" : {
			"atk" : 10000,
			"int" : 2000
		},
		"effects" : ["On use: grants 700 intelligence for 10 seconds (120s cooldown)"],
		"id" : "I03D",
		"chances" : 6
	},
	"destruction_essence" : {
		"type" : "material",
		"color" : "black",
		"label" : "Essence of Destruction",
		"raid" : "Destroyer",
		"id" : "I034",
		"chances" : 5.5
	},
	"insanity_leather_armor" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Insanity's Leather Armor",
		"raid" : "Avatar of Insanity",
		"stats" : {
			"armor" : 400,
			"agi" : 1000,
			"hp" : 6000
		},
		"id" : "I03J",
		"chances" : 6
	},
	"insanity_dagger" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Insanity's Dagger",
		"raid" : "Avatar of Insanity",
		"stats" : {
			"atk" : 25000,
			"agi" : 1500,
			"attack_speed" : 80
		},
		"id" : "I03Z",
		"chances" : 6
	},
	"swiftness_boots" : {
		"type" : "artifact",
		"color" : "purple",
		"label" : "Boots of Swiftness",
		"raid" : "Avatar of Insanity",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"movement_speed" : 150,
			"attack_speed" : 50
		},
		"id" : "I03P",
		"chances" : 6
	},
	"insanity_helmet" : {
		"type" : "helmet",
		"color" : "purple",
		"label" : "Insanity's Helmet",
		"raid" : "Avatar of Insanity",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_increase" : 10
		},
		"id" : "I046",
		"chances" : 5.5
	},
	"insanity_essence" : {
		"type" : "material",
		"color" : "black",
		"label" : "Essence of Insanity",
		"raid" : "Avatar of Insanity",
		"id" : "I05Y",
		"chances" : 5.5
	},
	"nature_armor" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Armor of Nature",
		"raid" : "Elemental Treant",
		"stats" : {
			"armor" : 400,
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"hp" : 5000,
			"max_health" : 10
		},
		"id" : "I062",
		"chances" : 5.5
	},
	"elemental_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Staff of the Elemental",
		"raid" : "Elemental Treant",
		"stats" : {
			"atk" : 30000,
			"int" : 1600
		},
		"effects" : ["Recover INT x3 HP (60s cooldown)"],
		"id" : "I064",
		"chances" : 5.5
	},
	"elemental_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Sword of the Elemental",
		"raid" : "Elemental Treant",
		"stats" : {
			"atk" : 30000,
			"str" : 1600
		},
		"effects" : ["Recover STR x3 HP (60s cooldown)"],
		"id" : "I061",
		"chances" : 5.5
	},
	"spirit_bow" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Spirit Bow",
		"raid" : "Elemental Treant",
		"stats" : {
			"atk" : 30000,
			"agi" : 1600
		},
		"effects" : ["Recover AGI x3 HP (60s cooldown)"],
		"id" : "I063",
		"chances" : 5.5
	},
	"mother_tree_leaves" : {
		"type" : "accessory",
		"color" : "purple",
		"label" : "Leaves of the mother tree",
		"raid" : "Elemental Treant",
		"stats" : {
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"movement_speed" : 150,
			"magic_resistance" : 15
		},
		"id" : "I03M",
		"chances" : 5.5
	},
	"elemental_spirit" : {
		"type" : "material",
		"color" : "black",
		"label" : "Elemental Spirit",
		"raid" : "Elemental Treant",
		"id" : "I065",
		"chances" : 5.5
	},
	"light_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Sword of Light",
		"raid" : "Heaven's Guardian",
		"stats" : {
			"atk" : 45000,
			"str" : 1600,
			"agi" : 1600,
			"int" : 1600
		},
		"effects" : ["Adds an additional 5000 damage to attacks"],
		"id" : "I067",
		"chances" : 5.5
	},
	"light_barrier" : {
		"type" : "artifact",
		"color" : "purple",
		"label" : "Barrier of Light",
		"raid" : "Heaven's Guardian",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"hp" : 5000
		},
		"effects" : ["Generate a shield every 10 seconds that blocks up to 5000 damage"],
		"id" : "I068",
		"chances" : 4
	},
	"light_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"label" : "Helm of Light",
		"raid" : "Heaven's Guardian",
		"stats" : {
			"armor" : 400,
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_taken" : -5
		},
		"id" : "I069",
		"chances" : 5.5
	},
	"caliburn" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Caliburn",
		"raid" : "Heaven's Guardian",
		"stats" : {
			"atk" : 60000,
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000
		},
		"effects" : ["On Use: Deals 100000 + (STR + AGI + INT) x100 aoe dmg and stuns all enemies around user (180s cooldown)"],
		"id" : "I066",
		"chances" : 1
	},
	"heaven_sigil" : {
		"type" : "material",
		"color" : "black",
		"label" : "Heaven Sigil",
		"raid" : "Heaven's Guardian",
		"id" : "I06A",
		"chances" : 5.5
	},
	"waterstone_fragment" : {
		"type" : "material",
		"color" : "black",
		"label" : "Waterstone Fragment",
		"raid" : "Celestial Waterstone",
		"id" : "I06I",
		"chances" : 5
	},
	"waterstone_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"label" : "Waterstone Ring",
		"raid" : "Celestial Waterstone",
		"stats" : {
			"str" : 1000,
			"agi" : 1000,
			"int" : 1000,
			"hp" : 6000,
			"damage_taken" : -10
		},
		"id" : "I06F",
		"chances" : 5
	},
	"helgainer_inner_wings" : {
		"type" : "artifact",
		"color" : "orange",
		"label" : "Helgainer’s Inner Wing",
		"raid" : "Devil Lord Hellgainer",
    "chest" : "Archangel Treasure Piece",
    "stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"damage_increase" : 12
		},
		"effects" : ["Passive: An aura that causes nearby enemies to take 12% Bonus Damage (Range 750)"],
		"id" : "I04E",
		"chances" : [0.15, 7.36]
	},
	"helgainer_claw" : {
		"type" : "weapon",
		"color" : "purple",
		"label" : "Helgainer’s Claws",
		"raid" : "Devil Lord Hellgainer",
		"stats" : {
			"atk" : 60000,
			"agi" : 2500,
			"damage_increase" : 27,
			"damage_taken" : 10
		},
		"id" : "I06X",
		"chances" : 5
	},
	"agile_leather_armor" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Agile Leather Armor",
		"raid" : "Devil Lord Hellgainer",
		"stats" : {
			"armor" : 500,
			"agi" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"id" : "I06T",
		"chances" : 5
	},
	"magical_flask" : {
		"type" : "stats",
		"color" : "darkred",
		"label" : "Magical Flask",
		"raid" : "Devil Lord Hellgainer",
		"stats_points" : 8,
		"id" : "I070",
		"chances" : 5
	},
	"agile_armor" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Agile Armor",
		"raid" : "Devil Lord Hellgainer",
		"stats" : {
			"armor" : 600,
			"str" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"id" : "I051",
		"chances" : 5
	},
	"nimble_robe" : {
		"type" : "armor",
		"color" : "purple",
		"label" : "Nimble Robe",
		"raid" : "Celestial Waterstone",
		"stats" : {
			"armor" : 400,
			"str" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"id" : "I0B6",
		"chances" : 5
	},
	"celestial_water" : {
		"type" : "stats",
		"color" : "darkred",
		"label" : "Celestial Water",
		"raid" : "Celestial Waterstone",
		"id" : "I06J",
		"stats_points" : 8,
		"chances" : 10
	},
	"mastermind_token" : {
		"type" : "material",
		"color" : "black",
		"label" : "Mastermind Token",
		"raid" : "Devil Lord Hellgainer",
		"id" : "I06Z",
		"chances" : 5		
	},
	"gloomy_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"label" : "Gloomy Staff",
		"raid" : "Beresa of the Black Earth",
		"stats" : {
			"atk" : 100000,
			"int" : 3300,
			"damage_increase" : 16
		},
		"effects" : ["Emits an aura that adds 16% addtional damage"],
		"id" : "I07C",
		"chances" : 2.2		
	},
	"black_earth" : {
		"type" : "stats",
		"color" : "darkred",
		"label" : "Black Earth",
		"raid" : "Beresa of the Black Earth",
    "chest" : "Archangel Treasure Piece",
		"stats_points" : 12,
		"id" : "I077",
		"chances" : [13, 7.36]
	},
	"black_clay_powder" : {
		"type" : "material",
		"color" : "black",
		"label" : "Black Clay Powder",
		"raid" : "Beresa of the Black Earth",
		"id" : "I04H",
		"chances" : 5
	},
	"dragon_meat" : {
		"type" : "stats",
		"color" : "darkred",
		"label" : "Dragon Meat",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Piece",
		"stats_points" : 12,
		"id" : "I07M",
		"chances" : [13, 7.36]		
	},
	"mana_storm_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"label" : "Mana Storm Staff",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Piece",
		"stats" : {
			"atk" : 100000,
			"int" : 3300,
			"mp" : 15000
		},
		"effects" : ["Generates Bonus Damage based on maximum mana (2.8% per 10,000) <br/> Consumes 5% of maximum mana per cast <br/> This passive will not work if below 10% maximum mana"],
		"id" : "I07O",
		"chances" : [2.2, 7.36]		
	},
	"dragon_slayer_mark" : {
		"type" : "material",
		"color" : "black",
		"label" : "Crystallized Dragon Eye",
		"raid" : "Blue Dragon",
		"id" : "I07K",
		"chances" : 5		
	},
	"dragon_heart" : {
		"type" : "accessory",
		"color" : "orange",
		"label" : "Dragon Heart",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Piece",
    "stats" : {
      "str" : 2500,
      "hp" : 30000
    },
    "effects" : ["Recovers 30% of maximum HP every 28 seconds"],
		"id" : "I07G",
		"chances" : [2.2, 7.36]
	},
	"mana_heart" : {
		"type" : "accessory",
		"color" : "orange",
		"label" : "Heart of Mana",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Piece",
    "stats" : {
      "int" : 2700,
      "mp" : 30000
    },
    "effects" : ["Recovers 30% of maximum mana every 28 seconds"],
		"id" : "I045",
		"chances" : [2.2, 7.36]
	},
	"dragon_wings" : {
		"type" : "artifact",
		"color" : "blue",
		"label" : "Blue Dragon’s Wings",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Piece",
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"enemy_armor" : -25,
			"enemy_speed" : -100,
			"movement_speed" : 40
		},		
		"id" : "I07F",
		"chances" : [0.2, 1.75],
		"effects" : ["Freeze nearby enemies on use, dealing 200000 + (STR + AGI + INT) x70 (120s cooldown)", "Allies have 40% movement speed increased"]
	},
	"angel_wings" : {
		"type" : "artifact",
		"color" : "orange",
		"label" : "Angel Wings",
		"raid" : "Celestial Waterstone",
    "chest" : "Archangel Treasure Piece",
		"stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"hp" : 10000
		},
		"effects" : ["When HP is below 40%, any damage taken will restore 30% of MAX HP", "On use restore 8% of MAX HP every second for 10 seconds (Cooldown: 120 seconds)"],
		"id" : "I0BD",
		"chances" : [0.15, 7.36]
	},
	"mother_tree_bark" : {
		"type" : "material",
		"color" : "black",
		"label" : "Mother Tree Bark",
		"raid" : "Mother Tree",
		"id" : "I07X",
		"chances" : 5		
	},
	"tea_leaves" : {
		"type" : "stats",
		"color" : "darkred",
		"label" : "Tea Leaves",
		"raid" : "Mother Tree",
    "chest" : "Archangel Treasure Piece",
		"stats_points" : 8,
		"id" : "I087",
		"chances" : [13, 7.36]		
	},
	"waterstone_dirk" : {
		"type" : "weapon",
		"color" : "blue",
		"label" : "Waterstone Dirk",
		"raid" : "Mother Tree",
    "chest" : "Archangel Treasure Piece",
		"stats" : {
			"atk" : 160000,
			"agi" : 5000
		},
		"effects" : ["On use, agility +40% for 20 seconds (120s cooldown)"],
		"id" : "I080",
		"chances" : [0.2, 1.75]
	},
	"life_essence" : {
		"type" : "accessory",
		"color" : "orange",
		"label" : "Essence of Life",
		"raid" : "Mother Tree",
    "chest" : "Archangel Treasure Piece",
		"stats" : {
			"str" : 1700,
			"agi" : 1700,
			"int" : 1700,
			"hp_regen" : 700
		},
		"effects" : ["Allies within range gain HP recovery per second +700. On Use: Recovers (STR + AGI + INT) x2 HP every second for 4 seconds (120s cooldown)"],
		"id" : "I081",
		"chances" : [2.2, 7.36]
	},
  "god_essence" : {
    "type" : "material",
    "color" : "black",
    "label" : "God Essence",
    "chest" : "Archangel’s Treasure Chest",
    "id" : "I0AQ",
    "chances" : 10
  },
  "archangel_assistance" : {
    "type" : "chest",
    "color" : "black",
    "label" : "Archangel’s Assistance",
    "chest" : "Archangel’s Treasure Chest",
    "effects" : ["Drops an artifact or auxiliary Myth item + Archangel Treasure Piece"],
    "id" : "I0A6",
    "chances" : 7
  },
  "archangel_trinket" : {
    "type" : "chest",
    "color" : "black",
    "label" : "Archangel’s Trinket",
    "chest" : "Archangel’s Treasure Chest",
    "id" : "I0BU",
    "effects" : ["Drops an artifact or auxiliary Myth item + Archangel Treasure Piece"],
    "chances" : 5
  },
  "archangel_treasure_chest" : {
     "type" : "chest",
     "color" : "black",
     "label" : "Archangel’s Treasure Chest",
    "raid" : "Archangel of Valor",
    "id" : "I0AB",
    "chances": 100
  },
  "archangel_sigil" : {
    "type" : "material",
    "color" : "black",
    "label" : "Archangel’s Sigil",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "raid" : "Archangel Treasure Piece",
    "id" : "I0AC",
    "chances" : 1.75
  },
  "archangel_treasure_piece" : {
    "type" : "material",
    "color" : "black",
    "label" : "Archangel Treasure Piece",
    "chest" : ["Archangel’s Trinket", "Archangel’s Assistance"],
    "effects" : ["Requires at least 3500 base stats for archangel drop"],
    "id" : "I0AB",
    "chances" : [100, 100]
  },
  "archangel_essence" : {
  	"type" : "stats",
  	"color" : "darkred",
  	"label" : "Archangel Essence",
  	"raid" : "Archangel of Valor",
  	"id" : "I0AD",
    "effects" : ["Requires at least 3500 base stats for archangel drop"],
  	"chances" : 100,
    "stats_points" : 17
  },
  "mana_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Mana Rune",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "mp" : 8500
    },
    "id" : "I0A3",
    "chances" : 9.09
  },
  "archangel_mana_potion" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Archangel’s Mana Potion",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700
    },  
    "effects" : ["On Use: Restore 35% of maximum mana (30s cooldown)"],
    "id" : "I09Z",
    "chances" : 9.09
  },
  "archangel_potion" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Archangel’s Potion",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700
    },  
    "effects" : ["On Use: Restore 30% of health (30s cooldown)"],
    "id" : "I03C",
    "chances" : 9.09
  },
  "life_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Life Rune",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "hp" : 15000
    },
    "id" : "I0A2",
    "chances" : 9.09
  },
  "archangel_ascent" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Archangel’s Ascent",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "movement_speed" : 150,
      "attack_speed" : 50
    },
    "id" : "I0A1",
    "chances" : 9.09
  },
  "magic_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Magic Rune",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "damage_increase" : 13
    },
    "id" : "I0A0",
    "chances" : 9.09
  },
  "dazzling_light_wings" : {
    "type" : "artifact",
    "color" : "red",
    "label" : "Dazzling Light Wings",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 2800,
      "agi" : 2800,
      "int" : 2800,
      "damage_increase" : 22
    },
    "effects" : ["Enemies within range take 22% Additional Damage"],
    "id" : "I0BP",
    "chances" : 9.09
  },
	"valor_wings" : {
		"type" : "artifact",
		"color" : "red",
		"label" : "Wings of Valor",
    	"chest" : "Archangel’s Trinket",
     	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
	   	"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"hp" : 20000
		},
		"effects" : ["When HP is below 40%, any damage taken will restore 30% of MAX HP", "On use restore 16% of MAX HP every second for 10 seconds (Cooldown: 120 seconds)"],
		"id" : "I0BR",
    	"chances" : 9.09
	},
	"archangel_boots" : {
		"type" : "artifact",
		"color" : "red",
		"label" : "Archangel’s Boots",
    	"chest" : "Archangel’s Trinket",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"attack_speed" : 150,
			"movement_speed" : 150
		},
		"effects" : ["On Use: Dash forward (12s cooldown)"],
		"id" : "I0BQ",
    	"chances" : 9.09
	},
	"archangel_barrier" : {
		"type" : "artifact",
		"color" : "red",
		"label" : "Archangel’s Barrier",
    	"chest" : "Archangel’s Trinket",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"hp" : 25000
		},
		"effects" : ["Generate a shield that can block up to 27000 damage every 10 seconds"],
		"id" : "I0BS",
    	"chances" : 9.09
	},
	"justice_wings" : {
		"type" : "artifact",
		"color" : "red",
		"label" : "Wings of Justice",
   		"chest" : "Archangel’s Trinket",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"damage_increase" : 45
		},
		"id" : "I0BT",
   		"chances" : 9.09
	},
	"excalibur" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Excalibur",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000,
			"damage_increase" : 45
		},
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 300000 + (Strength + Agility + Intelligence) x200)(120s cooldown)"],
		"id" : "I09D",
    	"chances" : 6.25
	},  
	"archangel_dagger" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "The Archangel’s Dagger",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
			"attack_speed" : 200
		},
    	"effects" : ["Each attack has a 18% chance to deal 60000 + AGI x23 bonus damage"],
		"id" : "I093",
    	"chances" : 6.25
	},
	"archangel_blade" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "The Archangel’s Blade",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
			"damage_increase" : 55
		},
		"id" : "I08Z",
    	"chances" : 6.25
	},
	"archangel_mana_staff" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Archangel’s Mana Staff",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
			"mp" : 25000
		},
		"effects" : ["Generates Bonus Damage based on maximum mana (4.2% per 10,000) <br/> Consumes 4% of maximum mana per cast <br/> This passive will not work if below 10% maximum mana"],
		"id" : "I0A4",
    	"chances" : 6.25
	},
	"angelic_life_sword" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Angelic Sword of Life",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 6500,
			"hp" : 40000
		},
		"effects" : ["Every 10 attacks will recover STR x5 HP", "Every 6 spells will recover STR x5 HP", "On Use: Restores STR x7 HP (120s cooldown)"],
		"id" : "I09W",
    	"chances" : 6.25
	},
	"archangel_life_bow" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Angelic Bow of Life",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
			"hp" : 40000
		},
		"effects" : ["Every 10 attacks will recover AGI x5 HP", "Every 6 spells will recover AGI x5 HP", "On Use: Restores AGI x7 HP (120s cooldown)"],
		"id" : "I09Y",
    	"chances" : 6.25
	},
	"archangel_life_staff" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Archangel’s Staff of Life",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
			"hp" : 40000
		},
		"effects" : ["Every 4 spells will recover INT x6 HP", "On Use: Restore INT x7 HP of all allies within range(80s cooldown)"],
		"id" : "I09X",
    	"chances" : 6.25
	},
	"archangel_sword" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "The Archangel’s Sword",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 5500,
			"agi" : 5500
		},
		"effects" : ["Each attack has a 13% chance to deal 60000 + (STR + AGI) x12 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) 90 damage (80s cooldown)"],
		"id" : "I099",
    	"chances" : 6.25
	},
	"archangel_battle_staff" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Archangel’s Battle Staff",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 5500,
			"int" : 5500
		},
		"effects" : ["Each spell has a 20% chance to deal 50000 + (STR + INT) x17 bonus damage"],
		"id" : "I09P",
    	"chances" : 6.25
	},
	"archangel_staff" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Archangel’s Staff",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500
		},
		"effects" : ["Each spell has a 24% chance to deal 50000 + (INT) x38 bonus damage"],
		"id" : "I09L",
    	"chances" : 6.25
	},
  	"archangel_glaive" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "The Archangel’s Glaive",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 6500
		},
		"effects" : ["On Use: Causes an explosion, dealing 400000 + STR x200 damage (45s cooldown)"],
		"id" : "I09H",
    	"chances" : 6.25
	},
	"blessed_staff" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Blessed Staff",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500
		},
		"effects" : ["On Use: Summons an angel"],
		"id" : "I0A5",
    	"chances" : 6.25
	},
	"archangel_light_staff" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Archangel’s Light Staff",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
      	"damage_increase" : 27
		},
		"effects" : ["Increases nearby allies damage by 27%"],
		"id" : "I0AS",
    	"chances" : 6.25
	},
	"archangel_amber_staff" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Archangel’s Amber Staff",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
    	  	"damage_increase" : 55
		},
		"id" : "I0C5",
    	"chances" : 6.25
	},
	"archangel_gauntlets" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Archangel’s Gauntlets",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
      		"damage_taken" : 25,
      		"damage_increase" : 75
		},
		"id" : "I0C9",
    	"chances" : 6.25
	},
	"archangel_judgement" : {
		"type" : "weapon",
		"color" : "red",
		"label" : "Archangel’s Judgement",
    	"chest" : "Archangel’s Assistance",
    	"materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 6500
		},
		"effects" : ["Each attack has a 20% chance to deal 50000 + STR x28 bonus damage"],
		"id" : "I0CF",
    	"chances" : 6.25
	},
	"warrior_vitality_potion" : {
		"type" : "auxiliary",
		"color" : "blue",
		"label" : "Warrior’s Vitality Potion",
    	"raid" : "Amon of Hellfire",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
    	"effects" : ["On use, restore 30% of maximum hp (45s cooldown)"],
		"id" : "I0D3",
    	"chances" : [2.2, 9.22]
	},	
	"life_sigil" : {
		"type" : "auxiliary",
		"color" : "blue",
		"label" : "Sigil of Life",
    	"raid" : "Amon of Hellfire",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"hp" : 9000
		},
		"id" : "I0D0",
    	"chances" : [2.2, 9.22]
	},
	"magic_sigil" : {
		"type" : "auxiliary",
		"color" : "blue",
		"label" : "Sigil of Magic",
    	"raid" : "Amon of Hellfire",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_increase" : 8
		},
		"id" : "I0D2",
    	"chances" : [2.2, 9.22]
	},	
	"shadow_spirit_dagger" : {
		"type" : "weapon",
		"color" : "orange",
		"label" : "Dagger of the Shadow Spirit",
    	"raid" : "Amon of Hellfire",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"atk" : 100000,
			"agi" : 3500
		},
		"effects" : ["Consumes 2% of maximum HP for each attack and deals an additional 30000 + Agility x14 damage (Only activates when HP is above 5%)"],
		"id" : "I0D8",
    	"chances" : [2.2, 9.22]
	},
	"hellfire_great_sword" : {
		"type" : "weapon",
		"color" : "orange",
		"label" : "Hellfire Great Sword",
    	"raid" : "Amon of Hellfire",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"atk" : 100000,
			"str" : 3500
		},
		"effects" : ["Deal 20000 + STR x10 damage to nearby enemies every second", "On use: consume 2% of Maximum HP and deals 50000 + STR x20 damage to nearby enemies every second for 30 seconds"],
		"id" : "I0D6",
    	"chances" : [2.2, 9.22]
	},
	"crystallized_fossil" : {
		"type" : "material",
		"color" : "black",
		"label" : "Crystallized Fossil",
    	"raid" : "Amon of Hellfire",
		"id" : "I0CR",
    	"chances" : 2.5
	},	
	"blood_stone" : {
		"type" : "artifact",
		"color" : "blue",
		"label" : "Blood Stone",
    	"raid" : "Amon of Hellfire",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"damage_increase" : 30,
			"hp" : 20000
		},
		"id" : "I0D9",
    	"chances" : [0.2, 3.5]
	},
	"shadow_contract" : {
		"type" : "weapon",
		"color" : "orange",
		"label" : "Shadow Contract",
    	"raid" : "Belial of Pain",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"atk" : 100000,
			"int" : 3500,
			"damage_increase" : 65
		},
		"effects" : ["Each spell consumes 5% of HP and MP (Only activates when above 10% of these thresholds)"],
		"id" : "I0D7",
    	"chances" : [2.2, 9.22]
	},	
	"magician_mana_potion" : {
		"type" : "auxiliary",
		"color" : "blue",
		"label" : "Magician’s Mana Potion",
    	"raid" : "Belial of Pain",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
    	"effects" : ["On use, restore 35% of maximum mana (45s cooldown)"],
		"id" : "I0CZ",
    	"chances" : [2.2, 9.22]
	},
	"mana_sigil" : {
		"type" : "auxiliary",
		"color" : "blue",
		"label" : "Sigil of Mana",
    	"raid" : "Belial of Pain",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"mp" : 5000
		},
		"id" : "I0CY",
    	"chances" : [2.2, 9.22]
	},
	"ferocity_sigil" : {
		"type" : "auxiliary",
		"color" : "blue",
		"label" : "Sigil of Ferocity",
    	"raid" : "Belial of Pain",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"movement_speed" : 50,
			"attack_speed" : 30
		},
		"id" : "I0D1",
    	"chances" : [2.2, 9.22]
	},
	"agony" : {
		"type" : "material",
		"color" : "black",
		"label" : "Agony",
    	"raid" : "Belial of Pain",
		"id" : "I033",
    	"chances" : 2.5
	},
	"chaos_jewel" : {
		"type" : "accessory",
		"color" : "blue",
		"label" : "Jewel of Chaos",
    	"raid" : "Belial of Pain",
    	"chest" : "Black Soul Stone",
		"stats" : {
			"str" : 2500,
			"agi" : 2500,
			"int" : 2500
		},
		"effects" : ["On Use: one of three effects will be used : <br/> -150% Bonus Damage for 15 seconds <br/> -Increase magical defense by 100% and armor by 10000 for 15 seconds <br/> -Cannot use magic for 10 seconds(Cooldown: 120 seconds)"],
		"id" : "I0DB",
    	"chances" : [0.2, 3.5]
	},
	"soul_fragments" : {
	  	"type" : "stats",
	  	"color" : "darkred",
	  	"label" : "Soul Fragments",
	  	"raid" : "Devil of Despair",
	  	"id" : "I036",
	    "effects" : ["Requires at least 3800 base stats for devil drop"],
	  	"chances" : 100,
	    "stats_points" : 18
  	},	
	"black_soul_stone" : {
	    "type" : "chest",
	    "color" : "black",
	    "label" : "Black Soul Stone",
	    "raid" : "Devil of Despair",
	    "effects" : ["Requires at least 3800 base stats for devil drop"],
	    "id" : "I037",
	    "chances" : 100
	},
	"agony_devil_treasure_chest" : {
	    "type" : "chest",
	    "color" : "black",
	    "label" : "Devil of Agony’s Treasure Chest",
	    "chest" : "Black Soul Stone",
	    "effects" : ["Drops an accessory or helmet Myth item"],
	    "id" : "I035",
	    "chances" : 5
	},  
	"archdemon_remmants" : {
	    "type" : "chest",
	    "color" : "black",
	    "label" : "Remnants of the Archdemon",
	    "chest" : "Black Soul Stone",
	    "effects" : ["Drops an armor Mythic item"],
	    "id" : "I0DS",
	    "chances" : 5
	},
	"devil_soul_scripture" : {
	    "type" : "material",
	    "color" : "black",
	    "label" : "The Devil’s Soul Scripture",
	    "chest" : ["Devil of Agony’s Treasure Chest", "Remnants of the Archdemon"],
	    "id" : "I0DT",
	    "chances" : [100, 100]
	},
	"devil_shadow_jewel" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Devil’s Shadow Jewel",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"hp" : 40000,
	    	"mp" : 25000,
	    	"movement_speed" : 200,
	    	"hp_regen" : 2000
	    },
	    "id" : "I0DR",
	    "chances" : 10
	},
	"devil_soulstone" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Devil’s Soulstone",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"int" : 4600,
	    	"mp" : 50000
	    },
	    "effects" : ["Recover 50% of maximum MP every 28 seconds"],
	    "id" : "I0DP",
	    "chances" : 10
	},
	"devil_heart" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Heart of the Devil",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"str" : 4600,
	    	"hp" : 50000
	    },
	    "effects" : ["Recover 50% of maximum HP every 28 seconds"],
	    "id" : "I0DO",
	    "chances" : 10
	},
	"archdemon_soul_ring" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Archdemon’s Soul Ring",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"damage_increase" : 30
	    },
	    "effects" : ["On Use: Provides 80% bonus damage for 15 seconds (120s cooldown)"],
	    "id" : "I0DN",
	    "chances" : 10
	},
	"ferocity_soul_ring" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Ferocity’s Soul Ring",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"damage_increase" : 50
	    },
	    "id" : "I0DQ",
	    "chances" : 10
	},
	"corrupted_mana_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Corrupted Mana Robes",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"mp" : 35000
	    },
		"effects" : ["On use: consumes 30% of max mana and creates a shield that blocks max man x2.4 for 50 seconds (75s cooldown). Does not stack"],
	    "id" : "I0DM",
	    "chances" : 9.09
	},
	"malevolent_flame_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Malevolent Flame Armor",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"hp" : 30000,
	    	"hp_regen" : -1500
	    },
		"effects" : ["Deal 20000 + STR x16 damage to all enemies around user per second"],
	    "id" : "I0DK",
	    "chances" : 9.09
	},
	"archdemon_life_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Arch Demon’s Life Armor",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 3800,
	    	"agi" : 3800,
	    	"int" : 3800,
	    	"hp" : 30000,
	    	"max_health" : 35
	    },
	    "id" : "I0DJ",
	    "chances" : 9.09
	},
	"demonic_soul_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Demonic Soul Armor",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "id" : "I0DE",
	    "chances" : 9.09
	},
	"demonic_amber_vest" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Demonic Amber Vest",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 1100,
	    	"agi" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "id" : "I0DF",
	    "chances" : 9.09
	},
	"demonic_amber_robe" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Demonic Amber Robe",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "id" : "I0DD",
	    "chances" : 9.09
	},
	"regenerative_malevolent_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Regenerative Malevolent Armor",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 3800,
	    	"agi" : 3800,
	    	"int" : 3800,
	    	"hp" : 30000,
	    	"hp_regen_percent" : 2.7
	    },
	    "id" : "I0DC",
	    "chances" : 9.09
	},
	"malevolent_flame_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Malevolent Flame Robes",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"damage_taken" : 10,
	    	"damage_increase" : 65
	    },
	    "id" : "I0DL",
	    "chances" : 9.09
	},
	"exalted_soul_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Exalted Soul Armor",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"hp" : 35000,
	    	"damage_taken" : -24
	    },
	    "id" : "I0DG",
	    "chances" : 9.09
	},
	"exalted_soul_vest" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Exalted Soul Vest",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 1100,
	    	"agi" : 4600,
	    	"hp" : 35000,
	    	"damage_taken" : -24
	    },
	    "id" : "I0DH",
	    "chances" : 9.09
	},
	"exalted_soul_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Exalted Soul Robes",
	    "chest" : "Remnants of the Archdemon",
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 4600,
	    	"hp" : 35000,
	    	"damage_taken" : -24
	    },
	    "id" : "I0DI",
	    "chances" : 9.09
    },
    "red_magus_helmet" : {
    	"type" : "helmet",
    	"color" : "blue",
    	"label" : "Helmet of the Red Magus",
    	"materials" : ["dragon_leather_helm", "agony","crystallized_fossil"],
    	"stats" :{
    		"armor" : 700,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300,
	    	"damage_taken" : -18
    	},
    	"id" : "I0CT"
    },
    "hades_helm" : {
    	"type" : "helmet",
    	"color" : "blue",
    	"label" : "Hades Helm",
    	"materials" : ["dragonic_helmet","agony","crystallized_fossil"],
    	"stats" :{
    		"armor" : 700,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300
    	},
    	"effects" : ["On Use: Grants an anti magic shield for 10 seconds(140s cooldown)"],
    	"id" : "I0CU"
    },
	"forbidden_wisdom" : {
        "type" : "helmet",
	    "color" : "blue",
	    "label" : "Forbidden Wisdom",
	    "materials" : ["wise_foresight","agony","crystallized_fossil"],
	    "stats" : {
	    	"armor" : 500,
	    	"mp" : 15000,
	    	"int" : 2000
	    },
	    "effects" : ["On Use: Restore 80% of Maximum MP (120s cooldown)"],
	    "id" : "I0CV"
   
	},
	"arch_demon_horn" : {
        "type" : "helmet",
	    "color" : "blue",
	    "label" : "Arch Demon’s Horn",
	    "materials" : ["demonic_sovereign_horn","agony","crystallized_fossil"],
	    "stats" : {
	    	"armor" : 500,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300,
	    	"damage_increase" : 50,
	    	"damage_taken" : 15	
	    },
	    "id" : "I0CW"
	 },
	"surging_flame_helmet" : {
        "type" : "helmet",
	    "color" : "blue",
	    "label" : "Helmet of Surging Flame",
	    "materials" : ["black_earth_helmet","agony","crystallized_fossil"],
	    "stats" : {
	    	"armor" : 700,
	    	"str" :1300,
	    	"agi" :1300,
	    	"int" :1300,
	    	"damage_increase" :25
	    },
	    "id" : "I0CX"
	 },
	 "war_god_banner" : {
        "type" : "artifact",
	    "color" : "blue",
	    "label" : "War God’s Banner",
	    "stats" : {
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000		
	    },
	    "effects" : ["On Use: within 1000 range for 15s <br/> Recover 3% of Maximum HP every second <br/> Provide 35% Bonus damage and 100% attack speed <br/> Item cannot be removed 120s after using (120s cooldown)"],
	    "id" : "I0DA",
	    "disabled" : true
	},
	"otherwordly_insight" : {
        "type" : "helmet",
	    "color" : "red",
	    "label" : "Otherworldly Insight",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"armor" : 600,
	    	"mp" : 20000,
	    	"int" :2500
	    },
	    "effects" : ["Recover 100% of maximum MP on use (120s cooldown)"],
	    "id" : "I038",
	    "chances" : 10
	},
	 "darkfire_greatsword" : {
        "type" : "weapon",
	    "color" : "blue",
	    "label" : "Darkfire Greatsword",
	    "materials" :["hellfire_great_sword","black_clay_powder","agony","crystallized_fossil"],
	    "stats" : {
	    	"str" :5000,
	    	"atk" :160000
	    			
	    },
	    "effects" : ["Deal 20000 + STR x13 damage to nearby enemies every second", "On use: consume 2% of Maximum HP and deals 60000 + STR x25 damage to nearby enemies every second for 30 seconds"],
	    "id" : "I039"
	},
	"soul_contract" : {
		"type" : "weapon",
		"color" : "blue",
		"label" : "Soul Contract",
		"materials" :["shadow_contract","black_clay_powder","agony","crystallized_fossil"],
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"damage_increase" : 85
		},
		"effects" : ["Each spell consumes 5% of HP and MP (Only activates when above 10% of these thresholds)"],
		"id" : "I047"
	},	
	"malevolent_devil_dagger" : {
		"type" : "weapon",
		"color" : "blue",
		"label" : "Dagger of the Malevolent Devil",
    	"materials" : ["shadow_spirit_dagger","black_clay_powder","agony","crystallized_fossil"],
		"stats" : {
			"atk" : 160000,
			"agi" : 5000
		},
		"effects" : ["Consumes 2% of maximum HP for each attack and deals an additional 30000 + Agility x18 damage (Only activates when HP is above 5%)"],
		"id" : "I04F"
	},
	"great_devil_shadow" : {
        "type" : "helmet",
	    "color" : "red",
	    "label" : "Great Devil’s Shadow",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_increase" :35
	    },
	    "id" : "I04T",
	    "chances" : 10
	},
	"great_devil_skull" : {
        "type" : "helmet",
	    "color" : "red",
	    "label" : "Great Devil’s Skull",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_taken" :-21
	    },
	    "id" : "I04G",
	    "chances" : 10
	},
	"great_devil_helmet" : {
        "type" : "helmet",
	    "color" : "red",
	    "label" : "Great Devil’s Helmet",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000
	    },
	    "effects" :["Anti magic shield for 10 seconds(110s cooldown)"],
	    "id" : "I0DW",
	    "chances" : 10
	},
	"great_devil_horn" : {
        "type" : "helmet",
	    "color" : "red",
	    "label" : "Great Devil’s Horn",
	    "chest" : "Devil of Agony’s Treasure Chest",
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_increase" :65,
	    	"damage_taken" :15
	    },
	    "id" : "I0DX",
	    "chances" : 10
	},
	"boundless_twilight" : {
	    "type" : "material",
	    "color" : "black",
	    "chest" : "Remnants of the Archdemon",
	    "label" : "Boundless Twilight",
	    "id" : "I0DY",
	    "chances" : 1
	},
	"chaotic_blight_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Blight Robes",
	    "materials" : ["corrupted_mana_robes","refined_mana_robe","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 5500,
	    	"mp" : 40000
	    },
		"effects" : ["On use: consumes 30% of max mana and creates a shield that blocks max man x2.5 for 50 seconds (75s cooldown). Does not stack"],
	    "id" : "I0DZ"
	},
	"chaotic_infernal_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Infernal Armor",
	    "materials" : ["malevolent_flame_armor","hellfire_armor","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"hp" : 35000,
	    	"hp_regen" : -2000
	    },
		"effects" : ["Deal damage every second(proportional to strength)"],
	    "id" : "I0E0"
	},
	"chaotic_vigor_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Vigor Armor",
	    "materials" : ["archdemon_life_armor","gaia_armor","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 4400,
	    	"agi" : 4400,
	    	"int" : 4400,
	    	"hp" : 40000,
	    	"max_health" : 38
	    },
	    "id" : "I0E1"
	},
	"chaotic_bright_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Bright Armor",
	    "materials" : ["demonic_soul_armor","armor_of_wind","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "id" : "I0E2"
	},
	"chaotic_bright_greaves" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Bright Greaves",
	    "materials" : ["demonic_amber_vest","wind_leather_armor","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1300,
	    	"agi" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "id" : "I0E3"
	},
	"chaotic_bright_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Bright Robes",
	    "materials" : ["demonic_amber_robe","aqua_robes","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1300,
	    	"int" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "id" : "I0E4"
	},
	"chaotic_armor_of_rejuvenation" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Armor of Rejuvenation",
	    "materials" : ["regenerative_malevolent_armor","waterstone_armor","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1100,
	    	"str" : 4400,
	    	"agi" : 4400,
	    	"int" : 4400,
	    	"hp" : 30000,
	    	"hp_regen_percent" : 3
	    },
	    "id" : "I0E5"
	},
	"chaotic_amplifying_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Amplifying Robes",
	    "materials" : ["malevolent_flame_robes","hellfire_robe","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 100,
	    	"int" : 5500,
	    	"damage_taken" : 12,
	    	"damage_increase" : 75
	    },
	    "id" : "I0E6"
	},
	"chaotic_guardian_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Guardian Armor",
	    "materials" : ["exalted_soul_armor","exquisite_mithril_armor","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "id" : "I0E7"
	},
	"chaotic_shadow_greaves" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Shadow Greaves",
	    "materials" : ["exalted_soul_vest","exquisite_mithril_greaves","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1300,
	    	"agi" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "id" : "I0E8"
	},
	"chaotic_amber_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Chaotic Amber Robes",
	    "materials" : ["exalted_soul_robes","exquisite_mithril_robe","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 1100,
	    	"int" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "id" : "I0E9"
	},
	"chaotic_rune" : {
	    "type" : "material",
	    "color" : "black",
	    "label" : "Chaotic Rune",
	    "materials" : ["agony","crystallized_fossil"],
	    "id" : "I0EA"
	},
	"chaos_orb" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Chaos Orb",
	    "materials" : ["devil_shadow_jewel","blight_stone","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"hp" : 45000,
	    	"mp" : 30000,
	    	"movement_speed" : 200,
	    	"hp_regen" : 2500
	    },
	    "id" : "I0EB"
	},
	"chaotic_mana_stone" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Chaotic Mana Stone",
	    "materials" : ["devil_soulstone","refined_mana_heart","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"int" : 5500,
	    	"mp" : 55000
	    },
	    "effects" : ["Recover 55% of maximum MP every 28 seconds"],
	    "id" : "I0EC"
	},
	"chaotic_life_stone" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Chaotic Life Stone",
	    "materials" : ["devil_heart","refined_dragon_heart","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"str" : 5500,
	    	"hp" : 55000
	    },
	    "effects" : ["Recover 55% of maximum HP every 28 seconds"],
	    "id" : "I0ED"
	},
	"murkey_chaos_ring" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Murkey Chaos Ring",
	    "materials" : ["archdemon_soul_ring","black_soul_ring","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"damage_increase" : 35
	    },
	    "effects" : ["On Use: Provides 90% bonus damage for 15 seconds (120s cooldown)"],
	    "id" : "I0EE"
	},
	"essence_of_chaos" : {
	    "type" : "accessory",
	    "color" : "red",
	    "label" : "Essence of Chaos",
	    "materials" : ["ferocity_soul_ring","blue_sky_jewel","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"damage_increase" : 58
	    },
	    "id" : "I0EF"
	},
	"refined_mana_heart" : {
		"type" : "accessory",
		"color" : "blue",
		"page" : 2,
		"materials" : ["dragon_slayer_mark", "mother_tree_bark", "black_clay_powder","mana_heart"],
		"rate" : 100,
		"stats" : {
			"int" : 3700,
			"mp" : 40000
		},
		"label" : "Refined Mana Heart",
		"effects" : ["Recover 40% of MAX MP every 28 seconds"],
		"id" : "I0CL"
    },
  "chaotic_mana_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Chaotic Mana Rune",
    "materials" : ["mana_rune","mana_sigil","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "mp" : 12000
    },
    "id" : "I0EG"
  },
  "chaotic_mana_potion" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Chaotic Mana Potion",
    "materials" : ["archangel_mana_potion","magician_mana_potion","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000
    },  
    "effects" : ["On Use: Restore 35% of maximum mana (25s cooldown)"],
    "id" : "I0EH"
  },
  "chaotic_potion" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Chaotic Potion",
   "materials" : ["archangel_potion","warrior_vitality_potion","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000
    },  
    "effects" : ["On Use: Restore 30% of health (25s cooldown)"],
    "id" : "I0EL"
  },
  "chaotic_life_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Chaotic Life Rune",
    "materials" : ["life_rune","life_sigil","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "hp" : 20000
    },
    "id" : "I0EI"
  },
  "chaotic_ascension_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Chaotic Ascension Rune",
    "materials" : ["archangel_ascent","ferocity_sigil","boundless_twilight","chaotic_rune","superlative_aggregate_energy"], 
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "movement_speed" : 100,
      "attack_speed" : 70
    },
    "id" : "I0EJ"
  },
  "chaotic_magic_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "label" : "Chaotic Magic Rune",
    "materials" : ["magic_rune","magic_sigil","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "damage_increase" : 18
    },
    "id" : "I0EK"
	},
	"helm_of_chaos" : {
	    "type" : "helmet",
	    "color" : "red",
	    "label" : "Helm of Chaos",
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_increase" :40
	    },
	    "id" : "I0EQ"
	},
	"chaotic_plated_helmet" : {
        "type" : "helmet",
	    "color" : "red",
	    "label" : "Chaotic Plated Helmet",
	    "materials" : ["great_devil_skull","red_magus_helmet","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_taken" :-24
	    },
	    "id" : "I04EM"
	},
	"runic_chaos_helm" : {
        "type" : "helmet",
	    "color" : "red",
	    "label" : "Runic Chaos Helm",
	    "materials" : ["great_devil_helmet","hades_helm","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500
	    },
	    "effects" :["Anti magic shield for 12 seconds(110s cooldown)"],
	    "id" : "I0E0"
	},
	"chaotic_demon_horn" : {
        "type" : "helmet",
	    "color" : "red",
	    "label" : "Chaotic Demon Horn",
	    "materials" : ["great_devil_horn","arch_demon_horn","boundless_twilight","chaotic_rune","superlative_aggregate_energy"],
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_increase" :75,
	    	"damage_taken" :15
	    },
	    "id" : "I0EP"
	},
	"chaotic_insight" : {
		"type" : "helmet",
		"color" : "red",
		"label" : "Chaotic Insight",
		"materials" : ["otherwordly_insight","forbidden_wisdom","chaotic_rune","boundless_twilight","superlative_aggregate_energy"],
		"stats" :{
			"int" : 3200,
			"armor" : 700,
			"mp" : 25000
		},
		"effects" : ["On Use: Restore 100% of maximum mana (120s cooldown)"],
		"id" : "I0EN"
	}
}
