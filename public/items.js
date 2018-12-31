(function(exports){
exports.items = {
	"swordman_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["insanity_dagger", "agile_dagger"],
		"rate" : 100,
		"stats" : {
			"atk" : 25000,
			"agi" : 1800,
			"damage_increase" : 15
		},
		"label" : "Sword of the Swordman",
    "k_label": "검객의 검",
		"id" : "I07P"
	},
	"warden_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 1,
		"materials" : ["intelligence_sword", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"atk" : 25000,
			"int" : 1800,
			"damage_increase" : 15
		},
		"label" : "Warden's Staff",
    "k_label": "위저드의 지팡이",
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
    "k_label": "혼돈의 검",
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
    "k_label": "전투 지팡이",
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
    "k_label": "트렌트 지팡이",
		"effects" : ["On use: summon 2 Treant (120s cd)"],
    "k_effects": ["사용시 트렌트 2기 소환 (쿨타임 120초)"],
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
    "k_label": "성검 발드릭스",
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
    "k_label" : "대마력 지팡이",
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
    "k_label": "생명의 검",
		"effects" : ["Every 10th attack will recover STR x3 HP(10s cd)", "Every 6th spell will recover STR x3 HP(10s cd)", "On use, recovers STR x4 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복(STR x3)(쿨타임10초)", "스킬사용 6회시 생명력회복(STR x3)(쿨타임10초)", "사용시 능력치 비례의 생명력 회복(STR x4)(120초)"],
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
    "k_label": "생명의 활",
		"effects" : ["Every 10th attack will recover AGI x3 HP (9s cd)", "Every 6th spell will recover AGI x3 HP (10s cd)", "On use, recovers AGI x4 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복(AGI x3)(쿨타임9초)", "스킬사용 6회시 생명력회복(AGI x3)(쿨타임10초)", "사용시 능력치 비례의 생명력 회복(AGI x4)(120초)"],
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
    "k_label": "생명의 지팡이",
		"effects" : ["Every 4th spell will recover INT x3 HP", "On use: Recovers INT x4 HP to all allies within range (80s cd)"],
    "k_effects": ["스킬사용 4회시 생명력회복(INT x3)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복(INT x4)(쿨타임 80초)"],
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
    "k_label": "신성한 빛의 단검",
		"effects" : ["Each attack has 12% chance to deal 300000 + AGI x8 bonus damag"],
    "k_effects": ["공격시 확률적으로 빛의심판 발동 (12% 기회 300000 + AGI x8)"],
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
			"str" : 2600,
      "attack_speed": 20
		},
		"label" : "Sword of Divine Light",
    "k_label": "신성한 빛의 대검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x10 bonus damage"],
    "k_effects": ["공격시 확률적으로 빛의심판 발동 (12% 기회 300000 + STR x10)"],
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
    "k_label": "신성한 빛의 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x21 bonus damage"],
    "k_effects": ["스킬의 모든히트에 확률적으로 빛의심판 발동(8% 기회 30000 + INT x21)"],
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
    "k_label": "혼돈의 빛의 검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x3 bonus damage"],
    "k_effects": ["공격시 확률적으로 빛의심판 발동 (12% 기회 300000 + (STR + AGI) x3)"],
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
    "k_label": "신성한 빛의 전투지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + player slot) x10 bonus damage"],
    "k_effects": ["스킬의 모든히트에 확률적으로 빛의심판 발동(8% 기회 30000 + (STR + player slot) x10)"],
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
    "k_label": "심판자의 지팡이",
		"effects" : ["On use: summons 2 judges (120s cd)"],
    "k_effects": ["사용시 심판자 2기 소환(쿨타임 120초)"],
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
    "k_label": "성검 EX칼리버",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 150000 + (STR + AGI + INT) x70-100)(120s cd)"],
    "k_effects": ["사용시 엑스칼리버 시전 (150000 + (STR + AGI + INT) x70-100)(쿨타임120초)"],
		"id" : "I06K"
	},
	"fire_axe" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 3,
		"materials" : ["destroyer_axe", "destruction_essence", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 70000,
			"str" : 3000
		},
		"label" : "Axe of Fire",
    "k_label": "마계의 불꽃 도끼",
		"effects" : ["On Use: Causes a massive explosion, dealing 300000 + STR x120 damage (120s cd)"],
    "k_effects": ["사용시 마계의 폭발 발생 (300000 + STR x120)(쿨타임 120초)"],
		"id" : "I06P"
	},
	"mysterious_fireworks_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 3,
		"materials" : ["bloodied_staff", "destruction_essence", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 70000,
			"int" : 2700
		},
		"label" : "Mysterious Fireworks Staff",
    "k_label": "마계의 불꽃 지팡이",
		"effects" : ["On use, increase INT by 2000 (duration 12s, 120s cd)"],
    "k_effects": ["사용시 지능+2000 (지속 12초)(쿨타임 120초)"],
		"id" : "I06Q"
	},
	"flame_dagger" : {
		"type" : "weapon",
		"color" : "purple",
		"page" : 3,
		"materials" : ["insanity_dagger", "insanity_essence", "mastermind_token"],
		"rate" : 100,
		"stats" : {
			"atk" : 70000,
			"agi" : 2700,
			"attack_speed" : 200
		},
		"label" : "Dagger of Flame",
    "k_label": "마계의 불꽃단검",
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
    "k_label": "운석 단검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x12 bonus damage"],
    "k_effects": ["공격시 확률적으로 운석 소환 (12% 기회 300000 + AGI x12)"],
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
			"str" : 3500,
      "attack_speed": 80
		},
		"label" : "Black Earth Mace",
    "k_label": "운석 철퇴",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x20 bonus damage"],
    "k_effects": ["공격시 확률적으로 운석 소환 (12% 기회 300000 + STR x20)"],
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
    "k_label": "심판의 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x26 bonus damage", "Intelligence increased by 1000 (duration 10s, 120s cd)"],
    "k_effects": ["스킬공격시 확률적으로 대상에게 천벌시전 (8% 기회 30000 + INT x26)", "사용시 지능 1000증가(지속시간 10초)(쿨타임 120초)"],
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
			"str" : 4000
		},
		"label" : "Black Earth Sword",
    "k_label": "검은 대지의 대검",
		"effects" : ["On use: Cause a large explosion of Black Earth, dealing 300000 + STR x120 damage (60s cd)"],
    "k_effect": ["사용시 검은대지의 폭발 생성 (300000 + STR x120)(쿨타임 60초)"],
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
    "k_label": "성검 프라가라흐",
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
    "k_label": "드래곤 마력 지팡이",
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
    "k_label": "죽음의 손톱",
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
    "k_label": "운석 지팡이",
		"effects" : ["On use, summons powerful infernal, dealing INT x80 to nearby units (lasts 20s)", "Intelligence increased by 1000 (duration 10s, cd 120s)"],
    "k_effects": ["사용시 강력한 인페르노 1기를 데미지를주며 소환, 주변 유닛에 INT x80 처리 (지속시간 20초)", "지능 1000증가(지속시간 10초)(쿨타임 120초)"],
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
    "k_label": "혼돈의 운석 검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x6 bonus damage", "On Use: An outward explosion of Black Eart, dealing 300000 + (STR + AGI) x55 damage (120s cd)"],
    "k_effects": ["공격시 확률적으로 운석 소환 (12% 기회 300000 + (STR + AGI) x6)", "사용시 검은대지의 폭발 생성 (300000 + (STR + AGI) x55)(쿨타임 120초)"],
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
    "k_label": "혼돈의 심판 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x11 bonus damage"],
    "k_effects": ["모든스킬 히트에 확률적으로 천벌이 내려침 (8% 기회 30000 + (STR + INT) x11)"],
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
    "k_label": "무한한 생명의 지팡이",
		"effects" : ["Every 4 spell casts will recover INT x4 HP (10s cd)", "On use, restore INT x5 health to nearby allies (80s cd)"],
    "k_effects": ["스킬사용 4회시 생명력 회복 (INT x4)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x5)(쿨타임 80초)"],
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
    "k_label": "무한한 생명의 활",
		"effects" : ["Every 10 attacks will recover AGI x3.5 HP (9s cd)", "Every 6 spells will recover AGI x3.5 HP (10s cd)", "On Use: Recover AGI x5 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력 회복 (AGI x3.5)(쿨타임 10초)", "스킬 시전 6회당 생명력 회복 (AGI x3.5)(쿨타임 9초)", "사용시 생명력 회복 (AGI x5)(쿨타임 120초)"],
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
    "k_label": "무한한 생명의검",
		"effects" : ["Every 10 attacks will recover STR x3.5 HP (9s cd)", "Every 6 spells will recover STR x3.5 HP (10s cd)", "On Use: Recover STR x5 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복 (STR x3.5)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x3.5)(쿨타임 10초)", "사용시  생명력회복 (능력치비례)(쿨타임 120초)"],
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
    "k_label": "EX칼리버 모르간",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 150000 + (STR + AGI + INT) x120-160)(120s cd)"],
    "k_effects": ["사용시 엑스칼리버 모르간 시전 (150000 + (STR + AGI + INT) x120-160)(쿨타임120초)"],
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
    "k_label": "간장 막야",
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
    "k_label": "아카식 레코드",
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
    "k_label": "지옥불 장갑",
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
    "k_label": "아스칼론",
		"effects" : ["On Use: Release a powerful explosion, dealing 300000 + STR x150 (45s cd)"],
		"k_effects" : ["사용시 강력한 에너지 폭발 발생 (300000 + STR x150)(쿨타임 45초)"],
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
    "k_label": "피닉스 지팡이",
		"effects" : ["On use, summons a phoenix (lasts 20s, 120s cd)"],
    "k_effects": ["사용시 20초간 피닉스 소환 (쿨타임 120초)"],
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
    "k_label": "레바테인",
		"effects" : ["Nearby allies gain 20% bonus damage"],
    "k_effects": ["주변 아군에게 추가데미지 20%효과 오라"],
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
			"attack_speed" : 160
		},
		"label" : "Moonlight Dagger",
    "k_label": "달빛 단검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x17 bonus damage"],
    "k_effects": ["기본공격시 확률적으로 달빛의 힘으로 적을 공격함 (12% 기회 300000 + AGI x17)"],
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
			"str" : 5000,
      "attack_speed": 100
		},
		"label" : "Mjollnir",
    "k_label": "묠니르",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x30 bonus damage"],
    "k_effects": ["기본공격시 확률적으로 전격로 적을 공격함 (12% 기회 300000 + STR x30)"],
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
    "k_label": "현자의 지팡이",
		"effects" : ["Generates Bonus Damage based on max mana (3.5% per 10,000)", "Consumes 4% of max mana per cast", "This passive will not work if below 10% maximum mana"],
    "k_effects": ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 3.5%)", "스킬사용시 최대마력의 4%감소 (마력이 10%이상 있을때 작동)"],
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
    "k_label": "붉은달빛 단검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x4 bonus damage", "On Use: Causes an explosion of moonlight, dealing 300000 + (STR + AGI) x70 (80s cd)"],
    "k_effects": ["기본공격시 확률적으로 붉은 달빛의 힘으로 적을 공격함 (12% 기회 300000 + (STR + AGI) x4)","사용시 달빛 폭발 발생 (300000 + (STR + AGI) x70)(쿨타임 80초)"],
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
    "k_label": "하데스의 혼돈지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x14 bonus damage"],
    "k_effects": ["스킬공격에 확률적으로 죽음의 폭발발생 (8% 기회 30000 + (STR + INT) x14)"],
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
    "k_label": "하데스의 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x35 bonus damage"],
    "k_effects": ["스킬공격에 확률적으로 죽음의 폭발발생 (8% 기회 30000 + INT x35)"],
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
    "k_label": "세계수의 검",
		"effects" : ["Every 10 attacks will recover STR x4 HP (9s cd)", "Every 6 spells will recover STR x4 HP (10s cd)", "On Use: Restores STR x6 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복 (STR x4)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x4)(쿨타임 10초)", "사용시  생명력회복 (STR x6)(쿨타임 120초)"],
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
    "k_label": "세계수의 단검",
		"effects" : ["Every 10 attacks will recover AGI x4 HP (9s cd)", "Every 6 spells will recover AGI x4 HP (10s cd)", "On Use: Restores AGI x6 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복 (AGI x4)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x4)(쿨타임 10초)", "사용시  생명력회복 (AGI x6)(쿨타임 120초)"],
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
    "k_label": "세계수의 지팡이",
		"effects" : ["Every 4 spells will recover INT x5 HP (10s cd)", "On use, restore INT x6 health to nearby allies (80s cd"],
    "k_effects": ["스킬사용 4회시 생명력 회복 (INT x5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x6)(쿨타임 80초)"],
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
			"int" : 1500
		},
		"label" : "High Blood Robes",
    "k_label": "고수의 로브",
		"id" : "I089"
	},
	"dwarven_high_leather_armor" : {
		"type" : "armor",
		"color" : "purple",
		"page" : 1,
		"materials" : ['elemental_spirit', 'heaven_sigil', 'leather_approval_armor', 'leather_approval_armor'],
		"rate" : 100,
		"stats" : {
			"armor" : 600,
			"agi" : 1200,
			"hp" : 10000,
			"damage_taken" : -9
		},
		"label" : "Dwarven High Leather Armor",
    "k_label": "드워프의 고급 가죽 갑옷",
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
    "k_label": "드워프의 고급 갑옷",
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
    "k_label": "드워프의 고급 로브",
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
			"max_health" : 10
		},
		"label" : "Earth Armor",
    "k_label": "대지의 갑옷",
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
			"int" : 2500
		},
		"label" : "The Master's Robe",
    "k_label": "달인의 로브",
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
			"hp_regen" : -500,
      "damage_increase": 25,
      "damage_taken": 5
		},
		"label" : "Magical Flame Armor",
    "k_label": "마계의 불꽃 갑옷",
		"effects" : ["Deals 8000 + STR x15 damage to nearby enemies each second"],
		"k_effects" : ["생명력과 강함을 교환한 로브 (8000 + STR x15)"],
		"id" : "I06R"
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
    "k_label": "마계의 불꽃 로브",
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
    "k_label": "드워프의 최고급 가죽 갑옷",
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
    "k_label": "드워프의 최고급 갑옷",
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
    "k_label": "드워프의 최고급 로브",
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
    "k_label": "검은 대지의 불꽃 갑옷",
		"effects" : ["Deals 8000 + STR x23 damage per second to all enemies within range"],
    "k_effects": ["초당 주변에 데미지 (8000 + STR x23)"],
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
			"damage_taken" : 10,
			"damage_increase" : 40
		},
		"label" : "Black Earth Flame Robe",
    "k_label": "검은 대지의 불꽃 로브",
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
    "k_label": "드레곤 마력 로브",
		"effects" : ["Creates a shield that blocks max mana x0.3 every 10s. Does not stack"],
    "k_effects": ["10초마다 최대마나 x 0.3의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"],
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
    "k_label": "음속의 가죽갑옷",
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
    "k_label": "음속의 갑옷",
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
    "k_label": "음속의 로브",
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
			"max_health" : 16
		},
		"label" : "Mother Tree's Life Armor",
    "k_label": "마더트리의 생명의 갑옷",
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
    "k_label": "미스릴 갑옷",
		"id" : "I08O"
	},
	"mithril_greaves" : {
		"type" : "armor",
		"color" : "orange",
		"page" : 3,
		"materials" : ["dwarven_exquisite_leather_armor", "mother_tree_bark", "elemental_spirit"],
		"rate" : 100,
		"stats" : {
			"armor" : 800,
			"agi" : 2600,
			"hp" : 20000,
			"damage_taken" : -15
		},
		"label" : "Mithril Greaves",
    "k_label": "미스릴 경갑",
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
			"int" : 2700,
			"hp" : 20000,
			"damage_taken" : -15
		},
		"label" : "Mithril Robe",
    "k_label": "미스릴 로브",
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
    "k_label": "지옥불 갑옷",
		"effects" : ["Deals 8000 + STR x33 damage per second to all enemies within range"],
		"k_effects" : ["초당 주변에 데미지 (8000 + STR x33)"],
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
    "k_label" : "지옥불 로브",
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
    "k_label": "세계수 줄기 갑옷",
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
			"mp" : 25000
		},
		"label" : "Refined Mana Crystal Robe",
    "k_label": "정제된 드레곤 마력 로브",
		"effects" : ["Creates a shield that blocks max mana x0.4 every 10s. Does not stack"],
		"k_effects" : ["10초마다 최대마나 x 0.4의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"],
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
			"max_health" : 21
		},
		"label" : "Gaia's Armor",
    "k_label": "가이아 갑옷",
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
    "k_label": "광속의 가죽갑옷",
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
    "k_label": "광속의 갑옷",
		"id" : "I0BB"
	},
	"aqua_robes" : {
		"type" : "armor",
		"color" : "blue",
		"page" : 4,
		"materials" : ["agile_cloak", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
		"stats" : {
			"armor" : 700,
			"int" : 3500,
			"movement_speed" : 150,
			"damage_increase" : 30
		},
		"label" : "Aqua Robes",
    "k_label": "광속의 로브",
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
    "k_label": "최고급 미스릴 갑옷",
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
    "k_label": "최고급 미스릴 경갑",
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
    "k_label": "최고급 미스릴 로브",
		"id" : "I0BG"
	},	
	"madness_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_ring", "destruction_essence", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"int" : 800,
			"str" : 800,
			"agi" : 800,
			"hp" : 10000,
			"mp" : 6000,
			"movement_speed" : 150
		},
		"label" : "The Ring of Madness",
    "k_label": "광기의 반지",
		"id" : "I03L"
	},
	"destruction_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_enhanced_ring", "destruction_essence", "insanity_essence"],
		"rate" : 100,
		"stats" : {
			"int" : 800,
			"str" : 800,
			"agi" : 800,
			"damage_increase" : 15
		},
		"label" : "Ring of Destruction",
    "k_label": "파괴의 반지",
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
      "armor": 300,
			"movement_speed" : 150,
			"magic_resistance" : 13
		},
		"label" : "Branches of the Mother Tree",
    "k_label": "마더트리의 나뭇가지",
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
    "k_label": "타오르는 악마의 반지",
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
    "k_label": "타오르는 마계의 반지",
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
			"damage_increase" : 15

		},
		"label" : "Blueberry Ring",
    "k_label": "드래곤 보석 반지",
		"effects" : ["On Use: Increase Bonus Damage by 40% for 15 seconds (120s cd)"],
		"k_effects" : ["사용시 15초간 추가데미지 40%증가(쿨타임 120초)"],
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
			"hp" : 25000,
			"mp" : 30000,
			"movement_speed" : 150,
			"hp_regen" : 1000

		},
		"label" : "Diamond Ring",
    "k_label": "금강석 반지",
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
    "k_label": "얼어붙은 청옥 반지",
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
    "k_label": "요르단 반지",
		"effects" : ["On Use: Increased Bonus Damage by 60% for 15 seconds (120s cd)"],
		"k_effects" : ["사용시 15초간 추가데미지 60%증가(쿨타임 120초)"],
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
    "k_label": "창천의 청옥",
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
			"hp_regen" : 1000
		},
		"label" : "Stone of Blight",
    "k_label": "칠흑의 금강석",
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
    "k_label": "정제된 드래곤 하트",
		"effects" : ["Recover 40% of MAX HP every 28 seconds"],
		"k_effects" : ["28초마다 최대체력 40%회복"],
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
			"damage_taken" : -7
		},
		"label" : "Helm of Dazzling Light",
    "k_label": "눈부신 빛의 투구",
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
    "k_label": "대지의 가호 투구",
		"effects" : ["On Use: Create a Anti Magic Shield for 5 seconds (150s cd)"],
		"k_effects" : ["사용시 5초간 매직쉴드(쿨타임 150초)"],
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
			"damage_increase" : 16
		},
		"label" : "Mage's Helm",
    "k_label": "마기의 투구",
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
			"damage_increase" : 22
		},
		"label" : "Black Earth Helmet",
    "k_label": "검은 기운의 투구",
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
    "k_label": "드레곤 가죽 마법투구",
		"effects" : ["On Use: Create a Anti Magic Shield for 10 seconds (180s cd)"],
		"k_effects" : ["사용시 10초간 마법면혁(쿨타임 180초)"],
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
			"damage_taken" : -10
		},
		"label" : "Dragon Leather Helm",
    "k_label": "드레곤 가죽 투구",
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
    "k_label": "현자의 지혜",
		"effects" : ["Recover 60% of maximum Mana on use (120s cd)"],
		"k_effects" : ["사용시 MP60% 회복 (쿨타임 120초)"],
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
    "k_label": "고위 악마의뿔",
		"id" : "I08X"
	},
	"corrupting_mask" : {
		"type" : "artifact",
		"color" : "purple",
		"page" : 1,
		"materials" : ["approval_wings", "insanity_essence", "destruction_essence"],
		"rate" : 100,
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"damage_increase" : 10
		},
		"label" : "Corrupting Mask",
    "k_label": "순수한 악의 결정",
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
      "armor": 300,
			"hp" : 8000
		},
		"label" : "Heavenly Spirit Barrier",
    "k_label": "천상의 수호벽",
		"effects" : ["Generates a shield that blocks up to 10000 damage every 10 seconds"],
		"k_effects" : ["초마다 10000의 쉴드 생성"],
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
    "k_label": "다크윙",
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
    "k_label": "검은 대지의 각반",
		"effects" : ["On use: Dashes forward (10s cd)"],
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임10초)"],
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
      "armor": 400,
			"hp" : 13000
		},
		"label" : "Dazzling Heavenly Spirit Barrier",
    "k_label": "눈부신 천상의 수호벽",
		"effects" : ["Generates a shield that blocks up to 16000 damage every 10 seconds"],
		"k_effects" : ["10초마다 16000의 쉴드 생성"],
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
      "armor": 500,
			"hp" : 20000
		},
		"label" : "Rho Aias",
    "k_label": "로 아이아스",
		"effects" : ["Generates a shield that blocks up to 25000 damage every 10 seconds"],
		"k_effects" : ["10초마다 25000의 쉴드 생성"],
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
    "k_label": "나이트메어 윙",
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
    "k_label": "절망의 날개",
		"effects" : ["Enemies within range take an additional 17% Damage"],
		"k_effects" : ["절망의 기운을 뿜어대는 날개 절망의 대악마의 보물중하나"],
		"id" : "I08U"
	},
	"archangel_wings" : {
		"type" : "artifact",
		"color" : "blue",
		"page" : 2,
		"materials" : ["angel_wings", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
 		"rate" : 100,
	   	"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"hp" : 15000
		},
		"label" : "Archangel's Wings",
    "k_label": "대천사의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 30% of MAX HP", "And 12% of MAX HP every second for 10 seconds (120s cd)"],
    "k_effects": ["생명력이 40%이하일때 즉사가 아닌 공격을받을면 즉시 생명력 30%를 회복하며", "10초간 초당 생명력 8% 회복 (쿨타임 120초)"],
		"id" : "I0BE"
	},
	"lightning_boots" : {
		"type" : "artifact",
		"color" : "blue",
		"page" : 2,
		"materials" : ["darkened_boots", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
		"rate" : 100,
    	"stats" : {
			"str" : 2100,
			"agi" : 2100,
			"int" : 2100,
			"attack_speed" : 150,
			"movement_speed" : 150
		},
		"label" : "Lightning Boots",
    "k_label": "번개각인 각반",
		"effects" : ["On Use: Dash forward (8s cd)"],
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임8초)"],
		"id" : "I0BF"
	},
	"archangel_judgement_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"materials" : ["archangel_judgement", "mjollnir", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 7000,
      "attack_speed": 160
		},
		"label" : "Archangel's Judgement +1",
    "k_label": "대천사의 심판 +1",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x48 bonus damage"],
    "k_effects": ["기본공격시 확률적으로 대천사의 심판 발동 (12% 기회 300000 + STR x48)"],
		"id" : "I0CG"
	},
	"archangel_amber_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"materials" : ["archangel_amber_staff", "akashic_records","archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"damage_increase" : 60
		},
		"label" : "Archangel's Amber Staff +1",
    "k_label": "대천사의 증폭 지팡이 +1",
		"id" : "I0C6"
	},
	"archangel_gauntlets_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"materials" : ["archangel_gauntlets", "hellfire_gloves","archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"damage_increase" : 90,
			"damage_taken" : 29
		},
		"label" : "Archangel's Gauntlets +1",
    "k_label": "대천사의 건들릿 +1",
		"id" : "I0CA"
	},
	"archangel_dagger_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"materials" : ["archangel_dagger", "moonlight_dagger", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"attack_speed" : 200
		},
		"label" : "Archangel's Dagger +1",
    "k_label": "대천사의 단검 +1",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x23 bonus damage"],
		"k_effects" : ["대천사만이 사용한다는 단검 적을 순식간에 분쇄시켜버림 (12% 기회 300000 + AGI x23)"],
		"id" : "I096"
	},
	"excalibur_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"materials" : ["excalibur", "excalibur_morgan", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 5300,
			"agi" : 5300,
			"int" : 5300
		},
		"label" : "Excalibur +1",
    "k_label": "대천사의 검 +1",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 340000 + (STR + AGI + INT) x225 (120s cd)"],
		"k_effects" : ["사용시 정의의 일격 시전 (340000 + (STR + AGI + INT) x225)(쿨타임 120초)"],
		"id" : "I09E"
	},
	"archangel_blade_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"materials" : ["archangel_blade", "kanshou_bakuya", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"damage_increase" : 60
		},
		"label" : "Archangel's Blade +1",
    "k_label": "대천사의 도검 +1",
		"id" : "I090"
	},
	"archangel_mana_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"materials" : ["archangel_mana_staff", "sage_staff", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"mp" : 28000
		},
		"label" : "Niflheim +1",
    "k_label": "대천사의 마력 지팡이 +1",
		"effects" : ["Generates Bonus Damage based on maximum mana (4.4% per 10,000)","Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
    "k_effects": ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.4%)", "스킬사용시 최대마력의 4%감소", "마력이 10%이상 있을때 작동"],
		"id" : "I0AE"
	},
	"angelic_life_sword_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 1,
		"materials" : ["angelic_life_sword", "waterstone_sword", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 7000,
			"hp" : 45000
		},
		"label" : "Angelic Sword of Life +1",
    "k_label": "대천사의 생명검 +1",
		"effects" : ["Every 10 attacks will recover STR x5.5 HP (9s cd)", "Every 6 spells will recover STR x5.5 HP (10s cd)", "On Use: Restores STR x7.5 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복 (STR x5.5)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x5.5)(쿨타임 10초)", "사용시  생명력회복 (STR x7.5)(쿨타임 120초)"],
		"id" : "I0AH"
	},
	"archangel_life_bow_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"materials" : ["archangel_life_bow", "waterstone_dagger", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"hp" : 45000
		},
		"label" : "Angelic Bow of Life +1",
    "k_label": "대천사의 생명의활 +1",
		"effects" : ["Every 10 attacks will recover AGI x5.5 HP (9s cd)", "Every 6 spells will recover AGI x5.5 HP (10s cd)", "On Use: Restores AGI x7.5 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복(AGI x5.5)(쿨타임 10초)", "스킬사용 6회시 생명력회복(AGI x5.5)(쿨타임 10초)", "사용시  생명력회복 (AGI x7.5 )(쿨타임 120초)"],
		"id" : "I0AK"
	},
	"archangel_life_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"materials" : ['archangel_life_staff', 'archangel_sigil', 'archangel_sourcewell', 'god_essence', 'waterstone_staff'],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"hp" : 45000
		},
		"label" : "Archangel's Life Staff +1",
    "k_label": "대천사의 생명지팡이 +1",
		"effects" : ["Every 4 spells will recover INT x6.5 HP (10s cd)", "On Use: Restore INT x7.5 HP of all allies within range (80s cd)"],
    "k_effects": ["스킬사용 4회시 생명력 회복 (INT x6.5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x7.5)(쿨타임 80초)"],
		"id" : "I0AN"
	},
	"archangel_sword_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"materials" : ["archangel_sword", "bloody_moonlight_dagger", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 5900,
			"agi" : 5900
		},
		"label" : "Archangel's Sword +1",
    "k_label": "대천사의 소검 +1",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x9.2 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x105 damage (80s cd)"],
    "k_effects": ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x9.2)", "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x105)(쿨타임 80초)"],
    "id" : "I09A"
	},
	"archangel_battle_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"materials" : ["archangel_battle_staff", "hades_chaos_staff", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 5900,
			"int" : 5900
		},
		"label" : "Archangel's Battle Staff +1",
    "k_label": "대천사의 전투지팡이 +1",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (INT + INT) x22.8 bonus damage"],
    "k_effects": ["일부 직업의 모든스킬에 확률적으로 대천사의 푸른심판 발동 (8% 기회 30000 + (INT + INT) x22.8)"],
		"id" : "I09Q"
	},
	"archangel_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"materials" : ["archangel_staff", "hades_staff", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000
		},
		"label" : "Archangel's Staff +1",
    "k_label": "대천사의 지팡이 +1",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x57 bonus damage"],
    "k_effects": ["일부 직업의 모든스킬에 확률적으로 대천사의 심판 발동 (8% 기회 30000 + INT x57)"],
		"id" : "I09M"
	},
	"archangel_glaive_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"materials" : ["archangel_glaive", "ascalon", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"str" : 7000
		},
		"label" : "Archangel's Glaive +1",
    "k_label": "대천사의 창 +1",
		"effects" : ["On Use: Causes an explosion, dealing 500000 + STR x230 damage (45s cd)"],
		"k_effects" : ["사용시 용기의 폭발 시전 (500000 + STR x230)(쿨타임 45초)"],
		"id" : "I09I"
	},
	"blessed_staff_1" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"materials" : ["blessed_staff", "phoenix_staff", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000
		},
		"label" : "Blessed Staff +1",
    "k_label": "대천사장의 지팡이 +1",
		"effects" : ["On Use: Summons an angel"],
    "k_effects": ["사용시 고위천사 소환"],
		"id" : "I0AR"
	},
	"archangel_light_staff_l" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 2,
		"materials" : ["archangel_light_staff", "laevateinn", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 30,
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"damage_increase" : 30
		},
		"label" : "Archangel's Light Staff +1",
    "k_label": "대천사의 빛의 지팡이 +1",
		"effects" : ["Increases nearby allies damage by 27%"],
		"k_effects" : ["주변아군 추가데미지 30%증가 오라 생성"],
		"id" : "I0AT"
	},
	"archangel_judgement_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"materials" : ["archangel_judgement_1", "archangel_judgement", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 7500,
      "attack_speed": 160
		},
		"label" : "Archangel's Judgement +2",
    "k_label": "대천사의 심판 +2",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x56 bonus damage"],
		"k_effects" : ["기본공격시 확률적으로 대천사의 심판 발동 (12% 기회 300000 + STR x56)"],
		"id" : "I0CH"
	},
	"archangel_gauntlets_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"materials" : ["archangel_gauntlets_1", "archangel_gauntlets", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"damage_increase" : 105,
			"damage_taken" : 33
		},
		"label" : "Archangel's Gauntlets +2",
    "k_label": "대천사의 건들릿 +2",
		"id" : "I0CB"
	},
	"angelic_life_sword_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"materials" : ["angelic_life_sword_1", "angelic_life_sword", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 7500,
			"hp" : 50000
		},
		"label" : "Angelic Sword of Life +2",
    "k_label": "대천사의 생명검 +2",
		"effects" : ["Every 10 attacks will recover STR x6 HP (9s cd)", "Every 6 spells will recover STR x6 HP (10s cd)", "On Use: Restores STR x8 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (STR x6)(쿨타임 10초)", "스킬사용 6회시 생명력회복 (STR x6)(쿨타임 10초)", "사용시  생명력회복 (STR x8)(쿨타임 120초)"],
		"id" : "I0AI"
	},
	"excalibur_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"materials" : ["excalibur_1", "excalibur", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 5600,
			"agi" : 5600,
			"int" : 5600
		},
		"label" : "Excalibur +2",
    "k_label": "대천사의 검 +2",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 380000 + (STR + AGI + INT) x250 (120s cd)"],
		"k_effects" : ["사용시 정의의 일격 시전 (380000 + (STR + AGI + INT) x250)(쿨타임 120초)"],
		"id" : "I09F"
	},
	"archangel_dagger_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"materials" : ["archangel_dagger_1", "archangel_dagger", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"attack_speed" : 200
		},
		"label" : "Archangel's Dagger +2",
    "k_label": "대천사의 단검 +2",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x26 bonus damage"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 심판생성 (12% 기회 300000 + AGI x26)"],
		"id" : "I097"
	},
	"archangel_blade_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"materials" : ["archangel_blade_1", "archangel_blade", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"damage_increase" : 65
		},
		"label" : "Archangel's Blade +2",
    "k_label": "대천사의 도검 +2",
		"id" : "I091"
	},
	"archangel_light_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"materials" : ["archangel_light_staff_l", "archangel_light_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"damage_increase" : 33
		},
		"label" : "Archangel's Light Staff +2",
    "k_label": "대천사의 빛의 지팡이 +2",
		"effects" : ["Increases nearby allies damage by 33%"],
		"k_effects" : ["주변아군 추가데미지 33%증가 오라 생성"],
		"id" : "I0C1"
	},
	"archangel_mana_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 3,
		"materials" : ["archangel_mana_staff_1", "archangel_mana_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"mp" : 32000
		},
		"label" : "Niflheim +2",
    "k_label": "대천사의 마력 지팡이 +2",
		"effects" : ["Generates Bonus Damage based on maximum mana (4.6% per 10,000)", "Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
		"k_effects" : ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.6%)", "스킬사용시 최대마력의 4%감소", "마력이 10%이상 있을때 작동"],
		"id" : "I0AF"
	},
	"archangel_life_bow_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"materials" : ["archangel_life_bow_1", "archangel_life_bow", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"hp" : 50000
		},
		"label" : "Archangel's Bow of Life +2",
    "k_label": "대천사의 생명의활 +2",
		"effects" : ["Every 10 attacks will recover AGI x6 HP (9s cd)", "Every 6 spells will recover AGI x6 HP (10s cd)", "On Use: Restores AGI x8 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (AGI x6)(쿨타임 10초)", "스킬사용 6회시 생명력회복 (AGI x6)(쿨타임 10초)", "사용시  생명력회복 (AGI x8)(쿨타임 120초)"],
		"id" : "I0AL"
	},
	"archangel_life_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"materials" : ["archangel_life_staff_1", "archangel_life_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"hp" : 50000
		},
		"label" : "Archangel's Life Staff +2",
    "k_label": "대천사의 생명지팡이 +2",
		"effects" : ["Every 4 spells will recover INT x7 HP (10s cd)", "On Use: Restore INT x8 HP of all allies within range (80s cd)"],
		"k_effects" : ["스킬사용 4회시 생명력 회복 (INT x7)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x8)(쿨타임 80초)"],
		"id" : "I0AO"
	},
	"archangel_amber_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"materials" : ["archangel_amber_staff_1", "archangel_amber_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"damage_increase" : 65
		},
		"label" : "Archangel's Amber Staff +2",
    "k_label": "대천사의 증폭 지팡이 +2",
		"id" : "I0C7"
	},
	"archangel_sword_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"materials" : ["archangel_sword_1", "archangel_sword", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 6300,
			"agi" : 6300
		},
		"label" : "Archangel's Sword +2",
    "k_label": "대천사의 소검 +2",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x10.4 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x120 damage (80s cd)"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x10.4)", "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x120)(쿨타임 80초)"],
		"id" : "I09B"
	},
	"archangel_battle_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"materials" : ["archangel_battle_staff_1", "archangel_battle_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 6300,
			"int" : 6300
		},
		"label" : "Archangel's Battle Staff +2",
    "k_label": "대천사의 전투지팡이 +2",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (INT + INT) x25.2 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 푸른심판 발동 (8% 기회 30000 + (INT + INT) x25.2)"],
		"id" : "I09R"
	},
	"archangel_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"materials" : ["archangel_staff_1", "archangel_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500
		},
		"label" : "Archangel's Staff +2",
    "k_label": "대천사의 지팡이 +2",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x63 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 심판 발동 (8% 기회 30000 + INT x63)"],
		"id" : "I09N"
	},
	"archangel_glaive_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"materials" : ["archangel_glaive_1", "archangel_glaive", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"str" : 7500
		},
		"label" : "Archangel's Glaive +2",
    "k_label": "대천사의 창 +2",
		"effects" : ["On Use: Causes an explosion, dealing 600000 + STR x260 damage (45s cd)"],
		"k_effects" : ["사용시 용기의 폭발 시전 (600000 + STR x260)(쿨타임 45초)"],
		"id" : "I09J"
	},
	"blessed_staff_2" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 4,
		"materials" : ["blessed_staff_1", "blessed_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
		"rate" : 25,
    	"stats" : {
			"atk" : 300000,
			"int" : 7500
		},
		"label" : "Blessed Staff +2",
    "k_label": "대천사장의 지팡이 +2",
		"effects" : ["On Use: Summons an angel"],
		"k_effects" : ["사용시 고위천사 소환"],
		"id" : "I0C3"
	},
	"archangel_judgement_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"materials" : ["archangel_judgement_2", "archangel_judgement", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 8000,
      "attack_speed": 160
		},
		"label" : "Archangel's Judgement +3",
    "k_label": "대천사의 심판 +3",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x64 bonus damage"],
		"k_effects" : ["기본공격시 확률적으로 대천사의 심판 발동 (12% 기회 300000 + STR x64)"],
		"id" : "I0CI"
	},
	"archangel_gauntlets_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"materials" : ["archangel_gauntlets_2", "archangel_gauntlets", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"damage_increase" : 130,
			"damage_taken" : 37
		},
		"label" : "Archangel's Gauntlets +3",
    "k_label": "대천사의 건들릿 +3",
		"id" : "I0CC"
	},
	"angelic_life_sword_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"materials" : ["angelic_life_sword_2", "angelic_life_sword", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 8000,
			"hp" : 55000
		},
		"label" : "Angelic Sword of Life +3",
    "k_label": "대천사의 생명검 +3",
		"effects" : ["Every 10 attacks will recover STR x6.7 HP (9s cd)", "Every 6 spells will recover STR x6.7 HP (10s cd)", "On Use: Restores STR x8.7 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)", "사용시  생명력회복 (STR x8.7)(쿨타임 120초)"],
		"id" : "I0AJ"
	},
	"excalibur_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"materials" : ["excalibur_2", "excalibur", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000
		},
		"label" : "Excalibur +3",
    "k_label": "대천사의 검 +3",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 420000 + (STR + AGI + INT) x280 (120s cd)"],
		"k_effects" : ["사용시 정의의 일격 시전 (420000 + (STR + AGI + INT) x280)(쿨타임 120초)"],
		"id" : "I09G"
	},
	"archangel_dagger_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"materials" : ["archangel_dagger_2", "archangel_dagger", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"attack_speed" : 200
		},
		"label" : "Archangel's Dagger +3",
    "k_label": "대천사의 단검 +3",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x29 bonus damage"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 심판생성 (12% 기회 300000 + AGI x29)"],
		"id" : "I098"
	},
	"archangel_blade_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"materials" : ["archangel_blade_2", "archangel_blade", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"damage_increase" : 70
		},
		"label" : "Archangel's Blade +3",
    "k_label": "대천사의 도검 +3",
		"id" : "I092"
	},
	"archangel_mana_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"materials" : ["archangel_mana_staff_2", "archangel_mana_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"mp" : 36000
		},
		"label" : "Niflheim +3",
    "k_label": "대천사의 마력 지팡이 +3",
		"effects" : ["Generates Bonus Damage based on maximum mana (4.9% per 10,000)", "Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
		"k_effects" : ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.9%)", "스킬사용시 최대마력의 4%감소", "마력이 10%이상 있을때 작동"],
		"id" : "I0AG"
	},
	"archangel_life_bow_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 5,
		"materials" : ["archangel_life_bow_2", "archangel_life_bow", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"hp" : 55000
		},
		"label" : "Angelic Bow of Life +3",
    "k_label": "대천사의 생명의활 +3",
		"effects" : ["Every 10 attacks will recover AGI x6.7 HP (9s cd)", "Every 6 spells will recover AGI x6.7 HP (10s cd)", "On Use: Restores AGI x8.7 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)", "사용시  생명력회복 (AGI x8.7)(쿨타임 120초)"],
		"id" : "I0AM"
	},
	"archangel_life_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"materials" : ["archangel_life_staff_2", "archangel_life_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"hp" : 55000
		},
		"label" : "Archangel's Life Staff +3",
    "k_label": "대천사의 생명지팡이 +3",
		"effects" : ["Every 4 spells will recover INT x7.5 HP (10s cd)", "On Use: Restore INT x8.7 HP of all allies within range (80s cd)"],
    "k_effects": ["스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x8.7)(쿨타임 80초)"],
		"id" : "I0AP"
	},
	"archangel_sword_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"materials" : ["archangel_sword_2", "archangel_sword", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 300000,
			"str" : 6700,
			"agi" : 6700
		},
		"label" : "Archangel's Sword +3",
    "k_label": "대천사의 소검 +3",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x11.6 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x135 damage (80s cd)"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x11.6)","사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x135)(쿨타임 80초)"],
		"id" : "I09C"
	},
	"archangel_battle_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"materials" : ["archangel_battle_staff_2", "archangel_battle_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 6700,
			"int" : 6700
		},
		"label" : "Archangel's Battle Staff +3",
    "k_label": "대천사의 전투지팡이 +3",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (INT + INT) x30 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 푸른심판 발동 (8% 기회 30000 + (INT + INT) x30)"],
		"id" : "I09S"
	},
	"archangel_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"materials" : ["archangel_staff_2", "archangel_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000
		},
		"label" : "Archangel's Staff +3",
    "k_label": "대천사의 지팡이 +3",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x73.5 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 심판 발동 (8% 기회 30000 + INT x73.5)"],
		"id" : "I09O"
	},
	"archangel_glaive_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"materials" : ["archangel_glaive_2", "archangel_glaive", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"str" : 8000
		},
		"label" : "Archangel's Glaive +3",
    "k_label": "대천사의 창 +3",
		"effects" : ["On Use: Causes an explosion, dealing 700000 + STR x300 damage (45s cd)"],
    "k_effects": ["사용시 용기의 폭발 시전 (700000 + STR x300)(쿨타임 45초)"],
		"id" : "I09K"
	},
	"archangel_light_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"materials" : ["archangel_light_staff_2", "archangel_light_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"damage_increase" : 37
		},
		"label" : "Archangel's Light Staff +3",
    "k_label": "대천사의 빛의 지팡이 +3",
		"effects" : ["Increases nearby allies damage by 37%"],
		"k_effects" : ["주변아군 추가데미지 37%증가 오라 생성"],
		"id" : "I0C2"
	},
	"blessed_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"materials" : ["blessed_staff_2", "blessed_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000
		},
		"label" : "Blessed Staff +3",
    "k_label": "대천사장의 지팡이 +3",
		"effects" : ["On Use: Summons an angel"],
		"k_effects" : ["사용시 고위천사 소환"],
		"id" : "I0C4"
	},
	"archangel_amber_staff_3" : {
		"type" : "weapon",
		"color" : "red",
		"page" : 6,
		"materials" : ["archangel_amber_staff_2", "archangel_amber_staff", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
		"rate" : 20,
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"damage_increase" : 70
		},
		"label" : "Archangel's Amber Staff +3",
    "k_label": "대천사의 증폭 지팡이 +3",
		"id" : "I0C8"
	},
	"lower_aggregate_energy" : {
	  "type" : "material",
	  "color" : "black",
	  "page" : 1,
	  "materials" : ["destruction_essence", "insanity_essence", "heaven_sigil", "elemental_spirit"],
	  "label" : "Lower Aggregate Energy",
    "k_label": "하급 에너지 집합체",
	  "id" : "I0A7"
	},
	"intermediate_aggregate_energy" : {
	  "type" : "material",
	  "color" : "black",
	  "page" : 1,
	  "materials" : ["lower_aggregate_energy", "mastermind_token", "waterstone_fragment"],
	  "label" : "Intermediate Aggregate Energy",
    "k_label": "중급 에너지 집합체",
	  "id" : "I0A8"
	},
	"greater_aggregate_energy" : {
	  "type" : "material",
	  "color" : "black",
	  "page" : 1,
	  "materials" : ["intermediate_aggregate_energy", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
	  "label" : "Greater Aggregate Energy",
    "k_label": "상급 에너지 집합체",
	  "id" : "I0A9"
	},	
	"superlative_aggregate_energy" : {
	  "type" : "material",
	  "color" : "black",
	  "page" : 1,
	  "materials" : ["greater_aggregate_energy", "archangel_sigil"],
	  "label" : "Superlative Aggregate Energy",
    "k_label": "최상급 에너지 집합체",
	  "id" : "I0AA"
	},	
	"beresa_horn" : {
		"type" : "helmet",
		"color" : "orange",
		"raid" : "Beresa of the Black Earth",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"armor" : 500,
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"damage_increase" : 17
		},
		"label" : "Beresa's Horn",
    "k_label": "베레스라의 뿔",
		"id" : "I04D",
		"chances" : [3, 7]
	},
	"beresa_sword" : {
		"type" : "weapon",
		"color" : "blue",
		"raid" : "Beresa of the Black Earth",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"atk" : 150000,
			"str" : 5000,
      "damage_increase": 35
		},
		"label" : "Beresa’s Sword",
    "k_label": "베레스라의 검",
		"id" : "I04C",
		"chances" : [1.5, 2.33]
	},
	"hellfire_claymore" : {
		"type" : "weapon",
		"color" : "blue",
		"raid" : "Beresa of the Black Earth",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"atk" : 150000,
			"str" : 5000,
      "damage_increase": 35
		},
		"label" : "Hellfire Claymore",
    "k_label": "헬파이어 클레이모어",
    "effects": ["Deals 200000 + STR x100 per pillar for a total of 8 pillars in clockwise motion (180s cd)"],
		"id" : "I0D4",
    "disabled": true,
		"chances" : [1, 2.33]
	},
  "demonic_leather_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"raid" : "Devil Lord Hellgainer",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"damage_increase" : 20,
			"damage_taken" : 10
		},
		"label" : "Demonic Leather Helm",
    "k_label": "악마의 가죽 투구",
		"id" : "I06V",
		"chances" : 6.5
	},
	"heavenly_wisdom_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"raid" : "Celestial Waterstone",
		"stats" : {
			"armor" : 300,
			"int" : 1000,
			"mp" : 5000
		},
		"label" : "Helm of Heavenly Wisdom",
    "k_label": "천상의 지혜",
		"effects" : ["Restore 40% of maximum MP on use (180s cd)"],
		"k_effects" : ["사용시 MP40% 회복 (쿨타임 180초)"],
		"id" : "I06G",
		"chances" : 6.5
	},
	"approval_enhanced_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"boss" : "Revenant of Meditation",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"damage_increase" : 12
		},
		"label" : "Enhanced Ring of Approval",
    "k_label": "증명의 증폭반지",
		"id" : "I043" ,
		"chances" : 10
	},
	"elderwood_armor" : {
		"type" : "armor",
		"color" : "orange",
		"raid" : "Mother Tree",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"armor" : 600,
			"str" : 1800,
			"agi" : 1800,
			"int" : 1800,
			"hp" : 15000,
			"hp_regen_percent" : 1.5
		},
		"label" : "Elderwood Armor",
    "k_label": "마더트리 줄기갑옷",
		"id" : "I082",
		"chances" : [3, 7]
	},
	"approval_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"boss" : "Revenant of Meditation",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"hp" : 3000,
			"mp" : 2000,
			"movement_speed" : 150
		},
		"label" : "Ring of Approval",
    "k_label": "증명의 반지",
		"id" : "I03K",
		"chances" : 10
	},
	"approval_wings" : {
		"type" : "artifact",
		"color" : "purple",
		"boss" : "Revenant of Meditation",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
		"label" : "Wings of Approval",
    "k_label": "증명의 날개",
		"id" : "I04W",
		"chances" : 10
	},
	"agile_dagger" : {
		"type" : "weapon",
		"color" : "purple",
		"boss" : "Silverback Wolf",
		"stats" : {
			"atk" : 28000,
			"agi" : 1000
		},
		"label" : "Agile Dagger",
    "k_label": "민첩의 단검",
		"id" : "I03Y",
		"chances" : 10
	},
	"power_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"boss" : "Silverback Wolf",
		"stats" : {
			"atk" : 25000,
			"str" : 1000
		},
		"label" : "Sword of Power",
    "k_label": "힘의 대검",
		"id" : "I03E",
		"chances" : 10
	},
	"intelligence_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"boss" : "Silverback Wolf",
		"stats" : {
			"atk" : 25000,
			"int" : 1300
		},
		"label" : "Sword of Intelligence",
    "k_label": "지능의 지팡이",
		"id" : "I05U",
		"chances" : 10
	},
	"approval_armor" : {
		"type" : "armor",
		"color" : "purple",
		"boss" : "Dwarven Siege Machine",
		"stats" : {
			"armor" : 400,
			"str" : 500,
			"hp" : 5000
		},
		"label" : "Armor of Approval",
    "k_label": "증명의 갑옷",
		"id" : "I05V",
		"chances" : 10
	},
	"leather_approval_armor" : {
		"type" : "armor",
		"color" : "purple",
		"boss" : "Dwarven Siege Machine",
		"stats" : {
			"armor" : 300,
			"agi" : 500,
			"damage_increase" : 8
		},
		"label" : "Leather Armor of Approval",
    "k_label": "증명의 가죽갑옷",
		"id" : "I04M",
		"chances" : 10
	},
	"approval_robes" : {
		"type" : "armor",
		"color" : "purple",
		"boss" : "Dwarven Siege Machine",
		"stats" : {
			"armor" : 250,
			"int" : 700,
			"mp" : 4000
		},
		"label" : "Robes of Approval",
    "k_label": "증명의 로브",
		"id" : "I040",
		"chances" : 10
	},
	"destroyer_axe" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Destroyer",
		"stats" : {
			"atk" : 25000,
			"str" : 1700
		},
		"label" : "Destroyer's Axe",
    "k_label": "파괴자의 도끼",
		"effects" : ["On use: Deals 50000 + STR x8 aoe damage and stuns  (120s cd)"],
    "k_effects": ["사용시 죽음의 내려찍기를 시전 (50000 + STR x8)(쿨타임 120초)"],
		"id" : "I03A",
		"chances" : 7
	},
	"colloseum_armor" : {
		"type" : "armor",
		"color" : "purple",
		"raid" : "Destroyer",
		"stats" : {
			"armor" : 600,
			"str" : 1000
		},
		"label" : "The Colosseum Armor",
    "k_label": "콜로세움 갑옷",
		"effects" : ["On use, recover 15000 HP (120s cd)"],
    "k_effects": ["사용시 생명력 15000회복 (쿨타임 120초)"],
		"id" : "I041",
		"chances" : 7.5
	},
	"archwizard_robe" : {
		"type" : "armor",
		"color" : "purple",
		"raid" : "Destroyer",
		"stats" : {
			"armor" : 400,
			"int" : 1000,
			"damage_increase" : 10
		},
		"label" : "Arc’s Wizard Robe",
    "k_label": "아크위저드의 로브",
		"id" : "I03I",
		"chances" : 7
	},
	"knight_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"raid" : "Destroyer",
		"stats" : {
			"armor" : 300,
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_increase" : 10
		},
		"label" : "Knight's Helm",
    "k_label": "기사의 투구",
		"effects" : ["On Use: Grants a 5 second anti magic shield (200s cd)"],
		"k_effects" : ["사용시 5초간 매직쉴드(쿨타임 200초)"],
		"id" : "I04Y",
		"chances" : 7
	},
	"bloodied_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Destroyer",
		"stats" : {
			"atk" : 10000,
			"int" : 2000
		},
		"label" : "Bloodied Staff",
    "k_label": "피뭍은 지팡이",
		"effects" : ["On use: grants 700 intelligence for 10 seconds (120s cd)"],
		"k_effects" : ["사용시 10초간 지능 +700증가 (쿨타임 120초)"],
		"id" : "I03D",
		"chances" : 7
	},
	"destruction_essence" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Destroyer",
		"label" : "Essence of Destruction",
    "k_label": "파괴의 본능",
		"id" : "I034",
		"chances" : 6.5
	},
	"insanity_leather_armor" : {
		"type" : "armor",
		"color" : "purple",
		"raid" : "Avatar of Insanity",
		"stats" : {
			"armor" : 400,
			"agi" : 1000,
			"hp" : 6000
		},
		"label" : "Insanity's Leather Armor",
    "k_label": "광기의 가죽갑옷",
		"id" : "I03J",
		"chances" : 7
	},
	"insanity_dagger" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Avatar of Insanity",
		"stats" : {
			"atk" : 25000,
			"agi" : 1500,
			"attack_speed" : 80
		},
		"label" : "Insanity's Dagger",
    "k_label": "광기의 단검",
		"id" : "I03Z",
		"chances" : 7
	},
	"swiftness_boots" : {
		"type" : "artifact",
		"color" : "purple",
		"raid" : "Avatar of Insanity",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"movement_speed" : 150,
			"attack_speed" : 50
		},
		"label" : "Boots of Swiftness",
    "k_label": "신속의 신발",
		"id" : "I03P",
		"chances" : 7
	},
	"insanity_helmet" : {
		"type" : "helmet",
		"color" : "purple",
		"raid" : "Avatar of Insanity",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_increase" : 10
		},
		"label" : "Insanity's Helmet",
    "k_label": "광기의 투구",
		"id" : "I046",
		"chances" : 7
	},
	"insanity_essence" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Avatar of Insanity",
		"label" : "Essence of Insanity",
    "k_label": "광기의 기운",
		"id" : "I05Y",
		"chances" : 6.5
	},
	"nature_armor" : {
		"type" : "armor",
		"color" : "purple",
		"raid" : "Elemental Treant",
		"stats" : {
			"armor" : 400,
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"hp" : 5000,
			"max_health" : 6
		},
		"label" : "Armor of Nature",
    "k_label": "자연의 갑옷",
		"id" : "I062",
		"chances" : 6.5
	},
	"elemental_staff" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Elemental Treant",
		"stats" : {
			"atk" : 30000,
			"int" : 1600
		},
		"label" : "Staff of the Elemental",
    "k_label": "정령의 지팡이",
		"effects" : ["Recover INT x3 HP (60s cd)"],
		"k_effects" : ["사용시 지능비례 생명력 회복 (INT x3)(쿨타임 60초)"],
		"id" : "I064",
		"chances" : 6.5
	},
	"elemental_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Elemental Treant",
		"stats" : {
			"atk" : 30000,
			"str" : 1600
		},
		"label" : "Sword of the Elemental",
    "k_label": "정령의 검",
		"effects" : ["Recover STR x3 HP (60s cd)"],
		"k_effects" : ["사용시 힘비례 생명력 회복 (STR x3)(쿨타임 60초)"],
		"id" : "I061",
		"chances" : 6.5
	},
	"spirit_bow" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Elemental Treant",
		"stats" : {
			"atk" : 30000,
			"agi" : 1600
		},
		"label" : "Spirit Bow",
    "k_label": "정령의 활",
		"effects" : ["Recover AGI x3 HP (60s cd)"],
		"k_effects" : ["사용시 민첩비례 생명력 회복 (AGI x3)(쿨타임 60초)"],
		"id" : "I063",
		"chances" : 6.5
	},
	"mother_tree_leaves" : {
		"type" : "accessory",
		"color" : "purple",
		"raid" : "Elemental Treant",
		"stats" : {
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"movement_speed" : 150,
			"magic_resistance" : 10
		},
		"label" : "Leaves of the mother tree",
    "k_label": "마더트리의 잎",
		"id" : "I03M",
		"chances" : 6.5
	},
	"elemental_spirit" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Elemental Treant",
		"label" : "Elemental Spirit",
    "k_label": "정령의 숨결",
		"id" : "I065",
		"chances" : 6.5
	},
	"light_sword" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Heaven's Guardian",
		"stats" : {
			"atk" : 40000,
			"str" : 1600,
			"agi" : 1600,
			"int" : 1600
		},
		"label" : "Sword of Light",
    "k_label": "빛의검",
		"effects" : ["12% chance to add 5000 damage to attacks"],
		"k_effects" : ["12% 기회 공격시 5000의 추가데미지"],
		"id" : "I067",
		"chances" : 7
	},
	"light_barrier" : {
		"type" : "artifact",
		"color" : "purple",
		"raid" : "Heaven's Guardian",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
      "armor": 200,
			"hp" : 5000
		},
		"label" : "Barrier of Light",
    "k_label": "빛의 방벽",
		"effects" : ["Generate a shield every 10 seconds that blocks up to 6000 damage"],
    "k_effects": ["10초마다 6000의 쉴드 생성"],
		"id" : "I068",
		"chances" : 7
	},
	"light_helm" : {
		"type" : "helmet",
		"color" : "purple",
		"raid" : "Heaven's Guardian",
		"stats" : {
			"armor" : 400,
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_taken" : -4
		},
		"label" : "Helm of Light",
    "k_label": "빛의 투구",
		"id" : "I069",
		"chances" : 7
	},
	"caliburn" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Heaven's Guardian",
		"stats" : {
			"atk" : 60000,
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000
		},
		"label" : "Caliburn",
    "k_label": "성검 칼리번",
		"effects" : ["On Use: Deals 100000 + (STR + AGI + INT) x15 aoe dmg and stuns all enemies around user (180s cd)"],
		"k_effects" : ["사용시 빛의 강림 시전 (100000 + (STR + AGI + INT) x15)(쿨타임180초)"],
		"id" : "I066",
		"chances" : 3
	},
	"heaven_sigil" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Heaven's Guardian",
		"label" : "Heaven Sigil",
    "k_label": "가디언의 증표",
		"id" : "I06A",
		"chances" : 7
	},
	"waterstone_fragment" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Celestial Waterstone",
		"label" : "Waterstone Fragment",
    "k_label": "수호석 핵",
		"id" : "I06I",
		"chances" : 6.5
	},
	"waterstone_ring" : {
		"type" : "accessory",
		"color" : "purple",
		"raid" : "Celestial Waterstone",
		"stats" : {
			"str" : 1000,
			"agi" : 1000,
			"int" : 1000,
			"hp" : 6000,
			"damage_taken" : -10
		},
		"label" : "Waterstone Ring",
    "k_label": "수호석 반지",
		"id" : "I06F",
		"chances" : 6.5
	},
	"helgainer_inner_wings" : {
		"type" : "artifact",
		"color" : "orange",
		"raid" : "Devil Lord Hellgainer",
    "chest" : "Archangel Treasure Chest",
    "stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"damage_increase" : 12
		},
		"label" : "Helgainer’s Inner Wing",
    "k_label": "헬 게이너 날개",
		"effects" : ["Passive: An aura that causes nearby enemies to take 12% Bonus Damage (Range 750)"],
		"k_effects" : ["추가데미지 12% 의 오라생성 (범위 750)"],
		"id" : "I04E",
		"chances" : [1.5, 7]
	},
	"helgainer_claw" : {
		"type" : "weapon",
		"color" : "purple",
		"raid" : "Devil Lord Hellgainer",
		"stats" : {
			"atk" : 60000,
			"agi" : 2500,
			"damage_increase" : 27,
			"damage_taken" : 10
		},
		"label" : "Helgainer’s Claws",
    "k_label": "헬게이너 손톱",
		"id" : "I06X",
		"chances" : 6.5
	},
	"agile_leather_armor" : {
		"type" : "armor",
		"color" : "purple",
		"raid" : "Devil Lord Hellgainer",
		"stats" : {
			"armor" : 500,
			"agi" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"label" : "Agile Leather Armor",
    "k_label": "신속의 가죽갑옷",
		"id" : "I06T",
		"chances" : 6.5
	},
	"magical_flask" : {
		"type" : "stats",
		"color" : "darkred",
		"raid" : "Devil Lord Hellgainer",
		"stats_points" : 8,
		"label" : "Magical Flask",
    "k_label": "마계의 영약",
		"id" : "I070",
		"chances" : 6.5
	},
	"agile_armor" : {
		"type" : "armor",
		"color" : "purple",
		"raid" : "Devil Lord Hellgainer",
		"stats" : {
			"armor" : 600,
			"str" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"label" : "Agile Armor",
    "k_label": "신속의 갑옷",
		"id" : "I051",
		"chances" : 6.5
	},
	"nimble_robe" : {
		"type" : "armor",
		"color" : "purple",
		"raid" : "Celestial Waterstone",
		"stats" : {
			"armor" : 400,
			"int" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"label" : "Nimble Robe",
    "k_label": "신속의 로브",
		"id" : "I0B6",
		"chances" : 6.5
	},
	"celestial_water" : {
		"type" : "stats",
		"color" : "darkred",
		"raid" : "Celestial Waterstone",
		"label" : "Celestial Water",
    "k_label": "천계의 영약",
		"id" : "I06J",
		"stats_points" : 8,
		"chances" : 12
	},
	"mastermind_token" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Devil Lord Hellgainer",
		"label" : "Mastermind Token",
    "k_label": "수문장 징표",
		"id" : "I06Z",
		"chances" : 6.5		
	},
	"gloomy_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"raid" : "Beresa of the Black Earth",
		"stats" : {
			"atk" : 100000,
			"int" : 3300,
			"damage_increase" : 16
		},
		"label" : "Gloomy Staff",
    "k_label": "검은기운의 지팡이",
		"effects" : ["Emits an aura that adds 16% addtional damage"],
		"k_effects" : ["자신과 주변 아군들 추가데미지 16% 증가"],
		"id" : "I07C",
		"chances" : 3		
	},
	"black_earth" : {
		"type" : "stats",
		"color" : "darkred",
		"raid" : "Beresa of the Black Earth",
    "chest" : "Archangel Treasure Chest",
		"stats_points" : 12,
		"label" : "Black Earth",
    "k_label": "검은 대지의 기운",
		"id" : "I077",
		"chances" : [15, 7]
	},
	"black_clay_powder" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Beresa of the Black Earth",
		"label" : "Black Clay Powder",
    "k_label": "검은 흙가루",
		"id" : "I04H",
		"chances" : 6
	},
	"dragon_meat" : {
		"type" : "stats",
		"color" : "darkred",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Chest",
		"stats_points" : 12,
		"label" : "Dragon Meat",
    "k_label": "드레곤 고기",
		"id" : "I07M",
		"chances" : [15, 7]		
	},
	"mana_storm_staff" : {
		"type" : "weapon",
		"color" : "orange",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"atk" : 100000,
			"int" : 3300,
			"mp" : 15000
		},
		"label" : "Mana Storm Staff",
    "k_label": "마나 폭풍 지팡이",
		"effects" : ["Generates Bonus Damage based on maximum mana (2.8% per 10,000)", "Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
		"k_effects" : ["사용자의 마나에 비례하여 추가데미지 생성 (비뮬 - 1만당 2.8%)", "스킬사용시 최대마력 5%감소", "마력이 10%이상 있을때 작동"],
		"id" : "I07O",
		"chances" : [3, 7]		
	},
	"dragon_slayer_mark" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Blue Dragon",
		"label" : "Crystallized Dragon Eye",
    "k_label": "드레곤 슬레이어의 증표",
		"id" : "I07K",
		"chances" : 6	
	},
	"dragon_heart" : {
		"type" : "accessory",
		"color" : "orange",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Chest",
    "stats" : {
      "str" : 2500,
      "hp" : 30000
    },
		"label" : "Dragon Heart",
    "k_label": "드래곤 하트",
    "effects" : ["Recovers 30% of maximum HP every 28 seconds"],
    "k_effects": ["28초마다 최대체력 30%회복"],
		"id" : "I07G",
		"chances" : [3, 7]
	},
	"mana_heart" : {
		"type" : "accessory",
		"color" : "orange",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Chest",
    "stats" : {
      "int" : 2700,
      "mp" : 30000
    },
		"label" : "Heart of Mana",
    "k_label": "마나 하트",
    "effects" : ["Recovers 30% of maximum mana every 28 seconds"],
    "k_effects": ["28초마다 최대마나 30%회복"],
		"id" : "I045",
		"chances" : [3, 7]
	},
	"dragon_wings" : {
		"type" : "artifact",
		"color" : "blue",
		"raid" : "Blue Dragon",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"attack_speed" : 60,
			"movement_speed" : 20 
		},		
		"label" : "Blue Dragon’s Wings",
    "k_label": "블루 드레곤 날개",
		"effects" : ["Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x70 (180s cd)", "Allies have 20% movement speed and 60% attack speed increased", "Enemies have 15% movement speed and attack speed reduced"],
		"k_effects" : ["주변 적군 공이속 15%감소", "주변 아군 공속 60% 이속 20%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x70)(쿨타임 180초)"],
		"id" : "I07F",
		"chances" : [1.5, 2.33]
	},
	"angel_wings" : {
		"type" : "artifact",
		"color" : "orange",
		"raid" : "Celestial Waterstone",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"hp" : 10000
		},
		"label" : "Angel Wings",
    "k_label": "천사의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 30% of MAX HP", "And 8% of MAX HP every second for 10 seconds (120s cd)"],
    "k_effects": ["생명력이 40%이하일때 즉사가 아닌 공격을받을면 즉시 생명력 30%를 회복하고", "10초간 초당 생명력 8% 회복 (쿨타임 120초)"],
		"id" : "I0BD",
		"chances" : [1.5, 7]
	},
	"mother_tree_bark" : {
		"type" : "material",
		"color" : "black",
		"raid" : "Mother Tree",
		"label" : "Mother Tree Bark",
    "k_label": "마더 트리의 뿌리",
		"id" : "I07X",
		"chances" : 6		
	},
	"tea_leaves" : {
		"type" : "stats",
		"color" : "darkred",
		"raid" : "Mother Tree",
    "chest" : "Archangel Treasure Chest",
		"stats_points" : 8,
		"label" : "Tea Leaves",
    "k_label": "마더트리 차",
		"id" : "I087",
		"chances" : [15, 7]		
	},
	"waterstone_dirk" : {
		"type" : "weapon",
		"color" : "blue",
		"raid" : "Mother Tree",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"atk" : 160000,
			"agi" : 5000
		},
		"label" : "Waterstone Dirk",
    "k_label": "세계수의 나뭇가지",
		"effects" : ["On use, agility +28% for 20 seconds (120s cd)", "Deals AGI x40 to near enemies", "Recovers 20000 HP for each near enemy"],
		"k_effects" : ["사용시 주변유닛의 정기를 흡수하며 흡수된 수에비례 생명력 회복 20초간 민첩 28% 증가 (쿨타임 120초)"],
		"id" : "I080",
		"chances" : [1.5, 2.33]
	},
	"life_essence" : {
		"type" : "accessory",
		"color" : "orange",
		"raid" : "Mother Tree",
    "chest" : "Archangel Treasure Chest",
		"stats" : {
			"str" : 1700,
			"agi" : 1700,
			"int" : 1700,
			"hp_regen" : 700
		},
		"label" : "Essence of Life",
    "k_label": "생명의 가호",
		"effects" : ["Allies within range gain HP recovery per second +700", "On Use: Recovers (STR + AGI + INT) x2 HP every second for 5 seconds (120s cd)"],
    "k_effects": ["범위내 아군 초당 생명력 회복 700", "사용시 5초간 사용지점에 매초마다 마더트리의 가호 발동 (STR + AGI + INT) x2)(쿨타임 120초)"],
		"id" : "I081",
		"chances" : [3, 7]
	},
  "god_essence" : {
    "type" : "material",
    "color" : "black",
    "raid" : "Archangel of Valor",
    "label" : "God Essence",
    "k_label": "신의 금속",
    "id" : "I0AQ",
    "chances" : 15
  },
  "archangel_assistance" : {
    "type" : "chest",
    "color" : "red",
    "chest" : "Archangel Treasure Chest",
    "label" : "Archangel’s Assistance",
    "k_label": "대천사의 보구함",
    "effects" : ["Drops an artifact or auxiliary Myth item + Archangel Treasure Piece"],
    "k_effects": ["대천사의 신화급 보구를 획득합니다"],
    "id" : "I0A6",
    "chances" : 8
  },
  "archangel_trinket" : {
    "type" : "chest",
    "color" : "red",
    "chest" : "Archangel Treasure Chest",
    "label" : "Archangel’s Trinket",
    "k_label": "대천사의 악세서리함",
    "id" : "I0BU",
    "effects" : ["Drops an artifact or auxiliary Myth item + Archangel Treasure Piece"],
    "k_effects" : ["대천사의 신화급 보조템을 획득합니다"],
    "chances" : 8
  },
  "archangel_treasure_chest" : {
    "type" : "chest",
    "color" : "res",
    "raid" : "Archangel of Valor",
    "label" : "Archangel Treasure Chest",
    "k_label": "대천사의 보물함",
    "effects" : ["Requires at least 3500 base stats for drop"],
    "k_effects": ["드랍하려면 최소한 3500의 스탯이 필요하다."],
    "id" : "I0AB",
    "chances": 100
  },
  "archangel_sigil" : {
    "type" : "material",
    "color" : "black",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "raid" : "Archangel of Valor",
    "label" : "Archangel’s Sigil",
    "k_label": "대천사의 증표",
    "id" : "I0AC",
    "chances" : 6
  },
  "archangel_sourcewell" : {
    "type" : "material",
    "color" : "black",
    "materials": ["superlative_aggregate_energy"],
    "raid" : "Archangel of Valor",
    "label" : "Archangel’s Sourcewell",
    "k_label": "대천사의 힘의 근원",
    "id" : "I0FB",
    "chances" : 6
  },
  "archangel_treasure_piece" : {
    "type" : "material",
    "color" : "black",
    "chest" : ["Archangel’s Trinket", "Archangel’s Assistance"],
    "label" : "Archangel Treasure Piece",
    "k_label": "대천사의 보물조각",
    "id" : "I04Z",
    "chances" : [100, 100]
  },
  "archangel_essence" : {
  	"type" : "stats",
  	"color" : "darkred",
  	"raid" : "Archangel of Valor",
  	"id" : "I0AD",
  	"label" : "Archangel Essence",
    "k_label": "대천사의 에너지",
    "effects" : ["Requires at least 3500 base stats for drop"],
    "k_effects": ["드랍하려면 최소한 3500의 스탯이 필요하다."],
  	"chances" : 100,
    "stats_points" : 17
  },
  "mana_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "mp" : 8500
    },
    "label" : "Mana Rune",
    "k_label": "대천사의 마나룬",
    "id" : "I0A3",
    "chances" : 8.33
  },
  "archangel_mana_potion" : {
    "type" : "auxiliary",
    "color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700
    },  
    "label" : "Archangel’s Mana Potion",
    "k_label": "대천사의 마나포션",
    "effects" : ["On Use: Restore 35% of maximum mana (30s cd)"],
    "k_effects" : ["사용시 최대마나 35%회복 (쿨타임 30초)"],
    "id" : "I09Z",
    "chances" : 8.33
  },
  "archangel_potion" : {
    "type" : "auxiliary",
    "color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700
    },  
    "label" : "Archangel’s Potion",
    "k_label": "대천사의 포션",
    "effects" : ["On Use: Restore 30% of health (30s cd)"],
    "k_effects" : ["사용시 최대생명력 30%회복 (쿨타임 30초)"],
    "id" : "I03C",
    "chances" : 8.33
  },
  "life_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "hp" : 15000
    },
    "label" : "Life Rune",
    "k_label": "대천사의 생명룬",
    "id" : "I0A2",
    "chances" : 8.33
  },
  "archangel_ascent" : {
    "type" : "auxiliary",
    "color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "movement_speed" : 90,
      "attack_speed" : 50
    },
    "label" : "Archangel’s Ascent",
    "k_label": "대천사의 순풍룬",
    "id" : "I0A1",
    "chances" : 8.33
  },
  "magic_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "damage_increase" : 13
    },
    "label" : "Magic Rune",
    "k_label": "대천사의 일격룬",
    "id" : "I0A0",
    "chances" : 8.33
  },
  "dazzling_light_wings" : {
    "type" : "artifact",
    "color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats" : {
      "str" : 2800,
      "agi" : 2800,
      "int" : 2800,
      "damage_increase" : 22
    },
    "label" : "Dazzling Light Wings",
    "k_label": "눈부신 빛의 날개",
    "effects" : ["Enemies within range take 22% Additional Damage"],
    "k_effects": ["범위내 적들 추가데미지 22% 오라"],
    "id" : "I0BP",
    "chances" : 8.33
  },
	"valor_wings" : {
		"type" : "artifact",
		"color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
	  "stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"hp" : 20000
		},
		"label" : "Wings of Valor",
    "k_label": "대천사 장의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 30% of MAX HP", "On use restore 16% of MAX HP every second for 10 seconds (120s cd)"],
		"k_effects" : ["생명력이 40%이하일때 즉사가 아닌 공격을받을면", "즉시 생명력 30%를 회복하며 10초간 초당 생명력 16% 회복 (쿨타임 120초)"],
		"id" : "I0BR",
    "chances" : 8.33
	},
	"archangel_boots" : {
		"type" : "artifact",
		"color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"attack_speed" : 150,
			"movement_speed" : 150
		},
		"label" : "Archangel’s Boots",
    "k_label": "대천사의 각반",
		"effects" : ["On Use: Dash forward (6s cd)"],
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임6초)"],
		"id" : "I0BQ",
    "chances" : 8.33
	},
	"archangel_barrier" : {
		"type" : "artifact",
		"color" : "red",
    "chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
      "armor": 700,
			"hp" : 25000
		},
		"label" : "Archangel’s Barrier",
    "k_label": "대천사의 방벽",
		"effects" : ["Generate a shield that can block up to 33000 damage every 10 seconds"],
		"k_effects" : ["10초마다 33000의 쉴드 생성"],
		"id" : "I0BS",
    "chances" : 8.33
	},
	"justice_wings" : {
		"type" : "artifact",
		"color" : "red",
   	"chest" : "Archangel’s Trinket",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"damage_increase" : 45
		},
		"label" : "Wings of Justice",
    "k_label": "정의의 날개",
		"id" : "I0BT",
   	"chances" : 8.33
	},
	"excalibur" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000
		},
		"label" : "Excalibur",
    "k_label": "대천사의 검",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 300000 + (STR + AGI + INT) x200)(120s cd)"],
    "k_effects": ["사용시 정의의 일격 시전 (300000 + (STR + AGI + INT) x200)(쿨타임 120초)"],
		"id" : "I09D",
    "chances" : 5.55
	},  
	"archangel_dagger" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
		  "atk" : 230000,
		  "agi" : 6500,
			"attack_speed" : 200
		},
		"label" : "The Archangel’s Dagger",
    "k_label": "대천사의 단검",
    "effects" : ["Each attack has a 12% chance to deal 300000 + AGI x20 bonus damage"],
    "k_effects" : ["기본공격시 일정확률로 대천사의 심판생성 (12% 기회 300000 + AGI x20)"],
		"id" : "I093",
    "chances" : 5.55
	},
	"archangel_blade" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
			"damage_increase" : 55
		},
		"label" : "The Archangel’s Blade",
    "k_label": "대천사의 도검",
		"id" : "I08Z",
    "chances" : 5.55
	},
	"archangel_mana_staff" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
		  "atk" : 260000,
			"int" : 6500,
			"mp" : 25000
		},
		"label" : "Niflheim",
    "k_label": "대천사의 마력 지팡이",
		"effects" : ["Generates Bonus Damage based on maximum mana (4.2% per 10,000)", "Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
		"k_effects" : ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.2%)", "스킬사용시 최대마력의 4%감소", "마력이 10%이상 있을때 작동"],
		"id" : "I0A4",
    "chances" : 5.55
	},
	"angelic_life_sword" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 6500,
			"hp" : 40000
		},
		"label" : "Angelic Sword of Life",
    "k_label": "대천사의 생명검",
		"effects" : ["Every 10 attacks will recover STR x5 HP (9s cd)", "Every 6 spells will recover STR x5 HP (10s cd)", "On Use: Restores STR x7 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (STR x5)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x5)(쿨타임 10초)", "사용시  생명력회복 (STR x7)(쿨타임 120초)"],
		"id" : "I09W",
    "chances" : 5.55
	},
	"archangel_life_bow" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
			"hp" : 40000
		},
		"label" : "Angelic Bow of Life",
    "k_label": "대천사의 생명의활",
		"effects" : ["Every 10 attacks will recover AGI x5 HP (9s cd)", "Every 6 spells will recover AGI x5 HP (10s cd)", "On Use: Restores AGI x7 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (AGI x5)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x5)(쿨타임 10초)", "사용시  생명력회복 (AGI x7)(쿨타임 120초)"],
		"id" : "I09Y",
    "chances" : 5.55
	},
	"archangel_life_staff" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
			"hp" : 40000
		},
		"label" : "Archangel’s Staff of Life",
    "k_label": "대천사의 생명지팡이",
		"effects" : ["Every 4 spells will recover INT x6 HP (10s cd)", "On Use: Restore INT x7 HP of all allies within range(80s cd)"],
		"k_effects" : ["스킬사용 4회시 생명력 회복 (INT x6)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x7)(쿨타임 80초)"],
		"id" : "I09X",
    "chances" : 5.55
	},
	"archangel_sword" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 5500,
			"agi" : 5500
		},
		"label" : "The Archangel’s Sword",
    "k_label": "대천사의 소검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x8 bonus damage", "On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x90 damage (80s cd)"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x8)(능력치 비례)", "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x90)(쿨타임 80초)"],
		"id" : "I099",
    "chances" : 5.55
	},
	"archangel_battle_staff" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 5500,
			"int" : 5500
		},
		"label" : "Archangel’s Battle Staff",
    "k_label": "대천사의 전투지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (INT + INT) x19.2 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 푸른심판 발동 (8% 기회 30000 + (INT + INT) x19.2"],
		"id" : "I09P",
    "chances" : 5.55
	},
	"archangel_staff" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500
		},
      "label" : "The Archangel’s Staff",
    "k_label": "대천사의 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x48 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 심판 발동 (8% 기회 30000 + INT x48)"],
		"id" : "I09L",
    "chances" : 5.55
	},
  "archangel_glaive" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 6500
		},
		"label" : "The Archangel’s Glaive",
    "k_label": "대천사의 창",
		"effects" : ["On Use: Causes an explosion, dealing 400000 + STR x200 damage (45s cd)"],
		"k_effects" : ["사용시 용기의 폭발 시전 (400000 + STR x200)(쿨타임 45초)"],
		"id" : "I09H",
    "chances" : 5.55
	},
	"blessed_staff" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500
		},
		"label" : "Blessed Staff",
    "k_label": "대천사장의 지팡이",
		"effects" : ["On Use: Summons an angel"],
    "k_effects": ["사용시 고위천사 소환"],
		"id" : "I0A5",
    "chances" : 5.55
	},
	"archangel_light_staff" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
      "damage_increase" : 27
		},
		"label" : "Archangel’s Light Staff",
    "k_label": "대천사의 빛의 지팡이",
		"effects" : ["Increases nearby allies damage by 27%"],
		"k_effects" : ["주변아군 추가데미지 27%증가 오라 생성"],
		"id" : "I0AS",
    "chances" : 5.55
	},
	"archangel_amber_staff" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
    	"damage_increase" : 55
		},
		"label" : "Archangel’s Amber Staff",
    "k_label": "대천사의 증폭 지팡이",
		"id" : "I0C5",
    "chances" : 5.55
	},
	"archangel_gauntlets" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
      "damage_taken" : 25,
      "damage_increase" : 75
		},
		"label" : "Archangel’s Gauntlets",
    "k_label": "대천사의 건들릿",
		"id" : "I0C9",
    "chances" : 5.55
	},
	"archangel_judgement" : {
		"type" : "weapon",
		"color" : "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
		"stats" : {
			"atk" : 230000,
			"str" : 6500,
      "attack_speed": 160
		},
		"label" : "Archangel’s Judgement",
    "k_label": "대천사의 심판",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x40 bonus damage"],
		"k_effects" : ["기본공격시 확률적으로 대천사의 심판 발동 (12% 기회 300000 + STR x40)"],
		"id" : "I0CF",
    "chances" : 5.55
	},
	"warrior_vitality_potion" : {
		"type" : "auxiliary",
		"color" : "blue",
    "raid" : "Amon of Hellfire",
    "chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
		"label" : "Warrior’s Vitality Potion",
    "k_label": "마계의 포션",
    "effects" : ["On use, restore 30% of maximum hp (45s cd)"],
    "k_effects" : ["사용시 최대생명력 30%회복 (쿨타임 45초)"],
		"id" : "I0D3",
    "chances" : [3, 8.44]
	},	
	"life_sigil" : {
		"type" : "auxiliary",
		"color" : "blue",
    "raid" : "Amon of Hellfire",
    "chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"hp" : 9000
		},
		"label" : "Sigil of Life",
    "k_label": "생명룬",
		"id" : "I0D0",
    "chances" : [3, 8.44]
	},
	"magic_sigil" : {
		"type" : "auxiliary",
		"color" : "blue",
    "raid" : "Amon of Hellfire",
    "chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_increase" : 8
		},
		"label" : "Sigil of Magic",
    "k_label": "일격룬",
		"id" : "I0D2",
    "chances" : [3, 8.44]
	},	
	"shadow_spirit_dagger" : {
		"type" : "weapon",
		"color" : "orange",
    "raid" : "Amon of Hellfire",
    "chest" : "Black Soul Stone",
		"stats" : {
			"atk" : 100000,
			"agi" : 3500
		},
		"label" : "Dagger of the Shadow Spirit",
    "k_label": "검은 영혼의 단검",
		"effects" : ["Consumes 0.8% of maximum HP for each attack and deals an additional 30000 + AGI x16 damage (Only activates when HP is above 1%)"],
		"k_effects" : ["기본공격시 최대체력 0.8%소모(체력 1%이상일때 작동) 매공격시 어둠의 일격을 가합니다 (30000 + AGI x16)"],
		"id" : "I0D8",
    "chances" : [3, 8.44]
	},
	"hellfire_great_sword" : {
		"type" : "weapon",
		"color" : "orange",
    "raid" : "Amon of Hellfire",
    "chest" : "Black Soul Stone",
		"stats" : {
			"atk" : 100000,
			"str" : 3500
		},
		"label" : "Hellfire Great Sword",
    "k_label": "지옥불 대검",
		"effects" : ["Deal 20000 + STR x10 damage to nearby enemies every second", "On use: consume 2% of Maximum HP and deals 50000 + STR x20 damage to nearby enemies every second for 30 seconds"],
		"k_effects" : ["초마다 주변적들에게 데미지를 가합니다 (20000 + STR x10)", "사용시 30초동안 초당 체력을 2%소모하여 주변에 강력한 데미지를 가합니다 (50000 + STR x20)(쿨타임 80초)"],
		"id" : "I0D6",
    "chances" : [3, 8.44]
	},
	"crystallized_fossil" : {
		"type" : "material",
		"color" : "black",
		"label" : "Crystallized Fossil",
    "raid" : "Amon of Hellfire",
    "k_label": "염화석",
		"id" : "I0CR",
    "chances" : 3.5
	},	
	"blood_stone" : {
		"type" : "artifact",
		"color" : "blue",
    "raid" : "Amon of Hellfire",
    "chest" : "Black Soul Stone",
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"damage_increase" : 25
		},
		"label" : "Blood Stone",
    "k_label": "마신의 결정",
    "effects": ["On use: adds the following effects for 20s (180s cd)", "40% magic resistance", "40% bonus damage", "Cannot remove item for 20s"],
    "k_effects": ["사용시 20초간 마신의 힘 사용 (쿨타임 180초)", "추가데미지 40%", "마법방어력 40% 추가", "20초간 아이템을 벗을수없음"],
		"id" : "I0D9",
    "chances" : [1.5, 3.5]
	},
	"shadow_contract" : {
		"type" : "weapon",
		"color" : "orange",
    "raid" : "Belial of Pain",
    "chest" : "Black Soul Stone",
		"stats" : {
			"atk" : 100000,
			"int" : 3500
		},
		"label" : "Shadow Contract",
    "k_label": "어둠의 계약",
		"effects" : ["Each spell consumes 4% of HP and MP adding 40% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 40% 증가"],
		"id" : "I0D7",
    "chances" : [3, 8.44]
	},	
	"magician_mana_potion" : {
		"type" : "auxiliary",
		"color" : "blue",
    "raid" : "Belial of Pain",
    "chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
		"label" : "Magician’s Mana Potion",
    "k_label": "마계의 마나포션",
    "effects" : ["On use, restore 35% of maximum mana (45s cd)"],
    "k_effects" : ["사용시 최대마나 35%회복 (쿨타임 45초)"],
		"id" : "I0CZ",
    "chances" : [3, 8.44]
	},
	"mana_sigil" : {
		"type" : "auxiliary",
		"color" : "blue",
    "raid" : "Belial of Pain",
    "chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"mp" : 5000
		},
		"label" : "Sigil of Mana",
    "k_label": "마나룬",
		"id" : "I0CY",
    "chances" : [3, 8.44]
	},
	"ferocity_sigil" : {
		"type" : "auxiliary",
		"color" : "blue",
    "raid" : "Belial of Pain",
    "chest" : "Black Soul Stone",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"movement_speed" : 50,
			"attack_speed" : 20
		},
		"label" : "Sigil of Ferocity",
    "k_label": "순풍룬",
		"id" : "I0D1",
    "chances" : [3, 8.44]
	},
	"agony" : {
		"type" : "material",
		"color" : "black",
    "raid" : "Belial of Pain",
		"label" : "Agony",
    "k_label": "비명석",
		"id" : "I033",
    "chances" : 3.5
	},
	"chaos_jewel" : {
		"type" : "accessory",
		"color" : "blue",
    "raid" : "Belial of Pain",
    "chest" : "Black Soul Stone",
		"stats" : {
			"str" : 2500,
			"agi" : 2500,
			"int" : 2500
		},
		"label" : "Jewel of Chaos",
    "k_label": "혼돈의 보석",
		"effects" : ["On Use: one of three effects will be used :", "150% Bonus Damage for 15 seconds", "Increase magical defense by 100% and armor by 10000 for 15 seconds", "Cannot use magic for 10 seconds (120s cd)"],
		"k_effects" : ["사용시 3가지중 랜덤효과 발동", "15초동안 추가데미지 150%증가", "15초동안 마법방어력 100%/방어력 10000증가", "10초간 마법사용 불가능 (쿨타임 120초)"],
		"id" : "I0DB",
    "chances" : [1.5, 3.5]
	},
	"soul_fragments" : {
	  	"type" : "stats",
	  	"color" : "darkred",
	  	"raid" : "Devil of Despair",
	  	"label" : "Soul Fragments",
      "k_label": "대악마의 정기",
	  	"id" : "I036",
	    "effects" : ["Requires at least 4100 base stats for devil drop"],
	    "k_effects" : ["드랍하려면 최소한 4100의 스탯이 필요하다."],
	  	"chances" : 100,
	    "stats_points" : 18
  	},	
	"black_soul_stone" : {
	    "type" : "chest",
	    "color" : "black",
	    "raid" : "Devil of Despair",
	    "label" : "Black Soul Stone",
      "k_label": "검은 영혼석",
	    "effects" : ["Requires at least 4100 base stats for devil drop"],
	    "k_effects" : ["드랍하려면 최소한 4100의 스탯이 필요하다."],
	    "id" : "I037",
	    "chances" : 100
	},
	"agony_devil_treasure_chest" : {
	    "type" : "chest",
	    "color" : "black",
	    "chest" : "Black Soul Stone",
	    "label" : "Devil of Agony’s Treasure Chest",
      "k_label": "대악마의 보물함",
	    "effects" : ["Drops an accessory or helmet Myth item"],
	    "k_effects" : ["대악마의 신화급 악세서리와 투구를 획득합니다"],
	    "id" : "I035",
	    "chances" : 8
	},  
	"archdemon_remmants" : {
	    "type" : "chest",
	    "color" : "black",
	    "chest" : "Black Soul Stone",
	    "label" : "Remnants of the Archdemon",
      "k_label": "대악마의 잔재",
	    "effects" : ["Drops an armor Mythic item"],
	    "k_effects" : ["대악마의 신화급 방어구를 획득합니다"],
	    "id" : "I0DS",
	    "chances" : 9
	},
	"devil_soul_scripture" : {
	    "type" : "material",
	    "color" : "black",
	    "chest" : ["Devil of Agony’s Treasure Chest", "Remnants of the Archdemon"],
	    "label" : "The Devil’s Soul Scripture",
      "k_label": "대악마의 영혼조각",
	    "id" : "I0DT",
	    "chances" : [100, 100]
	},
	"devil_shadow_jewel" : {
	    "type" : "accessory",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"hp" : 40000,
	    	"mp" : 25000,
	    	"movement_speed" : 200,
	    	"hp_regen" : 1000
	    },
	    "label" : "Devil’s Shadow Jewel",
      "k_label": "대악마의 검은보석",
	    "id" : "I0DR",
	    "chances" : 7.69
	},
	"devil_soulstone" : {
	    "type" : "accessory",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"int" : 4600,
	    	"mp" : 50000
	    },
	    "label" : "Devil’s Soulstone",
      "k_label": "대악마의 대마력",
	    "effects" : ["Recover 50% of maximum MP every 28 seconds"],
	    "k_effects" : ["28초마다 최대마나 50%회복"],
	    "id" : "I0DP",
	    "chances" : 7.69
	},
	"devil_heart" : {
	    "type" : "accessory",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"str" : 4600,
	    	"hp" : 50000
	    },
	    "label" : "Heart of the Devil",
      "k_label": "대악마의 심장",
	    "effects" : ["Recover 50% of maximum HP every 28 seconds"],
	    "k_effects" : ["28초마다 최대체력 50%회복"],
	    "id" : "I0DO",
	    "chances" : 7.69
	},
	"archdemon_soul_ring" : {
	    "type" : "accessory",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"damage_increase" : 30
	    },
	    "label" : "Archdemon’s Soul Ring",
      "k_label": "대악마의 영혼 반지",
	    "effects" : ["On Use: Provides 80% bonus damage for 15 seconds (120s cd)"],
	    "k_effects" : ["사용시 15초간 추가데미지 80%증가 (쿨타임 120초)"],
	    "id" : "I0DN",
	    "chances" : 7.69
	},
	"ferocity_soul_ring" : {
	    "type" : "accessory",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"damage_increase" : 50
	    },
	    "label" : "Ferocity’s Soul Ring",
      "k_label": "대악마의 일격의 반지",
	    "id" : "I0DQ",
	    "chances" : 7.69
	},
	"corrupted_mana_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"mp" : 35000
	    },
	    "label" : "Corrupted Mana Robes",
      "k_label": "대악마의 검은 마력로브",
		  "effects" : ["Creates a shield that blocks max mana x0.58 every 10s. Does not stack"],
		  "k_effects" : ["10초마다 최대마나 x 0.58의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"],
	    "id" : "I0DM",
	    "chances" : 8.33
	},
	"malevolent_flame_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"hp" : 30000,
	    	"hp_regen" : -1500
	    },
	    "label" : "Malevolent Flame Armor",
      "k_label": "대악마의 검은불꽃 갑옷",
		  "effects" : ["Deal 8000 + STR x45 damage to all enemies around user per second"],
		  "k_effects" : ["초당생명력 1500감소 초당 주변에 데미지 (8000 + STR x45)"],
	    "id" : "I0DK",
	    "chances" : 8.33
	},
	"archdemon_life_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 3800,
	    	"agi" : 3800,
	    	"int" : 3800,
	    	"hp" : 30000,
	    	"max_health" : 27
	    },
	    "label" : "Arch Demon’s Life Armor",
      "k_label": "대악마의 생명의 갑옷",
	    "id" : "I0DJ",
	    "chances" : 8.33
	},
	"demonic_soul_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "label" : "Demonic Soul Armor",
      "k_label": "대악마의 암광 갑옷",
	    "id" : "I0DE",
	    "chances" : 8.33
	},
	"demonic_amber_vest" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 1100,
	    	"agi" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "label" : "Demonic Amber Vest",
      "k_label": "대악마의 암광 경갑옷",
	    "id" : "I0DF",
	    "chances" : 8.33
	},
	"demonic_amber_robe" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "label" : "Demonic Amber Robe",
      "k_label": "대악마의 암광 로브",
	    "id" : "I0DD",
	    "chances" : 8.33
	},
	"regenerative_malevolent_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Regenerative Malevolent Armor",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 3800,
	    	"agi" : 3800,
	    	"int" : 3800,
	    	"hp" : 30000,
	    	"hp_regen_percent" : 2.7
	    },
      "k_label": "대악마의 재생의 갑옷",
	    "id" : "I0DC",
	    "chances" : 8.33
	},
	"malevolent_flame_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"damage_taken" : 12,
	    	"damage_increase" : 65
	    },
	    "label" : "Malevolent Flame Robes",
      "k_label": "대악마의 증폭 로브",
	    "id" : "I0DL",
	    "chances" : 8.33
	},
	"exalted_soul_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"hp" : 30000,
	    	"damage_taken" : -24
	    },
	    "label" : "Exalted Soul Armor",
      "k_label": "대악마의 표피 갑옷",
	    "id" : "I0DG",
	    "chances" : 8.33
	},
	"exalted_soul_vest" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 1100,
	    	"agi" : 4600,
	    	"hp" : 30000,
	    	"damage_taken" : -24
	    },
	    "label" : "Exalted Soul Vest",
      "k_label": "대악마의 표피 경갑옷",
	    "id" : "I0DH",
	    "chances" : 8.33
	},
	"exalted_soul_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "chest" : "Remnants of the Archdemon",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 4600,
	    	"hp" : 30000,
	    	"damage_taken" : -24
	    },
	    "label" : "Exalted Soul Robes",
      "k_label": "대악마의 표피 로브",
	    "id" : "I0DI",
	    "chances" : 8.33
    },
    "red_magus_helmet" : {
    	"type" : "helmet",
    	"color" : "blue",
    	"materials" : ["dragon_leather_helm", "agony","crystallized_fossil"],
    	"stats" :{
    		"armor" : 700,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300,
	    	"damage_taken" : -13
    	},
    	"label" : "Helmet of the Red Magus",
      "k_label": "붉은 마기의 투구",
    	"id" : "I0CT"
    },
    "hades_helm" : {
    	"type" : "helmet",
    	"color" : "blue",
    	"materials" : ["dragonic_helmet","agony","crystallized_fossil"],
    	"stats" :{
    		"armor" : 700,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300
    	},
    	"label" : "Hades Helm",
      "k_label": "붉은 마력의 투구",
    	"effects" : ["On Use: Grants an anti magic shield for 10 seconds (140s cd)"],
    	"k_effects" : ["사용시 10초간 마법면역 (쿨타임 140초)"],
    	"id" : "I0CU"
    },
	  "forbidden_wisdom" : {
      "type" : "helmet",
	    "color" : "blue",
	    "materials" : ["wise_foresight","agony","crystallized_fossil"],
	    "stats" : {
	    	"armor" : 500,
	    	"mp" : 15000,
	    	"int" : 2000
	    },
	    "label" : "Forbidden Wisdom",
      "k_label": "금지된 지혜",
	    "effects" : ["On Use: Restore 80% of Maximum MP (120s cd)"],
	    "k_effects" : ["사용시 MP80% 회복 (쿨타임 120초)"],
	    "id" : "I0CV"
	},
	"arch_demon_horn" : {
      "type" : "helmet",
	    "color" : "blue",
	    "materials" : ["demonic_sovereign_horn","agony","crystallized_fossil"],
	    "stats" : {
	    	"armor" : 500,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300,
	    	"damage_increase" : 50,
	    	"damage_taken" : 17	
	    },
	    "label" : "Arch Demon’s Horn",
      "k_label": "최상위 악마의뿔",
	    "id" : "I0CW"
	 },
	"surging_flame_helmet" : {
      "type" : "helmet",
	    "color" : "blue",
	    "materials" : ["black_earth_helmet","agony","crystallized_fossil"],
	    "stats" : {
	    	"armor" : 700,
	    	"str" :1300,
	    	"agi" :1300,
	    	"int" :1300,
	    	"damage_increase": 28
	    },
	    "label" : "Helmet of Surging Flame",
      "k_label": "불타는 기운의 투구",
	    "id" : "I0CX"
	 },
	 "war_god_banner" : {
      "type" : "artifact",
	    "color" : "blue",
	    "stats" : {
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000		
	    },
	    "label" : "War God’s Banner",
      "k_label": "대악마의 깃발",
	    "effects" : ["On Use: within 1000 range for 15s", "Recover 3% of Maximum HP every second", "Provide 35% Bonus damage and 100% attack speed", "Item cannot be removed 120s after using (120s cd)"],
	    "k_effects" : ["사용시 범위 1000에 15초간", "초당체력 3%회복", "추가데미지 35% 공격속도 100% 오라 생성(쿨타임 120초)", "사용시 120초간 아이템을 벗을수없음"],
	    "id" : "I0DA",
	    "disabled" : true
	},
	"otherwordly_insight" : {
      "type" : "helmet",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 600,
	    	"mp" : 20000,
	    	"int" :2500
	    },
	    "label" : "Otherworldly Insight",
      "k_label": "대악마의 두뇌",
	    "effects" : ["Recover 100% of maximum MP on use (120s cd)"],
	    "k_effects" : ["사용시 MP100% 회복 (쿨타임 120초)"],
	    "id" : "I038",
	    "chances" : 7.69
	},
	 "darkfire_greatsword" : {
      "type" : "weapon",
	    "color" : "blue",
	    "materials" :["hellfire_great_sword","black_clay_powder","agony","crystallized_fossil"],
	    "stats" : {
	    	"str" :5000,
	    	"atk" :160000
	    },
	    "label" : "Darkfire Greatsword",
      "k_label": "검은 지옥불대검",
	    "effects" : ["Deal 20000 + STR x14 damage to nearby enemies every second", "On use: consume 2% of Maximum HP and deals 60000 + STR x25 damage to nearby enemies every second for 30 seconds (80s cd)"],
	    "k_effects" : ["초마다 주변적들에게 데미지를 가합니다 (20000 + STR x14)", "사용시 30초동안 초당 체력을 2%소모하여 주변에 강력한 데미지를 가합니다 (60000 + STR x25)(쿨타임 80초)"],
	    "id" : "I039"
	},
	"soul_contract" : {
		"type" : "weapon",
		"color" : "blue",
		"materials" :["shadow_contract","black_clay_powder","agony","crystallized_fossil"],
		"stats" : {
			"atk" : 160000,
			"int" : 5000
		},
		"label" : "Soul Contract",
    "k_label": "검은 어둠의 계약",
		"effects" : ["Each spell consumes 4% of HP and MP adding 60% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 60% 증가"],
		"id" : "I047"
	},	
	"malevolent_devil_dagger" : {
		"type" : "weapon",
		"color" : "blue",
    "materials" : ["shadow_spirit_dagger","black_clay_powder","agony","crystallized_fossil"],
		"stats" : {
			"atk" : 160000,
			"agi" : 5000
		},
		"label" : "Dagger of the Malevolent Devil",
    "k_label": "칠흑의 영혼의 단검",
		"effects" : ["Consumes 0.8% of maximum HP for each attack and deals an additional 30000 + AGI x20 damage (Only activates when HP is above 1%)"],
		"k_effects" : ["기본공격시 최대체력 0.8%소모 (체력 1%이상일때 작동) 매공격시 어둠의 일격을 가합니다"],
		"id" : "I04F"
	},
	"great_devil_shadow" : {
      "type" : "helmet",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_increase" :39
	    },
	    "label" : "Great Devil’s Shadow",
      "k_label": "대악마의 어둠",
	    "id" : "I04T",
	    "chances" : 7.69
	},
	"great_devil_skull" : {
      "type" : "helmet",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_taken" :-17
	    },
	    "label" : "Great Devil’s Skull",
      "k_label": "대악마의 두개골",
	    "id" : "I04G",
	    "chances" : 7.69
	},
	"great_devil_helmet" : {
      "type" : "helmet",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000
	    },
	    "label" : "Great Devil’s Helmet",
      "k_label": "대악마의 마력 투구",
	    "effects" :["Anti magic shield for 10 seconds(110s cd)"],
	    "k_effects" :["사용시 10초간 마법면역(쿨타임 110초)"],
	    "id" : "I0DW",
	    "chances" : 7.69
	},
	"great_devil_horn" : {
      "type" : "helmet",
	    "color" : "red",
	    "chest" : "Devil of Agony’s Treasure Chest",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_increase" : 65,
	    	"damage_taken" : 20
	    },
	    "label" : "Great Devil’s Horn",
      "k_label": "대악마의 뿔",
	    "id" : "I0DX",
	    "chances" : 7.69
	},
	"boundless_twilight" : {
	    "type" : "material",
	    "color" : "black",
	    "chest" : "Black Soul Stone",
      "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
	    "label" : "Boundless Twilight",
      "k_label": "끝없는 어둠",
	    "id" : "I0DY",
	    "chances" : 4
	},
	"chaotic_blight_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ['archangel_sigil', 'archangel_sourcewell', 'boundless_twilight', 'chaotic_rune', 'corrupted_mana_robes', 'refined_mana_crystal_robe'],
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 5500,
	    	"mp" : 40000
	    },
	    "label" : "Chaotic Blight Robes",
      "k_label": "대혼돈의 마력로브",
		  "effects" : ["Creates a shield that blocks max mana x0.68 every 10s. Does not stack"],
		  "k_effects" : ["10초마다 최대마나 x 0.68의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"],
	    "id" : "I0DZ"
	},
	"chaotic_infernal_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["malevolent_flame_armor","hellfire_armor","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"hp" : 30000,
	    	"hp_regen" : -2000
	    },
	    "label" : "Chaotic Infernal Armor",
      "k_label": "대혼돈의 불꽃 갑옷",
		  "effects" : ["Deal damage every second (8000 + STR x55)"],
		  "k_effects" : ["초당 주변에 데미지 (8000 + STR x55)"],
	    "id" : "I0E0"
	},
	"chaotic_vigor_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["archdemon_life_armor","gaia_armor","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 4400,
	    	"agi" : 4400,
	    	"int" : 4400,
	    	"hp" : 30000,
	    	"max_health" : 30
	    },
	    "label" : "Chaotic Vigor Armor",
      "k_label": "대혼돈의 생명의 갑옷",
	    "id" : "I0E1"
	},
	"chaotic_bright_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["demonic_soul_armor","armor_of_wind","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "label" : "Chaotic Bright Armor",
      "k_label": "대혼돈의 빛의 갑옷",
	    "id" : "I0E2"
	},
	"chaotic_bright_greaves" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["demonic_amber_vest","wind_leather_armor","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1200,
	    	"agi" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "label" : "Chaotic Bright Greaves",
      "k_label": "대혼돈의 빛의 경갑",
	    "id" : "I0E3"
	},
	"chaotic_bright_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["demonic_amber_robe","aqua_robes","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "label" : "Chaotic Bright Robes",
      "k_label": "대혼돈의 빛의 로브",
	    "id" : "I0E4"
	},
	"chaotic_armor_of_rejuvenation" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["regenerative_malevolent_armor","waterstone_armor","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1100,
	    	"str" : 4400,
	    	"agi" : 4400,
	    	"int" : 4400,
	    	"hp" : 30000,
	    	"hp_regen_percent" : 3
	    },
	    "label" : "Chaotic Armor of Rejuvenation",
      "k_label": "대혼돈의 치유의 갑옷",
	    "id" : "I0E5"
	},
	"chaotic_amplifying_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["malevolent_flame_robes","hellfire_robe","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 5500,
	    	"damage_taken" : 12,
	    	"damage_increase" : 75
	    },
	    "label" : "Chaotic Amplifying Robes",
      "k_label": "대혼돈의 증폭 로브",
	    "id" : "I0E6"
	},
	"chaotic_guardian_armor" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["exalted_soul_armor","exquisite_mithril_armor","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "label" : "Chaotic Guardian Armor",
      "k_label": "대혼돈의 수호 갑옷",
	    "id" : "I0E7"
	},
	"chaotic_shadow_greaves" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["exalted_soul_vest","exquisite_mithril_greaves","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1200,
	    	"agi" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "label" : "Chaotic Shadow Greaves",
      "k_label": "대혼돈의 수호 경갑",
	    "id" : "I0E8"
	},
	"chaotic_amber_robes" : {
	    "type" : "armor",
	    "color" : "red",
	    "materials" : ["exalted_soul_robes","exquisite_mithril_robe","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 1100,
	    	"int" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "label" : "Chaotic Amber Robes",
      "k_label": "대혼돈의 수호 로브",
	    "id" : "I0E9"
	},
	"chaotic_rune" : {
	    "type" : "material",
	    "color" : "black",
	    "materials" : ["agony","crystallized_fossil"],
	    "label" : "Chaotic Rune",
      "k_label": "타오르는 비명석",
	    "id" : "I0EA"
	},
	"chaos_orb" : {
	    "type" : "accessory",
	    "color" : "red",
	    "materials" : ["devil_shadow_jewel","blight_stone","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"hp" : 45000,
	    	"mp" : 30000,
	    	"movement_speed" : 200,
	    	"hp_regen" : 1000
	    },
	    "label" : "Chaos Orb",
      "k_label": "대혼돈의 보석",
	    "id" : "I0EB"
	},
	"chaotic_mana_stone" : {
	    "type" : "accessory",
	    "color" : "red",
	    "materials" : ["devil_soulstone","refined_mana_heart","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"int" : 5500,
	    	"mp" : 55000
	    },
	    "label" : "Chaotic Mana Stone",
      "k_label": "대혼돈의 마력",
      "effects" : ["Recover 55% of maximum MP every 28 seconds"],
	    "k_effects" : ["28초마다 최대마나 55%회복"],
	    "id" : "I0EC"
	},
	"chaotic_life_stone" : {
	    "type" : "accessory",
	    "color" : "red",
	    "materials" : ["devil_heart","refined_dragon_heart","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"str" : 5500,
	    	"hp" : 55000
	    },
	    "label" : "Chaotic Life Stone",
      "k_label": "대혼돈의 생명",
	    "effects" : ["Recover 55% of maximum HP every 28 seconds"],
	    "k_effects" : ["28초마다 최대체력 55%회복"],
	    "id" : "I0ED"
	},
	"murkey_chaos_ring" : {
	    "type" : "accessory",
	    "color" : "red",
	    "materials" : ["archdemon_soul_ring","black_soul_ring","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"damage_increase" : 35
	    },
	    "label" : "Murkey Chaos Ring",
      "k_label": "대혼돈의 내면",
	    "effects" : ["On Use: Provides 90% bonus damage for 15 seconds (120s cd)"],
	    "k_effects" : ["사용시 15초간 추가데미지 90%증가(쿨타임 120초)"],
	    "id" : "I0EE"
	},
	"essence_of_chaos" : {
	    "type" : "accessory",
	    "color" : "red",
	    "materials" : ["ferocity_soul_ring","blue_sky_jewel","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"damage_increase" : 58
	    },
	    "label" : "Essence of Chaos",
      "k_label": "대혼돈의 힘",
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
    "k_label": "정제된 마나 하트",
		"effects" : ["Recover 40% of MAX MP every 28 seconds"],
		"k_effects" : ["28초마다 최대마나 40%회복"],
		"id" : "I0CL"
    },
  "chaotic_mana_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "materials" : ["mana_rune","mana_sigil","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "mp" : 12000
    },
    "label" : "Chaotic Mana Rune",
    "k_label": "대혼돈의 마나룬",
    "id" : "I0EG"
  },
  "chaotic_mana_potion" : {
    "type" : "auxiliary",
    "color" : "red",
    "materials" : ["archangel_mana_potion","magician_mana_potion","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000
    },  
    "label" : "Chaotic Mana Potion",
    "k_label": "대혼돈의 마나포션",
    "effects" : ["On Use: Restore 35% of maximum mana (25s cd)"],
    "k_effects" : ["사용시 최대마나 35%회복 (쿨타임 25초)"],
    "id" : "I0EH"
  },
  "chaotic_potion" : {
    "type" : "auxiliary",
    "color" : "red",
    "materials" : ["archangel_potion","warrior_vitality_potion","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000
    },  
    "label" : "Chaotic Potion",
    "k_label": "대혼돈의 포션",
    "effects" : ["On Use: Restore 30% of health (25s cd)"],
    "k_effects" : ["사용시 최대생명력 30%회복 (쿨타임 25초)"],
    "id" : "I0EL"
  },
  "chaotic_life_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "materials" : ["life_rune","life_sigil","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "hp" : 20000
    },
    "label" : "Chaotic Life Rune",
    "k_label": "대혼돈의 생명룬",
    "id" : "I0EI"
  },
  "chaotic_ascension_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "materials" : ["archangel_ascent","ferocity_sigil","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"], 
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "movement_speed" : 100,
      "attack_speed" : 80
    },
    "label" : "Chaotic Ascension Rune",
    "k_label": "대혼돈의 순풍룬",
    "id" : "I0EJ"
  },
  "chaotic_magic_rune" : {
    "type" : "auxiliary",
    "color" : "red",
    "materials" : ["magic_rune","magic_sigil","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"],
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "damage_increase" : 18
    },
    "label" : "Chaotic Magic Rune",
    "k_label": "대혼돈의 일격룬",
    "id" : "I0EK"
	},
	"helm_of_chaos" : {
	    "type" : "helmet",
	    "color" : "red",
      "materials" : ["great_devil_shadow", "surging_flame_helmet","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"], 
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_increase" :45
	    },
	    "label" : "Helmet of Chaos",
      "k_label": "대혼돈의 광체",
	    "id" : "I0EQ"
	},
	"chaotic_plated_helmet" : {
      "type" : "helmet",
	    "color" : "red",
	    "materials" : ["great_devil_skull","red_magus_helmet","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_taken" :-24
	    },
	    "label" : "Chaotic Plated Helmet",
      "k_label": "대혼돈의 수호투구",
	    "id" : "I0EM"
	},
	"runic_chaos_helm" : {
      "type" : "helmet",
	    "color" : "red",
	    "materials" : ["great_devil_helmet","hades_helm","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500
	    },
	    "label" : "Runic Chaos Helm",
      "k_label": "대혼돈의 이뮨투구",
	    "effects" :["Anti magic shield for 12 seconds(110s cd)"],
	    "k_effects" :["사용시 12초간 마법면역 (쿨타임 110초)"],
	    "id" : "I0EO"
	},
	"chaotic_demon_horn" : {
      "type" : "helmet",
	    "color" : "red",
	    "materials" : ["great_devil_horn","arch_demon_horn","boundless_twilight","chaotic_rune","archangel_sourcewell", "archangel_sigil"],
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_increase" : 75,
	    	"damage_taken" : 22
	    },
	    "label" : "Chaotic Demon Horn",
      "k_label": "대혼돈의 뿔",
	    "id" : "I0EP"
	},
	"chaotic_insight" : {
		"type" : "helmet",
		"color" : "red",
		"materials" : ["otherwordly_insight","forbidden_wisdom","chaotic_rune","boundless_twilight","archangel_sourcewell", "archangel_sigil"],
		"stats" :{
			"int" : 3200,
			"armor" : 700,
			"mp" : 25000
		},
		"label" : "Chaotic Insight",
    "k_label": "대혼돈의 지혜",
		"effects" : ["On Use: Restore 100% of maximum mana (120s cd)"],
		"k_effects" : ["사용시 MP100% 회복 (쿨타임 120초)"],
		"id" : "I0EN"
	},
  "rainbow_gem": {
    "type": "accessory",
    "color" : "blue",
    "raid" : "Blue Dragon",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats" : {
 	    "str": 3000,
	    "agi": 3000,
	    "int": 3000,
      "hp": 15000,
      "movement_speed": 150,
      "damage_increase": 25
    },
    "label" : "Rainbow Gem",
    "k_label": "일곱빛깔 보석",
    "effects" : ["Increases maximum charge by 50 when equipped by Electromaster", "Increases Gather Materials(D) output by 1 when equipped by Potion Maker"],
    "k_effects" : ["일렉트로 마스터가 착용시 최대 전력 50증가", "포션메이커가 착용시 재료넣기 증가 재료 1증가"],
    "id" : "I0EZ",
    "chances" : 0.2
  },
  "cleansing_orb": {
    "type": "auxiliary",
    "color" : "blue",
    "stats" : {
 	    "str" : 2000,
	    "agi" : 2000,
	    "int" : 2000
    },
    "label" : "Cleansing Orb",
    "k_label": "정화의 빛",
    "effects" : ["not yet implemented"],
    "k_effects": ["정화 되버렷!"],
    "id" : "I0F0",
    "disabled": true
  },
  "angra_mainyu": {
    "type": "weapon",
    "color" : "blue",
    "raid" : "Belial of Pain",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500      
    },
    "label" : "Angra Mainyu",
    "k_label": "앙그라마이뉴",
    "effects" : ["Each basic attack or spell hit has a 1% chance to unleash the evils", "Debuffs enemies for 2.5 seconds", "Adds an additional 40% Bonus Damage", "Deathscythe has a 4% chance to debuff on attack"],
    "k_effects" : ["기본공격 또는 스킬공격시 1% 확률로 이세상 모든악을 겁니다", "2.5초간 디버프에 걸린 적을공격", "추가데미지 40%의 추가데미지 발생", "데스사이즈가 공격시 확률 4%로 디버프를 겁니다"],
    "id" : "I0F1",
    "chances" : 0.2
  },
  "barium_boots" : {
    "type" : "artifact",
    "color" : "blue",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "raid" : "Beresa of the Black Earth",
    "stats" : {
 	    "str" : 2500,
	    "agi" : 2500,
	    "int" : 2500,
      "movement_speed" : 150,
      "damage_increase": 25
    },
    "label" : "Barium Boots",
    "k_label": "바라늄 부츠",
    "effects" : ["On Use: cloaks the user for 3 seconds (9s cd)", "Maximum Movement Speed while cloaked", "Attacking in cloaked state will deal (allstats x 20)", "Hot Blooded cooldown is reduced by 10 seconds when worn by Assassin", "Increases max combo limit by 3 when worn by Fighter"],
    "k_effects" : ["사용시 3초간 은신 (쿨타임 9초)", "이동속도 최대", "은신 상태에서 기본공격시 올스텟 x 20의 데미지", "암살자가 착용시 블러드 히트 쿨타임 10초 감소", "격투가가 착용시 최대 콤보 3증가"],
    "id" : "I0F3",
    "chances" : 0.2    
  },
  "vengeance_grasp" : {
    "type" : "weapon",
    "color" : "blue",
    "raid" : "Amon of Hellfire",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500      
    },
    "label" : "Grasp of Vengeance",
    "k_label": "불타는 복수의 손아귀",
    "effects": ["Damages enemies that attack the user (Allstats x 8)", "When worn by Protector of Light “Holy Light” becomes red and adds (Strength x 10) additional damage"],
    "k_effects": ["적에게 공격을 받을시 적에게 데미지를 가합니다 (올스텟 x 8)", "빛의 수호자가 착용시 빛의복수 스킬이 붉은 색으로 변하며 힘 x 10의 데미지가 추가로 들어갑니다"],
    "id" : "I0F2",
    "chances" : 0.2
  },
  "distilled_tree_sap" : {
    "type" : "weapon",
    "color" : "blue",
    "raid" : "Mother Tree",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500      
    },
    "label" : "Distilled Tree Sap",
    "k_label": "마더트리 엑기스",
    "effects": ["On Use: Buff for 60 seconds (30s cd)", "Restores 1% of HP per second", "Increases all attributes by 500", "Grants 18% Bonus Damage", "Cannot be dropped after use", "When used by Priest, stat buff is increased to 800"],
    "k_effects": ["사용시 사용대상에60초동안버프(쿨타임 30초)", "초당 생명력 1%회복", "모든스텟 500증가", "추가데미지 18% 증가", "아이템사용시 60초간 아이템을 벗을수없음", "프리스트가 사용시 올스텟 800상승"],
    "id" : "I0F9",
    "chances" : 0.2
  },
  "death_approach" : {
    "type" : "weapon",
    "color" : "blue",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "raid" : "Belial of Pain",
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500      
    },
    "label" : "Death’s Approach",
    "k_label": "다가오는 죽음",
    "effects": ["Grants a 0.01% chance to land a critical strike (300000 + (AGI + STR + INT) x80)", "Every basic attack raises the critical strike chance by 0.01%", "Once a critical strike lands, reset the critical strike probability", "When equipped by martial artist, death strike is enhanced", "Strengthens Ranged Combat Mastery when worn by Range Master"],
    "k_effects": ["기본 공격시 0.01%확률로 필살의 일격을 가합니다 (300000 + (AGI + STR + INT) x80)", "공격할때마다 확률이 0.01%씩 증가합니다", "필살의 일격을 가한후에는 확률 초기화", "무도가가 착용시 죽음의일격 강화", "레인지 마스터가 착용시 레인지 컴뱃 마스터리 강화"],
    "id" : "I0FA",
    "chances" : 0.2
  },
  "purgatory" : {
    "type" : "weapon",
    "color" : "blue",
    "raid" : "Mother Tree",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500
    },
    "label" : "Purgatory",
    "k_label": "생명과 죽음의 경계",
    "effects": ["When health falls below 50%, 80% bonus damage and consumes 2% hp every second (won't kill)", "When health above 50%, 20% damage reduce and 2% hp regen every second", "When worn by Berserker or Blood Test", "grants an additional 10% bonus damage and 5% damage reduce"],
    "k_effects": ["생명력이 50% 이하일때", "공격할때마다 확률이 0.01%씩 증가합니다", "추가데미지 80%증가 초당 생명력 2% 감소(죽지않음)", "생명력이 50%이상일때 받은데미지 20% 회복 초당 생명력 2%회복", "버서커/혈검사 사용", "추가데미지 증가분 10%추가 증가", "받은데미지 회복 5% 추가 증가"],
    "id" : "I0FD",
    "chances" : 0.2
  },
  "fire_will" : {
    "type" : "weapon",
    "color" : "blue",
    "raid" : "Amon of Hellfire",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500
    },
    "label" : "The Will of Fire",
    "k_label": "불의 의지",
    "effects": ["Create an aura with 1050 range", "Recovers 0.5% health every second", "Recovers 1% mana every second", "12% Bonus damage aura", "Reduce all damage taken by 8%", "Reduce the cooldown of Stage by 10 seconds when worn by Bard"],
    "k_effects": ["범위 1050의 오라 생성", "초당 생명력 0.5% 회복", "초당 마나 1%회복", "추가데미지 12% 증가", "받은 데미지 8% 회복", "바드가 사용시 달아오르는 무대 쿨타임 10초 감소"],
    "id" : "I0FE",
    "chances" : 0.2
  },
  "yata_mirror" : {
    "type" : "artifact",
    "color" : "blue",
    "raid" : "Blue Dragon",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats" : {
 	    "str" : 2500,
	    "agi" : 2500,
	    "int" : 2500,
      "damage_increase": 10
    },
    "label" : "Yata’s Mirror",
    "k_label": "야타의 거울",
    "effects": ["When equipped, each spell cast will accumulate a charge (Max Charges = 50)", "On Use: deals 100000 + Charges x Allstats x3 damage to all enemies within 600 units", "Reduces the amount of energy required by Regular Hunter to dash by 1", "When worn by Greatsword, Sword Swing deals an additional (Allstats x 4) (lies)"],
    "k_effects": ["스킬사용시 무기에 에너지를 축척함", "아이템 사용시 범위 600의 적에게", "축적된 100000 + 에너지 x (올스텟 x 3)의 데미지를 줌(최대에너지 50)", "이레귤러헌터 대쉬  에너지 필요갯수 1감소", "그레이트 소드 착용시 올스텟 x 4 로적용"],
    "id" : "I0FF",
    "chances" : 0.2
  },
  "vampiric_armor" : {
    "type" : "armor",
    "color" : "blue",
    "raid" : "Beresa of the Black Earth",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats" : {
 	    "str" : 3000,
	    "agi" : 3000,
	    "int" : 3000,
      "armor": 1000,
      "hp": 40000
    },
    "label" : "Vampiric Armor",
    "k_label": "불멸의 갑옷",
    "effects": ["On Use: Doubles health for 20 second (180s cd, cant be dropped while active)", "Lowers the cooldown of Heartspan and bloodfield by 10 seconds when worn by Bloodlord"],
    "k_effects": ["사용시 20초간 생명력이 2배가됨", "(쿨타임 180초)(지속 시간동안 아이템을 벗을수 없음)", "블러드 로드 착용시 코코로 와타티 쿨타임 10초 감소"],
    "id" : "I0FG",
    "chances" : 0.2
  },
  "bamboo_spear": {
    "type": "weapon",
    "color": "blue",
    "raid": "Mother Tree",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats": {
      "atk": 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500
    },
    "label": "Bamboo Spear",
    "k_label": "죽창",
    "effects": ["Each attack has 10% (13% with lancer) chance to deal 500% bonus damage", "When worn by Lancer, reduces the cooldown of Gae Bolg by 8 seconds"],
    "k_effects": ["공격시 10%확률로 추가데미지 500%", "랜서가 사용시 뚫어죽이는창 쿨타임 8초 감소"],
    "id": "I0FL",
    "chances": 0.2
  },
  "lethal_gaze": {
    "type": "helmet",
    "color": "blue",
    "raid" : "Belial of Pain",
    "materials": ["luck_token", "luck_token", "luck_token", "luck_token", "luck_token"],
    "stats": {
 	    "str" : 1700,
	    "agi" : 1700,
	    "int" : 1700,
      "armor": 900
    },
    "label": "Lethal Gaze",
    "k_label": "죽음을 응시하는 눈",
    "effects": ["Each skill used adds 1 stack", "When stacks reach 100, deals 200000 + (All Stats x 60)", "When worn by Explosion Wizard, enhances Fire Wave", "When worn by Overmind, enhances Void"],
    "k_effects": ["스킬 적중시 죽음스택을 쌓음", "100스택일떄 스킬 적중시 죽음의 폭발발생 (올스텟 x 60)", "폭렬 마법사가 사용시 파이어웨이브 강화", "오버마인드가 사용시 보이드 강화"],
    "id": "I0FM",
    "chances": 0.2
  },
  "sealed_god_sword": {
    "type": "weapon",
    "color": "god",
    "chest": "Sealed God of Destruction",
    "stats": {
      
    },
    "label": "Sealed God Sword",
    "k_label": "봉인된 신의 무구",
    "id": "I0G2",
    "chances": 1
  },
  "archangel_great_sword": {
    "type": "weapon",
    "color": "red",
    "chest" : "Archangel’s Assistance",
    "materials" : ["archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece", "archangel_treasure_piece"],
    "stats": {
      "atk" : 230000,
      "str": 6500,
      "damage_increase": 55
    },
    "label": "Archangel's Great Sword",
    "k_label": "대천사의 대검",
    "id": "I0G4",
    "chances": 5.55
  },
  "archangel_great_sword_1": {
    "type": "weapon",
    "color": "red",
		"materials" : ["archangel_great_sword", "beresa_sword", "archangel_sourcewell", "archangel_sigil", "god_essence"],
    "stats": {
      "atk" : 260000,
      "str": 7000,
      "damage_increase": 60
    },
    "rate": 30,
    "label": "Archangel's Great Sword +1",
    "k_label": "대천사의 대검 +1",
    "id": "I0G5"
  },
  "archangel_great_sword_2": {
    "type": "weapon",
    "color": "red",
		"materials" : ["archangel_great_sword_1", "archangel_great_sword", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "god_essence"],
    "stats": {
      "atk" : 300000,
      "str": 7500,
      "damage_increase": 65
    },
    "rate": 25,
    "label": "Archangel's Great Sword +2",
    "k_label": "대천사의 대검 +2",
    "id": "I0G6"
  },
  "archangel_great_sword_3": {
    "type": "weapon",
    "color": "red",
		"materials" : ["archangel_great_sword_2", "archangel_great_sword", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "archangel_sigil", "archangel_sourcewell", "god_essence"],
    "stats": {
      "atk" : 350000,
      "str": 8000,
      "damage_increase": 70
    },
    "rate": 20,
    "label": "Archangel's Great Sword +3",
    "k_label": "대천사의 대검 +3",
    "id": "I0G7"
  },
  "sage_robe": {
    "type": "armor",
		"color" : "orange",
		"materials" : ["masters_robe", "mastermind_token", "waterstone_fragment"],
    "stats": {
      "int": 4000,
      "armor": 700
    },
    "label": "The Sage's Robe",
    "k_label": "명인의 로브",
    "id": "I0G8"
  },
  "titan_robe": {
    "type": "armor",
		"color" : "blue",
		"materials" : ["sage_robe", "mother_tree_bark", "black_clay_powder", "dragon_slayer_mark"],
    "stats": {
      "int": 5100,
      "armor": 800
    },
    "label": "The Titan's Robe",
    "k_label": "지존의 로브",
    "id": "I0G9"
  },
  "devil_king_robe": {
    "type": "armor",
		"color" : "red",
	  "chest" : "Remnants of the Archdemon",  
    "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
    "stats": {
      "int": 6900,
      "armor": 1000
    },
    "label": "The Devil King's Robe",
    "k_label": "대악마의 패왕 로브",
    "id": "I0GA",
    "chances": 8.33
  },
  "chaotic_king_robe": {
    "type": "armor",
		"color" : "red",
	  "materials" : ["devil_king_robe","titan_robe","boundless_twilight","chaotic_rune", "archangel_sourcewell", "archangel_sigil"],    
    "stats": {
      "int": 8300,
      "armor": 1100
    },
    "label": "Chaotic \"True\"Devil King's Robe",
    "k_label": "대혼돈의 \"진\"패왕 로브",
    "id": "I0GB"
  },
  "chaotic_light_wings" : {
    "type" : "artifact",
    "color" : "red",
    "materials": ["dazzling_light_wings", "despair_wings", "boundless_twilight", "chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
    "stats" : {
      "str" : 3500,
      "agi" : 3500,
      "int" : 3500,
      "damage_increase" : 26
    },
    "label" : "Chaotic Light Wings",
    "k_label": "대혼돈의 빛의 날개",
    "effects" : ["Enemies within range take 26% Additional Damage"],
    "k_effects": ["범위내 적들 추가데미지 26% 오라"],
    "id" : "I0GI"
  },
	"chaotic_life_wings" : {
		"type" : "artifact",
		"color" : "red",
    "materials" : ["valor_wings", "archangel_wings", "boundless_twilight", "chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
	  "stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
			"hp" : 30000
		},
		"label" : "Chaotic Life Wings",
    "k_label": "대혼돈의 생명의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 60% of MAX HP", "On use restore 20% of MAX HP every second for 10 seconds (120s cd)"],
		"k_effects" : ["생명력이 40%이하일때 즉사가 아닌 공격을받을면", "즉시 생명력 60%를 회복하며 10초간 초당 생명력 20% 회복 (쿨타임 120초)"],
		"id" : "I0GJ"
	},
  "chaotic_boots" : {
		"type" : "artifact",
		"color" : "red",
    "materials" : ["archangel_boots", "lightning_boots", "boundless_twilight", "chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
		"stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
			"attack_speed" : 200,
			"movement_speed" : 200
		},
		"label" : "Chaotic Boots",
    "k_label": "대혼돈의 각반",
		"effects" : ["On Use: Dash forward (4.5s cd)"],
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임4.5초)"],
		"id" : "I0GK"
	},
	"chaotic_devil_wings" : {
		"type" : "artifact",
		"color" : "red",
    "materials" : ["justice_wings", "nightmare_wings" ,"boundless_twilight", "chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
		"stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
			"damage_increase" : 52
		},
		"label" : "Chaotic Devil Wings",
    "k_label": "대혼돈의 날개",
		"id" : "I0GL"
	},
	"assassination_ring" : {
		"type" : "accessory",
		"color" : "purple",
    "materials" : ["approval_enhanced_ring", "destruction_essence" ,"insanity_essence"],
		"stats" : {
			"str" : 800,
			"agi" : 800,
			"int" : 800
		},
		"label" : "Assassination Ring",
    "k_label": "암살의 반지",
    "effects": ["20% chance to deal x1.5 damage on basic attacks"],
    "k_effects": ["기본공격시 20%확률로 1.5배 데미지"],
		"id" : "I0GM"
	},
	"blazing_death_ring" : {
		"type" : "accessory",
		"color" : "purple",
    "materials" : ["assassination_ring", "destruction_essence" ,"mastermind_token"],
		"stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100
		},
		"label" : "Ring of Blazing Death",
    "k_label": "타오르는 죽음의 반지",
    "effects": ["20% chance for x2 damage on basic attacks"],
    "k_effects": ["20%확률 2배 크리티컬"],
		"id" : "I0GN"
	},
	"amethyst_ring" : {
		"type" : "accessory",
		"color" : "orange",
    "materials" : ["blazing_death_ring", "dragon_slayer_mark" ,"waterstone_fragment"],
		"stats" : {
			"str" : 1700,
			"agi" : 1700,
			"int" : 1700
		},
		"label" : "Amethyst Ring",
    "k_label": "자수정 반지",
    "effects": ["20% chance for x2.5 damage on basic attacks"],
    "k_effects": ["20%확률 2.5배 크리티컬"],
		"id" : "I0GO"
	},
	"amethyst_gem" : {
		"type" : "accessory",
		"color" : "blue",
    "materials" : ["amethyst_ring", "dragon_slayer_mark" ,"black_clay_powder", "mother_tree_bark"],
		"stats" : {
			"str" : 2500,
			"agi" : 2500,
			"int" : 2500
		},
		"label" : "Amethyst Gem",
    "k_label": "교언의 자수정",
    "effects": ["20% chance for x3 damage on basic attacks"],
    "k_effects": ["20%확률 3배 크리티컬"],
		"id" : "I0GP"
	},
	"death_demon_gem" : {
		"type" : "accessory",
		"color" : "red",
	  "chest" : "Devil of Agony’s Treasure Chest",
    "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
		"stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500
		},
		"label" : "Death Demon Gem",
    "k_label": "대악마의 죽음을 보는보석",
    "effects": ["25% chance for x3.5 damage on basic attacks"],
    "k_effects": ["25%확률 3.5배 크리티컬"],
		"id" : "I0GQ",
    "chances": 7.69
	},
	"great_chaos_gem" : {
		"type" : "accessory",
		"color" : "red",
    "materials" : ["death_demon_gem", "amethyst_gem" ,"boundless_twilight", "chaotic_rune", "archangel_sourcewell", "archangel_sigil"],
		"stats" : {
			"str" : 4300,
			"agi" : 4300,
			"int" : 4300
		},
		"label" : "Great Chaos Gem",
    "k_label": "대혼돈의 죽음을 보는보석",
    "effects": ["25% chance for x4 damage on basic attacks"],
    "k_effects": ["25% 4배 크리티컬"],
		"id" : "I0GR"
	},
  "sealed_god_armor": {
    "type": "armor",
    "color": "god",
    "chest": "Sealed God of Destruction",
    "stats": {
      "armor" : 1000,
      "str": 3800,
      "agi": 3800,
      "int": 3800
    },
    "label": "Sealed God Armor",
    "k_label": "봉인된 신의 갑옷",
    "id": "I0H5",
    "chances": 1
  },	
	"sealed_destruction_god" : {
	    "type" : "chest",
	    "color" : "black",
	    "raid" : "God of Destruction",
	    "label" : "Sealed God of Destruction",
      "k_label": "봉인된 파멸의 신",
	    "effects" : ["Requires at least 11000 base stats for devil drop"],
	    "k_effects" : ["드랍하려면 최소한 11000의 스탯이 필요하다."],
	    "id" : "I0HA",
	    "chances" : 100
	},
  "sealed_god_accessory": {
    "type": "accessory",
    "color": "god",
    "chest": "Sealed God of Destruction",
    "stats": {
      "str": 3500,
      "agi": 3500,
      "int": 3500
    },
    "label": "Sealed God Accessory",
    "k_label": "봉인된 신의 악세서리",
    "id": "I0H6",
    "chances": 1
  },
  "sealed_god_rune": {
    "type": "auxiliary",
    "color": "god",
    "chest": "Sealed God of Destruction",
    "stats": {
      "str": 1500,
      "agi": 1500,
      "int": 1500
    },
    "label": "Sealed God Rune",
    "k_label": "봉인된 신의 룬",
    "id": "I0H7",
    "chances": 1
  },
  "sealed_god_helmet": {
    "type": "helmet",
    "color": "god",
    "chest": "Sealed God of Destruction",
    "stats": {
      "str": 3500,
      "agi": 3500,
      "int": 3500,
      "armor": 1000
    },
    "label": "Sealed God Helmet",
    "k_label": "봉인된 신의 투구",
    "id": "I0H8",
    "chances": 1
  },
  "sealed_god_wings": {
    "type": "artifact",
    "color": "god",
    "chest": "Sealed God of Destruction",
    "stats": {
      "str": 4500,
      "agi": 4500,
      "int": 4500
    },
    "label": "Sealed God Wings",
    "k_label": "봉인된 신의 날개",
    "id": "I0H9",
    "chances": 1
  },
  "destruction_power": {
    "color": "black",
    "type": "material",
    "chest": "Sealed God of Destruction",
    "label": "Power of destruction",
    "k_label": "파멸의 권능",
    "id": "I0HB",
    "chances": 1
  },
  "black_god_energy": {
    "color": "black",
    "type": "material",
    "chest": "Sealed God of Destruction",
    "label": "Black God Energy",
    "k_label": "검은 신의 에너지",
    "id": "I0HC",
    "chances": 1
  },
  "sealed_god_speed_dagger": {
    "type": "weapon",
    "color": "god",
    "materials": ['archangel_dagger_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
    "stats": {
      "atk": 500000,
      "agi": 11000,
      "attack_speed": 300
    },
    "label": "Sealed God Speed Dagger",
    "k_label": "신의 단검",
    "effects": ["Each attack has a 12% chance to deal 300000 + STR x36 bonus damage"],
    "k_effects": ["기본공격시 일정확률로 신의 일격을 가함 (12% 기회 300000 + STR x36)"],
    "id": "I0HD"
  },
  "sealed_god_damage_dagger": {
    "type": "weapon",
    "color": "god",
    "materials": ['archangel_gauntlets_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
    "stats": {
      "atk": 500000,
      "agi": 11000,
	    "damage_increase" : 180,
	    "damage_taken" : 45
    },
    "label": "Sealed God Damage Dagger",
    "k_label": "신의 건들릿",
    "id": "I0HE"
  },
  "sealed_god_dagger": {
    "type": "weapon",
    "color": "god",
    "materials": ['archangel_blade_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
    "stats": {
      "atk": 500000,
      "agi": 11000,
      "damage_increase": 90
    },
    "label": "Sealed God Dagger",
    "k_label": "신의 도검",
    "effects": ["Deals damage proportional to stats when used (120s cd)"],
    "k_effects": ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"],
    "id": "I0HG"
  },
  "luck_token": {
    "type": "material",
    "color": "black",
    "label": "Luck Token",
    "k_label": "행운의 증표",
    "effects": ["Can be obtained by selling a char item"],
    "k_effects": ["캐릭터 상품을 판매하여 얻을 수 있습니다"],
    "id": "I0GS"
  },
    "sealed_god_longsword": {
      "type": "weapon",
      "color": "god",
      "materials": ['black_god_energy', 'destruction_power', 'excalibur_3', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "str": 8500,
        "agi": 8500,
        "int": 8500
      },
      "label": "Sealed God Longsword",
      "k_label": "신의 장검",
      "effects": ["Deals damage proportional to stats when used (120s cd)"],
      "k_effects": ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"],
      "id": "I0HF"
  },
    "god_magic_staff": {
      "type": "weapon",
      "color": "god",
      "materials": ['archangel_mana_staff_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "int": 11000,
        "mp": 45000
      },
      "label": "God's Magic Staff",
      "k_label": "신의 마력 지팡이",
      "effects": ["Generates extra damage proportional to mana (4.9% every 10000)", "4% reduction of maximum hp when using skill", "(Works when above 10% max hp)"],
      "k_effects": ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.9%)", "스킬사용시 최대마력의 4%감소", "(마력이 10%이상 있을때 작동)"],
      "id": "I0HH"
  },
    "destruction_staff": {
      "type": "weapon",
      "color": "god",
      "materials": ['black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "int": 11000
      },
      "label": "Staff of Destruction",
      "k_label": "파멸의 지팡이",
      "effects": ["45% armor increase to nearby allies"],
      "k_effects": ["주변아군 추가데미지 45%증가 오라 생성"],
      "id": "I0HI"
  },
    "god_life_sword": {
      "type": "weapon",
      "color": "god",
      "materials": ['angelic_life_sword_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "str": 11000,
        "hp": 75000
      },
      "label": "God's Sword of Life",
      "k_label": "신의 생명의검",
      "effects" : ["Every 10 attacks will recover STR x6.7 HP (9s cd)", "Every 6 spells will recover STR x6.7 HP (10s cd)", "On Use: Restores STR x6.7 HP (120s cd)"],
      "k_effects" : ["기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)", "사용시  생명력회복 (STR x6.7)(쿨타임 120초)"],
      "id": "I0HJ"
  },
    "god_life_bow": {
      "type": "weapon",
      "color": "god",
      "materials": ['archangel_life_bow_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "agi": 11000,
        "hp": 75000
      },
      "label": "God's Bow of Life",
      "k_label": "생명의 신궁",
      "effects" : ["Every 10 attacks will recover AGI x6.7 HP (9s cd)", "Every 6 spells will recover AGI x6.7 HP (10s cd)", "On Use: Restores AGI x6.7 HP (120s cd)"],
      "k_effects" : ["기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)", "사용시  생명력회복 (AGI x6.7)(쿨타임 120초)"],
      "id": "I0HK"
  },
    "god_life_staff": {
      "type": "weapon",
      "color": "god",
      "materials": ['archangel_life_staff_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "int": 11000,
        "hp": 75000
      },
      "label": "God's Staff of Life",
      "k_label": "신의 생명 지팡이",
      "effects" : ["Every 4 spells will recover INT x7.5 HP (10s cd)", "On Use: Restore INT x10 HP of all allies within range (80s cd)"],
      "k_effects": ["스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x10)(쿨타임 80초)"],
      "id": "I0G3"
  },
    "god_sword": {
      "type": "weapon",
      "color": "god",
      "materials": ['archangel_sword_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "str": 9500,
        "agi": 9500
      },
      "label": "God's Sword",
      "k_label": "신의 소검",
      "effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x14.4 bonus damage", "On use: 400000 + (STR + AGI) x180 damage"],
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x14.4)", "사용시 400000 + (STR + AGI) x180 (쿨타임 80초)"],
      "id": "I0GC"
  },
    "god_judgement": {
      "type": "weapon",
      "color": "god",
      "materials": ['archangel_judgement_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "str": 11000,
        "attack_speed": 250
      },
      "label": "God's Judgement",
      "k_label": "신의 심판",
      "effects" : ["Each attack has a 12% chance to deal 300000 + STR x80 bonus damage"],
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + STR x80)"],
      "id": "I0GD"
  },
    "god_staff": {
      "type": "weapon",
      "color": "god",
      "materials": ['archangel_staff_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "str": 9500,
        "int": 9500
      },
      "label": "God's Staff",
      "k_label": "신의 일격 지팡이",
      "effects" : ["Each attack has a 8% chance to deal 30000 + (INT + INT) x36 bonus damage"],
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (8% 기회 30000 + (INT + INT) x36)"],
      "id": "I0HL"
  },
    "god_amber_staff": {
      "type": "weapon",
      "color": "god",
      "materials": ['archangel_amber_staff_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "int": 11000,
        "damage_increase" : 90
      },
      "label": "God's Amber Staff",
      "k_label": "신의 증폭 지팡이",
      "id": "I0HM"
  },
    "god_judgement_staff": {
      "type": "weapon",
      "color": "god",
      "materials": ['archangel_judgement_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "int": 11000
      },
      "label": "God's Judgement Staff",
      "k_label": "신의 심판 지팡이",
      "effects" : ["Each attack has a 8% chance to deal 30000 + INT x90 bonus damage"],
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (8% 기회 30000 + INT x90)"],      
      "id": "I0HN"
  },
    "god_blessed_staff": {
      "type": "weapon",
      "color": "god",
      "materials": ['black_god_energy', 'blessed_staff_3', 'destruction_power', 'sealed_god_treasure'],
      "stats": {
        "atk": 500000,
        "int": 11000
      },
      "label": "God's Blessed Staff",
      "k_label": "신의 권능",
      "effects" : ["On Use: Summons an apostle"],
      "k_effects": ["사용시 신궁의 사도 소환"],     
      "id": "I0HP"
  },
  "burning_energy" : {
		"type" : "stats",
		"color" : "darkred",
		"raid" : "Amon of Hellfire",
		"stats_points" : 14,
		"label" : "Burning Energy",
    "k_label": "불타는 에너지",
		"id" : "I0HQ",
		"chances" : 15
	},
  "suffering_energy" : {
		"type" : "stats",
		"color" : "darkred",
		"raid" : "Belial of Pain",
		"stats_points" : 14,
		"label" : "Suffering Energy",
    "k_label": "고통의 에니저",
		"id" : "I0HR",
		"chances" : 15
	},
  "sealed_god_treasure": {
    "type": "material",
    "color" : "black",    
    "chest": "Sealed God of Destruction",
    "label": "Sealed God's Treasure",
    "k_label": "봉인된 신의 보물",
    "id": "I0HT",
    "chances": [1]
  },
  "destruction_wings" : {
		"type" : "artifact",
		"color" : "god",
    "materials": ['black_god_energy', 'chaotic_devil_wings', 'destruction_power', 'sealed_god_treasure'],
		"stats" : {
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000,
			"damage_increase" : 65
		},
		"label" : "Wings of Destruction",
    "k_label": "파멸의 날개",
		"id" : "I0HU"
	},
  "destruction_light_wings" : {
    "type" : "artifact",
    "color" : "god",
    "materials": ['black_god_energy', 'chaotic_light_wings', 'destruction_power', 'sealed_god_treasure'],
    "stats" : {
      "str" : 5000,
      "agi" : 5000,
      "int" : 5000,
      "damage_increase" : 34
    },
    "label" : "Light Wings of Destruction",
    "k_label": "눈부신 신의 날개",
    "effects" : ["Enemies within range take 34% Additional Damage"],
    "k_effects": ["범위내 적들 추가데미지 34% 오라"],
    "id" : "I0HV"
  },
	"destruction_life_wings" : {
		"type" : "artifact",
		"color" : "god",
    "materials": ['black_god_energy', 'chaotic_life_wings', 'destruction_power', 'sealed_god_treasure'],
	  "stats" : {
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000,
			"hp" : 50000
		},
		"label" : "Life Wings of Destruction",
    "k_label": "신의 생명의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 100% of MAX HP", "On use restore 20% of MAX HP every second for 10 seconds (120s cd)"],
		"k_effects" : ["생명력이 40%이하일때 즉사가 아닌 공격을받을면", "즉시 생명력 100%를 회복하며 10초간 초당 생명력 20% 회복 (쿨타임 120초)"],
		"id" : "I0HW"
	},
  "destruction_boots" : {
		"type" : "artifact",
		"color" : "god",
    "materials": ['black_god_energy', 'chaotic_boots', 'destruction_power', 'sealed_god_treasure'],
		"stats" : {
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000,
			"attack_speed" : 300,
			"movement_speed" : 200
		},
		"label" : "Boots of Destruction",
    "k_label": "신의 각반",
		"effects" : ["On Use: Dash forward (2.8s cd)"],
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임2.8초)"],
		"id" : "I0HX"
	},
  "god_great_sword": {
    "type": "weapon",
    "color": "god",
    "materials": ['archangel_great_sword_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
    "stats": {
      "atk" : 500000,
      "str": 11000,
      "damage_increase": 90
    },
    "label": "God's GreatSword",
    "k_label": "신의 대검",
    "id": "I0I2"
  },
  "god_mana_rune" : {
    "type" : "auxiliary",
    "color" : "god",
    "materials": ['black_god_energy', 'chaotic_mana_rune', 'destruction_power', 'sealed_god_treasure'],
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500,
      "mp" : 18000
    },
    "label" : "God's Mana Rune",
    "k_label": "신의 마나룬",
    "id" : "I0I3"
  },
  "god_mana_potion" : {
    "type" : "auxiliary",
    "color" : "god",
    "materials": ['black_god_energy', 'chaotic_mana_potion', 'destruction_power', 'sealed_god_treasure'],
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500
    },  
    "label" : "God's Mana Potion",
    "k_label": "신의 마나포션",
    "effects" : ["On Use: Restore 40% of maximum mana (25s cd)"],
    "k_effects" : ["사용시 최대마나 40%회복 (쿨타임 25초)"],
    "id" : "I0I4"
  },
  "god_life_rune" : {
    "type" : "auxiliary",
    "color" : "god",
    "materials": ['black_god_energy', 'chaotic_life_rune', 'destruction_power', 'sealed_god_treasure'],
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500,
      "hp" : 30000
    },
    "label" : "God's Life Rune",
    "k_label": "대혼돈의 생명룬",
    "id" : "I0I5"
  },
  "god_magic_rune" : {
    "type" : "auxiliary",
    "color" : "god",
    "materials": ['black_god_energy', 'chaotic_magic_rune', 'destruction_power', 'sealed_god_treasure'],
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500,
      "damage_increase" : 25
    },
    "label" : "God's Magic Rune",
    "k_label": "신의 일격룬",
    "id" : "I0I6"
	},
  "god_ascension_rune" : {
    "type" : "auxiliary",
    "color" : "god",
    "materials": ['black_god_energy', 'chaotic_ascension_rune', 'destruction_power', 'sealed_god_treasure'],
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500,
      "movement_speed" : 120,
      "attack_speed" : 100
    },
    "label" : "God's Ascension Rune",
    "k_label": "신의 순풍룬",
    "id" : "I0I7"
  },
  "god_potion" : {
    "type" : "auxiliary",
    "color" : "god",
    "materials": ['black_god_energy', 'chaotic_potion', 'destruction_power', 'sealed_god_treasure'],
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500
    },  
    "label" : "God's Potion",
    "k_label": "신의 포션",
    "effects" : ["On Use: Restore 45% of health (25s cd)"],
    "k_effects" : ["사용시 최대생명력 45%회복 (쿨타임 25초)"],
    "id" : "I0I8"
  },
  "gaia_essence" : {
		"type" : "accessory",
		"color" : "blue",
    "materials": ['black_clay_powder', 'dragon_slayer_mark', 'life_essence', 'mother_tree_bark'],
		"stats" : {
			"str" : 2500,
			"agi" : 2500,
			"int" : 2500,
			"hp_regen" : 1000
		},
		"label" : "Gaia's Essence",
    "k_label": "대지의 가호",
		"effects" : ["Allies within range gain HP recovery per second +1000", "On Use: Recovers (STR + AGI + INT) x2.5 HP every second for 4 seconds (120s cd)"],
    "k_effects": ["범위내 아군 초당 생명력 회복 1000", "사용시 4초간 사용지점에 매초마다 마더트리의 가호 발동 (STR + AGI + INT) x2.5)(쿨타임 120초)"],
		"id" : "I0I9"
	},
  "chaotic_barrier" : {
		"type" : "artifact",
		"color" : "red",
    "materials": ['archangel_barrier', 'archangel_sigil', 'archangel_sourcewell', 'boundless_twilight', 'chaotic_rune', 'rho_aias'],
		"stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
      "armor": 800,
			"hp" : 25000
		},
		"label" : "Chaotic Barrier",
    "k_label": "대혼돈의 방벽",
		"effects" : ["Generate a shield that can block up to 38000 damage every 10 seconds"],
		"k_effects" : ["10초마다 38000의 쉴드 생성"],
		"id" : "I0IA"
	},
  "god_barrier" : {
		"type" : "artifact",
		"color" : "god",
    "materials": ['black_god_energy', 'chaotic_barrier', 'destruction_power', 'sealed_god_treasure'],
		"stats" : {
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000,
      "armor": 1000,
			"hp" : 40000
		},
		"label" : "God's Barrier",
    "k_label": "신의 방벽",
		"effects" : ["Generate a shield that can block up to 50000 damage every 10 seconds"],
		"k_effects" : ["10초마다 50000의 쉴드 생성"],
		"id" : "I0IB"
	},
  "archangel_blue_wings" : {
		"type" : "artifact",
		"color" : "red",
   	"chest" : "Archangel’s Trinket",
    "materials": ['archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece'],
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"attack_speed" : 90,
			"movement_speed" : 30 
		},		
		"label" : "Archangel Blue Wings",
    "k_label": "대천사의 푸른날개",
		"effects" : ["Allies have 30% movement speed and 90% attack speed increased", "Enemies have 20% movement speed and attack speed reduced", "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x95 (180s cd)"],
		"k_effects" : ["주변 적군 공이속 20%감소", "주변 아군 공속 90% 이속 30%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x95)(쿨타임 180초)"],
		"id" : "I0IC",
    "chances": 8.33
	},
  "chaotic_blue_wings" : {
		"type" : "artifact",
		"color" : "red",
    "materials": ['archangel_blue_wings', 'archangel_sigil', 'archangel_sourcewell', 'boundless_twilight', 'chaotic_rune', 'dragon_wings'],
		"stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
			"attack_speed" : 120,
			"movement_speed" : 35 
		},		
		"label" : "Chaotic Blue Wings",
    "k_label": "대혼돈의 푸른날개",
		"effects" : ["Allies have 35% movement speed and 120% attack speed increased", "Enemies have 25% movement speed and attack speed reduced", "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x110 (180s cd)"],
		"k_effects" : ["주변 적군 공이속 25%감소", "주변 아군 공속 120% 이속 35%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x110)(쿨타임 180초)"],
		"id" : "I0ID"
	},
  "god_blue_wings" : {
		"type" : "artifact",
		"color" : "god",
    "materials": ['black_god_energy', 'chaotic_blue_wings', 'destruction_power', 'sealed_god_treasure'],
		"stats" : {
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000,
			"attack_speed" : 150,
			"movement_speed" : 40 
		},		
		"label" : "God's Blue Wings",
    "k_label": "신의 푸른 날개",
		"effects" : ["Allies have 40% movement speed and 150% attack speed increased", "Enemies have 25% movement speed and attack speed reduced", "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x130 (180s cd)"],
		"k_effects" : ["주변 적군 공이속 25%감소", "주변 아군 공속 150% 이속 40%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x130)(쿨타임 180초)"],
		"id" : "I0IE"
	},
  "mother_tree_trunk" : {
		"type" : "accessory",
		"color" : "orange",
    "materials": ['mother_tree_bark', 'mother_tree_branches', 'waterstone_fragment'],
		"stats" : {
			"int" : 1700,
			"str" : 1700,
			"agi" : 1700,
      "armor": 400,
			"movement_speed" : 150,
			"magic_resistance" : 16
		},
		"label" : "Mother Tree Trunk",
    "k_label": "마더트리 기둥",
		"id" : "I0IF"
	},
  "mother_tree_roots" : {
		"type" : "accessory",
		"color" : "blue",
    "materials": ['black_clay_powder', 'dragon_slayer_mark', 'mother_tree_bark', 'mother_tree_trunk'],
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
      "armor": 500,
			"movement_speed" : 150,
			"magic_resistance" : 20
		},
		"label" : "Mother Tree Roots",
    "k_label": "세계수의 뿌리",
		"id" : "I0IG"
	},
  "demonic_tree_roots" : {
		"type" : "accessory",
		"color" : "red",
    "chest" : "Devil of Agony’s Treasure Chest",
    "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
    "stats" : {
			"int" : 3500,
			"str" : 3500,
			"agi" : 3500,
      "armor": 700,
			"movement_speed" : 200,
			"magic_resistance" : 25
		},
		"label" : "Demonic Tree Roots",
    "k_label": "대악마의 수호",
		"id" : "I0IH",
    "chances": 7.69
	},
  "chaotic_tree_roots" : {
		"type" : "accessory",
		"color" : "red",
    "materials": ['archangel_sigil', 'archangel_sourcewell', 'boundless_twilight', 'chaotic_rune', 'demonic_tree_roots', 'mother_tree_roots'],
		"stats" : {
			"int" : 4300,
			"str" : 4300,
			"agi" : 4300,
      "armor": 800,
			"movement_speed" : 200,
			"magic_resistance" : 28
		},
		"label" : "Chaotic Tree Roots",
    "k_label": "대혼돈의 수호",
		"id" : "I0II"
	},
  "demonic_essence" : {
		"type" : "accessory",
		"color" : "red",
    "chest" : "Devil of Agony’s Treasure Chest",
    "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
    "stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
			"hp_regen" : 1500
		},
		"label" : "Demonic Essence",
    "k_label": "대악마의 가호",
		"effects" : ["Allies within range gain HP recovery per second +1500", "On Use: Recovers (STR + AGI + INT) x3.5 HP every second for 4 seconds (120s cd)"],
    "k_effects": ["범위내 아군 초당 생명력 회복 1500", "사용시 4초간 사용지점에 매초마다 마더트리의 가호 발동 (STR + AGI + INT) x3.5)(쿨타임 120초)"],
		"id" : "I0IJ",
    "chances": 7.69
	},
  "chaotic_essence" : {
		"type" : "accessory",
		"color" : "red",
    "materials": ['archangel_sigil', 'archangel_sourcewell', 'boundless_twilight', 'chaotic_rune', 'demonic_essence', 'gaia_essence'],
		"stats" : {
			"str" : 4300,
			"agi" : 4300,
			"int" : 4300,
			"hp_regen" : 1800
		},
		"label" : "Chaotic Essence",
    "k_label": "대혼돈의 가호",
		"effects" : ["Allies within range gain HP recovery per second +1800", "On Use: Recovers (STR + AGI + INT) x4 HP every second for 4 seconds (120s cd)"],
    "k_effects": ["범위내 아군 초당 생명력 회복 1500", "사용시 4초간 사용지점에 매초마다 마더트리의 가호 발동 (STR + AGI + INT) x4)(쿨타임 120초)"],
		"id" : "I0IK"
	},
  "hitchhiker_helmet" : {
		"type" : "helmet",
		"color" : "orange",
		"raid" : "Celestial Waterstone",    
		"stats" : {
			"int" : 900,
			"str" : 900,
			"agi" : 900,
			"armor" : 700,
			"magic_resistance" : 10
		},
		"label" : "Hitchhiker's Helmet",
    "k_label": "수호석 투구",
		"id" : "I0IL",
    "chances": 1.5
	},
  "resistance_helmet" : {
		"type" : "helmet",
		"color" : "blue",
    "materials": ['dragon_slayer_mark', 'hitchhiker_helmet', 'waterstone_fragment'],
		"stats" : {
			"int" : 1300,
			"str" : 1300,
			"agi" : 1300,
			"armor" : 900,
			"magic_resistance" : 14
		},
		"label" : "Resistance Helmet",
    "k_label": "힐데그림",
		"id" : "I0IM"
	},
  "demonic_resistance_helmet" : {
		"type" : "helmet",
		"color" : "red",
    "materials": ['devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture', 'devil_soul_scripture'],
		"stats" : {
			"int" : 2000,
			"str" : 2000,
			"agi" : 2000,
			"armor" : 1200,
			"magic_resistance" : 20
		},
		"label" : "Demonic Resistance Helmet",
    "k_label": "대악마의 저항투구",
		"id" : "I0IN"
	},
  "chaotic_resistance_helmet" : {
		"type" : "helmet",
		"color" : "red",
    "materials": ['archangel_sigil', 'archangel_sourcewell', 'boundless_twilight', 'chaotic_rune', 'demonic_resistance_helmet', 'resistance_helmet'],
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
			"armor" : 1400,
			"magic_resistance" : 23
		},
		"label" : "Chaotic Resistance Helmet",
    "k_label": "대혼돈의 저항투구",
		"id" : "I0IO"
	},
  "archangel_contract" : {
		"type" : "weapon",
		"color" : "red",
    "chest": "Archangel’s Assistance",
    "materials": ['archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece', 'archangel_treasure_piece'],
		"stats" : {
			"atk" : 230000,
			"int" : 6500
		},
		"label" : "Archangel Contract",
    "k_label": "대천의 계약",
		"effects" : ["Each spell consumes 4% of HP and MP adding 80% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 80% 증가"],
		"id" : "I0IP",
    "chances": 5.55
	},
  "archangel_contract_1" : {
		"type" : "weapon",
		"color" : "red",
    "materials": ['archangel_contract', 'archangel_sigil', 'archangel_sourcewell', 'god_essence', 'soul_contract'],
		"stats" : {
			"atk" : 260000,
			"int" : 7000
		},
		"label" : "Archangel Contract +1",
    "k_label": "대천의 계약 +1",
		"effects" : ["Each spell consumes 4% of HP and MP adding 95% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 95% 증가"],
		"id" : "I0IQ"
	},
  "archangel_contract_2" : {
		"type" : "weapon",
		"color" : "red",
    "materials": ['archangel_contract', 'archangel_contract_1', 'archangel_sigil', 'archangel_sigil', 'archangel_sourcewell', 'archangel_sourcewell', 'god_essence'],
		"stats" : {
			"atk" : 300000,
			"int" : 7500
		},
		"label" : "Archangel Contract +2",
    "k_label": "대천의 계약 +2",
		"effects" : ["Each spell consumes 4% of HP and MP adding 110% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 110% 증가"],
		"id" : "I0IR"
	},
  "archangel_contract_3" : {
		"type" : "weapon",
		"color" : "red",
    "materials": ['archangel_contract', 'archangel_contract_2', 'archangel_sigil', 'archangel_sigil', 'archangel_sourcewell', 'archangel_sourcewell', 'archangel_sourcewell', 'god_essence'],
		"stats" : {
			"atk" : 350000,
			"int" : 8000
		},
		"label" : "Archangel Contract +3",
    "k_label": "대천의 계약 +3",
		"effects" : ["Each spell consumes 4% of HP and MP adding 135% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 135% 증가"],
		"id" : "I0IS"
	},
  "god_treasure_chest" : {
    "type" : "chest",
    "color" : "god",
    "chest": "Sealed God of Destruction",    
    "label" : "God's Treasure Chest",
    "k_label": "신의 보물함",
    "id" : "I0IX",
    "chances": 5
  },
  "unleash_arrow_revolver": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Range Master]", 
    "k_label": "해방된 힘 [레인지 마스터]",
    "effects": ["Enchances Arrow Revolver"],
    "k_effects": ["에로우 리볼버를 강화합니다"],
    "id": "I0J0",
    "disabled": true
  },
  "unleash_combat_mastery": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power of God", 
    "k_label": "신의 힘으로 능력이 해방됩니다",
    "effects": ["Enchances Combat Mastery", "Not working"],
    "k_effects": ["레인지 컴뱃 마스터리를 강화합니다", "작동 안함"],
    "id": "I0J1",
    "chances": 3.57
  },
  "unleash_tatsumaki": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Psychic]", 
    "k_label": "해방된 힘 [염동술사]",
    "effects": ["Enchances Shockwave"],
    "k_effects": ["충격파를 강화합니다"],
    "id": "I0J2",
    "chances": 3.57
  },
  "unleash_sinon": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Sniper]", 
    "k_label": "해방된 힘 [스나이퍼]",
    "effects": ["Enchances Explosive Magazines"],
    "k_effects": ["폭발성 탄창을 강화합니다"],
    "id": "I0J3",
    "chances": 3.57
  },
  "unleash_enju": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Fighter]", 
    "k_label": "해방된 힘 [격투가]",
    "effects": ["Increases max skill link to 65"],
    "k_effects": ["스킬연계의 최대치가 65로 증가합니다"],
    "id": "I0J4",
    "chances": 3.57
  },
  "unleash_shinoa": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Death Scythe]", 
    "k_label": "해방된 힘 [데스사이즈]",
    "effects": ["Enchances Cursed Possession"],
    "k_effects": ["오니화를 강화합니다"],
    "id": "I0J5",
    "chances": 3.57
  },
  "unleash_nanaya": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Assassin]", 
    "k_label": "해방된 힘 [암살자]",
    "effects": ["Enchances Hot Blooded"],
    "k_effects": ["블러드 히트의 쿨타임 15초 감소 합니다"],
    "id": "I0J6",
    "chances": 3.57
  },
  "unleash_shuvi": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Shooter]", 
    "k_label": "해방된 힘 [슈터]",
    "effects": ["Reduces missiles cd by 3s"],
    "k_effects": ["폭격의 쿨타임이 3초감소합니다"],
    "id": "I0J7",
    "chances": 3.57
  },
  "unleash_lancer": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Lancer]", 
    "k_label": "해방된 힘 [랜서]",
    "effects": ["Reduces Javelin cd by 1s"],
    "k_effects": ["투창의 쿨타임이 1초 감소합니다"],
    "id": "I0J8",
    "chances": 3.57
  },
  "unleash_ayase": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Martial Artist]", 
    "k_label": "해방된 힘 [무도가]",
    "effects": ["Increases Hectopascal Kick proc chance by 6%"],
    "k_effects": ["헥토파스칼 킥의 확률증가가 6% 추가로 증가합니다"],
    "id": "I0J9",
    "chances": 3.57
  },
  "unleash_kanna": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Electromaster]", 
    "k_label": "해방된 힘 [일렉트로 마스터]",
    "effects": ["Reduces Eye of the Storm cd by 15s"],
    "k_effects": ["뇌단의 쿨타임 15초가 감소합니다"],
    "id": "I0JA",
    "chances": 3.57
  },
  "unleash_megumin": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Explosion Wizard]", 
    "chest": "God's Treasure Chest",
    "k_label": "해방된 힘 [폭렬마법사]",
    "effects": ["Increases Ignite ticks by 6"],
    "k_effects": ["발화의 공격횟수가 6회 증가합니다"],
    "id": "I0JB",
    "chances": 3.57
  },
  "unleash_overmind": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Overmind]", 
    "k_label": "해방된 힘 [오버마인드]",
    "effects": ["Increases Thunder Calling int multiplier by 1%"],
    "k_effects": ["초월의 룬의 지능증가폭이 1% 증가합니다"],
    "id": "I0JC",
    "chances": 3.57
  },
  "unleash_kaede": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Bard]", 
    "k_label": "해방된 힘 [바드]",
    "effects": ["Strengthens Stage", "Not Working (bugged)"],
    "k_effects": ["달아오르는 무대를 강화합니다", "작동 안함"],
    "id": "I0JD",
    "chances": 3.57
  },
  "unleash_hayate": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Enchanter]", 
    "k_label": "해방된 힘 [야천의 마도사]",
    "effects": ["Reduces Unison cd by 15s"],
    "k_effects": ["유니즌 인의 쿨타임이 15초 감소합니다"],
    "id": "I0JE",
    "chances": 3.57
  },
  "unleash_pio": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Potion Maker]", 
    "k_label": "해방된 힘 [포션메이커]",
    "effects": ["Improved Gather Materials"],
    "k_effects": ["재료넣기를 강화합니다"],
    "id": "I0JF",
    "chances": 3.57
  },
  "unleash_mashiro": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Priest]", 
    "chest": "God's Treasure Chest",
    "k_label": "해방된 힘 [프리스트]",
    "effects": ["Increases Baumkuchen Feeding int multiplier by 1.2%"],
    "k_effects": ["바움쿠헨 먹이기 회복지능 계수가 1.2 증가합니다"],
    "id": "I0JG",
    "chances": 3.57
  },
  "unleash_acerola": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Blood Lord]", 
    "k_label": "해방된 힘 [블러드로드]",
    "effects": ["Strengthens Heartspan"],
    "k_effects": ["코코로와타리를 강화합니다"],
    "id": "I0JH",
    "chances": 3.57
  },
  "unleash_krul": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Berserker]", 
    "k_label": "해방된 힘 [버서커]",
    "effects": ["Increases Frenzy str multiplier by 1.5%"],
    "k_effects": ["폭주의 공격시 스텟비례 데미지가 1.5 증가합니다"],
    "id": "I0JI",
    "chances": 3.57
  },
  "unleash_satsuki": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Kamui]", 
    "k_label": "해방된 힘 [카무이]",
    "effects": ["Reduces basic atacks needed to activate Empower by 2"],
    "k_effects": ["참격의 패시브공격회수가 2감소합니다"],
    "id": "I0JJ",
    "chances": 3.57
  },
  "unleash_zero": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Regular Hunter]", 
    "k_label": "해방된 힘 [이레귤러 헌터]",
    "effects": ["Reduces energy required by Dash by 1"],
    "k_effects": ["대쉬의 에너지 사용이 1줄어듭니다. 강화합니다"],
    "id": "I0JK",
    "chances": 3.57
  },
  "unleash_hurk": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Great Sword]", 
    "k_label": "해방된 힘 [그레이트 소드]",
    "effects": ["Increases Blockade duration by 0.15s"],
    "k_effects": ["봉쇄의 지속시간이 0.15초 증가합니다"],
    "id": "I0JL",
    "chances": 3.57
  },
  "unleash_darkness": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Crusader]", 
    "k_label": "해방된 힘 [크루세이더]",
    "effects": ["Reduces the cooldown of Light Casts by 20s", "Not working"],
    "k_effects": ["빛의 집속의 쿨타임이 20초 감소합니다", "작동 안함"],
    "id": "I0JM",
    "chances": 3.57
  },
  "slot_1": {
    "type": "skill",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Platelet skill slot 1 swap",
    "k_label": "혈소판 가방 1번 슬롯교체",
    "effects": ["Slot replacement skill is added"],
    "k_effects": ["1번슬롯 교체스킬이 추가됩니다"],
    "id": "I0IT",
    "chances": 3.57
  },
  "slot_2": {
    "type": "skill",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Platelet skill slot 2 swap",
    "k_label": "혈소판 가방 2번 슬롯교체",
    "effects": ["Slot replacement skill is added"],
    "k_effects": ["2번슬롯 교체스킬이 추가됩니다"],
    "id": "I0IU",
    "chances": 3.57
  },
  "slot_3": {
    "type": "skill",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Platelet skill slot 3 swap",
    "k_label": "혈소판 가방 3번 슬롯교체",
    "effects": ["Slot replacement skill is added"],
    "k_effects": ["3번슬롯 교체스킬이 추가됩니다"],
    "id": "I0IV",
    "chances": 3.57
  },
  "slot_4": {
    "type": "skill",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Platelet skill slot 4 swap",
    "k_label": "혈소판 가방 4번 슬롯교체",
    "effects": ["Slot replacement skill is added"],
    "k_effects": ["4번슬롯 교체스킬이 추가됩니다"],
    "id": "I0IW",
    "chances": 3.57
  },  
  "god_awekening": {
    "type": "skill",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "God's Awakening",
    "k_label": "신의 각성",
    "effects": ["Creates a extra slot where additional equipment powers can be used"],
    "k_effects": ["신의 힘으로 추가 장비를 장착할수있는 슬롯생성"],
    "id": "I0IZ",
    "chances": 3.57  
  },
  "unleash_shinobu": {
    "type": "unleash",
    "color": "god",
    "chest": "God's Treasure Chest",
    "label": "Unleash Power [Blood Test]", 
    "k_label": "해방된 힘 [혈검사]",
    "effects": ["Increases Shadowmeld duration by 3s"],
    "k_effects": ["그림자 숨기의 지속시간이 3초 증가합니다"],
    "id": "I0JN",
    "chances": 3.57
  },
  "god_glaive" : {
		"type" : "weapon",
    "materials": ['archangel_glaive_3', 'black_god_energy', 'destruction_power', 'sealed_god_treasure'],
		"color" : "god",
    	"stats" : {
			"atk" : 500000,
			"str" : 11000
		},
		"label" : "God's Glaive",
    "k_label": "신의 창",
		"effects" : ["On Use: Causes an explosion, dealing 700000 + STR x450 damage (45s cd)"],
    "k_effects": ["사용시 용기의 폭발 시전 (700000 + STR x450)(쿨타임 45초)"],
		"id" : "I0HO"
	}
}

  
exports.idToName = {};

for (var item in exports.items) {
  exports.idToName[exports.items[item].id] = item;
}
  
  

})(typeof exports === 'undefined'? this: exports);
 