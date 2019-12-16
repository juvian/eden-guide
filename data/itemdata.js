module.exports = {
  "I07P" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 30000,
			"agi" : 1800,
			"damage_increase" : 15
		},
		"label" : "Sword of the Swordman",
    "k_label": "검객의 검",
    "bugged": true
	},
	"I03Q" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 35000,
			"agi" : 1800,
			"str" : 1800
		},
		"label" : "Sword of Chaos",
    "k_label": "혼돈의 검"
	},
	"I060" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 30000,
			"int" : 2000,
			"str" : 1800
		},
		"label" : "Combat Staff",
    "k_label": "전투 지팡이"
	},
	"I078" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 30000,
			"int" : 2200
		},
		"label" : "Treant Staff",
    "k_label": "트렌트 지팡이",
		"effects" : ["On use: summon 2 Treant (120s cd)"],
    "k_effects": ["사용시 트렌트 2기 소환 (쿨타임 120초)"]
	},
	"I07S" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"agi" : 2700,
			"damage_increase" : 20
		},
		"label" : "Holy Sword Valdrix",
    "k_label": "성검 발드릭스"
	},
	"I0BW" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"int" : 2700,
			"damage_increase" : 20
		},
		"label" : "Greater Magic Staff",
    "k_label" : "대마력 지팡이"
	},
	"I07U" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"str" : 2500,
			"hp" : 10000
		},
		"label" : "Sword of life",
    "k_label": "생명의 검",
		"effects" : ["Every 10th attack will recover STR x3 HP(10s cd)", "Every 6th spell will recover STR x3 HP(10s cd)", "On use, recovers STR x4 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복(STR x3)(쿨타임10초)", "스킬사용 6회시 생명력회복(STR x3)(쿨타임10초)", "사용시 능력치 비례의 생명력 회복(STR x4)(120초)"]
	},
	"I07V" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"agi" : 2500,
			"hp" : 10000
		},
		"label" : "Bow of life",
    "k_label": "생명의 활",
		"effects" : ["Every 10th attack will recover AGI x3 HP (9s cd)", "Every 6th spell will recover AGI x3 HP (10s cd)", "On use, recovers AGI x4 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복(AGI x3)(쿨타임9초)", "스킬사용 6회시 생명력회복(AGI x3)(쿨타임10초)", "사용시 능력치 비례의 생명력 회복(AGI x4)(120초)"]
	},
	"I07W" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"int" : 2500,
			"hp" : 10000
		},
		"label" : "Staff of life",
    "k_label": "생명의 지팡이",
		"effects" : ["Every 4th spell will recover INT x3 HP", "On use: Recovers INT x4 HP to all allies within range (80s cd)"],
    "k_effects": ["스킬사용 4회시 생명력회복(INT x3)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복(INT x4)(쿨타임 80초)"]
	},
	"I06D" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"agi" : 2600,
      "attack_real": 10,
      "attack_agi": true      
		},
		"label" : "Dagger of Divine Light",
    "k_label": "신성한 빛의 단검"
	},
	"I06C" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"str" : 2600,
      "attack_speed": 20,
      "attack_real": 13,
      "attack_str": true
		},
		"label" : "Sword of Divine Light",
    "k_label": "신성한 빛의 대검",
    "bugged": true
	},
	"I06E" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"int" : 2600,
      "int_tick": true,
      "attack_int_real": 42
		},
		"label" : "Staff of Divine Light",
    "k_label": "신성한 빛의 지팡이"
	},
	"I06M" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"str" : 2300,
			"agi" : 2300,
      "attack_str_agi": true,
      "attack_real": 5
		},
		"label" : "Sword of Chaotic Light",
    "k_label": "혼돈의 빛의 검",
    "bugged": true
	},
	"I06N" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"str" : 2300,
			"int" : 2500
		},
		"label" : "Sword of Resplendent Light",
    "k_label": "신성한 빛의 전투지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x20 bonus damage"],
    "k_effects": ["스킬의 모든히트에 확률적으로 빛의심판 발동(8% 기회 30000 + (STR + INT) x20)"],
    "bugged": true
	},
	"I07A" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"int" : 2700
		},
		"label" : "Judge's Staff",
    "k_label": "심판자의 지팡이",
		"effects" : ["On use: summons 2 judges (120s cd)"],
    "k_effects": ["사용시 심판자 2기 소환(쿨타임 120초)"]
	},
	"I06K" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800
		},
		"label" : "Divine Sword Excalibur",
    "k_label": "성검 EX칼리버",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 150000 + (STR + AGI + INT) x70-100)(120s cd)"],
    "k_effects": ["사용시 엑스칼리버 시전 (150000 + (STR + AGI + INT) x70-100)(쿨타임120초)"]
	},
	"I06P" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 75000,
			"str" : 3000
		},
		"label" : "Axe of Fire",
    "k_label": "마계의 불꽃 도끼",
		"effects" : ["On Use: Causes a massive explosion, dealing 300000 + STR x120 damage (120s cd)"],
    "k_effects": ["사용시 마계의 폭발 발생 (300000 + STR x120)(쿨타임 120초)"]
	},
	"I06Q" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 75000,
			"int" : 2700
		},
		"label" : "Mysterious Fireworks Staff",
    "k_label": "마계의 불꽃 지팡이",
		"effects" : ["On use, increase INT by 2000 (duration 12s, 120s cd)"],
    "k_effects": ["사용시 지능+2000 (지속 12초)(쿨타임 120초)"]
	},
	"I06O" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 75000,
			"agi" : 2700,
			"attack_speed" : 200
		},
		"label" : "Dagger of Flame",
    "k_label": "마계의 불꽃단검"
	},
	"I074" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"agi" : 3300,
			"attack_speed" : 100,
      "attack_agi": true,
      "attack_real": 20
		},
		"label" : "Meteorite Dagger",
    "k_label": "운석 단검"
	},
	"I0CD" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"str" : 3500,
      "attack_speed": 80,
      "attack_str": true,
      "attack_real": 20
		},
		"label" : "Black Earth Mace",
    "k_label": "운석 철퇴",
    "bugged": true
	},
	"I075" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 3300,
      "int_tick": true,
      "attack_int_real": 52      
		},
		"label" : "Staff of Judgement",
    "k_label": "심판의 지팡이",
		"effects" : ["Intelligence increased by 1000 (duration 10s, 120s cd)"],
    "k_effects": ["사용시 지능 1000증가(지속시간 10초)(쿨타임 120초)"]
	},
	"I073" : {
		"type" : "weapon",
		"color" : "orange",
		"page" : 3,
		"rate" : 100,
		"stats" : {
			"atk" : 100000,
			"str" : 4000
		},
		"label" : "Black Earth Sword",
    "k_label": "검은 대지의 대검",
		"effects" : ["On use: Cause a large explosion of Black Earth, dealing 300000 + STR x120 damage (60s cd)"],
    "k_effect": ["사용시 검은대지의 폭발 생성 (300000 + STR x120)(쿨타임 60초)"]
	},
	"I07T" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"agi" : 3500,
			"damage_increase" : 30
		},
		"label" : "Holy Sword Fragarach",
    "k_label": "성검 프라가라흐"
	},
	"I0BX" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 3500,
			"damage_increase" : 30
		},
		"label" : "Dragonic Jewel Staff",
    "k_label": "드래곤 마력 지팡이"
	},
	"I0BZ" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"agi" : 3500,
			"damage_increase" : 40,
			"damage_taken" : 15
		},
		"label" : "Claws of Death",
    "k_label": "죽음의 손톱"
	},
	"I07B" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 3500
		},
		"label" : "Meteor Staff",
    "k_label": "운석 지팡이",
		"effects" : ["On use, summons powerful infernal, dealing INT x80 to nearby units (lasts 20s)", "Intelligence increased by 1000 (duration 10s, cd 120s)"],
    "k_effects": ["사용시 강력한 인페르노 1기를 데미지를주며 소환, 주변 유닛에 INT x80 처리 (지속시간 20초)", "지능 1000증가(지속시간 10초)(쿨타임 120초)"]
	},
	"I07D" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"str" : 2600,
			"agi" : 2600,
      "attack_str_agi": true,
      "attack_real": 9
		},
		"label" : "Chaotic Meteorite Sword",
    "k_label": "혼돈의 운석 검",
		"effects" : ["On Use: An outward explosion of Black Eart, dealing 300000 + (STR + AGI) x55 damage (120s cd)"],
    "k_effects": ["사용시 검은대지의 폭발 생성 (300000 + (STR + AGI) x55)(쿨타임 120초)"],
    "bugged": true
	},
	"I07E" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 2800,
			"str" : 2600,
      "int_tick": true,
      "attack_str_int_real": 22
		},
      "label" : "Judge's Staff of Chaos",
    "k_label": "혼돈의 심판 지팡이"
	},
	"I085" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 3500,
			"hp" : 20000
		},
		"label" : "Staff of Infinite Life",
    "k_label": "무한한 생명의 지팡이",
		"effects" : ["Every 4 spell casts will recover INT x4 HP (10s cd)", "On use, restore INT x5 health to nearby allies (80s cd)"],
    "k_effects": ["스킬사용 4회시 생명력 회복 (INT x4)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x5)(쿨타임 80초)"]
	},
	"I083" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"agi" : 3500,
			"hp" : 20000
		},
		"label" : "Bow of Infinite Life",
    "k_label": "무한한 생명의 활",
		"effects" : ["Every 10 attacks will recover AGI x3.5 HP (9s cd)", "Every 6 spells will recover AGI x3.5 HP (10s cd)", "On Use: Recover AGI x5 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력 회복 (AGI x3.5)(쿨타임 10초)", "스킬 시전 6회당 생명력 회복 (AGI x3.5)(쿨타임 9초)", "사용시 생명력 회복 (AGI x5)(쿨타임 120초)"]
	},
	"I084" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"str" : 3500,
			"hp" : 20000
		},
		"label" : "Sword of Infinite Life",
    "k_label": "무한한 생명의검",
		"effects" : ["Every 10 attacks will recover STR x3.5 HP (9s cd)", "Every 6 spells will recover STR x3.5 HP (10s cd)", "On Use: Recover STR x5 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복 (STR x3.5)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x3.5)(쿨타임 10초)", "사용시  생명력회복 (능력치비례)(쿨타임 120초)"]
	},
	"I07Y" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 3800,
			"int" : 3800,
			"agi" : 3800
		},
		"label" : "Excalibur Morgan",
    "k_label": "EX칼리버 모르간",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 150000 + (STR + AGI + INT) x120-160)(120s cd)"],
    "k_effects": ["사용시 엑스칼리버 모르간 시전 (150000 + (STR + AGI + INT) x120-160)(쿨타임120초)"]
	},
	"I07Z" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"agi" : 5000,
			"damage_increase" : 40
		},
		"label" : "Kanshou and Bakuya",
    "k_label": "간장 막야"
	},
	"I0BY" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"damage_increase" : 40
		},
		"label" : "Akashic Records",
    "k_label": "아카식 레코드"
	},
	"I0C0" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"agi" : 5000,
			"damage_increase" : 57,
			"damage_taken" : 20
		},
		"label" : "Hellfire Gloves",
    "k_label": "지옥불 장갑"
	},
	"I08R" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 5000
		},
		"label" : "Ascalon",
    "k_label": "아스칼론",
		"effects" : ["On Use: Release a powerful explosion, dealing 300000 + STR x150 (45s cd)"],
		"k_effects" : ["사용시 강력한 에너지 폭발 발생 (300000 + STR x150)(쿨타임 45초)"]
	},
	"I08S" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000
		},
		"label" : "Phoenix Staff",
    "k_label": "피닉스 지팡이",
		"effects" : ["On use, summons a phoenix (lasts 20s, 120s cd)"],
    "k_effects": ["사용시 20초간 피닉스 소환 (쿨타임 120초)"]
	},
	"I08T" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"damage_increase" : 20
		},
		"label" : "Laevateinn",
    "k_label": "레바테인",
		"effects" : ["Nearby allies gain 20% bonus damage"],
    "k_effects": ["주변 아군에게 추가데미지 20%효과 오라"]
	},
	"I08V" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"agi" : 5000,
			"attack_speed" : 160,
      "attack_agi": true,
      "attack_real": 28
		},
		"label" : "Moonlight Dagger",
    "k_label": "달빛 단검"
	},
	"I0CE" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 5000,
      "attack_speed": 100,
      "attack_str": true,
      "attack_real": 30
		},
		"label" : "Mjollnir",
    "k_label": "묠니르",
    "bugged": true
	},
	"I08W" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"mp" : 20000,
      "contract": 0.0000035,
      "int_tick": true      
		},
		"label" : "Sage's Staff",
    "k_label": "현자의 지팡이"
	},
	"I08Y" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 4000,
			"agi" : 4000,
      "attack_str_agi": true,
      "attack_real": 7
		},
		"label" : "Bloody Moonlight Dagger",
    "k_label": "붉은달빛 단검",
		"effects" : ["On Use: Causes an explosion of moonlight, dealing 300000 + (STR + AGI) x70 (80s cd)"],
    "k_effects": ["사용시 달빛 폭발 발생 (300000 + (STR + AGI) x70)(쿨타임 80초)"],
    "bugged": true
	},
	"I095" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 4000,
			"int" : 4000,
      "int_tick": true,
      "attack_str_int_real": 28
		},
		"label" : "Hades Chaos Staff",
    "k_label": "하데스의 혼돈지팡이"
	},
	"I094" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
      "int_tick": true,
      "attack_int_real": 70          
		},
		"label" : "Hades Staff",
    "k_label": "하데스의 지팡이"
	},
	"I09T" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 5000,
			"hp" : 30000
		},
		"label" : "Waterstone Sword",
    "k_label": "세계수의 검",
		"effects" : ["Every 10 attacks will recover STR x4 HP (9s cd)", "Every 6 spells will recover STR x4 HP (10s cd)", "On Use: Restores STR x6 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복 (STR x4)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x4)(쿨타임 10초)", "사용시  생명력회복 (STR x6)(쿨타임 120초)"]
	},
	"I09U" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"agi" : 5000,
			"hp" : 30000
		},
		"label" : "Waterstone Dagger",
    "k_label": "세계수의 단검",
		"effects" : ["Every 10 attacks will recover AGI x4 HP (9s cd)", "Every 6 spells will recover AGI x4 HP (10s cd)", "On Use: Restores AGI x6 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복 (AGI x4)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x4)(쿨타임 10초)", "사용시  생명력회복 (AGI x6)(쿨타임 120초)"]
	},
	"I09V" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"hp" : 30000
		},
		"label" : "Waterstone Staff",
    "k_label": "세계수의 지팡이",
		"effects" : ["Every 4 spells will recover INT x5 HP (10s cd)", "On use, restore INT x6 health to nearby allies (80s cd"],
    "k_effects": ["스킬사용 4회시 생명력 회복 (INT x5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x6)(쿨타임 80초)"]
	},
	"I089" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"int" : 1500
		},
		"label" : "High Blood Robes",
    "k_label": "고수의 로브"
	},
	"I08J" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 600,
			"agi" : 1200,
			"hp" : 10000,
			"damage_taken" : -9
		},
		"label" : "Dwarven High Leather Armor",
    "k_label": "드워프의 고급 가죽 갑옷"
	},
	"I08I" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 700,
			"str" : 1200,
			"hp" : 10000,
			"damage_taken" : -9
		},
		"label" : "Dwarven High Armor",
    "k_label": "드워프의 고급 갑옷"
	},
	"I08K" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 500,
			"int" : 1300,
			"hp" : 10000,
			"damage_taken" : -9
		},
		"label" : "Dwarven High Robe",
    "k_label": "드워프의 고급 로브",
    "bugged": true
	},
	"I06B" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 600,
			"str" : 1200,
			"agi" : 1200,
			"int" : 1200,
			"hp" : 10000,
			"max_health" : 10
		},
		"label" : "Earth Armor",
    "k_label": "대지의 갑옷"
	},
	"I08A" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 500,
			"int" : 2500
		},
		"label" : "The Master's Robe",
    "k_label": "달인의 로브"
	},
	"I06R" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 800,
			"str" : 1700,
			"hp" : 10000,
			"hp_regen" : -500
		},
		"label" : "Magical Flame Armor",
    "k_label": "마계의 불꽃 갑옷",
		"effects" : ["Deals 8000 + STR x15 damage to nearby enemies each second"],
		"k_effects" : ["생명력과 강함을 교환한 로브 (8000 + STR x15)"]
	},
	"I06S" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 300,
			"int" : 1700,
			"damage_increase" : 25,
      "damage_taken": 5
		},
		"label" : "Maestra's Flame Robe",
    "k_label": "마계의 불꽃 로브"
	},
	"I08M" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 700,
			"agi" : 1700,
			"hp" : 15000,
			"damage_taken" : -12
		},
		"label" : "Dwarven Exquisite Leather Armor",
    "k_label": "드워프의 최고급 가죽 갑옷"
	},
	"I08L" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 800,
			"str" : 1700,
			"hp" : 15000,
			"damage_taken" : -12
		},
		"label" : "Dwarven Exquisite Armor",
    "k_label": "드워프의 최고급 갑옷"
	},
	"I08N" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 600,
			"int" : 1800,
			"hp" : 15000,
			"damage_taken" : -12
		},
		"label" : "Dwarven Exquisite Robe",
    "k_label": "드워프의 최고급 로브",
    "bugged": true
	},
	"I03H" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 1000,
			"str" : 2500,
			"hp" : 15000,
			"hp_regen" : -800
		},
		"label" : "Black Earth Flame Armor",
    "k_label": "검은 대지의 불꽃 갑옷",
		"effects" : ["Deals 8000 + STR x23 damage per second to all enemies within range"],
    "k_effects": ["초당 주변에 데미지 (8000 + STR x23)"]
	},
	"I042" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 600,
			"int" : 2500,
			"damage_taken" : 10,
			"damage_increase" : 40
		},
		"label" : "Black Earth Flame Robe",
    "k_label": "검은 대지의 불꽃 로브"
	},
	"I07N" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 600,
			"int" : 2500,
			"mp" : 15000,
      "mps": 25
		},
		"label" : "Refined Mana Robe",
    "k_label": "드레곤 마력 로브"
	},
	"I0B8" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 700,
			"agi" : 2400,
			"movement_speed" : 150,
			"damage_increase" : 22
		},
		"label" : "Agile Leather Vest",
    "k_label": "음속의 가죽갑옷"
	},
	"I0B7" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 800,
			"str" : 2400,
			"movement_speed" : 150,
			"damage_increase" : 22
		},
		"label" : "Agile Plate Armor",
    "k_label": "음속의 갑옷"
	},
	"I0B9" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 600,
			"int" : 2400,
			"movement_speed" : 150,
			"damage_increase" : 22
		},
		"label" : "Agile Cloak",
    "k_label": "음속의 로브"
	},
	"I0BJ" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 800,
			"int" : 2100,
			"str" : 2100,
			"agi" : 2100,
			"hp" : 15000,
			"max_health" : 16
		},
		"label" : "Mother Tree's Life Armor",
    "k_label": "마더트리의 생명의 갑옷"
	},
	"I08O" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 900,
			"str" : 2500,
			"hp" : 20000,
			"damage_taken" : -15
		},
		"label" : "Mithril Armor",
    "k_label": "미스릴 갑옷"
	},
	"I08P" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 800,
			"agi" : 2600,
			"hp" : 20000,
			"damage_taken" : -15
		},
		"label" : "Mithril Greaves",
    "k_label": "미스릴 경갑"
	},
	"I08Q" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 700,
			"int" : 2700,
			"hp" : 20000,
			"damage_taken" : -15
		},
		"label" : "Mithril Robe",
    "k_label": "미스릴 로브"
	},
	"I0BL" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 1200,
			"str" : 3500,
			"hp_regen" : -1100,
      "hp": 20000
		},
		"label" : "Hellfire Armor",
    "k_label": "지옥불 갑옷",
		"effects" : ["Deals 8000 + STR x33 damage per second to all enemies within range"],
		"k_effects" : ["초당 주변에 데미지 (8000 + STR x33)"]
	},
	"I0BM" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 700,
			"int" : 3500,
			"damage_taken" : 15,
			"damage_increase" : 55
		},
		"label" : "Hellfire Robe",
    "k_label" : "지옥불 로브"
	},
	"I0BN" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 800,
			"int" : 2700,
			"str" : 2700,
			"agi" : 2700,
			"hp" : 20000,
			"hp_regen_percent" : 2
		},
		"label" : "Waterstone Armor",
    "k_label": "세계수 줄기 갑옷"
	},
	"I0BO" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 700,
			"int" : 3500,
			"mp" : 25000,
      "mps": 32
		},
		"label" : "Refined Mana Crystal Robe",
    "k_label": "정제된 드레곤 마력 로브"
	},
	"I0BK" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 900,
			"int" : 2800,
			"str" : 2800,
			"agi" : 2800,
			"hp" : 20000,
			"max_health" : 21
		},
		"label" : "Gaia's Armor",
    "k_label": "가이아 갑옷"
	},
	"I0BA" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 900,
			"agi" : 3500,
			"movement_speed" : 150,
			"damage_increase" : 30
		},
		"label" : "Leather Armor of Wind",
    "k_label": "광속의 가죽갑옷"
	},
	"I0BB" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 1000,
			"str" : 3500,
			"movement_speed" : 150,
			"damage_increase" : 30
		},
		"label" : "Armor of Wind",
    "k_label": "광속의 갑옷"
	},
	"I0BC" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 700,
			"int" : 3500,
			"movement_speed" : 150,
			"damage_increase" : 30
		},
		"label" : "Aqua Robes",
    "k_label": "광속의 로브"
	},
	"I0BH" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 1000,
			"str" : 3500,
			"hp" : 25000,
			"damage_taken" : -18
		},
		"label" : "Exquisite Mithril Armor",
    "k_label": "최고급 미스릴 갑옷"
	},
	"I0BI" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 900,
			"agi" : 3500,
			"hp" : 25000,
			"damage_taken" : -18
		},
		"label" : "Exquisite Mithril Greaves",
    "k_label": "최고급 미스릴 경갑"
	},
	"I0BG" : {
		"type" : "armor",
		"color" : "blue",
		"stats" : {
			"armor" : 800,
			"int" : 3500,
			"hp" : 25000,
			"damage_taken" : -18
		},
		"label" : "Exquisite Mithril Robe",
    "k_label": "최고급 미스릴 로브",
    "bugged": true
	},	
	"I03L" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"int" : 800,
			"str" : 800,
			"agi" : 800,
			"hp" : 10000,
			"mp" : 5000,
			"movement_speed" : 150
		},
		"label" : "The Ring of Madness",
    "k_label": "광기의 반지"
	},
	"I044" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"int" : 800,
			"str" : 800,
			"agi" : 800,
			"damage_increase" : 15
		},
		"label" : "Ring of Destruction",
    "k_label": "파괴의 반지"
	},
	"I04X" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"int" : 1200,
			"str" : 1200,
			"agi" : 1200,
      "armor": 300,
			"movement_speed" : 150,
			"magic_resistance" : 13
		},
		"label" : "Branches of the Mother Tree",
    "k_label": "마더트리의 나뭇가지"
	},
	"I06W" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"int" : 1100,
			"str" : 1100,
			"agi" : 1100,
			"damage_increase" : 20
		},
		"label" : "Blazing Demonic Ring",
    "k_label": "타오르는 악마의 반지",
    "bugged": true
	},
	"I06U" : {
		"type" : "accessory",
		"color" : "purple",
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
    "k_label": "타오르는 마계의 반지"
	},
	"I07J" : {
		"type" : "accessory",
		"color" : "orange",
		"stats" : {
			"int" : 1700,
			"str" : 1700,
			"agi" : 1700,
			"damage_increase" : 15

		},
		"label" : "Blueberry Ring",
    "k_label": "드래곤 보석 반지",
		"effects" : ["On Use: Increase Bonus Damage by 40% for 15 seconds (120s cd)"],
		"k_effects" : ["사용시 15초간 추가데미지 40%증가(쿨타임 120초)"]
	},
	"I08B" : {
		"type" : "accessory",
		"color" : "orange",
		"stats" : {
			"int" : 1700,
			"str" : 1700,
			"agi" : 1700,
			"hp" : 25000,
			"mp" : 15000,
			"movement_speed" : 150,
			"hp_regen" : 1000

		},
		"label" : "Diamond Ring",
    "k_label": "금강석 반지"
	},
	"I08C" : {
		"type" : "accessory",
		"color" : "orange",
		"stats" : {
			"int" : 1700,
			"str" : 1700,
			"agi" : 1700,
			"damage_increase" : 30
		},
		"label" : "Frozen Spirit Ring",
    "k_label": "얼어붙은 청옥 반지"
	},
	"I08F" : {
		"type" : "accessory",
		"color" : "blue",
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
			"damage_increase" : 23
		},
		"label" : "Black Soul Ring",
    "k_label": "요르단 반지",
		"effects" : ["On Use: Increased Bonus Damage by 60% for 15 seconds (120s cd)"],
		"k_effects" : ["사용시 15초간 추가데미지 60%증가(쿨타임 120초)"]
	},
	"I08E" : {
		"type" : "accessory",
		"color" : "blue",
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
			"damage_increase" : 40
		},
		"label" : "Blue Sky Jewel",
    "k_label": "창천의 청옥"
	},
	"I08D" : {
		"type" : "accessory",
		"color" : "blue",
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
			"hp" : 33000,
			"mp" : 20000,
			"movement_speed" : 150,
			"hp_regen" : 1500
		},
		"label" : "Stone of Blight",
    "k_label": "칠흑의 금강석"
	},
	"I0CK" : {
		"type" : "accessory",
		"color" : "blue",
		"stats" : {
			"str" : 3500,
			"hp" : 40000
		},
		"label" : "Refined Dragon Heart",
    "k_label": "정제된 드래곤 하트",
		"effects" : ["Recover 40% of MAX HP every 28 seconds"],
		"k_effects" : ["28초마다 최대체력 40%회복"]
	},
	"I03S" : {
		"type" : "helmet",
		"color" : "purple",
		"stats" : {
			"armor" : 500,
			"int" : 600,
			"str" : 600,
			"agi" : 600,
			"damage_taken" : -7
		},
		"label" : "Helm of Dazzling Light",
    "k_label": "눈부신 빛의 투구"
	},	
	"I04S" : {
		"type" : "helmet",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"int" : 600,
			"str" : 600,
			"agi" : 600
		},
		"label" : "Helmet of the Earth",
    "k_label": "대지의 가호 투구",
		"effects" : ["On Use: Create a Anti Magic Shield for 5 seconds (150s cd)"],
		"k_effects" : ["사용시 5초간 매직쉴드(쿨타임 150초)"]
	},	
	"I04R" : {
		"type" : "helmet",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"int" : 600,
			"str" : 600,
			"agi" : 600,
			"damage_increase" : 16
		},
		"label" : "Mage's Helm",
    "k_label": "마기의 투구"
	},
	"I03R" : {
		"type" : "helmet",
		"color" : "orange",
		"stats" : {
			"armor" : 600,
			"int" : 900,
			"str" : 900,
			"agi" : 900,
			"damage_increase" : 22
		},
		"label" : "Black Earth Helmet",
    "k_label": "검은 기운의 투구"
	},
	"I07I" : {
		"type" : "helmet",
		"color" : "orange",
		"stats" : {
			"armor" : 600,
			"int" : 900,
			"str" : 900,
			"agi" : 900
		},
		"label" : "Dragonic Helmet",
    "k_label": "드레곤 가죽 마법투구",
		"effects" : ["On Use: Create a Anti Magic Shield for 10 seconds (180s cd)"],
		"k_effects" : ["사용시 10초간 마법면혁(쿨타임 180초)"]
	},
	"I07H" : {
		"type" : "helmet",
		"color" : "orange",
		"stats" : {
			"armor" : 600,
			"int" : 900,
			"str" : 900,
			"agi" : 900,
			"damage_taken" : -10
		},
		"label" : "Dragon Leather Helm",
    "k_label": "드레곤 가죽 투구"
	},
	"I0CJ" : {
		"type" : "helmet",
		"color" : "orange",
		"stats" : {
			"armor" : 400,
			"int" : 1500,
			"mp" : 10000
		},
		"label" : "Foresight of the wise",
    "k_label": "현자의 지혜",
		"effects" : ["Recover 60% of maximum Mana on use (120s cd)"],
		"k_effects" : ["사용시 MP60% 회복 (쿨타임 120초)"],
    "bugged": true
	},
  "I08X" : {
		"type" : "helmet",
		"color" : "orange",
		"stats" : {
			"armor" : 400,
			"int" : 900,
			"str" : 900,
			"agi" : 900,
			"damage_increase" : 35,
			"damage_taken" : 15
		},
		"label" : "Demonic Sovereign's Horn",
    "k_label": "고위 악마의뿔"
	},
	"I03B" : {
		"type" : "artifact",
		"color" : "purple",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"damage_increase" : 10
		},
		"label" : "Corrupting Mask",
    "k_label": "순수한 악의 결정"
	},
	"I06H" : {
		"type" : "artifact",
		"color" : "purple",
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
		"k_effects" : ["초마다 10000의 쉴드 생성"]
	},	
	"I04Q" : {
		"type" : "artifact",
		"color" : "orange",
		"stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"damage_increase" : 25
		},
		"label" : "Dark Wings",
    "k_label": "다크윙"
	},
	"I079" : {
		"type" : "artifact",
		"color" : "orange",
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
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임10초)"]
	},
	"I088" : {
		"type" : "artifact",
		"color" : "orange",
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
		"k_effects" : ["10초마다 16000의 쉴드 생성"]
	},
	"I08G" : {
		"type" : "artifact",
		"color" : "blue",
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
    "bugged": true
	},
	"I08H" : {
		"type" : "artifact",
		"color" : "blue",
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"damage_increase" : 35
		},
		"label" : "Nightmare Wings",
    "k_label": "나이트메어 윙"
	},
	"I08U" : {
		"type" : "artifact",
		"color" : "blue",
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"damage_increase" : 17
		},
		"label" : "Wings of Despair",
    "k_label": "절망의 날개",
		"effects" : ["Enemies within range take an additional 17% Damage"],
		"k_effects" : ["절망의 기운을 뿜어대는 날개 절망의 대악마의 보물중하나"]
	},
	"I0BE" : {
		"type" : "artifact",
		"color" : "blue",
	   	"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"hp" : 15000
		},
		"label" : "Archangel's Wings",
    "k_label": "대천사의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 30% of MAX HP", "And 12% of MAX HP every second for 10 seconds (120s cd)"],
    "k_effects": ["생명력이 40%이하일때 즉사가 아닌 공격을받을면 즉시 생명력 30%를 회복하며", "10초간 초당 생명력 8% 회복 (쿨타임 120초)"]
	},
	"I0BF" : {
		"type" : "artifact",
		"color" : "blue",
    	"stats" : {
			"str" : 2100,
			"agi" : 2100,
			"int" : 2100,
			"attack_speed" : 160,
			"movement_speed" : 150
		},
		"label" : "Lightning Boots",
    "k_label": "번개각인 각반",
		"effects" : ["On Use: Dash forward (8s cd)"],
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임8초)"]
	},
	"I0CG" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"str" : 7000,
      "attack_speed": 160,
      "attack_str": true,
      "attack_real": 48
		},
		"label" : "Archangel's Judgement +1",
    "k_label": "대천사의 심판 +1",
    "bugged": true
	},
	"I0C6" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"damage_increase" : 60
		},
		"label" : "Archangel's Amber Staff +1",
    "k_label": "대천사의 증폭 지팡이 +1"
	},
	"I0CA" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"damage_increase" : 90,
			"damage_taken" : 29
		},
		"label" : "Archangel's Gauntlets +1",
    "k_label": "대천사의 건들릿 +1"
	},
	"I096" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"attack_speed" : 200,
      "attack_agi": true,
      "attack_real": 42
		},
		"label" : "Archangel's Dagger +1",
    "k_label": "대천사의 단검 +1"
	},
	"I09E" : {
		"type" : "weapon",
		"color" : "red",
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
    "bugged": true
	},
	"I090" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"damage_increase" : 60
		},
		"label" : "Archangel's Blade +1",
    "k_label": "대천사의 도검 +1"
	},
	"I0AE" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"mp" : 28000,
      "contract": 0.0000044,
      "int_tick": true            
		},
		"label" : "Niflheim +1",
    "k_label": "대천사의 마력 지팡이 +1"
	},
	"I0AH" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"str" : 7000,
			"hp" : 45000
		},
		"label" : "Angelic Sword of Life +1",
    "k_label": "대천사의 생명검 +1",
		"effects" : ["Every 10 attacks will recover STR x5.5 HP (9s cd)", "Every 6 spells will recover STR x5.5 HP (10s cd)", "On Use: Restores STR x7.5 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복 (STR x5.5)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x5.5)(쿨타임 10초)", "사용시  생명력회복 (STR x7.5)(쿨타임 120초)"]
	},
	"I0AK" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"agi" : 7000,
			"hp" : 45000
		},
		"label" : "Angelic Bow of Life +1",
    "k_label": "대천사의 생명의활 +1",
		"effects" : ["Every 10 attacks will recover AGI x5.5 HP (9s cd)", "Every 6 spells will recover AGI x5.5 HP (10s cd)", "On Use: Restores AGI x7.5 HP (120s cd)"],
    "k_effects": ["기본공격 10회시 생명력회복(AGI x5.5)(쿨타임 10초)", "스킬사용 6회시 생명력회복(AGI x5.5)(쿨타임 10초)", "사용시  생명력회복 (AGI x7.5 )(쿨타임 120초)"]
	},
	"I0AN" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"hp" : 45000
		},
		"label" : "Archangel's Life Staff +1",
    "k_label": "대천사의 생명지팡이 +1",
		"effects" : ["Every 4 spells will recover INT x6.5 HP (10s cd)", "On Use: Restore INT x7.5 HP of all allies within range (80s cd)"],
    "k_effects": ["스킬사용 4회시 생명력 회복 (INT x6.5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x7.5)(쿨타임 80초)"]
	},
	"I09A" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"str" : 5900,
			"agi" : 5900,
      "attack_str_agi": true,
      "attack_real": 15  
		},
		"label" : "Archangel's Sword +1",
    "k_label": "대천사의 소검 +1",
		"effects" : ["On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x105 damage (80s cd)"],
    "k_effects": ["사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x105)(쿨타임 80초)"],
    "bugged": true
	},
	"I09Q" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 260000,
			"str" : 5900,
			"int" : 5900,
      "int_tick": true,
      "attack_str_int_real": 45.6      
		},
		"label" : "Archangel's Battle Staff +1",
    "k_label": "대천사의 전투지팡이 +1"
	},
	"I09M" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 260000,
			"int" : 7000,
      "int_tick": true,
      "attack_int_real": 114
		},
		"label" : "Archangel's Staff +1",
    "k_label": "대천사의 지팡이 +1"
	},
	"I09I" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 260000,
			"str" : 7000
		},
		"label" : "Archangel's Glaive +1",
    "k_label": "대천사의 창 +1",
		"effects" : ["On Use: Causes an explosion, dealing 500000 + STR x230 damage (45s cd)"],
		"k_effects" : ["사용시 용기의 폭발 시전 (500000 + STR x230)(쿨타임 45초)"]
	},
	"I0AR" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"int" : 7000
		},
		"label" : "Blessed Staff +1",
    "k_label": "대천사장의 지팡이 +1",
		"effects" : ["On Use: Summons an angel"],
    "k_effects": ["사용시 고위천사 소환"]
	},
	"I0AT" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 260000,
			"int" : 7000,
			"damage_increase" : 30
		},
		"label" : "Archangel's Light Staff +1",
    "k_label": "대천사의 빛의 지팡이 +1",
		"effects" : ["Increases nearby allies damage by 27%"],
		"k_effects" : ["주변아군 추가데미지 30%증가 오라 생성"]
	},
	"I0CH" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"str" : 7500,
      "attack_speed": 160,
      "attack_str": true,
      "attack_real": 56
		},
		"label" : "Archangel's Judgement +2",
    "k_label": "대천사의 심판 +2",
    "bugged": true
	},
	"I0CB" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"damage_increase" : 105,
			"damage_taken" : 33
		},
		"label" : "Archangel's Gauntlets +2",
    "k_label": "대천사의 건들릿 +2"
	},
	"I0AI" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 300000,
			"str" : 7500,
			"hp" : 50000
		},
		"label" : "Angelic Sword of Life +2",
    "k_label": "대천사의 생명검 +2",
		"effects" : ["Every 10 attacks will recover STR x6 HP (9s cd)", "Every 6 spells will recover STR x6 HP (10s cd)", "On Use: Restores STR x8 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (STR x6)(쿨타임 10초)", "스킬사용 6회시 생명력회복 (STR x6)(쿨타임 10초)", "사용시  생명력회복 (STR x8)(쿨타임 120초)"]
	},
	"I09F" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 300000,
			"str" : 5600,
			"agi" : 5600,
			"int" : 5600
		},
		"label" : "Excalibur +2",
    "k_label": "대천사의 검 +2",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 380000 + (STR + AGI + INT) x250 (120s cd)"],
		"k_effects" : ["사용시 정의의 일격 시전 (380000 + (STR + AGI + INT) x250)(쿨타임 120초)"]
	},
	"I097" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"attack_speed" : 200,
      "attack_agi": true,
      "attack_real": 48
		},
		"label" : "Archangel's Dagger +2",
    "k_label": "대천사의 단검 +2"
	},
	"I091" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"damage_increase" : 65
		},
		"label" : "Archangel's Blade +2",
    "k_label": "대천사의 도검 +2"
	},
	"I0C1" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"damage_increase" : 33
		},
		"label" : "Archangel's Light Staff +2",
    "k_label": "대천사의 빛의 지팡이 +2",
		"effects" : ["Increases nearby allies damage by 33%"],
		"k_effects" : ["주변아군 추가데미지 33%증가 오라 생성"]
	},
	"I0AF" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"mp" : 32000,
      "contract": 0.0000046,
      "int_tick": true             
		},
		"label" : "Niflheim +2",
    "k_label": "대천사의 마력 지팡이 +2"
	},
	"I0AL" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"hp" : 50000
		},
		"label" : "Angelic Bow of Life +2",
    "k_label": "대천사의 생명의활 +2",
		"effects" : ["Every 10 attacks will recover AGI x6 HP (9s cd)", "Every 6 spells will recover AGI x6 HP (10s cd)", "On Use: Restores AGI x8 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (AGI x6)(쿨타임 10초)", "스킬사용 6회시 생명력회복 (AGI x6)(쿨타임 10초)", "사용시  생명력회복 (AGI x8)(쿨타임 120초)"],
    "bugged": true
	},
	"I0AO" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"hp" : 50000
		},
		"label" : "Archangel's Life Staff +2",
    "k_label": "대천사의 생명지팡이 +2",
		"effects" : ["Every 4 spells will recover INT x7 HP (10s cd)", "On Use: Restore INT x8 HP of all allies within range (80s cd)"],
		"k_effects" : ["스킬사용 4회시 생명력 회복 (INT x7)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x8)(쿨타임 80초)"]
	},
	"I0C7" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
			"damage_increase" : 65
		},
		"label" : "Archangel's Amber Staff +2",
    "k_label": "대천사의 증폭 지팡이 +2"
	},
	"I09B" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"str" : 6300,
			"agi" : 6300,
      "attack_str_agi": true,
      "attack_real": 17
		},
		"label" : "Archangel's Sword +2",
    "k_label": "대천사의 소검 +2",
		"effects" : ["On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x120 damage (80s cd)"],
		"k_effects" : ["사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x120)(쿨타임 80초)"],
    "bugged": true
	},
	"I09R" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"str" : 6300,
			"int" : 6300,
      "int_tick": true,
      "attack_str_int_real": 50.4       
		},
		"label" : "Archangel's Battle Staff +2",
    "k_label": "대천사의 전투지팡이 +2"
	},
	"I09N" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"int" : 7500,
      "int_tick": true,
      "attack_int_real": 126        
		},
		"label" : "Archangel's Staff +2",
    "k_label": "대천사의 지팡이 +2"
	},
	"I09J" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"str" : 7500
		},
		"label" : "Archangel's Glaive +2",
    "k_label": "대천사의 창 +2",
		"effects" : ["On Use: Causes an explosion, dealing 600000 + STR x260 damage (45s cd)"],
		"k_effects" : ["사용시 용기의 폭발 시전 (600000 + STR x260)(쿨타임 45초)"]
	},
	"I0C3" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"int" : 7500
		},
		"label" : "Blessed Staff +2",
    "k_label": "대천사장의 지팡이 +2",
		"effects" : ["On Use: Summons an angel"],
		"k_effects" : ["사용시 고위천사 소환"]
	},
	"I0CI" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"str" : 8000,
      "attack_speed": 160,
      "attack_str": true,
      "attack_real": 64
		},
		"label" : "Archangel's Judgement +3",
    "k_label": "대천사의 심판 +3",
    "bugged": true
	},
	"I0CC" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"damage_increase" : 130,
			"damage_taken" : 37
		},
		"label" : "Archangel's Gauntlets +3",
    "k_label": "대천사의 건들릿 +3"
	},
	"I0AJ" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"str" : 8000,
			"hp" : 55000
		},
		"label" : "Angelic Sword of Life +3",
    "k_label": "대천사의 생명검 +3",
		"effects" : ["Every 10 attacks will recover STR x6.7 HP (9s cd)", "Every 6 spells will recover STR x6.7 HP (10s cd)", "On Use: Restores STR x8.7 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)", "사용시  생명력회복 (STR x8.7)(쿨타임 120초)"]
	},
	"I09G" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000
		},
		"label" : "Excalibur +3",
    "k_label": "대천사의 검 +3",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 420000 + (STR + AGI + INT) x280 (120s cd)"],
		"k_effects" : ["사용시 정의의 일격 시전 (420000 + (STR + AGI + INT) x280)(쿨타임 120초)"]
	},
	"I098" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"attack_speed" : 200,
      "attack_agi": true,
      "attack_real": 53
		},
		"label" : "Archangel's Dagger +3",
    "k_label": "대천사의 단검 +3"
	},
	"I092" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"damage_increase" : 70
		},
		"label" : "Archangel's Blade +3",
    "k_label": "대천사의 도검 +3"
	},
	"I0AG" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"mp" : 36000,
      "contract": 0.0000049,
      "int_tick": true           
		},
		"label" : "Niflheim +3",
    "k_label": "대천사의 마력 지팡이 +3",
	},
	"I0AM" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"agi" : 8000,
			"hp" : 55000
		},
		"label" : "Angelic Bow of Life +3",
    "k_label": "대천사의 생명의활 +3",
		"effects" : ["Every 10 attacks will recover AGI x6.7 HP (9s cd)", "Every 6 spells will recover AGI x6.7 HP (10s cd)", "On Use: Restores AGI x8.7 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)", "사용시  생명력회복 (AGI x8.7)(쿨타임 120초)"]
	},
	"I0AP" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"hp" : 55000
		},
		"label" : "Archangel's Life Staff +3",
    "k_label": "대천사의 생명지팡이 +3",
		"effects" : ["Every 4 spells will recover INT x7.5 HP (10s cd)", "On Use: Restore INT x8.7 HP of all allies within range (80s cd)"],
    "k_effects": ["스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x8.7)(쿨타임 80초)"]
	},
	"I09C" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"str" : 6700,
			"agi" : 6700,
      "attack_str_agi": true,
      "attack_real": 19
		},
		"label" : "Archangel's Sword +3",
    "k_label": "대천사의 소검 +3",
		"effects" : ["On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x135 damage (80s cd)"],
		"k_effects" : ["사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x135)(쿨타임 80초)"],
    "bugged": true
	},
	"I09S" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"str" : 6700,
			"int" : 6700,
      "int_tick": true,
      "attack_str_int_real": 60         
		},
		"label" : "Archangel's Battle Staff +3",
    "k_label": "대천사의 전투지팡이 +3"
	},
	"I09O" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
      "int_tick": true,
      "attack_int_real": 147            
		},
		"label" : "Archangel's Staff +3",
    "k_label": "대천사의 지팡이 +3"
	},
	"I09K" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"str" : 8000
		},
		"label" : "Archangel's Glaive +3",
    "k_label": "대천사의 창 +3",
		"effects" : ["On Use: Causes an explosion, dealing 700000 + STR x300 damage (45s cd)"],
    "k_effects": ["사용시 용기의 폭발 시전 (700000 + STR x300)(쿨타임 45초)"]
	},
	"I0C2" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"damage_increase" : 37
		},
		"label" : "Archangel's Light Staff +3",
    "k_label": "대천사의 빛의 지팡이 +3",
		"effects" : ["Increases nearby allies damage by 37%"],
		"k_effects" : ["주변아군 추가데미지 37%증가 오라 생성"]
	},
	"I0C4" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"int" : 8000
		},
		"label" : "Blessed Staff +3",
    "k_label": "대천사장의 지팡이 +3",
		"effects" : ["On Use: Summons an angel"],
		"k_effects" : ["사용시 고위천사 소환"],
    "bugged": true
	},
	"I0C8" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"int" : 8000,
			"damage_increase" : 70
		},
		"label" : "Archangel's Amber Staff +3",
    "k_label": "대천사의 증폭 지팡이 +3"
	},
	"I0A7" : {
	  "type" : "material",
	  "color" : "black",
	  "label" : "Lower Aggregate Energy",
    "k_label": "하급 에너지 집합체"
	},
	"I0A8" : {
	  "type" : "material",
	  "color" : "black",
	  "label" : "Intermediate Aggregate Energy",
    "k_label": "중급 에너지 집합체"
	},
	"I0A9" : {
	  "type" : "material",
	  "color" : "black",
	  "label" : "Greater Aggregate Energy",
    "k_label": "상급 에너지 집합체"
	},	
	"I0AA" : {
	  "type" : "material",
	  "color" : "black",
	  "label" : "Superlative Aggregate Energy",
    "k_label": "최상급 에너지 집합체"
	},	
	"I04D" : {
		"type" : "helmet",
		"color" : "orange",
		"stats" : {
			"armor" : 500,
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"damage_increase" : 17
		},
		"label" : "Beresa's Horn",
    "k_label": "베레스라의 뿔"
	},
	"I04C" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 5000,
      "damage_increase": 35
		},
		"label" : "Beresa’s Sword",
    "k_label": "베레스라의 검"
	},
  "I06V" : {
		"type" : "helmet",
		"color" : "purple",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"damage_increase" : 20,
			"damage_taken" : 10
		},
		"label" : "Demonic Leather Helm",
    "k_label": "악마의 가죽 투구"
	},
	"I06G" : {
		"type" : "helmet",
		"color" : "purple",
		"stats" : {
			"armor" : 300,
			"int" : 1000,
			"mp" : 5000
		},
		"label" : "Helm of Heavenly Wisdom",
    "k_label": "천상의 지혜",
		"effects" : ["Restore 40% of maximum MP on use (180s cd)"],
		"k_effects" : ["사용시 MP40% 회복 (쿨타임 180초)"]
	},
	"I043" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"damage_increase" : 12
		},
		"label" : "Enhanced Ring of Approval",
    "k_label": "증명의 증폭반지",
	},
	"I082" : {
		"type" : "armor",
		"color" : "orange",
		"stats" : {
			"armor" : 600,
			"str" : 1800,
			"agi" : 1800,
			"int" : 1800,
			"hp" : 15000,
			"hp_regen_percent" : 1.5
		},
		"label" : "Elderwood Armor",
    "k_label": "마더트리 줄기갑옷"
	},
	"I03K" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"hp" : 3000,
			"mp" : 2000,
			"movement_speed" : 150
		},
		"label" : "Ring of Approval",
    "k_label": "증명의 반지"
	},
	"I04W" : {
		"type" : "artifact",
		"color" : "purple",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
		"label" : "Wings of Approval",
    "k_label": "증명의 날개"
	},
	"I03Y" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 28000,
			"agi" : 1000
		},
		"label" : "Agile Dagger",
    "k_label": "민첩의 단검"
	},
	"I03E" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 25000,
			"str" : 1000
		},
		"label" : "Sword of Power",
    "k_label": "힘의 대검"
	},
	"I05U" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 20000,
			"int" : 1300
		},
		"label" : "Sword of Intelligence",
    "k_label": "지능의 지팡이"
	},
	"I05V" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"str" : 500,
			"hp" : 6000
		},
		"label" : "Armor of Approval",
    "k_label": "증명의 갑옷"
	},
	"I04M" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 300,
			"agi" : 500,
			"damage_increase" : 6
		},
		"label" : "Leather Armor of Approval",
    "k_label": "증명의 가죽갑옷"
	},
	"I040" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 250,
			"int" : 700,
			"mp" : 4000
		},
		"label" : "Robes of Approval",
    "k_label": "증명의 로브"
	},
	"I03A" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 25000,
			"str" : 1700
		},
		"label" : "Destroyer's Axe",
    "k_label": "파괴자의 도끼",
		"effects" : ["On use: Deals 50000 + STR x8 aoe damage and stuns  (120s cd)"],
    "k_effects": ["사용시 죽음의 내려찍기를 시전 (50000 + STR x8)(쿨타임 120초)"]
	},
	"I041" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 600,
			"str" : 1000
		},
		"label" : "The Colosseum Armor",
    "k_label": "콜로세움 갑옷",
		"effects" : ["On use, recover 15000 HP (120s cd)"],
    "k_effects": ["사용시 생명력 15000회복 (쿨타임 120초)"]
	},
	"I03I" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"int" : 1000,
			"damage_increase" : 10
		},
		"label" : "Arc’s Wizard Robe",
    "k_label": "아크위저드의 로브"
	},
	"I04Y" : {
		"type" : "helmet",
		"color" : "purple",
		"stats" : {
			"armor" : 300,
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
		"label" : "Knight's Helm",
    "k_label": "기사의 투구",
		"effects" : ["On Use: Grants a 5 second anti magic shield (200s cd)"],
		"k_effects" : ["사용시 5초간 매직쉴드(쿨타임 200초)"]
	},
	"I03D" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 10000,
			"int" : 2000
		},
		"label" : "Bloodied Staff",
    "k_label": "피뭍은 지팡이",
		"effects" : ["On use: grants 700 intelligence for 10 seconds (120s cd)"],
		"k_effects" : ["사용시 10초간 지능 +700증가 (쿨타임 120초)"]
	},
	"I034" : {
		"type" : "material",
		"color" : "black",
		"label" : "Essence of Destruction",
    "k_label": "파괴의 본능"
	},
	"I03J" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"agi" : 1000,
			"hp" : 6000
		},
		"label" : "Insanity's Leather Armor",
    "k_label": "광기의 가죽갑옷"
	},
	"I03Z" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 25000,
			"agi" : 1500,
			"attack_speed" : 80
		},
		"label" : "Insanity's Dagger",
    "k_label": "광기의 단검"
	},
	"I03P" : {
		"type" : "artifact",
		"color" : "purple",
		"stats" : {
			"str" : 600,
			"agi" : 600,
			"int" : 600,
			"movement_speed" : 150,
			"attack_speed" : 50
		},
		"label" : "Boots of Swiftness",
    "k_label": "신속의 신발",
	},
	"I046" : {
		"type" : "helmet",
		"color" : "purple",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_increase" : 10
		},
		"label" : "Insanity's Helmet",
    "k_label": "광기의 투구",
    "bugged": true
	},
	"I05Y" : {
		"type" : "material",
		"color" : "black",
		"label" : "Essence of Insanity",
    "k_label": "광기의 기운"
	},
	"I062" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"hp" : 5000,
			"max_health" : 6
		},
		"label" : "Armor of Nature",
    "k_label": "자연의 갑옷"
	},
	"I064" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 30000,
			"int" : 1600
		},
		"label" : "Staff of the Elemental",
    "k_label": "정령의 지팡이",
		"effects" : ["Recover INT x3 HP (60s cd)"],
		"k_effects" : ["사용시 지능비례 생명력 회복 (INT x3)(쿨타임 60초)"]
	},
	"I061" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 30000,
			"str" : 1600
		},
		"label" : "Sword of the Elemental",
    "k_label": "정령의 검",
		"effects" : ["Recover STR x3 HP (60s cd)"],
		"k_effects" : ["사용시 힘비례 생명력 회복 (STR x3)(쿨타임 60초)"]
	},
	"I063" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 30000,
			"agi" : 1600,
      "str": 600,
      "int": 600
		},
		"label" : "Spirit Bow",
    "k_label": "정령의 활",
		"effects" : ["Recover AGI x3 HP (60s cd)"],
		"k_effects" : ["사용시 민첩비례 생명력 회복 (AGI x3)(쿨타임 60초)"],
    "bugged": true
	},
	"I03M" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"movement_speed" : 150,
			"magic_resistance" : 10,
      "armor": 200
		},
		"label" : "Leaves of the mother tree",
    "k_label": "마더트리의 잎"
	},
	"I065" : {
		"type" : "material",
		"color" : "black",
		"label" : "Elemental Spirit",
    "k_label": "정령의 숨결"
	},
	"I067" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 40000,
			"str" : 1600,
			"agi" : 1600,
			"int" : 1600,
      "attack_real": 5,
      "attack_agi": true
		},
		"label" : "Sword of Light",
    "k_label": "빛의검"
	},
	"I068" : {
		"type" : "artifact",
		"color" : "purple",
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
    "k_effects": ["10초마다 6000의 쉴드 생성"]
	},
	"I069" : {
		"type" : "helmet",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_taken" : -4
		},
		"label" : "Helm of Light",
    "k_label": "빛의 투구",
    "bugged": true
	},
	"I066" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000
		},
		"label" : "Caliburn",
    "k_label": "성검 칼리번",
		"effects" : ["On Use: Deals 100000 + (STR + AGI + INT) x15 aoe dmg and stuns all enemies around user (180s cd)"],
		"k_effects" : ["사용시 빛의 강림 시전 (100000 + (STR + AGI + INT) x15)(쿨타임180초)"]
	},
	"I06A" : {
		"type" : "material",
		"color" : "black",
		"label" : "Heaven Sigil",
    "k_label": "가디언의 증표"
	},
	"I06I" : {
		"type" : "material",
		"color" : "black",
		"label" : "Waterstone Fragment",
    "k_label": "수호석 핵"
	},
	"I06F" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"str" : 1000,
			"agi" : 1000,
			"int" : 1000,
			"hp" : 6000,
			"damage_taken" : -10
		},
		"label" : "Waterstone Ring",
    "k_label": "수호석 반지",
    "bugged": true
	},
	"I04E" : {
		"type" : "artifact",
		"color" : "orange",
    "stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"damage_increase" : [12, 9.6]
		},
		"label" : "Helgainer’s Inner Wing",
    "k_label": "헬 게이너 날개",
		"effects" : ["Passive: An aura that causes nearby enemies to take 12% Bonus Damage (Range 750)"],
		"k_effects" : ["추가데미지 12% 의 오라생성 (범위 750)"]
	},
	"I06X" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"agi" : 2500,
			"damage_increase" : 27,
			"damage_taken" : 10
		},
		"label" : "Helgainer’s Claws",
    "k_label": "헬게이너 손톱"
	},
	"I06T" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 500,
			"agi" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"label" : "Agile Leather Armor",
    "k_label": "신속의 가죽갑옷"
	},
	"I070" : {
		"type" : "stats",
		"color" : "darkred",
		"stats_points" : 8,
		"label" : "Magical Flask",
    "k_label": "마계의 영약"
	},
	"I051" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 600,
			"str" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"label" : "Agile Armor",
    "k_label": "신속의 갑옷",
    "bugged": true
	},
	"I0B6" : {
		"type" : "armor",
		"color" : "purple",
		"stats" : {
			"armor" : 400,
			"int" : 1700,
			"damage_increase" : 15,
			"movement_speed" : 150
		},
		"label" : "Nimble Robe",
    "k_label": "신속의 로브"
	},
	"I06J" : {
		"type" : "stats",
		"color" : "darkred",
		"label" : "Celestial Water",
    "k_label": "천계의 영약",
		"stats_points" : 8
	},
	"I06Z" : {
		"type" : "material",
		"color" : "black",
		"label" : "Mastermind Token",
    "k_label": "수문장 징표"
	},
	"I07C" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 3300,
			"damage_increase" : 16
		},
		"label" : "Gloomy Staff",
    "k_label": "검은기운의 지팡이",
		"effects" : ["Emits an aura that adds 16% addtional damage"],
		"k_effects" : ["자신과 주변 아군들 추가데미지 16% 증가"]	
	},
	"I077" : {
		"type" : "stats",
		"color" : "darkred",
		"stats_points" : 12,
		"label" : "Black Earth",
    "k_label": "검은 대지의 기운"
	},
	"I04H" : {
		"type" : "material",
		"color" : "black",
		"label" : "Black Clay Powder",
    "k_label": "검은 흙가루"
	},
	"I07M" : {
		"type" : "stats",
		"color" : "darkred",
		"stats_points" : 12,
		"label" : "Dragon Meat",
    "k_label": "드레곤 고기"	
	},
	"I07O" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 3300,
			"mp" : 15000,
      "contract": 0.0000028,
      "int_tick": true
		},
		"label" : "Mana Storm Staff",
    "k_label": "마나 폭풍 지팡이"
	},
	"I07K" : {
		"type" : "material",
		"color" : "black",
		"label" : "Crystallized Dragon Eye",
    "k_label": "드레곤 슬레이어의 증표"
	},
	"I07G" : {
		"type" : "accessory",
		"color" : "orange",
    "stats" : {
      "str" : 2500,
      "hp" : 30000
    },
		"label" : "Dragon Heart",
    "k_label": "드래곤 하트",
    "effects" : ["Recovers 30% of maximum HP every 28 seconds"],
    "k_effects": ["28초마다 최대체력 30%회복"]
	},
	"I045" : {
		"type" : "accessory",
		"color" : "orange",
    "stats" : {
      "int" : 2700,
      "mp" : 30000
    },
		"label" : "Heart of Mana",
    "k_label": "마나 하트",
    "effects" : ["Recovers 30% of maximum mana every 28 seconds"],
    "k_effects": ["28초마다 최대마나 30%회복"]
	},
	"I07F" : {
		"type" : "artifact",
		"color" : "blue",
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
		"k_effects" : ["주변 적군 공이속 15%감소", "주변 아군 공속 60% 이속 20%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x70)(쿨타임 180초)"]
	},
	"I0BD" : {
		"type" : "artifact",
		"color" : "orange",
		"stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
			"hp" : 10000
		},
		"label" : "Angel Wings",
    "k_label": "천사의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 30% of MAX HP", "And 8% of MAX HP every second for 10 seconds (120s cd)"],
    "k_effects": ["생명력이 40%이하일때 즉사가 아닌 공격을받을면 즉시 생명력 30%를 회복하고", "10초간 초당 생명력 8% 회복 (쿨타임 120초)"]
	},
	"I07X" : {
		"type" : "material",
		"color" : "black",
		"label" : "Mother Tree Bark",
    "k_label": "마더 트리의 뿌리"	
	},
	"I087" : {
		"type" : "stats",
		"color" : "darkred",
		"stats_points" : 8,
		"label" : "Tea Leaves",
    "k_label": "마더트리 차",	
	},
	"I080" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"agi" : 5000
		},
		"label" : "Waterstone Dirk",
    "k_label": "세계수의 나뭇가지",
		"effects" : ["On use, agility +28% for 20 seconds (120s cd)", "Deals AGI x40 to near enemies", "Recovers 20000 HP for each near enemy"],
		"k_effects" : ["사용시 주변유닛의 정기를 흡수하며 흡수된 수에비례 생명력 회복 20초간 민첩 28% 증가 (쿨타임 120초)"]
	},
	"I081" : {
		"type" : "accessory",
		"color" : "orange",
		"stats" : {
			"str" : 1700,
			"agi" : 1700,
			"int" : 1700,
			"hp_regen" : 700
		},
		"label" : "Essence of Life",
    "k_label": "생명의 가호",
		"effects" : ["Allies within range gain HP recovery per second +700", "On Use: Recovers (STR + AGI + INT) x2 HP every second for 5 seconds (120s cd)"],
    "k_effects": ["범위내 아군 초당 생명력 회복 700", "사용시 5초간 사용지점에 매초마다 마더트리의 가호 발동 (STR + AGI + INT) x2)(쿨타임 120초)"]
	},
  "I0AQ" : {
    "type" : "material",
    "color" : "black",
    "label" : "God Essence",
    "k_label": "신의 금속"
  },
  "I0A6" : {
    "type" : "chest",
    "color" : "red",
    "label" : "Archangel’s Assistance",
    "k_label": "대천사의 보구함",
    "effects" : ["Drops an artifact or auxiliary Myth item + Archangel Treasure Piece"],
    "k_effects": ["대천사의 신화급 보구를 획득합니다"]
  },
  "I0BU" : {
    "type" : "chest",
    "color" : "red",
    "label" : "Archangel’s Trinket",
    "k_label": "대천사의 악세서리함",
    "effects" : ["Drops an artifact or auxiliary Myth item + Archangel Treasure Piece"],
    "k_effects" : ["대천사의 신화급 보조템을 획득합니다"]
  },
  "I0AB" : {
    "type" : "chest",
    "color" : "red",
    "label" : "Archangel Treasure Chest",
    "k_label": "대천사의 보물함",
    "effects" : ["Requires at least 3500 base stats for drop"],
    "k_effects": ["드랍하려면 최소한 3500의 스탯이 필요하다."]
  },
  "I0AC" : {
    "type" : "material",
    "color" : "black",
    "label" : "Archangel’s Sigil",
    "k_label": "대천사의 증표"
  },
  "I0FB" : {
    "type" : "material",
    "color" : "black",
    "label" : "Archangel’s Sourcewell",
    "k_label": "대천사의 힘의 근원"
  },
  "I04Z" : {
    "type" : "material",
    "color" : "black",
    "label" : "Archangel Treasure Piece",
    "k_label": "대천사의 보물조각"
  },
  "I0AD" : {
  	"type" : "stats",
  	"color" : "darkred",
  	"label" : "Archangel Essence",
    "k_label": "대천사의 에너지",
    "effects" : ["Requires at least 3500 base stats for drop"],
    "k_effects": ["드랍하려면 최소한 3500의 스탯이 필요하다."],
    "stats_points" : 17
  },
  "I0A3" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "mp" : 8500
    },
    "label" : "Mana Rune",
    "k_label": "대천사의 마나룬"
  },
  "I09Z" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700
    },  
    "label" : "Archangel’s Mana Potion",
    "k_label": "대천사의 마나포션",
    "effects" : ["On Use: Restore 35% of maximum mana (30s cd)"],
    "k_effects" : ["사용시 최대마나 35%회복 (쿨타임 30초)"]
  },
  "I03C" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700
    },  
    "label" : "Archangel’s Potion",
    "k_label": "대천사의 포션",
    "effects" : ["On Use: Restore 30% of health (30s cd)"],
    "k_effects" : ["사용시 최대생명력 30%회복 (쿨타임 30초)"]
  },
  "I0A2" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "hp" : 15000
    },
    "label" : "Life Rune",
    "k_label": "대천사의 생명룬"
  },
  "I0A1" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "movement_speed" : 90,
      "attack_speed" : 50
    },
    "label" : "Archangel’s Ascent",
    "k_label": "대천사의 순풍룬"
  },
  "I0A0" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 700,
      "agi" : 700,
      "int" : 700,
      "damage_increase" : 13
    },
    "label" : "Magic Rune",
    "k_label": "대천사의 일격룬"
  },
  "I0BP" : {
    "type" : "artifact",
    "color" : "red",
    "stats" : {
      "str" : 2800,
      "agi" : 2800,
      "int" : 2800,
      "damage_increase" : 22
    },
    "label" : "Dazzling Light Wings",
    "k_label": "눈부신 빛의 날개",
    "effects" : ["Enemies within range take 22% Additional Damage"],
    "k_effects": ["범위내 적들 추가데미지 22% 오라"]
  },
	"I0BR" : {
		"type" : "artifact",
		"color" : "red",
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
	},
	"I0BQ" : {
		"type" : "artifact",
		"color" : "red",
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"attack_speed" : 160,
			"movement_speed" : 150
		},
		"label" : "Archangel’s Boots",
    "k_label": "대천사의 각반",
		"effects" : ["On Use: Dash forward (6s cd)"],
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임6초)"]
	},
	"I0BS" : {
		"type" : "artifact",
		"color" : "red",
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
    "bugged": true
	},
	"I0BT" : {
		"type" : "artifact",
		"color" : "red",
		"stats" : {
			"str" : 2800,
			"agi" : 2800,
			"int" : 2800,
			"damage_increase" : 45
		},
		"label" : "Wings of Justice",
    "k_label": "정의의 날개"
	},
	"I09D" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000
		},
		"label" : "Excalibur",
    "k_label": "대천사의 검",
		"effects" : ["On Use: Fires a laser in chosen direction (Deals 300000 + (STR + AGI + INT) x200)(120s cd)"],
    "k_effects": ["사용시 정의의 일격 시전 (300000 + (STR + AGI + INT) x200)(쿨타임 120초)"]
	},  
	"I093" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
		  "atk" : 230000,
		  "agi" : 6500,
			"attack_speed" : 200,
      "attack_agi": true,
      "attack_real": 37
		},
		"label" : "The Archangel’s Dagger",
    "k_label": "대천사의 단검"
	},
	"I08Z" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
			"damage_increase" : 55
		},
		"label" : "The Archangel’s Blade",
    "k_label": "대천사의 도검"
	},
	"I0A4" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
		  "atk" : 230000,
			"int" : 6500,
			"mp" : 25000,
      "contract": 0.0000042,
      "int_tick": true         
		},
		"label" : "Niflheim",
    "k_label": "대천사의 마력 지팡이"
	},
	"I09W" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"str" : 6500,
			"hp" : 40000
		},
		"label" : "Angelic Sword of Life",
    "k_label": "대천사의 생명검",
		"effects" : ["Every 10 attacks will recover STR x5 HP (9s cd)", "Every 6 spells will recover STR x5 HP (10s cd)", "On Use: Restores STR x7 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (STR x5)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x5)(쿨타임 10초)", "사용시  생명력회복 (STR x7)(쿨타임 120초)"]
	},
	"I09Y" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
			"hp" : 40000
		},
		"label" : "Angelic Bow of Life",
    "k_label": "대천사의 생명의활",
		"effects" : ["Every 10 attacks will recover AGI x5 HP (9s cd)", "Every 6 spells will recover AGI x5 HP (10s cd)", "On Use: Restores AGI x7 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (AGI x5)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x5)(쿨타임 10초)", "사용시  생명력회복 (AGI x7)(쿨타임 120초)"]
	},
	"I09X" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
			"hp" : 40000
		},
		"label" : "Archangel’s Staff of Life",
    "k_label": "대천사의 생명지팡이",
		"effects" : ["Every 4 spells will recover INT x6 HP (10s cd)", "On Use: Restore INT x7 HP of all allies within range(80s cd)"],
		"k_effects" : ["스킬사용 4회시 생명력 회복 (INT x6)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x7)(쿨타임 80초)"]
	},
	"I099" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"str" : 5500,
			"agi" : 5500,
      "attack_str_agi": true,
      "attack_real": 11
		},
		"label" : "The Archangel’s Sword",
    "k_label": "대천사의 소검",
		"effects" : ["On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x90 damage (80s cd)"],
		"k_effects" : ["사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x90)(쿨타임 80초)"],
    "bugged": true
	},
	"I09P" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"str" : 5500,
			"int" : 5500,
      "int_tick": true,
      "attack_str_int_real": 38.4
		},
		"label" : "Archangel’s Battle Staff",
    "k_label": "대천사의 전투지팡이"
	},
	"I09L" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
      "attack_int_real": 96,
      "int_tick": true
		},
    "label" : "The Archangel’s Staff",
    "k_label": "대천사의 지팡이"
	},
  "I09H" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"str" : 6500
		},
		"label" : "The Archangel’s Glaive",
    "k_label": "대천사의 창",
		"effects" : ["On Use: Causes an explosion, dealing 400000 + STR x200 damage (45s cd)"],
		"k_effects" : ["사용시 용기의 폭발 시전 (400000 + STR x200)(쿨타임 45초)"]
	},
	"I0A5" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"int" : 6500
		},
		"label" : "Blessed Staff",
    "k_label": "대천사장의 지팡이",
		"effects" : ["On Use: Summons an angel"],
    "k_effects": ["사용시 고위천사 소환"]
	},
	"I0AS" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
      "damage_increase" : 27
		},
		"label" : "Archangel’s Light Staff",
    "k_label": "대천사의 빛의 지팡이",
		"effects" : ["Increases nearby allies damage by 27%"],
		"k_effects" : ["주변아군 추가데미지 27%증가 오라 생성"]
	},
	"I0C5" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"int" : 6500,
    	"damage_increase" : 55
		},
		"label" : "Archangel’s Amber Staff",
    "k_label": "대천사의 증폭 지팡이",
    "bugged": true
	},
	"I0C9" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"agi" : 6500,
      "damage_taken" : 25,
      "damage_increase" : 75
		},
		"label" : "Archangel’s Gauntlets",
    "k_label": "대천사의 건들릿"
	},
	"I0CF" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"str" : 6500,
      "attack_speed": 160,
      "attack_str": true,
      "attack_real": 40
		},
		"label" : "Archangel’s Judgement",
    "k_label": "대천사의 심판",
    "bugged": true
	},
	"I0D3" : {
		"type" : "auxiliary",
		"color" : "blue",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
		"label" : "Warrior’s Vitality Potion",
    "k_label": "마계의 포션",
    "effects" : ["On use, restore 30% of maximum hp (45s cd)"],
    "k_effects" : ["사용시 최대생명력 30%회복 (쿨타임 45초)"]
	},	
	"I0D0" : {
		"type" : "auxiliary",
		"color" : "blue",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"hp" : 9000
		},
		"label" : "Sigil of Life",
    "k_label": "생명룬"
	},
	"I0D2" : {
		"type" : "auxiliary",
		"color" : "blue",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"damage_increase" : 8
		},
		"label" : "Sigil of Magic",
    "k_label": "일격룬"
	},	
	"I0D8" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"agi" : 3500
		},
		"label" : "Dagger of the Shadow Spirit",
    "k_label": "검은 영혼의 단검",
		"effects" : ["Consumes 0.8% of maximum HP for each attack and deals an additional 30000 + AGI x16 damage (Only activates when HP is above 1%)"],
		"k_effects" : ["기본공격시 최대체력 0.8%소모(체력 1%이상일때 작동) 매공격시 어둠의 일격을 가합니다 (30000 + AGI x16)"],
    "bugged": true
	},
	"I0D6" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"str" : 3500
		},
		"label" : "Hellfire Great Sword",
    "k_label": "지옥불 대검",
		"effects" : ["Deal 20000 + STR x10 damage to nearby enemies every second", "On use: consume 2% of Maximum HP and deals 50000 + STR x20 damage to nearby enemies every second for 30 seconds"],
		"k_effects" : ["초마다 주변적들에게 데미지를 가합니다 (20000 + STR x10)", "사용시 30초동안 초당 체력을 2%소모하여 주변에 강력한 데미지를 가합니다 (50000 + STR x20)(쿨타임 80초)"]
	},
	"I0CR" : {
		"type" : "material",
		"color" : "black",
		"label" : "Crystallized Fossil",
    "k_label": "염화석"
	},	
	"I0D9" : {
		"type" : "artifact",
		"color" : "blue",
		"stats" : {
			"str" : 2000,
			"agi" : 2000,
			"int" : 2000,
			"damage_increase" : 25
		},
		"label" : "Blood Stone",
    "k_label": "마신의 결정",
    "effects": ["On use: adds the following effects for 20s (180s cd)", "40% magic resistance", "40% bonus damage", "Cannot remove item for 20s"],
    "k_effects": ["사용시 20초간 마신의 힘 사용 (쿨타임 180초)", "추가데미지 40%", "마법방어력 40% 추가", "20초간 아이템을 벗을수없음"]
	},
	"I0D7" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 3500,
      "contract": 0.4,
      "int_tick": true
		},
		"label" : "Shadow Contract",
    "k_label": "어둠의 계약"
	},	
	"I0CZ" : {
		"type" : "auxiliary",
		"color" : "blue",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400
		},
		"label" : "Magician’s Mana Potion",
    "k_label": "마계의 마나포션",
    "effects" : ["On use, restore 35% of maximum mana (45s cd)"],
    "k_effects" : ["사용시 최대마나 35%회복 (쿨타임 45초)"]
	},
	"I0CY" : {
		"type" : "auxiliary",
		"color" : "blue",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"mp" : 5000
		},
		"label" : "Sigil of Mana",
    "k_label": "마나룬"
	},
	"I0D1" : {
		"type" : "auxiliary",
		"color" : "blue",
		"stats" : {
			"str" : 400,
			"agi" : 400,
			"int" : 400,
			"movement_speed" : 50,
			"attack_speed" : 20
		},
		"label" : "Sigil of Ferocity",
    "k_label": "순풍룬"
	},
	"I033" : {
		"type" : "material",
		"color" : "black",
		"label" : "Agony",
    "k_label": "비명석"
	},
	"I0DB" : {
		"type" : "accessory",
		"color" : "blue",
		"stats" : {
			"str" : 2500,
			"agi" : 2500,
			"int" : 2500
		},
		"label" : "Jewel of Chaos",
    "k_label": "혼돈의 보석",
		"effects" : ["On Use: one of three effects will be used :", "150% Bonus Damage for 15 seconds", "Increase magical defense by 100% and armor by 10000 for 15 seconds", "Cannot use magic for 10 seconds (120s cd)"],
		"k_effects" : ["사용시 3가지중 랜덤효과 발동", "15초동안 추가데미지 150%증가", "15초동안 마법방어력 100%/방어력 10000증가", "10초간 마법사용 불가능 (쿨타임 120초)"],
    "bugged": true
	},
	"I036" : {
	  	"type" : "stats",
	  	"color" : "darkred",
	  	"label" : "Soul Fragments",
      "k_label": "대악마의 정기",
	    "effects" : ["Requires at least 4100 base stats for devil drop"],
	    "k_effects" : ["드랍하려면 최소한 4100의 스탯이 필요하다."],
	    "stats_points" : 18
  	},	
	"I037" : {
	    "type" : "chest",
	    "color" : "black",
	    "label" : "Black Soul Stone",
      "k_label": "검은 영혼석",
	    "effects" : ["Requires at least 4100 base stats for devil drop"],
	    "k_effects" : ["드랍하려면 최소한 4100의 스탯이 필요하다."]
	},
	"I035" : {
	    "type" : "chest",
	    "color" : "black",
      "label" : "Devil of Agony’s Treasure Chest",
      "k_label": "대악마의 보물함",
	    "effects" : ["Drops an accessory or helmet Myth item"],
	    "k_effects" : ["대악마의 신화급 악세서리와 투구를 획득합니다"]
	},  
	"I0DS" : {
	    "type" : "chest",
	    "color" : "black",
	    "label" : "Remnants of the Archdemon",
      "k_label": "대악마의 잔재",
	    "effects" : ["Drops an armor Mythic item"],
	    "k_effects" : ["대악마의 신화급 방어구를 획득합니다"]
	},
	"I0DT" : {
	    "type" : "material",
	    "color" : "black",
	    "label" : "The Devil’s Soul Scripture",
      "k_label": "대악마의 영혼조각"
	},
	"I0DR" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"hp" : 40000,
	    	"mp" : 25000,
	    	"movement_speed" : 200,
	    	"hp_regen" : 2000
	    },
	    "label" : "Devil’s Shadow Jewel",
      "k_label": "대악마의 검은보석"
	},
	"I0DP" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"int" : 4600,
	    	"mp" : 50000
	    },
	    "label" : "Devil’s Soulstone",
      "k_label": "대악마의 대마력",
	    "effects" : ["Recover 50% of maximum MP every 28 seconds"],
	    "k_effects" : ["28초마다 최대마나 50%회복"]
	},
	"I0DO" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"str" : 4600,
	    	"hp" : 50000
	    },
	    "label" : "Heart of the Devil",
      "k_label": "대악마의 심장",
	    "effects" : ["Recover 50% of maximum HP every 28 seconds"],
	    "k_effects" : ["28초마다 최대체력 50%회복"]
	},
	"I0DN" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"damage_increase" : 30
	    },
	    "label" : "Archdemon’s Soul Ring",
      "k_label": "대악마의 영혼 반지",
	    "effects" : ["On Use: Provides 80% bonus damage for 15 seconds (120s cd)"],
	    "k_effects" : ["사용시 15초간 추가데미지 80%증가 (쿨타임 120초)"]
	},
	"I0DQ" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"str" : 3500,
	    	"agi" : 3500,
	    	"int" : 3500,
	    	"damage_increase" : 50
	    },
	    "label" : "Ferocity’s Soul Ring",
      "k_label": "대악마의 일격의 반지"
	},
	"I0DM" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"mp" : 35000,
        "mps": 48
	    },
	    "label" : "Corrupted Mana Robes",
      "k_label": "대악마의 검은 마력로브"
	},
	"I0DK" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"hp" : 30000,
	    	"hp_regen" : -1500
	    },
	    "label" : "Malevolent Flame Armor",
      "k_label": "대악마의 검은불꽃 갑옷",
		  "effects" : ["Deal 8000 + STR x45 damage to all enemies around user per second"],
		  "k_effects" : ["초당생명력 1500감소 초당 주변에 데미지 (8000 + STR x45)"]
	},
	"I0DJ" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 3800,
	    	"agi" : 3800,
	    	"int" : 3800,
	    	"hp" : 30000,
	    	"max_health" : 27
	    },
	    "label" : "Arch Demon’s Life Armor",
      "k_label": "대악마의 생명의 갑옷"
	},
	"I0DE" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "label" : "Demonic Soul Armor",
      "k_label": "대악마의 암광 갑옷"
	},
	"I0DF" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1100,
	    	"agi" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "label" : "Demonic Amber Vest",
      "k_label": "대악마의 암광 경갑옷"
	},
	"I0DD" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"movement_speed" : 200,
	    	"damage_increase" : 40
	    },
	    "label" : "Demonic Amber Robe",
      "k_label": "대악마의 암광 로브"
	},
	"I0DC" : {
	    "type" : "armor",
	    "color" : "red",
	    "label" : "Regenerative Malevolent Armor",
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 3800,
	    	"agi" : 3800,
	    	"int" : 3800,
	    	"hp" : 30000,
	    	"hp_regen_percent" : 2.7
	    },
      "k_label": "대악마의 재생의 갑옷"
	},
	"I0DL" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 900,
	    	"int" : 4600,
	    	"damage_taken" : 12,
	    	"damage_increase" : 65
	    },
	    "label" : "Malevolent Flame Robes",
      "k_label": "대악마의 증폭 로브"
	},
	"I0DG" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1200,
	    	"str" : 4600,
	    	"hp" : 35000,
	    	"damage_taken" : -24
	    },
	    "label" : "Exalted Soul Armor",
      "k_label": "대악마의 표피 갑옷"
	},
	"I0DH" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1100,
	    	"agi" : 4600,
	    	"hp" : 35000,
	    	"damage_taken" : -24
	    },
	    "label" : "Exalted Soul Vest",
      "k_label": "대악마의 표피 경갑옷"
	},
	"I0DI" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 4600,
	    	"hp" : 35000,
	    	"damage_taken" : -24
	    },
	    "label" : "Exalted Soul Robes",
      "k_label": "대악마의 표피 로브"
    },
    "I0CT" : {
    	"type" : "helmet",
    	"color" : "blue",
    	"stats" :{
    		"armor" : 700,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300,
	    	"damage_taken" : -13
    	},
    	"label" : "Helmet of the Red Magus",
      "k_label": "붉은 마기의 투구"
    },
    "I0CU" : {
    	"type" : "helmet",
    	"color" : "blue",
    	"stats" :{
    		"armor" : 700,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300
    	},
    	"label" : "Hades Helm",
      "k_label": "붉은 마력의 투구",
    	"effects" : ["On Use: Grants an anti magic shield for 10 seconds (140s cd)"],
    	"k_effects" : ["사용시 10초간 마법면역 (쿨타임 140초)"]
    },
	  "I0CV" : {
      "type" : "helmet",
	    "color" : "blue",
	    "stats" : {
	    	"armor" : 500,
	    	"mp" : 15000,
	    	"int" : 2000
	    },
	    "label" : "Forbidden Wisdom",
      "k_label": "금지된 지혜",
	    "effects" : ["On Use: Restore 80% of Maximum MP (120s cd)"],
	    "k_effects" : ["사용시 MP80% 회복 (쿨타임 120초)"]
	},
	"I0CW" : {
      "type" : "helmet",
	    "color" : "blue",
	    "stats" : {
	    	"armor" : 500,
	    	"str" : 1300,
	    	"agi" : 1300,
	    	"int" : 1300,
	    	"damage_increase" : 50,
	    	"damage_taken" : 17	
	    },
	    "label" : "Arch Demon’s Horn",
      "k_label": "최상위 악마의뿔"
	 },
	"I0CX" : {
      "type" : "helmet",
	    "color" : "blue",
	    "stats" : {
	    	"armor" : 700,
	    	"str" :1300,
	    	"agi" :1300,
	    	"int" :1300,
	    	"damage_increase": 28
	    },
	    "label" : "Helmet of Surging Flame",
      "k_label": "불타는 기운의 투구"
	 },
	"I038" : {
      "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 600,
	    	"mp" : 20000,
	    	"int" :2500
	    },
	    "label" : "Otherworldly Insight",
      "k_label": "대악마의 두뇌",
	    "effects" : ["Recover 100% of maximum MP on use (120s cd)"],
	    "k_effects" : ["사용시 MP100% 회복 (쿨타임 120초)"]
	},
	 "I039" : {
      "type" : "weapon",
	    "color" : "blue",
	    "stats" : {
	    	"str" :5000,
	    	"atk" :160000
	    },
	    "label" : "Darkfire Greatsword",
      "k_label": "검은 지옥불대검",
	    "effects" : ["Deal 20000 + STR x14 damage to nearby enemies every second", "On use: consume 2% of Maximum HP and deals 60000 + STR x25 damage to nearby enemies every second for 30 seconds (80s cd)"],
	    "k_effects" : ["초마다 주변적들에게 데미지를 가합니다 (20000 + STR x14)", "사용시 30초동안 초당 체력을 2%소모하여 주변에 강력한 데미지를 가합니다 (60000 + STR x25)(쿨타임 80초)"]
	},
	"I047" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
      "contract": 0.6,
      "int_tick": true      
		},
		"label" : "Soul Contract",
    "k_label": "검은 어둠의 계약"
	},	
	"I04F" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"agi" : 5000
		},
		"label" : "Dagger of the Malevolent Devil",
    "k_label": "칠흑의 영혼의 단검",
		"effects" : ["Consumes 0.8% of maximum HP for each attack and deals an additional 30000 + AGI x20 damage (Only activates when HP is above 1%)"],
		"k_effects" : ["기본공격시 최대체력 0.8%소모 (체력 1%이상일때 작동) 매공격시 어둠의 일격을 가합니다"]
	},
	"I04T" : {
      "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_increase" :39
	    },
	    "label" : "Great Devil’s Shadow",
      "k_label": "대악마의 어둠"
	},
	"I04G" : {
      "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_taken" :-17
	    },
	    "label" : "Great Devil’s Skull",
      "k_label": "대악마의 두개골"
	},
	"I0DW" : {
      "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000
	    },
	    "label" : "Great Devil’s Helmet",
      "k_label": "대악마의 마력 투구",
	    "effects" :["Anti magic shield for 10 seconds(110s cd)"],
	    "k_effects" :["사용시 10초간 마법면역(쿨타임 110초)"]
	},
	"I0DX" : {
      "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 800,
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
	    	"damage_increase" : 65,
	    	"damage_taken" : 20
	    },
	    "label" : "Great Devil’s Horn",
      "k_label": "대악마의 뿔"
	},
	"I0DY" : {
	    "type" : "material",
	    "color" : "black",
	    "label" : "Boundless Twilight",
      "k_label": "끝없는 어둠"
	},
	"I0DZ" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 5500,
	    	"mp" : 40000,
        "mps": 58
	    },
	    "label" : "Chaotic Blight Robes",
      "k_label": "대혼돈의 마력로브"
	},
	"I0E0" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"hp" : 35000,
	    	"hp_regen" : -2000
	    },
	    "label" : "Chaotic Infernal Armor",
      "k_label": "대혼돈의 불꽃 갑옷",
		  "effects" : ["Deal damage every second (8000 + STR x55)"],
		  "k_effects" : ["초당 주변에 데미지 (8000 + STR x55)"]
	},
	"I0E1" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1000,
	    	"str" : 4400,
	    	"agi" : 4400,
	    	"int" : 4400,
	    	"hp" : 40000,
	    	"max_health" : 30
	    },
	    "label" : "Chaotic Vigor Armor",
      "k_label": "대혼돈의 생명의 갑옷"
	},
	"I0E2" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "label" : "Chaotic Bright Armor",
      "k_label": "대혼돈의 빛의 갑옷"
	},
	"I0E3" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1200,
	    	"agi" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "label" : "Chaotic Bright Greaves",
      "k_label": "대혼돈의 빛의 경갑"
	},
	"I0E4" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 5500,
	    	"movement_speed" : 200,
	    	"damage_increase" : 45
	    },
	    "label" : "Chaotic Bright Robes",
      "k_label": "대혼돈의 빛의 로브"
	},
	"I0E5" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1100,
	    	"str" : 4400,
	    	"agi" : 4400,
	    	"int" : 4400,
	    	"hp" : 40000,
	    	"hp_regen_percent" : 3
	    },
	    "label" : "Chaotic Armor of Rejuvenation",
      "k_label": "대혼돈의 치유의 갑옷",
      "bugged": true
	},
	"I0E6" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1000,
	    	"int" : 5500,
	    	"damage_taken" : 12,
	    	"damage_increase" : 75
	    },
	    "label" : "Chaotic Amplifying Robes",
      "k_label": "대혼돈의 증폭 로브"
	},
	"I0E7" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "label" : "Chaotic Guardian Armor",
      "k_label": "대혼돈의 수호 갑옷"
	},
	"I0E8" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1200,
	    	"agi" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "label" : "Chaotic Shadow Greaves",
      "k_label": "대혼돈의 수호 경갑"
	},
	"I0E9" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1100,
	    	"int" : 5500,
	    	"hp" : 40000,
	    	"damage_taken" : -27
	    },
	    "label" : "Chaotic Amber Robes",
      "k_label": "대혼돈의 수호 로브",
      "bugged": true
	},
	"I0EA" : {
	    "type" : "material",
	    "color" : "black",
	    "label" : "Chaotic Rune",
      "k_label": "타오르는 비명석"
	},
	"I0EB" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"hp" : 45000,
	    	"mp" : 30000,
	    	"movement_speed" : 200,
	    	"hp_regen" : 2000
	    },
	    "label" : "Chaos Orb",
      "k_label": "대혼돈의 보석"
	},
	"I0EC" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"int" : 5500,
	    	"mp" : 55000
	    },
	    "label" : "Chaotic Mana Stone",
      "k_label": "대혼돈의 마력",
      "effects" : ["Recover 55% of maximum MP every 28 seconds"],
	    "k_effects" : ["28초마다 최대마나 55%회복"]
	},
	"I0ED" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"str" : 5500,
	    	"hp" : 55000
	    },
	    "label" : "Chaotic Life Stone",
      "k_label": "대혼돈의 생명",
	    "effects" : ["Recover 55% of maximum HP every 28 seconds"],
	    "k_effects" : ["28초마다 최대체력 55%회복"]
	},
	"I0EE" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"damage_increase" : 35
	    },
	    "label" : "Murkey Chaos Ring",
      "k_label": "대혼돈의 내면",
	    "effects" : ["On Use: Provides 90% bonus damage for 15 seconds (120s cd)"],
	    "k_effects" : ["사용시 15초간 추가데미지 90%증가(쿨타임 120초)"]
	},
	"I0EF" : {
	    "type" : "accessory",
	    "color" : "red",
	    "stats" : {
	    	"str" : 4300,
	    	"agi" : 4300,
	    	"int" : 4300,
	    	"damage_increase" : 58
	    },
	    "label" : "Essence of Chaos",
      "k_label": "대혼돈의 힘"
	},
	"I0CL" : {
		"type" : "accessory",
		"color" : "blue",
		"page" : 2,
		"rate" : 100,
		"stats" : {
			"int" : 3700,
			"mp" : 40000
		},
		"label" : "Refined Mana Heart",
    "k_label": "정제된 마나 하트",
		"effects" : ["Recover 40% of MAX MP every 28 seconds"],
		"k_effects" : ["28초마다 최대마나 40%회복"]
    },
  "I0EG" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "mp" : 12000
    },
    "label" : "Chaotic Mana Rune",
    "k_label": "대혼돈의 마나룬"
  },
  "I0EH" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000
    },  
    "label" : "Chaotic Mana Potion",
    "k_label": "대혼돈의 마나포션",
    "effects" : ["On Use: Restore 35% of maximum mana (25s cd)"],
    "k_effects" : ["사용시 최대마나 35%회복 (쿨타임 25초)"]
  },
  "I0EL" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000
    },  
    "label" : "Chaotic Potion",
    "k_label": "대혼돈의 포션",
    "effects" : ["On Use: Restore 30% of health (25s cd)"],
    "k_effects" : ["사용시 최대생명력 30%회복 (쿨타임 25초)"]
  },
  "I0EI" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "hp" : 20000
    },
    "label" : "Chaotic Life Rune",
    "k_label": "대혼돈의 생명룬"
  },
  "I0EJ" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "movement_speed" : 100,
      "attack_speed" : 80
    },
    "label" : "Chaotic Ascension Rune",
    "k_label": "대혼돈의 순풍룬"
  },
  "I0EK" : {
    "type" : "auxiliary",
    "color" : "red",
    "stats" : {
      "str" : 1000,
      "agi" : 1000,
      "int" : 1000,
      "damage_increase" : 18
    },
    "label" : "Chaotic Magic Rune",
    "k_label": "대혼돈의 일격룬"
	},
	"I0EQ" : {
	    "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_increase" :45
	    },
	    "label" : "Helmet of Chaos",
      "k_label": "대혼돈의 광체"
	},
	"I0EM" : {
      "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_taken" :-19
	    },
	    "label" : "Chaotic Plated Helmet",
      "k_label": "대혼돈의 수호투구"
	},
	"I0EO" : {
      "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500
	    },
	    "label" : "Runic Chaos Helm",
      "k_label": "대혼돈의 이뮨투구",
	    "effects" :["Anti magic shield for 12 seconds(110s cd)"],
	    "k_effects" :["사용시 12초간 마법면역 (쿨타임 110초)"]
	},
	"I0EP" : {
      "type" : "helmet",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 900,
	    	"str" :2500,
	    	"agi" :2500,
	    	"int" :2500,
	    	"damage_increase" : 75,
	    	"damage_taken" : 22
	    },
	    "label" : "Chaotic Demon Horn",
      "k_label": "대혼돈의 뿔"
	},
	"I0EN" : {
		"type" : "helmet",
		"color" : "red",
		"stats" :{
			"int" : 3200,
			"armor" : 700,
			"mp" : 25000
		},
		"label" : "Chaotic Insight",
    "k_label": "대혼돈의 지혜",
		"effects" : ["On Use: Restore 100% of maximum mana (120s cd)"],
		"k_effects" : ["사용시 MP100% 회복 (쿨타임 120초)"]
	},
  "I0EZ": {
    "type": "accessory",
    "color" : "blue",
    "stats" : {
 	    "str": 3100,
	    "agi": 3100,
	    "int": 3100,
      "hp": 15000,
      "movement_speed": 150,
      "damage_increase": 25
    },
    "label" : "Rainbow Gem",
    "k_label": "일곱빛깔 보석",
    "effects" : ["Increases maximum charge by 50 when equipped by Electromaster", "Increases Gather Materials(D) output by 1 when equipped by Potion Maker"],
    "k_effects" : ["일렉트로 마스터가 착용시 최대 전력 50증가", "포션메이커가 착용시 재료넣기 증가 재료 1증가"]
  },
  "I0F1": {
    "type": "weapon",
    "color" : "blue",
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500      
    },
    "label" : "Angra Mainyu",
    "k_label": "앙그라마이뉴",
    "effects" : ["Each basic attack or spell hit has a 1% chance to unleash the evils", "Debuffs enemies for 2.5 seconds", "Adds an additional 40% Bonus Damage", "Deathscythe has a 4% chance to debuff on attack"],
    "k_effects" : ["기본공격 또는 스킬공격시 1% 확률로 이세상 모든악을 겁니다", "2.5초간 디버프에 걸린 적을공격", "추가데미지 40%의 추가데미지 발생", "데스사이즈가 공격시 확률 4%로 디버프를 겁니다"]
  },
  "I0F3" : {
    "type" : "artifact",
    "color" : "blue", 
    "stats" : {
 	    "str" : 2500,
	    "agi" : 2500,
	    "int" : 2500,
      "movement_speed" : 150,
      "damage_increase": 10
    },
    "label" : "Barium Boots",
    "k_label": "바라늄 부츠",
    "effects" : ["On Use: cloaks the user for 3 seconds (9s cd)", "Maximum Movement Speed while cloaked", "Attacking in cloaked state will deal (allstats x 20)", "Hot Blooded cooldown is reduced by 10 seconds when worn by Assassin", "Increases max combo limit by 3 when worn by Fighter"],
    "k_effects" : ["사용시 3초간 은신 (쿨타임 9초)", "이동속도 최대", "은신 상태에서 기본공격시 올스텟 x 20의 데미지", "암살자가 착용시 블러드 히트 쿨타임 10초 감소", "격투가가 착용시 최대 콤보 3증가"]  
  },
  "I0F2" : {
    "type" : "weapon",
    "color" : "blue",
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500      
    },
    "label" : "Grasp of Vengeance",
    "k_label": "불타는 복수의 손아귀",
    "effects": ["Damages enemies that attack the user (Allstats x 8)", "When worn by Protector of Light “Judgment of Light” becomes red and adds (Strength x 10) additional damage"],
    "k_effects": ["적에게 공격을 받을시 적에게 데미지를 가합니다 (올스텟 x 8)", "빛의 수호자가 착용시 빛의복수 스킬이 붉은 색으로 변하며 힘 x 10의 데미지가 추가로 들어갑니다"]
  },
  "I0F9" : {
    "type" : "weapon",
    "color" : "blue",
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500      
    },
    "label" : "Distilled Tree Sap",
    "k_label": "마더트리 엑기스",
    "effects": ["On Use: Buff for 60 seconds (30s cd)", "Restores 1% of HP per second", "Increases all attributes by 500", "Grants 18% Bonus Damage", "Cannot be dropped after use", "When used by Priest, stat buff is increased to 800"],
    "k_effects": ["사용시 사용대상에60초동안버프(쿨타임 30초)", "초당 생명력 1%회복", "모든스텟 500증가", "추가데미지 18% 증가", "아이템사용시 60초간 아이템을 벗을수없음", "프리스트가 사용시 올스텟 800상승"]
  },
  "I0FA" : {
    "type" : "weapon",
    "color" : "blue",
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500      
    },
    "label" : "Death’s Approach",
    "k_label": "다가오는 죽음",
    "effects": ["Grants a 0.01% chance to land a critical strike (300000 + (AGI + STR + INT) x80)", "Every basic attack raises the critical strike chance by 0.01%", "Once a critical strike lands, reset the critical strike probability", "When equipped by martial artist, Hectopascal Kick gains more ticks and Mortal Strike does more damage", "Strengthens Arrow Revolver when worn by Range Master"],
    "k_effects": ["기본 공격시 0.01%확률로 필살의 일격을 가합니다 (300000 + (AGI + STR + INT) x80)", "공격할때마다 확률이 0.01%씩 증가합니다", "필살의 일격을 가한후에는 확률 초기화", "무도가가 착용시 죽음의일격 강화", "레인지 마스터가 착용시 레인지 컴뱃 마스터리 강화"]
  },
  "I0FD" : {
    "type" : "weapon",
    "color" : "blue",
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500
    },
    "label" : "Purgatory",
    "k_label": "생명과 죽음의 경계",
    "effects": ["When health falls below 50%, 80% bonus damage and consumes 2% hp every second (won't kill)", "When health above 50%, 20% damage reduce and 2% hp regen every second", "When worn by Berserker or Blood Test", "grants an additional 10% bonus damage and 5% damage reduce"],
    "k_effects": ["생명력이 50% 이하일때", "공격할때마다 확률이 0.01%씩 증가합니다", "추가데미지 80%증가 초당 생명력 2% 감소(죽지않음)", "생명력이 50%이상일때 받은데미지 20% 회복 초당 생명력 2%회복", "버서커/혈검사 사용", "추가데미지 증가분 10%추가 증가", "받은데미지 회복 5% 추가 증가"]
  },
  "I0FE" : {
    "type" : "weapon",
    "color" : "blue",
    "stats" : {
      "atk" : 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500
    },
    "label" : "The Will of Fire",
    "k_label": "불의 의지",
    "effects": ["Create an aura with 1050 range", "Recovers 0.5% health every second", "Recovers 1% mana every second", "12% Bonus damage aura", "Reduce all damage taken by 8%", "Reduce the cooldown of Stage by 10 seconds when worn by Bard"],
    "k_effects": ["범위 1050의 오라 생성", "초당 생명력 0.5% 회복", "초당 마나 1%회복", "추가데미지 12% 증가", "받은 데미지 8% 회복", "바드가 사용시 달아오르는 무대 쿨타임 10초 감소"]
  },
  "I0FF" : {
    "type" : "artifact",
    "color" : "blue",
    "stats" : {
 	    "str" : 2500,
	    "agi" : 2500,
	    "int" : 2500,
      "damage_increase": 10
    },
    "label" : "Yata’s Mirror",
    "k_label": "야타의 거울",
    "effects": ["When equipped, each spell cast will accumulate a charge (Max Charges = 50)", "On Use: deals 100000 + Charges x Allstats x3 damage to all enemies within 600 units", "Reduces the amount of energy required by Regular Hunter to dash by 1", "When worn by Greatsword, Sword Swing deals an additional (Allstats x 4) (lies)"],
    "k_effects": ["스킬사용시 무기에 에너지를 축척함", "아이템 사용시 범위 600의 적에게", "축적된 100000 + 에너지 x (올스텟 x 3)의 데미지를 줌(최대에너지 50)", "이레귤러헌터 대쉬  에너지 필요갯수 1감소", "그레이트 소드 착용시 올스텟 x 4 로적용"]
  },
  "I0FG" : {
    "type" : "armor",
    "color" : "blue",
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
    "k_effects": ["사용시 20초간 생명력이 2배가됨", "(쿨타임 180초)(지속 시간동안 아이템을 벗을수 없음)", "블러드 로드 착용시 코코로 와타티 쿨타임 10초 감소"]
  },
  "I0FL": {
    "type": "weapon",
    "color": "blue",
    "stats": {
      "atk": 160000,
 	    "str" : 4500,
	    "agi" : 4500,
	    "int" : 4500
    },
    "label": "Bamboo Spear",
    "k_label": "죽창",
    "effects": ["Each attack has 10% (13% with lancer) chance to deal 500% bonus damage", "When worn by Lancer, reduces the cooldown of Gae Bolg by 8 seconds"],
    "k_effects": ["공격시 10%확률로 추가데미지 500%", "랜서가 사용시 뚫어죽이는창 쿨타임 8초 감소"]
  },
  "I0FM": {
    "type": "helmet",
    "color": "blue",
    "stats": {
 	    "str" : 1700,
	    "agi" : 1700,
	    "int" : 1700,
      "armor": 900
    },
    "label": "Lethal Gaze",
    "k_label": "죽음을 응시하는 눈",
    "effects": ["Each skill used adds 1 stack", "When stacks reach 100, deals 200000 + (All Stats x 60)", "When worn by Explosion Wizard, enhances Fire Wave", "When worn by Overmind, enhances Void"],
    "k_effects": ["스킬 적중시 죽음스택을 쌓음", "100스택일떄 스킬 적중시 죽음의 폭발발생 (올스텟 x 60)", "폭렬 마법사가 사용시 파이어웨이브 강화", "오버마인드가 사용시 보이드 강화"]
  },
  "I0G4": {
    "type": "weapon",
    "color": "red",
    "stats": {
      "atk" : 230000,
      "str": 6500,
      "damage_increase": 55
    },
    "label": "Archangel's Great Sword",
    "k_label": "대천사의 대검"
  },
  "I0G5": {
    "type": "weapon",
    "color": "red",
    "stats": {
      "atk" : 260000,
      "str": 7000,
      "damage_increase": 60
    },
    "label": "Archangel's Great Sword +1",
    "k_label": "대천사의 대검 +1"
  },
  "I0G6": {
    "type": "weapon",
    "color": "red",
    "stats": {
      "atk" : 300000,
      "str": 7500,
      "damage_increase": 65
    },
    "label": "Archangel's Great Sword +2",
    "k_label": "대천사의 대검 +2"
  },
  "I0G7": {
    "type": "weapon",
    "color": "red",
    "stats": {
      "atk" : 350000,
      "str": 8000,
      "damage_increase": 70
    },
    "label": "Archangel's Great Sword +3",
    "k_label": "대천사의 대검 +3",
    "bugged": true
  },
  "I0G8": {
    "type": "armor",
		"color" : "orange",
    "stats": {
      "int": 4000,
      "armor": 700
    },
    "label": "The Sage's Robe",
    "k_label": "명인의 로브"
  },
  "I0G9": {
    "type": "armor",
		"color" : "blue",
    "stats": {
      "int": 5100,
      "armor": 800
    },
    "label": "The Titan's Robe",
    "k_label": "지존의 로브"
  },
  "I0GA": {
    "type": "armor",
		"color" : "red",
    "stats": {
      "int": 6900,
      "armor": 1000
    },
    "label": "The Devil King's Robe",
    "k_label": "대악마의 패왕 로브"
  },
  "I0GB": {
    "type": "armor",
		"color" : "red",
    "stats": {
      "int": 8300,
      "armor": 1100
    },
    "label": "Chaotic \"True\"Devil King's Robe",
    "k_label": "대혼돈의 \"진\"패왕 로브"
  },
  "I0GI" : {
    "type" : "artifact",
    "color" : "red",
    "stats" : {
      "str" : 3500,
      "agi" : 3500,
      "int" : 3500,
      "damage_increase" : 26
    },
    "label" : "Chaotic Light Wings",
    "k_label": "대혼돈의 빛의 날개",
    "effects" : ["Enemies within range take 26% Additional Damage"],
    "k_effects": ["범위내 적들 추가데미지 26% 오라"]
  },
	"I0GJ" : {
		"type" : "artifact",
		"color" : "red",
	  "stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
			"hp" : 30000
		},
		"label" : "Chaotic Life Wings",
    "k_label": "대혼돈의 생명의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 60% of MAX HP", "On use restore 20% of MAX HP every second for 10 seconds (120s cd)"],
		"k_effects" : ["생명력이 40%이하일때 즉사가 아닌 공격을받을면", "즉시 생명력 60%를 회복하며 10초간 초당 생명력 20% 회복 (쿨타임 120초)"]
	},
  "I0GK" : {
		"type" : "artifact",
		"color" : "red",
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
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임4.5초)"]
	},
	"I0GL" : {
		"type" : "artifact",
		"color" : "red",
		"stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
			"damage_increase" : 52
		},
		"label" : "Chaotic Devil Wings",
    "k_label": "대혼돈의 날개"
	},
	"I0GM" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"str" : 800,
			"agi" : 800,
			"int" : 800,
      "critical_hit": 1.5,
      "critical_hit_chance": 20
		},
		"label" : "Assassination Ring",
    "k_label": "암살의 반지"
	},
	"I0GN" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"str" : 1100,
			"agi" : 1100,
			"int" : 1100,
      "critical_hit": 2,
      "critical_hit_chance": 20
		},
		"label" : "Ring of Blazing Death",
    "k_label": "타오르는 죽음의 반지"
	},
	"I0GO" : {
		"type" : "accessory",
		"color" : "orange",
		"stats" : {
			"str" : 1700,
			"agi" : 1700,
			"int" : 1700,
      "critical_hit": 2.5,
      "critical_hit_chance": 20
		},
		"label" : "Amethyst Ring",
    "k_label": "자수정 반지"
	},
	"I0GP" : {
		"type" : "accessory",
		"color" : "blue",
		"stats" : {
			"str" : 2500,
			"agi" : 2500,
			"int" : 2500,
      "critical_hit": 3,
      "critical_hit_chance": 20
		},
		"label" : "Amethyst Gem",
    "k_label": "교언의 자수정"
	},
	"I0GQ" : {
		"type" : "accessory",
		"color" : "red",
		"stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
      "critical_hit": 3.5,
      "critical_hit_chance": 25
		},
		"label" : "Death Demon Gem",
    "k_label": "대악마의 죽음을 보는보석"
	},
	"I0GR" : {
		"type" : "accessory",
		"color" : "red",
		"stats" : {
			"str" : 4300,
			"agi" : 4300,
			"int" : 4300,
      "critical_hit": 4,
      "critical_hit_chance": 25
		},
		"label" : "Great Chaos Gem",
    "k_label": "대혼돈의 죽음을 보는보석"
	},
	"I0HA" : {
	    "type" : "chest",
	    "color" : "black",
	    "label" : "Sealed God of Destruction",
      "k_label": "봉인된 파멸의 신",
	    "effects" : ["Requires at least 11000 base stats for devil drop"],
	    "k_effects" : ["드랍하려면 최소한 11000의 스탯이 필요하다."]
	},
  "I0HB": {
    "color": "black",
    "type": "material",
    "label": "Power of destruction",
    "k_label": "파멸의 권능"   
  },
  "I0HC": {
    "color": "black",
    "type": "material",
    "label": "Black God Energy",
    "k_label": "검은 신의 에너지" 
  },
  "I0HD": {
    "type": "weapon",
    "color": "god",
    "stats": {
      "atk": 500000,
      "agi": 11000,
      "attack_speed": 300,
      "attack_agi": true,
      "attack_real": 60
    },
    "label": "Sealed God Dagger",
    "k_label": "신의 단검"
  },
  "I0HE": {
    "type": "weapon",
    "color": "god",
    "stats": {
      "atk": 500000,
      "agi": 11000,
	    "damage_increase" : 180,
	    "damage_taken" : 45
    },
    "label": "Sealed God Gauntlets",
    "k_label": "신의 건들릿"
  },
  "I0HG": {
    "type": "weapon",
    "color": "god",
    "stats": {
      "atk": 500000,
      "agi": 11000,
      "damage_increase": 90
    },
    "label": "Sealed God Blade",
    "k_label": "신의 도검",
    "effects": ["Deals damage proportional to stats when used (120s cd)"],
    "k_effects": ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"]
  },
  "I0GS": {
    "type": "material",
    "color": "black",
    "label": "Luck Token",
    "k_label": "행운의 증표",
    "effects": ["Can be obtained by selling a char item"],
    "k_effects": ["캐릭터 상품을 판매하여 얻을 수 있습니다"]
  },
    "I0HF": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "str": 8500,
        "agi": 8500,
        "int": 8500
      },
      "label": "Sealed God Longsword",
      "k_label": "신의 장검",
      "effects": ["Deals damage proportional to stats when used (120s cd)"],
      "k_effects": ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"]
  },
    "I0HH": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "int": 11000,
        "mp": 45000,
        "contract": 0.0000056,
        "int_tick": true          
      },
      "label": "God's Magic Staff",
      "k_label": "신의 마력 지팡이"
  },
    "I0HI": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "int": 11000
      },
      "label": "Staff of Destruction",
      "k_label": "파멸의 지팡이",
      "effects": ["45% armor increase to nearby allies"],
      "k_effects": ["주변아군 추가데미지 45%증가 오라 생성"]
  },
    "I0HJ": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "str": 11000,
        "hp": 75000
      },
      "label": "God's Sword of Life",
      "k_label": "신의 생명의검",
      "effects" : ["Every 10 attacks will recover STR x6.7 HP (9s cd)", "Every 6 spells will recover STR x6.7 HP (10s cd)", "On Use: Restores STR x6.7 HP (120s cd)"],
      "k_effects" : ["기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)", "사용시  생명력회복 (STR x6.7)(쿨타임 120초)"]
  },
    "I0HK": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "agi": 11000,
        "hp": 75000
      },
      "label": "God's Bow of Life",
      "k_label": "생명의 신궁",
      "effects" : ["Every 10 attacks will recover AGI x6.7 HP (9s cd)", "Every 6 spells will recover AGI x6.7 HP (10s cd)", "On Use: Restores AGI x6.7 HP (120s cd)"],
      "k_effects" : ["기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)", "사용시  생명력회복 (AGI x6.7)(쿨타임 120초)"]
  },
    "I0G3": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "int": 11000,
        "hp": 75000
      },
      "label": "God's Staff of Life",
      "k_label": "신의 생명 지팡이",
      "effects" : ["Every 4 spells will recover INT x7.5 HP (10s cd)", "On Use: Restore INT x10 HP of all allies within range (80s cd)"],
      "k_effects": ["스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x10)(쿨타임 80초)"]
  },
    "I0GC": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "str": 9500,
        "agi": 9500,
        "attack_str_agi": true,
        "attack_real": 23
      },
      "label": "God's Sword",
      "k_label": "신의 소검",
      "effects" : ["On use: 400000 + (STR + AGI) x180 damage"],
		  "k_effects" : ["사용시 400000 + (STR + AGI) x180 (쿨타임 80초)"],
      "bugged": true
  },
    "I0GD": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "str": 11000,
        "attack_speed": 250,
        "attack_str": true,
        "attack_real": 80
      },
      "label": "God's Judgement",
      "k_label": "신의 심판",
      "bugged": true
  },
    "I0HL": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "str": 9500,
        "int": 9500
      },
      "label": "God's Staff",
      "k_label": "신의 일격 지팡이",
      "effects" : ["Each attack has a 8% chance to deal 30000 + (STR + INT) x72 bonus damage"],
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (8% 기회 30000 + (STR + INT) x72)"],
      "bugged": true
  },
    "I0HM": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "int": 11000,
        "damage_increase" : 90
      },
      "label": "God's Amber Staff",
      "k_label": "신의 증폭 지팡이",
      "bugged": true
  },
    "I0HN": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "int": 11000,
        "int_tick": true,
        "attack_int_real": 180         
      },
      "label": "God's Judgement Staff",
      "k_label": "신의 심판 지팡이"
  },
    "I0HP": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "int": 11000
      },
      "label": "God's Blessed Staff",
      "k_label": "신의 권능",
      "effects" : ["On Use: Summons an apostle"],
      "k_effects": ["사용시 신궁의 사도 소환"]
  },
  "I0HQ" : {
		"type" : "stats",
		"color" : "darkred",
		"stats_points" : 14,
		"label" : "Burning Energy",
    "k_label": "불타는 에너지"	
	},
  "I0HR" : {
		"type" : "stats",
		"color" : "darkred",
		"stats_points" : 14,
		"label" : "Suffering Energy",
    "k_label": "고통의 에니저"
  },
  "I0HT": {
    "type": "material",
    "color" : "black",    
    "label": "Sealed God's Treasure",
    "k_label": "봉인된 신의 보물"
  },
  "I0HU" : {
		"type" : "artifact",
		"color" : "god",
		"stats" : {
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000,
			"damage_increase" : 65
		},
		"label" : "Wings of Destruction",
    "k_label": "파멸의 날개"
  },
  "I0HV" : {
    "type" : "artifact",
    "color" : "god",
    "stats" : {
      "str" : 5000,
      "agi" : 5000,
      "int" : 5000,
      "damage_increase" : 34
    },
    "label" : "Light Wings of Destruction",
    "k_label": "눈부신 신의 날개",
    "effects" : ["Enemies within range take 34% Additional Damage"],
    "k_effects": ["범위내 적들 추가데미지 34% 오라"]
  },
	"I0HW" : {
		"type" : "artifact",
		"color" : "god",
	  "stats" : {
			"str" : 5000,
			"agi" : 5000,
			"int" : 5000,
			"hp" : 50000
		},
		"label" : "Life Wings of Destruction",
    "k_label": "신의 생명의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 100% of MAX HP", "On use restore 20% of MAX HP every second for 10 seconds (120s cd)"],
		"k_effects" : ["생명력이 40%이하일때 즉사가 아닌 공격을받을면", "즉시 생명력 100%를 회복하며 10초간 초당 생명력 20% 회복 (쿨타임 120초)"]
  },
  "I0HX" : {
		"type" : "artifact",
		"color" : "god",
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
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임2.8초)"]
	},
  "I0I2": {
    "type": "weapon",
    "color": "god",
    "stats": {
      "atk" : 500000,
      "str": 11000,
      "damage_increase": 90
    },
    "label": "God's GreatSword",
    "k_label": "신의 대검"
  },
  "I0I3" : {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500,
      "mp" : 18000
    },
    "label" : "God's Mana Rune",
    "k_label": "신의 마나룬"
  },
  "I0I4" : {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500
    },  
    "label" : "God's Mana Potion",
    "k_label": "신의 마나포션",
    "effects" : ["On Use: Restore 40% of maximum mana (25s cd)"],
    "k_effects" : ["사용시 최대마나 40%회복 (쿨타임 25초)"]
  },
  "I0I5" : {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500,
      "hp" : 30000
    },
    "label" : "God's Life Rune",
    "k_label": "대혼돈의 생명룬"
  },
  "I0I6" : {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500,
      "damage_increase" : 25
    },
    "label" : "God's Magic Rune",
    "k_label": "신의 일격룬"
	},
  "I0I7" : {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500,
      "movement_speed" : 120,
      "attack_speed" : 100
    },
    "label" : "God's Ascension Rune",
    "k_label": "신의 순풍룬"
  },
  "I0I8" : {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 1500,
      "agi" : 1500,
      "int" : 1500
    },  
    "label" : "God's Potion",
    "k_label": "신의 포션",
    "effects" : ["On Use: Restore 45% of health (25s cd)"],
    "k_effects" : ["사용시 최대생명력 45%회복 (쿨타임 25초)"]
  },
  "I0I9" : {
		"type" : "accessory",
		"color" : "blue",
		"stats" : {
			"str" : 2500,
			"agi" : 2500,
			"int" : 2500,
			"hp_regen" : 1000
		},
		"label" : "Gaia's Essence",
    "k_label": "대지의 가호",
		"effects" : ["Allies within range gain HP recovery per second +1000", "On Use: Recovers (STR + AGI + INT) x2.5 HP every second for 4 seconds (120s cd)"],
    "k_effects": ["범위내 아군 초당 생명력 회복 1000", "사용시 4초간 사용지점에 매초마다 마더트리의 가호 발동 (STR + AGI + INT) x2.5)(쿨타임 120초)"]
	},
  "I0IA" : {
		"type" : "artifact",
		"color" : "red",
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
    "bugged": true
	},
  "I0IB" : {
		"type" : "artifact",
		"color" : "god",
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
		"k_effects" : ["10초마다 50000의 쉴드 생성"]
	},
  "I0IC" : {
		"type" : "artifact",
		"color" : "red",
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
		"k_effects" : ["주변 적군 공이속 20%감소", "주변 아군 공속 90% 이속 30%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x95)(쿨타임 180초)"]   
	},
  "I0ID" : {
		"type" : "artifact",
		"color" : "red",
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
		"k_effects" : ["주변 적군 공이속 25%감소", "주변 아군 공속 120% 이속 35%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x110)(쿨타임 180초)"]
	},
  "I0IE" : {
		"type" : "artifact",
		"color" : "god",
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
		"k_effects" : ["주변 적군 공이속 25%감소", "주변 아군 공속 150% 이속 40%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x130)(쿨타임 180초)"]
	},
  "I0IF" : {
		"type" : "accessory",
		"color" : "orange",
		"stats" : {
			"int" : 1700,
			"str" : 1700,
			"agi" : 1700,
      "armor": 400,
			"movement_speed" : 150,
			"magic_resistance" : 16
		},
		"label" : "Mother Tree Trunk",
    "k_label": "마더트리 기둥"
	},
  "I0IG" : {
		"type" : "accessory",
		"color" : "blue",
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
      "armor": 500,
			"movement_speed" : 150,
			"magic_resistance" : 20
		},
		"label" : "Mother Tree Roots",
    "k_label": "세계수의 뿌리"
	},
  "I0IH" : {
		"type" : "accessory",
		"color" : "red",
    "stats" : {
			"int" : 3500,
			"str" : 3500,
			"agi" : 3500,
      "armor": 700,
			"movement_speed" : 200,
			"magic_resistance" : 25
		},
		"label" : "Demonic Tree Roots",
    "k_label": "대악마의 수호"  
	},
  "I0II" : {
		"type" : "accessory",
		"color" : "red",
		"stats" : {
			"int" : 4300,
			"str" : 4300,
			"agi" : 4300,
      "armor": 800,
			"movement_speed" : 200,
			"magic_resistance" : 28
		},
		"label" : "Chaotic Tree Roots",
    "k_label": "대혼돈의 수호"
	},
  "I0IJ" : {
		"type" : "accessory",
		"color" : "red",
    "stats" : {
			"str" : 3500,
			"agi" : 3500,
			"int" : 3500,
			"hp_regen" : 1500
		},
		"label" : "Demonic Essence",
    "k_label": "대악마의 가호",
		"effects" : ["Allies within range gain HP recovery per second +1500", "On Use: Recovers (STR + AGI + INT) x3.5 HP every second for 4 seconds (120s cd)"],
    "k_effects": ["범위내 아군 초당 생명력 회복 1500", "사용시 4초간 사용지점에 매초마다 마더트리의 가호 발동 (STR + AGI + INT) x3.5)(쿨타임 120초)"]   
	},
  "I0IK" : {
		"type" : "accessory",
		"color" : "red",
		"stats" : {
			"str" : 4300,
			"agi" : 4300,
			"int" : 4300,
			"hp_regen" : 1800
		},
		"label" : "Chaotic Essence",
    "k_label": "대혼돈의 가호",
		"effects" : ["Allies within range gain HP recovery per second +1800", "On Use: Recovers (STR + AGI + INT) x4 HP every second for 4 seconds (120s cd)"],
    "k_effects": ["범위내 아군 초당 생명력 회복 1500", "사용시 4초간 사용지점에 매초마다 마더트리의 가호 발동 (STR + AGI + INT) x4)(쿨타임 120초)"]
	},
  "I0IL" : {
		"type" : "helmet",
		"color" : "orange",
		"stats" : {
			"int" : 900,
			"str" : 900,
			"agi" : 900,
			"armor" : 700,
			"magic_resistance" : 10
		},
		"label" : "Hitchhiker's Helmet",
    "k_label": "수호석 투구"   
	},
  "I0IM" : {
		"type" : "helmet",
		"color" : "blue",
		"stats" : {
			"int" : 1300,
			"str" : 1300,
			"agi" : 1300,
			"armor" : 900,
			"magic_resistance" : 14
		},
		"label" : "Resistance Helmet",
    "k_label": "힐데그림"
	},
  "I0IN" : {
		"type" : "helmet",
		"color" : "red",
		"stats" : {
			"int" : 2000,
			"str" : 2000,
			"agi" : 2000,
			"armor" : 1200,
			"magic_resistance" : 20
		},
		"label" : "Demonic Resistance Helmet",
    "k_label": "대악마의 저항투구"    
	},
  "I0IO" : {
		"type" : "helmet",
		"color" : "red",
		"stats" : {
			"int" : 2500,
			"str" : 2500,
			"agi" : 2500,
			"armor" : 1400,
			"magic_resistance" : 23
		},
		"label" : "Chaotic Resistance Helmet",
    "k_label": "대혼돈의 저항투구"
	},
  "I0IP" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"int" : 6500
		},
		"label" : "Archangel Contract",
    "k_label": "대천의 계약",
		"effects" : ["Each spell consumes 4% of HP and MP adding 80% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 80% 증가"],
    "bugged": true
	},
  "I0IQ" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 260000,
			"int" : 7000,
      "contract": 0.95,
      "int_tick": true            
		},
		"label" : "Archangel Contract +1",
    "k_label": "대천의 계약 +1"
	},
  "I0IR" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 300000,
			"int" : 7500,
      "contract": 1.1,
      "int_tick": true  
    },
		"label" : "Archangel Contract +2",
    "k_label": "대천의 계약 +2"
	},
  "I0IS" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"int" : 8000,
      "contract": 1.35,
      "int_tick": true        
		},
		"label" : "Archangel Contract +3",
    "k_label": "대천의 계약 +3",
    "bugged": true
	},
  "I0IX" : {
    "type" : "chest",
    "color" : "god",
    "label" : "God's Treasure Chest",
    "k_label": "신의 보물함"
  },
  "I0J0": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Range Master]", 
    "k_label": "해방된 힘 [레인지 마스터]",
    "effects": ["Enchances Arrow Revolver"],
    "k_effects": ["에로우 리볼버를 강화합니다"],
    "disabled": true
  },
  "I0J1": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power of God", 
    "k_label": "신의 힘으로 능력이 해방됩니다",
    "effects": ["Arrow Revolver agility proportional damage increased by 2"],
    "k_effects": ["에로우 리볼버의 기본공격 민첩 비례 데미지가 2증가"]
  },
  "I0J2": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Psychic]", 
    "k_label": "해방된 힘 [염동술사]",
    "effects": ["Increases energy sphere duration by 8s"],
    "k_effects": ["에너지 구체의 지속시간을 8초 증가시킵니다"]
  },
  "I0J3": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Sniper]", 
    "k_label": "해방된 힘 [스나이퍼]",
    "effects": ["Enchances Explosive Magazines"],
    "k_effects": ["폭발성 탄창을 강화합니다"]
  },
  "I0J4": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Fighter]", 
    "k_label": "해방된 힘 [격투가]",
    "effects": ["Increases max skill link to 65"],
    "k_effects": ["스킬연계의 최대치가 65로 증가합니다"]
  },
  "I0J5": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Death Scythe]", 
    "k_label": "해방된 힘 [데스사이즈]",
    "effects": ["Enchances Cursed Possession"],
    "k_effects": ["오니화를 강화합니다"],
    "bugged": true
  },
  "I0J6": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Assassin]", 
    "k_label": "해방된 힘 [암살자]",
    "effects": ["Enchances Hot Blooded damage by 20%"],
    "k_effects": ["블러드 히트의 데미지 증가율이 20% 추가증가"]
  },
  "I0J7": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Shooter]", 
    "k_label": "해방된 힘 [슈터]",
    "effects": ["Reduces missiles cd by 3s"],
    "k_effects": ["폭격의 쿨타임이 3초감소합니다"]
  },
  "I0J8": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Lancer]", 
    "k_label": "해방된 힘 [랜서]",
    "effects": ["Reduces Javelin cd by 1s"],
    "k_effects": ["투창의 쿨타임이 1초 감소합니다"]
  },
  "I0J9": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Martial Artist]", 
    "k_label": "해방된 힘 [무도가]",
    "effects": ["Increases Hectopascal Kick proc chance by 10%"],
    "k_effects": ["헥토파스칼 킥의 확률증가가 10% 추가로 증가합니다"]
  },
  "I0JA": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Electromaster]", 
    "k_label": "해방된 힘 [일렉트로 마스터]",
    "effects": ["Reduces Eye of the Storm cd by 15s"],
    "k_effects": ["뇌단의 쿨타임 15초가 감소합니다"]
  },
  "I0JB": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Explosion Wizard]", 
    "k_label": "해방된 힘 [폭렬마법사]",
    "effects": ["Increases Ignite ticks by 6"],
    "k_effects": ["발화의 공격횟수가 6회 증가합니다"]
  },
  "I0JC": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Overmind]", 
    "k_label": "해방된 힘 [오버마인드]",
    "effects": ["Increases Thunder Calling int multiplier by 2%"],
    "k_effects": ["초월의 룬의 지능증가폭이 2% 증가합니다"]
  },
  "I0JD": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Bard]", 
    "k_label": "해방된 힘 [바드]",
    "effects": ["Reduces cooldown of Stage by 12s", "Not Implemented"],
    "k_effects": ["달아오르는 무대의 쿨타임 12초 감소", "작동 안함"]
  },
  "I0JE": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Enchanter]", 
    "k_label": "해방된 힘 [야천의 마도사]",
    "effects": ["Reduces Unison cd by 11s"],
    "k_effects": ["유니즌 인의 쿨타임이 11초 감소합니다"]
  },
  "I0JF": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Potion Maker]", 
    "k_label": "해방된 힘 [포션메이커]",
    "effects": ["Improved Gather Materials"],
    "k_effects": ["재료넣기를 강화합니다"]
  },
  "I0JG": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Priest]", 
    "k_label": "해방된 힘 [프리스트]",
    "effects": ["Increases Baumkuchen Feeding int multiplier by 1.2%"],
    "k_effects": ["바움쿠헨 먹이기 회복지능 계수가 1.2 증가합니다"]
  },
  "I0KB": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Specialist]", 
    "k_label": "가이아 갑옷",
    "effects": ["?"],
    "k_effects": ["?"]
  },
  "I0JH": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Blood Lord]", 
    "k_label": "해방된 힘 [블러드로드]",
    "effects": ["Decreases cooldown of Heartspan by 10s"],
    "k_effects": ["코코로와타리의 쿨타임 10초감소"]
  },
  "I0JI": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Berserker]", 
    "k_label": "해방된 힘 [버서커]",
    "effects": ["Increases Frenzy str multiplier by 1.5%"],
    "k_effects": ["폭주의 공격시 스텟비례 데미지가 1.5 증가합니다"]
  },
  "I0JJ": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Kamui]", 
    "k_label": "해방된 힘 [카무이]",
    "effects": ["Reduces basic atacks needed to activate Empower by 2"],
    "k_effects": ["참격의 패시브공격회수가 2감소합니다"]
  },
  "I0JK": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Regular Hunter]", 
    "k_label": "해방된 힘 [이레귤러 헌터]",
    "effects": ["Reduces energy required by Dash by 1"],
    "k_effects": ["대쉬의 에너지 사용이 1줄어듭니다. 강화합니다"]
  },
  "I0JL": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Great Sword]", 
    "k_label": "해방된 힘 [그레이트 소드]",
    "effects": ["Increases Blockade duration by 0.15s"],
    "k_effects": ["봉쇄의 지속시간이 0.15초 증가합니다"]
  },
  "I0JM": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Crusader]", 
    "k_label": "해방된 힘 [크루세이더]",
    "effects": ["Reduces the cooldown of Light Casts by 20s", "Not working"],
    "k_effects": ["빛의 집속의 쿨타임이 20초 감소합니다", "작동 안함", "Not working"]
  },
  "I0IT": {
    "type": "skill",
    "color": "god",
    "label": "Platelet skill slot 1 swap",
    "k_label": "혈소판 가방 1번 슬롯교체",
    "effects": ["Slot replacement skill is added"],
    "k_effects": ["1번슬롯 교체스킬이 추가됩니다"]
  },
  "I0IU": {
    "type": "skill",
    "color": "god",
    "label": "Platelet skill slot 2 swap",
    "k_label": "혈소판 가방 2번 슬롯교체",
    "effects": ["Slot replacement skill is added"],
    "k_effects": ["2번슬롯 교체스킬이 추가됩니다"]
  },
  "I0IV": {
    "type": "skill",
    "color": "god",
    "label": "Platelet skill slot 3 swap",
    "k_label": "혈소판 가방 3번 슬롯교체",
    "effects": ["Slot replacement skill is added"],
    "k_effects": ["3번슬롯 교체스킬이 추가됩니다"]
  },
  "I0IW": {
    "type": "skill",
    "color": "god",
    "label": "Platelet skill slot 4 swap",
    "k_label": "혈소판 가방 4번 슬롯교체",
    "effects": ["Slot replacement skill is added"],
    "k_effects": ["4번슬롯 교체스킬이 추가됩니다"]
  },  
  "I0IZ": {
    "type": "skill",
    "color": "god",
    "label": "God's Awakening",
    "k_label": "신의 각성",
    "effects": ["Creates a extra slot where additional equipment powers can be used"],
    "k_effects": ["신의 힘으로 추가 장비를 장착할수있는 슬롯생성"]
  },
  "I0JN": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Blood Test]", 
    "k_label": "해방된 힘 [혈검사]",
    "effects": ["Increases Shadowmeld duration by 3s"],
    "k_effects": ["그림자 숨기의 지속시간이 3초 증가합니다"]
  },
  "I0HO" : {
		"type" : "weapon",
		"color" : "god",
    "stats" : {
			"atk" : 500000,
			"str" : 11000
		},
		"label" : "God's Glaive",
    "k_label": "신의 창",
		"effects" : ["On Use: Causes an explosion, dealing 700000 + STR x450 damage (38s cd)"],
    "k_effects": ["사용시 용기의 폭발 시전 (700000 + STR x450)(쿨타임 38초)"]
	},
  "I06L": {
    "type": "chest",
    "color": "black",
    "label": "Spirit of the Celestial Waterstone",
    "k_label": "수호석의 구동구"
  },
  "I06Y": {
    "type": "chest",
    "color": "black",
    "label": "Spirit of the Gatekeeper Hellgainer",
    "k_label": "하급 수료증"
  },
  "I05W": {
    "type": "chest",
    "color": "black",
    "label": "The Spirit of the Destroyer",
    "k_label": "디스트로이어의 영혼"
  },
  "I05X": {
    "type": "chest",
    "color": "black",
    "label": "The Spirit of Insanity",
    "k_label": "광기의 영혼"
  },
  "I071": {
    "type": "chest",
    "color": "black",
    "label": "Spirit of the Guardian",
    "k_label": "가디언의 영혼"
  },
  "I072": {
    "type": "chest",
    "color": "black",
    "label": "Spirit of the Treant",
    "k_label": "뿌리 깊은 나무"
  },
  "I0KM": {
    "type": "armor",
    "color": "god",
    "stats": {
      "armor": 1400,
      "int": 11000
    },
    "label": "Robes of Trust",
    "k_label": "투신의 로브"
  },
  "I0KN": {
    "type": "armor",
    "color": "god",
    "stats": {
      "str": 7000,
      "armor": 1600,
      "hp": 50000,
      "hp_regen": -3000
    },
    "label": "Purified Flame Armor",
    "k_label": "정화의 불꽃 갑옷",
    "effects": ["Deals 8000 + STR * 70 per second to nearby enemies"],
    "k_effects": ["초당 주변에 데미지 (8000 + STR * 70)"]
  },
  "I0KO": {
    "type": "armor",
    "color": "god",
    "stats": {
      "armor": 1200,
      "int": 7000,
      "mp": 55000,
      "mps": 70
    },
    "label": "Divine Mana Robes",
    "k_label": "신의 마력 로브"
  },
  "I0KP": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1600,
	    "str" : 7000,
	    "movement_speed" : 200,
	    "damage_increase" : 60
	  },
    "label": "Purified Bright Armor",
    "k_label": "신의 빛의 갑옷"
  },
  "I0KQ": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1500,
	    "agi" : 7000,
	    "movement_speed" : 200,
	    "damage_increase" : 60
	  },
    "label": "Purified Bright Greaves",
    "k_label": "신의 빛의 경갑",
    "bugged": true
  },  
  "I0KR": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1200,
	    "int" : 7000,
	    "movement_speed" : 200,
	    "damage_increase" : 60
	  },
    "label": "Purified Bright Robes",
    "k_label": "신의 빛의 로브",
    "bugged": true
  },
  "I0KS": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1200,
	    "str" : 5500,
      "agi": 5500,
      "int": 5500,
	    "hp" : 50000,
	    "max_health" : 36
	  },
    "label": "Purified Life Armor",
    "k_label": "정화된 생명의 갑옷",
    "bugged": true
  },
  "I0KT": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1600,
	    "str" : 7000,
	    "hp" : 50000,
	    "damage_taken" : -32
	  },
    "label": "Purified Guardian Armor",
    "k_label": "신의 수호 갑옷"
  },
  "I0KU": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1500,
	    "agi" : 7000,
	    "hp" : 50000,
	    "damage_taken" : -32
	  },
    "label": "Purified Guardian Greaves",
    "k_label": "신의 수호 경갑"
  },
  "I0KV": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1200,
	    "int" : 7000,
	    "hp" : 50000,
	    "damage_taken" : -32
	  },
    "label": "Purified Guardian Robes",
    "k_label": "신의 수호 로브"
  },  
  "I0KW": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1200,
      "str": 5500,
      "agi": 5500,
	    "int" : 5500,
	    "hp" : 50000,
	    "hp_regen_percent" : 4
	  },
    "label": "Purified Healing Armor",
    "k_label": "정화된 치유의 갑옷",
    "bugged": true
  },  
  "I0KX" : {
    "type" : "chest",
    "color" : "god",
    "label" : "Purification God's Treasure Chest",
    "k_label": "정화의신의 보물함"
  },
  "I0LE" : {
    "type" : "chest",
    "color" : "god",
    "label" : "Purification God's Trinket",
    "k_label": "정화의신의 악세서리함"
  },
  "I0KY": {
    "type": "chest",
    "color": "god",
    "label": "Purification God Spirit",
    "k_label": "봉인된 정화의 신"
  },
  "I0KZ": {
    "type": "material",
    "color": "black",
    "label": "Purification Power (Old)",
    "k_label": "(구)정화된 신의 권능"
  },
  "I04B": {
    "type": "material",
    "color": "black",
    "label": "Purification Power (New)",
    "k_label": "(신)정화된 신의 권능"
  },
  "I0L0" : {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 5500,
			"agi" : 5500,
			"int" : 5500,
			"hp_regen" : 2500
		},
		"label" : "Purified Essence",
    "k_label": "정화의 신의 가호",
		"effects" : ["Allies within range gain HP recovery per second +2500", "On Use: not implemented "],
    "k_effects": ["범위내 아군 초당 생명력 회복 2500", "사용시 5초간 사용지점에 매초마다 정화의 신의 가호 발동(능력치비례)(쿨타임 120초)"]
	},  
  "I0L1" : {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 5500,
			"agi" : 5500,
			"int" : 5500,
      "damage_increase": 45
		},
		"label" : "Purified Fury Ring",
    "k_label": "신의 분노",
		"effects" : ["Increases the damage by 120% for 15s (120s cd)"],
    "k_effects": ["사용시 15초간 추가데미지 120%증가(쿨타임 120초)"]
	},    
  "I0L2" : {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"int" : 7000,
      "mp": 70000
		},
		"label" : "God's Magic",
    "k_label": "신의 마력",
		"effects" : ["Recover 65% of MAX MP every 28 seconds"],
    "k_effects": ["28초마다 최대마나 65%회복"]
	},  
  "I0L3" : {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 5500,
			"agi" : 5500,
			"int" : 5500,
      "mp": 40000,
      "hp": 55000,
	    "movement_speed" : 300,
			"hp_regen" : 3500
		},
		"label" : "Purified Magic Jewel",
    "k_label": "정화의 신의 보석"
	}, 
  "I0L4" : {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 7000,
      "hp": 70000
		},
		"label" : "Purified Life Jewel",
    "k_label": "정화된 생명력",
    "effects" : ["Recovers 65% of maximum HP every 28 seconds"],
    "k_effects": ["28초마다 최대체력 65%회복"]
	}, 
  "I0L5" : {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 5500,
			"agi" : 5500,
			"int" : 5500,
      "armor": 1000,
			"movement_speed" : 300
		},
		"label" : "Purified Guardian Ring",
    "k_label": "정화의신의 수호"
	}, 
 "I0L6" : {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 5500,
			"agi" : 5500,
			"int" : 5500,
      "critical_hit": 5,
      "critical_hit_chance": 25
		},
		"label" : "Divine Strike",
    "k_label": "신의 일격"
	}, 
 "I0L7" : {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 5500,
			"agi" : 5500,
			"int" : 5500,
	    "damage_increase" : 70
		},
		"label" : "Divine Power",
    "k_label": "신의 힘"
	},
  "I0L8": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1000,
      "str": 3500,
      "agi": 3500,
	    "int" : 3500,
	    "hp" : 50000,
	    "damage_increase" : 60
	  },
    "label": "Strength Helmet",
    "k_label": "정화의 신의 빛",
    "bugged": true
  },
  "I0L9": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 900,
      "str": 3500,
      "agi": 3500,
	    "int" : 3500,
      "hp": 50000,
	    "damage_increase" : 90,
	    "damage_taken" : 30
	  },
    "label": "Desctruction Helmet",
    "k_label": "파멸의 신의 저주",
    "bugged": true
  },
  "I0LA": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1000,
      "str": 3500,
      "agi": 3500,
	    "int" : 3500,
	    "damage_taken" : -24
	  },
    "label": "Guardian Helmet",
    "k_label": "수호신의 빛"
  },
  "I0LB": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1000,
      "str": 3500,
      "agi": 3500,
	    "int" : 3500
	  },
    "label": "Anti-Magic Helmet",
    "k_label": "정화의 신의 결계",
    "effects": ["Gives 12s of magic inmunity on use (90s cd)"],
    "k_effects": ["사용시 12초간 마법면역(쿨타임 90초)"]
  },
  "I0LC": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1600,
      "str": 3500,
      "agi": 3500,
	    "int" : 3500,
      "magic_resistance" : 27
	  },
    "label": "Magic Resistance Helmet",
    "k_label": "신의 저항 투구"
  },  
  "I0LD": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 800,
	    "int" : 4500,
      "mp" : 35000
	  },
    "label": "Wisdom Helmet",
    "k_label": "신의 지혜",
    "effects": ["Recovers 100% MP on use (90s cd)"],
    "k_effects": ["사용시 MP100% 회복 (쿨타임 90초)"]
  },  
	"I0LG" : {
	  "type" : "material",
	  "color" : "black",
	  "label" : "Epic Weapon Essence",
    "k_label": "에픽 장비 정수"
	},
  "I0LH" : {
	  "type" : "material",
	  "color" : "black",
	  "label" : "Epic Equipment Essence",
    "k_label": "에픽 무기 정수"
	},
  "I0LI" : {
	  "type" : "material",
	  "color" : "black",
	  "label" : "Epic Auxiliary Essence",
    "k_label": "에픽 룬 정수"
	},
  "I0JR": {
    "label": "Chirno (Lower)",
    "k_label": "치르밀(하급)",
    "type": "chest",
    "color": "black"
  },
  "I0JS": {
    "label": "Chirno (Intermediate)",
    "k_label": "치르밀(중급)",
    "type": "chest",
    "color": "black"
  },
  "I0JT": {
    "label": "Chirno (Advanced)",
    "k_label": "치르밀(고급)",
    "type": "chest",
    "color": "black"
  },
  "I0JU": {
    "label": "Chirno (Supreme)",
    "k_label": "치르밀(최고급)",
    "type": "chest",
    "color": "black"
  },
  "I0FY": {
    "label": "Point 15",
    "k_label": "포인트 15",
    "type": "material",
    "color": "black"
  },
  "I0FZ": {
    "label": "Point 25",
    "k_label": "포인트 25",
    "type": "material",
    "color": "black"
  },
  "I0G0": {
    "label": "Point 40",
    "k_label": "포인트 40",
    "type": "material",
    "color": "black"
  },
  "I0G1": {
    "label": "Point 60",
    "k_label": "포인트 60",
    "type": "material",
    "color": "black"
  },
  "I0FU": {
    "label": "Spirit Package (Lower)",
    "k_label": "하급 영혼 꾸러미",
    "type": "chest",
    "color": "black"
  },
  "I0FV": {
    "label": "Spirit Package (Intermediate)",
    "k_label": "중급 영혼 꾸러미",
    "type": "chest",
    "color": "black"
  },
  "I0FW": {
    "label": "Spirit Package (Advanced)",
    "k_label": "상급 영혼 꾸러미",
    "type": "chest",
    "color": "black"
  },
  "I0FX": {
    "label": "Spirit Package (Supreme)",
    "k_label": "최상급 영혼 꾸러미",
    "type": "chest",
    "color": "black"
  },
  "I0JV": {
    "label": "Chirno Ice Crystals",
    "k_label": "치르노의 얼음결정",
    "type": "material",
    "color": "black"
  },
  "I0JW": {
    "label": "Chirno Pet Coupon",
    "k_label": "치르노 펫 쿠폰",
    "type": "chest",
    "color": "black"
  },
  "I0EX": {
    "label": "Event Bag Coupon",
    "k_label": "이벤트 가방 쿠폰",
    "type": "chest",
    "color": "black"
  },
  "I0JY": {
    "label": "Chirno Event Bag Coupon",
    "k_label": "이벤트 치르노 가방 쿠폰",
    "type": "material",
    "color": "black"
  },
  "I0EV": {
    "label": "Chirno bag (Lower)",
    "k_label": "치르노의 겨울이벤트 (하급)",
    "type": "chest",
    "color": "black"
  },
  "I0FK": {
    "label": "Chirno Bag Coupon",
    "k_label": "치르노의 집 입장권(하급)",
    "type": "material",
    "color": "black"
  },
  "I0EW": {
    "label": "Chirno Bag (Intermediate)",
    "k_label": "치르노의 겨울이벤트 (중급)",
    "type": "chest",
    "color": "black"
  },
  "I0FI": {
    "label": "Chirno Bag (Advanced)",
    "k_label": "치르노의 겨울이벤트 (고급)",
    "type": "chest",
    "color": "black"
  },
  "I0FJ": {
    "label": "Chirno Bag (Supreme)",
    "k_label": "치르노의 겨울이벤트 (최고급)",
    "type": "chest",
    "color": "black"
  },

  "I0JO": {
    "label": "Chirno house ticket (Intermediate)",
    "k_label": "치르노의 집 입장권(중급)",
    "type": "chest",
    "color": "black"
  },
  "I0JP": {
    "label": "Chirno house ticket (Advanced)",
    "k_label": "치르노의 집 입장권(고급)",
    "type": "chest",
    "color": "black"
  },
  "I0JQ": {
    "label": "Chirno house ticket (Supreme)",
    "k_label": "치르노의 집 입장권(최고급)",
    "type": "chest",
    "color": "black"
  },
  "I0DU": {
    "label": "Burning Soul",
    "k_label": "불타는 영혼",
    "type": "material",
    "color": "black"
  },
  "I0DV": {
    "label": "Agonizing Soul",
    "k_label": "고통받는 영혼",
    "type": "material",
    "color": "black"
  },
  "I076": {
    "label": "Spirit of Beresa",
    "k_label": "베레스라의 영혼",
    "type": "material",
    "color": "black"
  },
  "I07L": {
    "label": "Spirit of the Blue Dragon",
    "k_label": "블루드래곤의 영혼",
    "type": "material",
    "color": "black"
  },
  "I086": {
    "label": "Mother Tree’s Seeds",
    "k_label": "마더트리의 씨앗",
    "type": "material",
    "color": "black"
  },
  "I0KL": {
    "label": "Archangel’s Treasure(Small)",
    "k_label": "대천사의 보물함(스몰)",
    "type": "chest",
    "color": "black"
  },
  "I0KJ": {
    "label": "Black Soul(Small)",
    "k_label": "검은 영혼석(스몰)",
    "type": "chest",
    "color": "black"
  },
  "I0K4": {
    "label": "Beresa’s Soul (Small)",
    "k_label": "베레스라의 영혼(스몰)",
    "type": "chest",
    "color": "black"
  },
  "I0K8": {
    "label": "Spirit of the Blue Dragon (Small)",
    "k_label": "블루드래곤의 영혼(스몰)",
    "type": "chest",
    "color": "black"
  },
  "I0K6": {
    "label": "Mother Tree’s Seeds (Small)",
    "k_label": "마더트리의 씨앗(스몰)",
    "type": "chest",
    "color": "black"
  },
  "I0FO": {
    "label": "Lesser Training Certificate",
    "k_label": "하급 수료증",
    "type": "chest",
    "color": "black"
  },
  "I0KA": {
    "label": "Intermediate Training Certificate",
    "k_label": "중급 수료증",
    "type": "chest",
    "color": "black"
  },
  "I021": {
    "label": "Beast Bone",
    "k_label": "짐승 뼈검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 50
    }
  },
  "I022": {
    "label": "Beast’s Leather Fur",
    "k_label": "늑대의 털옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 10
    }
  },
  "I00D": {
    "label": "Wolf’s Fur Coat",
    "k_label": "늑대의 털옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 15
    }
  },
  "I023": {
    "label": "Canine Sword",
    "k_label": "송곳니 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 100
    }
  },
  "I026": {
    "label": "Armor of the Plains",
    "k_label": "평원의 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 100,
      "hp": 500,
      "str": 40
    }
  },
  "I027": {
    "label": "Peridot of Tallinn Forest",
    "k_label": "탈린숲의 정기",
    "type": "accessory",
    "color": "green",
    "stats": {
      "hp_regen": 100
    }
  },
  "I028": {
    "label": "Axe of a Killer",
    "k_label": "살인용 도끼",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 200
    }
  },
  "I029": {
    "label": "Bloody Armor",
    "k_label": "피뭍은 갑옷",
    "type": "artifact",
    "color": "green",
    "stats": {
      "armor": 25
    }
  },
  "I02A": {
    "label": "Axe of Massacre",
    "k_label": "짐승의 털옷",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 300,
    },
    "bugged": true
  },
  "I02B": {
    "label": "Stolen Armor",
    "k_label": "도적두목의 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 30
    },
    "bugged": true
  },
  "I02C": {
    "label": "Shoes of Death",
    "k_label": "탈린숲의 정기",
    "type": "artifact",
    "color": "green",
    "stats": {
      "str": 100,
      "agi": 100,
      "int": 100,
      "movement_speed": 75
    }
  },
  "I02D": {
    "label": "Sword of the Kingdom",
    "k_label": "왕국의 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1000,
      "str": 300
    }
  },
  "I02E": {
    "label": "Dagger of the Kingdom",
    "k_label": "왕국의 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1200,
      "agi": 250,
      "attack_speed": 20
    }
  },
  "I02F": {
    "label": "Staff of the Kingdom",
    "k_label": "왕국의 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "int": 350,
      "atk": 800
    }
  },
  "I02G": {
    "label": "Kodiak Bear Claws",
    "k_label": "콜라곰의 갈퀴",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 350,
      "str": 60
    }
  },
  "I02H": {
    "label": "Kodiak Bone Wand",
    "k_label": "콜라곰 뼈지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "int": 70,
      "atk": 300
    }
  },
  "I02I": {
    "label": "Kodiak Bone Bow",
    "k_label": "콜라곰 뼈활",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 400,
      "agi": 50
    }
  },
  "I02K": {
    "label": "Exceptional Sword",
    "k_label": "도적 두목의 중검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "str": 100,
      "atk": 400
    }
  },
  "I02L": {
    "label": "Exceptional Staff",
    "k_label": "고급 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "int": 120,
      "atk": 300
    }
  },
  "I02M": {
    "label": "Exceptional Dagger",
    "k_label": "고급 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 400,
      "agi": 100
    }
  },
  "I02N": {
    "label": "Frost Ring",
    "k_label": "도적 두목의 중검",
    "type": "accessory",
    "color": "green",
    "stats": {
      "str": 60,
      "int": 60,
      "agi": 60
    }
  },
  "I02O": {
    "label": "Wendigo Leather",
    "k_label": "웬디고 가죽옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 50
    },
    "bugged": true
  },
  "I02R": {
    "label": "Wendigo’s Bone Wand",
    "k_label": "웬디고의 뼈지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "int": 120,
      "atk": 500
    }
  },
  "I02P": {
    "label": "Wendigo’s Claws",
    "k_label": "웬디고의 갈퀴",
    "type": "weapon",
    "color": "green",
    "stats": {
      "str": 100,
      "atk": 600
    }
  },
  "I02Q": {
    "label": "Wendigo Bone Bow",
    "k_label": "웬디고의 뼈활",
    "type": "weapon",
    "color": "green",
    "stats": {
      "agi": 80,
      "atk": 700
    }
  },
  "I02J": {
    "label": "Bandit Leader’s Armor",
    "k_label": "도적두목의 중갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 80,
      "hp": 1000
    }
  },
  "I02T": {
    "label": "Frost armor",
    "k_label": "서리 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 100,
      "hp": 1500
    }
  },
  "I006": {
    "label": "Plain’s Sword",
    "k_label": "평원의 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "str": 60,
      "atk": 350
    }
  },
  "I007": {
    "label": "Plain’s Dagger",
    "k_label": "평원의 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "agi": 50,
      "atk": 400
    }
  },
  "I008": {
    "label": "Plain’s Staff",
    "k_label": "평원의 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "int": 70,
      "atk": 300
    }
  },
  "I003": {
    "label": "Lunda Sword",
    "k_label": "룬다 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "str": 120,
      "atk": 700
    }
  },
  "I004": {
    "label": "Lunda Cane",
    "k_label": "룬다 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "int": 150,
      "atk": 600
    }
  },
  "I005": {
    "label": "Lunda Dagger",
    "k_label": "룬다 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "agi": 110,
      "atk": 800
    }
  },
  "I00E": {
    "label": "Plain Grove Armor",
    "k_label": "평원의 로브",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 50,
      "int": 70,
      "mp": 500
    }
  },
  "I00G": {
    "label": "Beach Sword",
    "k_label": "해변의 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "str": 100,
      "atk": 650
    }
  },
  "I00H": {
    "label": "Beach Dagger",
    "k_label": "해변의 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "agi": 90,
      "atk": 750
    }
  },
  "I00I": {
    "label": "Beach Wand",
    "k_label": "해변의 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "int": 110,
      "atk": 600
    }
  },
  "I00J": {
    "label": "Cecilia Sword",
    "k_label": "시실리아 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "str": 150,
      "atk": 900
    }
  },
  "I00K": {
    "label": "Cecilia Dagger",
    "k_label": "시실리아 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "agi": 130,
      "atk": 1000
    }
  },
  "I00L": {
    "label": "Cecilia Cane",
    "k_label": "시실리아 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "int": 180,
      "atk": 800
    }
  },
  "I00M": {
    "label": "Plain Leather",
    "k_label": "평원의 가죽옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 80,
      "hp": 300,
      "agi": 60
    }
  },
  "I00N": {
    "label": "Beach Armor",
    "k_label": "해변의 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 120,
      "hp": 1000,
      "str": 60
    }
  },
  "I00O": {
    "label": "Beach Robe",
    "k_label": "해변의 로브",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 70,
      "int": 90,
      "mp": 1000
    }
  },
  "I00P": {
    "label": "Cecilia Glyph Robe",
    "k_label": "시실리아 문양 로브",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 100,
      "int": 110,
      "hp": 500,
      "mp": 2000
    }
  },
  "I00Q": {
    "label": "Cecilia Glyph Amor",
    "k_label": "시실리아 문양 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 150,
      "hp": 2500,
      "str": 90
    }
  },
  "I00X": {
    "label": "Cecilia Glyph Leather",
    "k_label": "시실리아 문양 가죽옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 130,
      "agi": 110,
      "hp": 2000
    }
  },
  "I00Y": {
    "label": "Cecilia Helmet",
    "k_label": "시실리아 문양 투구",
    "type": "helmet",
    "color": "green",
    "stats": {
      "armor": 30,
      "int": 50,
      "str": 50,
      "agi": 50
    },
    "bugged": true
  },
  "I010": {
    "label": "Bronze Brooch",
    "k_label": "브론즈 브로치",
    "type": "accessory",
    "color": "green",
    "stats": {
      "str": 250,
      "int": 250,
      "agi": 250,
      "damage_increase": 5
    },
    "bugged": true
  },
  "I011": {
    "label": "Cecilia Ring",
    "k_label": "시실리아 반지",
    "type": "accessory",
    "color": "green",
    "stats": {
      "str": 120,
      "int": 120,
      "agi": 120
    }
  },
  "I00Z": {
    "label": "Cerulean Wing",
    "k_label": "블루 윙",
    "type": "artifact",
    "color": "green",
    "stats": {
      "str": 150,
      "int": 150,
      "agi": 150,
      "damage_increase": 3
    },
    "bugged": true
  },
  "I00C": {
    "label": "Beach Leather",
    "k_label": "해변의 가죽옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 100,
      "hp": 800,
      "agi": 80
    }
  },
  "I013": {
    "label": "Volcanic Sword",
    "k_label": "화산의 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "str": 120,
      "atk": 800
    }
  },
  "I014": {
    "label": "Volcanic Dagger",
    "k_label": "화산의 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 900,
      "agi": 110
    }
  },
  "I015": {
    "label": "Volcanic Staff",
    "k_label": "화산의 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 750,
      "int": 130
    }
  },
  "I019": {
    "label": "Augustine Sword",
    "k_label": "오거스틴 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1100,
      "str": 170
    }
  },
  "I01A": {
    "label": "Augustine Dagger",
    "k_label": "오거스틴 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1200,
      "agi": 160
    }
  },
  "I01B": {
    "label": "Augustine Cane",
    "k_label": "오거스틴 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1000,
      "int": 200
    }
  },
  "I01C": {
    "label": "Augustine Cane",
    "k_label": "폭렬의 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 3000,
      "str": 400
    }
  },
  "I01D": {
    "label": "Sorcerer’s Dagger",
    "k_label": "폭렬의 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 3000,
      "agi": 400
    }
  },
  "I01E": {
    "label": "Augustine Wand",
    "k_label": "폭렬의 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 2000,
      "int": 500
    }
  },
  "I01F": {
    "label": "Volcanic Armor",
    "k_label": "화산의 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 1500,
      "str": 80,
      "armor": 150
    }
  },
  "I01G": {
    "label": "Volcanic Leather",
    "k_label": "화산의 가죽옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 1300,
      "agi": 100,
      "armor": 130
    }
  },
  "I01H": {
    "label": "Volcanic Robe",
    "k_label": "화산의 로브",
    "type": "armor",
    "color": "green",
    "stats": {
      "int": 110,
      "armor": 100,
      "mp": 1500
    }
  },
  "I01I": {
    "label": "Augustine Flame Armor",
    "k_label": "오거스틴 화염 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 3000,
      "str": 120,
      "armor": 180
    }
  },
  "I01J": {
    "label": "Augustine Flame Leather",
    "k_label": "오거스틴 화염 가죽갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 2500,
      "agi": 140,
      "armor": 160
    }
  },
  "I01K": {
    "label": "Augustine Flame Robe",
    "k_label": "오거스틴 화염 로브",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 1000,
      "int": 140,
      "armor": 130,
      "mp": 2500
    }
  },
  "I01L": {
    "label": "Augustine Ring",
    "k_label": "오거스틴 반지",
    "type": "accessory",
    "color": "green",
    "stats": {
      "int": 160,
      "str": 160,
      "agi": 160
    }
  },
  "I01M": {
    "label": "Augustine Helmet",
    "k_label": "오거스틴 문양 투구",
    "type": "helmet",
    "color": "green",
    "stats": {
      "int": 70,
      "str": 70,
      "agi": 70,
      "armor": 50
    }
  },
  "I01N": {
    "label": "Snow Mountain Sword",
    "k_label": "설산의 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1000,
      "str": 140
    }
  },
  "I01O": {
    "label": "Snow Mountain Dagger",
    "k_label": "설산의 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1100,
      "agi": 130
    }
  },
  "I01P": {
    "label": "Snow Mountain Cane",
    "k_label": "설산의 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 900,
      "int": 150
    }
  },
  "I01T": {
    "label": "Snow Mountain’s Armor",
    "k_label": "설산의 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 2000,
      "str": 100,
      "armor": 180
    }
  },
  "I01U": {
    "label": "Snow Mountain’s Leather",
    "k_label": "설산의 가죽옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 1500,
      "agi": 130,
      "armor": 150
    }
  },
  "I01V": {
    "label": "Snow Mountain’s Robe",
    "k_label": "설산의 로브",
    "type": "armor",
    "color": "green",
    "stats": {
      "int": 130,
      "armor": 120,
      "mp": 2000
    }
  },
  "I01W": {
    "label": "Snowy Ice Armor",
    "k_label": "설산 얼음 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 3000,
      "str": 150,
      "armor": 200
    }
  },
  "I01X": {
    "label": "Snowy Ice Leather",
    "k_label": "설산 얼음 가죽옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 2500,
      "str": 70,
      "int": 70,
      "agi": 170,
      "armor": 180
    },
    "bugged": true
  },
  "I01Y": {
    "label": "Snowy Ice Robes",
    "k_label": "설산 얼음 로브",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 1000,
      "int": 170,
      "armor": 150,
      "mp": 3000
    }
  },
  "I01Q": {
    "label": "Mountain Sword",
    "k_label": "마운틴 검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1300,
      "str": 200
    }
  },
  "I01R": {
    "label": "Mountain Dagger",
    "k_label": "마운틴 단검",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1400,
      "agi": 190
    }
  },
  "I01S": {
    "label": "Mountain Cane",
    "k_label": "마운틴 지팡이",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 1200,
      "int": 230,
    }
  },
  "I01Z": {
    "label": "Icecap Armor",
    "k_label": "만년설산 아머",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 5000,
      "str": 350,
      "armor": 350
    }
  },
  "I020": {
    "label": "Icecap Leather Armor",
    "k_label": "만년설산 가죽갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 4000,
      "agi": 400,
      "armor": 300
    }
  },
  "I02S": {
    "label": "Icecap Robes",
    "k_label": "만년설산 로브",
    "type": "armor",
    "color": "green",
    "stats": {
      "hp": 3000,
      "int": 400,
      "armor": 200,
      "mp": 3000
    }
  },
  "I02U": {
    "label": "Snow Mountain Helmet",
    "k_label": "마운틴 투구",
    "type": "helmet",
    "color": "green",
    "stats": {
      "agi": 100,
      "int": 100,
      "str": 100,
      "armor": 70
    }
  },
  "I02V": {
    "label": "Snow Mountain Ring",
    "k_label": "마운틴 반지",
    "type": "accessory",
    "color": "green",
    "stats": {
      "agi": 200,
      "str": 200,
      "int": 200
    }
  },
  "I02W": {
    "label": "Mana Well",
    "k_label": "마력의 원천",
    "type": "accessory",
    "color": "green",
    "stats": {
      "int": 500,
      "mp": 5000
    }
  },
  "I02X": {
    "label": "Antique Ring",
    "k_label": "리치의 고대반지",
    "type": "accessory",
    "color": "green",
    "stats": {
      "agi": 300,
      "str": 300,
      "int": 300,
      "damage_increase": 7
    }
  },
  "I02Y": {
    "label": "Eternal Vitality",
    "k_label": "영원한 생명력",
    "type": "accessory",
    "color": "green",
    "stats": {
      "agi": 300,
      "str": 300,
      "int": 300,
      "hp_regen": 300
    }
  },
  "I02Z": {
    "label": "Magical Note of The Resurrected Wizard",
    "k_label": "부활의 마법서",
    "type": "weapon",
    "color": "green",
    "stats": {
      "atk": 4000,
      "int": 700
    }
  },
  "I030": {
    "label": "Dragon Leather Boots",
    "k_label": "드레곤 가죽 신발",
    "type": "artifact",
    "color": "green",
    "stats": {
      "agi": 250,
      "int": 250,
      "str": 250,
      "armor": 150,
      "movement_speed": 90
    },
    "bugged": true
  },
  "I031": {
    "label": "Alchemist Helmet",
    "k_label": "연금술사 투구",
    "type": "helmet",
    "color": "green",
    "stats": {
      "hp": 2000,
      "str": 200,
      "int": 200,
      "agi": 200,
      "armor": 150
    },
    "bugged": true
  },
  "I000": {
    "disabled": true,
    "label": "Frost Robe",
    "stats": {
      "hp": 2000,
      "int": 250,
      "armor": 200,
      "mp": 3000
    }
  },
  "I001": {
    "disabled": true,
    "label": "Frost Armor",
    "stats": {
      "hp": 4000,
      "str": 230,
      "armor": 250
    }
  },
  "I002": {
    "disabled": true,
    "label": "Frost Leather Armor",
    "stats": {
      "hp": 3000,
      "agi": 260,
      "armor": 220
    }
  },
  "I00F": {
    "disabled": true,
    "label": "Breeze Helmet",
    "stats": {
      "agi": 80,
      "int": 80,
      "str": 80,
      "armor": 50
    }
  },
  "I05R": {
    "disabled": true,
    "label": "Unholy Soul Sword",
    "stats": {
      "atk": 8000,
      "str": 700
    }
  },
  "I05S": {
    "disabled": true,
    "label": "Deadly Dagger",
    "stats": {
      "atk": 10000,
      "agi": 650
    }
  },
  "I03N": {
    "disabled": true,
    "label": "Soul Ring",
    "stats": {
      "agi": 400,
      "str": 400,
      "int": 400,
      "damage_increase": 8
    }
  },
  "I05T": {
    "disabled": true,
    "label": "Death Knight’s Helm",
    "stats": {
      "agi": 250,
      "int": 250,
      "str": 250,
      "armor": 200,
      "damage_increase": 5
    },
    "bugged": true
  },
  "I0IY": {
    "disabled": true,
    "label": "500 Points"
  },
  "I0LK": {
    "type" : "material",
    "color" : "black",
    "label" : "Mythic Weapon Essence",
    "k_label": "신화 무기 정수"
  },
  "I0LL": {
    "type" : "material",
    "color" : "black",
    "label" : "Mythic Equipement Essence",
    "k_label": "신화 장비 정수"
  },
  "I0LM": {
    "type" : "material",
    "color" : "black",
    "label" : "Mythic Auxiliary Essence",
    "k_label": "신화 룬 정수"
  },
  "I0LO": {
    "type": "material",
    "color": "black",
    "label": "Archangel Mark",
    "k_label": "(신)대천사의 증표"
  },
  "I0LQ": {
    "type": "material",
    "color": "black",
    "label": "Blue Dragon Essence",
    "k_label": "블루드래곤의 정수"
  },
  "I0LR": {
    "type": "material",
    "color": "black",
    "label": "Beresa Essence",
    "k_label": "블루드래곤의 정수"
  },
  "I0LS": {
    "type": "material",
    "color": "black",
    "label": "Mother Tree Essence",
    "k_label": "마더트리의 정수"
  },
  "I0LT": {
    "type": "material",
    "color": "black",
    "label": "Intense Energy",
    "k_label": "강렬한 기운",
    "effect": ["Allows you to enter a special boss zone and summons a special boss"],
    "k_effects": ["사용시 특수 보스존에 입장가능해지며 특수 보스를 소환합니다"]
  },
  "I0LU": {
    "type": "chest",
    "color": "black",
    "label": "Chaos Essence",
    "k_label": "혼돈의 영혼"
  },
  "I0LV": {
    "label": "Marissa's lost bag (Lower)",
    "k_label": "마리사가 잃어버린 주머니(하급)",
    "type": "chest",
    "color": "black"
  },
  "I0LW": {
    "label": "Marissa's lost bag (Intermediate)",
    "k_label": "마리사가 잃어버린 주머니(중급)",
    "type": "chest",
    "color": "black"
  },
  "I0LX": {
    "label": "Marissa's lost bag (Advanced)",
    "k_label": "마리사가 잃어버린 주머니(상급)",
    "type": "chest",
    "color": "black"
  },
  "I0LY": {
    "label": "Marissa's lost bag (Supreme)",
    "k_label": "마리사가 잃어버린 주머니(최상급)",
    "type": "chest",
    "color": "black"
  },
  "I0M3": {
    "label": "Very intense energy",
    "k_label": "매우 강렬한 기운",
    "type": "material",
    "color": "black"
  },
  "I0M5": {
    "label": "Archangel’s essence",
    "k_label": "대천사의 정수",
    "type": "material",
    "color": "black"
  },
  "I0M6": {
    "label": "Essence of the Great Demon",
    "k_label": "대악마의 정수",
    "type": "material",
    "color": "black"
  },
  "I0M7": {
    "label": "Chaos Soul",
    "k_label": "대혼돈의 영혼",
    "type": "chest",
    "color": "red"
  },
  "I0M4": {
    "type": "weapon",
    "color": "god",
    "k_label": "최상급 생명의 신궁",
    "label": "Supreme God's Bow of Life",
    "stats": {
      "atk": 600000,
      "agi": 13000,
      "hp": 80000
    },
    "effects" : ["Every 10 attacks will recover AGI x6.7 HP (9s cd)", "Every 6 spells will recover AGI x6.7 HP (10s cd)", "On Use: Restores AGI x11 HP (120s cd)"],
    "k_effects" : ["기본공격 10회시 생명력회복 (AGI x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (AGI x6.7)(쿨타임 10초)", "사용시  생명력회복 (AGI x11)(쿨타임 120초)"]
  },
  "I0M8": {
    "type": "weapon",
    "color": "god",
    "stats": {
      "atk": 600000,
      "agi": 13000,
      "damage_increase" : 200,
      "damage_taken" : 50
    },
    "k_label": "최상급 신의 건들릿",
    "label": "Supreme God's Gauntlets"
  },
  "I0M9": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "int": 13000
      },
    "k_label": "최상급 신의 권능",
    "label": "Supreme God's Blessed Staff",
    "effects" : ["On Use: Summons an apostle"],
    "k_effects": ["사용시 신궁의 사도 소환"]      
  },
  "I0MA": {
    "type": "weapon",
    "color": "god",
    "stats": {
      "atk": 600000,
      "agi": 13000,
      "attack_speed": 300,
      "attack_agi": true,
      "attack_real": 64
    },
    "k_label": "최상급 신의 단검",
    "label": "Supreme God's Dagger"
  },
  "I0MB": {
   "type": "weapon",
    "color": "god",
    "stats": {
      "atk": 600000,
      "str": 13000,
      "damage_increase": 100
    },
    "k_label": "최상급 신의 대검",
    "label": "Supreme God's GreatSword",
    "effects": ["Deals damage proportional to stats when used (120s cd)"],
    "k_effects": ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"],
    "bugged": true
  },
  "I0MC": {
   "type": "weapon",
    "color": "god",
    "stats": {
      "atk": 600000,
      "agi": 13000,
      "damage_increase": 100
    },
    "k_label": "최상급 신의 대검",
    "label": "Supreme God's Blade",
    "effects": ["Deals damage proportional to stats when used (120s cd)"],
    "k_effects": ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"]    
  },
  "I0MD": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "int": 13000,
        "mp": 50000,
        "contract": 0.000006,
        "int_tick": true             
      },
      "label": "Supreme God's Magic Staff",
      "k_label": "최상급 신의 마력 지팡이"
  },
  "I0ME": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "int": 13000,
        "hp": 80000
      },
      "label": "Supreme God's Staff of Life",
      "k_label": "최상급 신의 생명 지팡이",
      "effects" : ["Every 4 spells will recover INT x7.5 HP (10s cd)", "On Use: Restore INT x11 HP of all allies within range (80s cd)"],
      "k_effects": ["스킬사용 4회시 생명력 회복 (INT x7.5)(쿨타임 10초)", "사용시 주변 아군을 능력치 비례 만큼의 생명력 회복 (INT x11)(쿨타임 80초)"]    
  },
  "I0MF": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "str": 13000,
        "hp": 80000
      },
      "label": "Supreme God's Sword of Life",
      "k_label": "최상급 신의 생명의검",
      "effects" : ["Every 10 attacks will recover STR x6.7 HP (9s cd)", "Every 6 spells will recover STR x6.7 HP (10s cd)", "On Use: Restores STR x11 HP (120s cd)"],
      "k_effects" : ["기본공격 10회시 생명력회복 (STR x6.7)(쿨타임 9초)", "스킬사용 6회시 생명력회복 (STR x6.7)(쿨타임 10초)", "사용시  생명력회복 (STR x11)(쿨타임 120초)"]    
  },
  "I0MG": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "str": 11000,
        "agi": 11000,
        "attack_str_agi": true,
        "attack_real": 26
      },
      "label": "Supreme God's Sword",
      "k_label": "최상급 신의 소검",
      "effects" : ["On use: 400000 + (STR + AGI) x180 damage"],
		  "k_effects" : ["사용시 400000 + (STR + AGI) x180 (쿨타임 80초)"],
      "bugged": true
  },
  "I0MH": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "int": 13000,
        "int_tick": true,
        "attack_int_real": 205           
      },
      "label": "Supreme God's Judgement Staff",
      "k_label": "최상급 신의 심판 지팡이",
      "bugged": true
  },
  "I0MI": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "str": 13000,
        "attack_speed": 250,
        "attack_real": 88,
        "attack_str": true
      },
      "label": "Supreme God's Judgement",
      "k_label": "최상급 신의 심판",
      "bugged": true
  },
  "I0MJ": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "str": 11000,
        "int": 11000,
        "int_tick": true,
        "attack_str_int_real": 77                
      },
      "label": "Supreme God's Staff",
      "k_label": "최상급 신의 일격 지팡이",
      "bugged": true
  },
  "I0MK": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "str": 9500,
        "agi": 9500,
        "int": 9500
      },
      "label": "Supreme God's Longsword",
      "k_label": "최상급 신의 장검",
      "effects": ["Deals damage proportional to stats when used (120s cd)"],
      "k_effects": ["사용시 신의 일격 시전 (쿨타임 120초)(능력치 비례)"]    
  },
  "I0ML": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "int": 13000,
        "damage_increase" : 100
      },
      "label": "Supreme God's Amber Staff",
      "k_label": "최상급 신의 증폭 지팡이"    
  },
  "I0MM": {
		"type" : "weapon",
		"color" : "god",
    "stats" : {
			"atk" : 600000,
			"str" : 13000
		},
		"label" : "Supreme God's Glaive",
    "k_label": "최상급 신의 창",
		"effects" : ["On Use: Causes an explosion, dealing 700000 + STR x520 damage (38s cd)"],
    "k_effects": ["사용시 용기의 폭발 시전 (700000 + STR x520)(쿨타임 38초)"]    
  },
  "I0MN": {
    "type": "armor",
    "color": "god",
    "stats": {
      "armor": 1300,
      "int": 8000,
      "mp": 60000,
      "mps": 80
    },
    "label": "Supreme Divine Mana Robes",
    "k_label": "최상급 신의 마력 로브",    
  },
  "I0MO": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1700,
	    "str" : 8000,
	    "movement_speed" : 200,
	    "damage_increase" : 70
	  },
    "label": "Supreme Purified Bright Armor",
    "k_label": "최상급 신의 빛의 갑옷"    
  },
  "I0MP": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1600,
	    "agi" : 8000,
	    "movement_speed" : 200,
	    "damage_increase" : 70
	  },
    "label": "Supreme Purified Bright Greaves",
    "k_label": "최상급 신의 빛의 경갑"    
  },
  "I0MQ": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1300,
	    "int" : 8000,
	    "movement_speed" : 200,
	    "damage_increase" : 70
	  },
    "label": "Supreme Purified Bright Robes",
    "k_label": "최상급 신의 빛의 로브"    
  },
  "I0MR": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1700,
	    "str" : 8000,
	    "hp" : 55000,
	    "damage_taken" : -35
	  },
    "label": "Supreme Purified Guardian Armor",
    "k_label": "최상급 신의 수호 갑옷"    
  },
  "I0MS": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1600,
	    "agi" : 8000,
	    "hp" : 55000,
	    "damage_taken" : -35
	  },
    "label": "Supreme Purified Guardian Greaves",
    "k_label": "최상급 신의 수호 경갑"    
  },
  "I0MT": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1300,
	    "int" : 8000,
	    "hp" : 55000,
	    "damage_taken" : -35
	  },
    "label": "Supreme Purified Guardian Robes",
    "k_label": "최상급 신의 수호 로브"    
  },
  "I0MU": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1300,
	    "str" : 6000,
      "agi": 6000,
      "int": 6000,
	    "hp" : 55000,
	    "max_health" : 38
	  },
    "label": "Supreme Purified Life Armor",
    "k_label": "최상급 정화된 생명의 갑옷",
    "bugged": true
  },
  "I0MV": {
    "type": "armor",
    "color": "god",
    "stats" : {
	    "armor" : 1300,
      "str": 6000,
      "agi": 6000,
	    "int" : 6000,
	    "hp" : 55000,
	    "hp_regen_percent" : 5
	  },
    "label": "Supreme Purified Healing Armor",
    "k_label": "최상급 정화된 치유의 갑옷",
    "bugged": true
  },
  "I0MW": {
    "type": "armor",
    "color": "god",
    "stats": {
      "str": 8000,
      "armor": 1700,
      "hp": 55000,
      "hp_regen": -3500
    },
    "label": "Supreme Purified Flame Armor",
    "k_label": "최상급 정화의 불꽃 갑옷",
    "effects": ["Deals 8000 + STR * 80 per second to nearby enemies"],
    "k_effects": ["초당 주변에 데미지 (8000 + STR * 80)"]    
  },
  "I0MX": {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"int" : 8000,
      "mp": 80000
		},
		"label" : "Supreme God's Magic",
    "k_label": "최상급 신의 마력",
		"effects" : ["Recover 70% of MAX MP every 28 seconds"],
    "k_effects": ["28초마다 최대마나 70%회복"]    
  },
  "I0MY": {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
      "damage_increase": 50
		},
		"label" : "Supreme Purified Fury Ring",
    "k_label": "최상급 신의 분노",
		"effects" : ["Increases the damage by 135% for 15s (120s cd)"],
    "k_effects": ["사용시 15초간 추가데미지 135%증가(쿨타임 120초)"],
    "bugged": true
  },
  "I0MZ": {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
      "critical_hit": 5.5,
      "critical_hit_chance": 25
		},
		"label" : "Supreme Divine Strike",
    "k_label": "최상급 신의 일격"    
  },
  "I0N0": {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
	    "damage_increase" : 80
		},
		"label" : "Supreme Divine Power",
    "k_label": "최상급 신의 힘"    
  },
  "I0N1": {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 8000,
      "hp": 80000
		},
		"label" : "Supreme Purified Life Jewel",
    "k_label": "최상급 정화된 생명력",
    "effects" : ["Recovers 70% of maximum HP every 28 seconds"],
    "k_effects": ["28초마다 최대체력 70%회복"]    
  },
  "I0N2": {
		"type" : "accessory",
		"color" : "god",
		"stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
			"hp_regen" : 3000
		},
		"label" : "Supreme Purified Essence",
    "k_label": "최상급 정화의 신의 가호",
		"effects" : ["Allies within range gain HP recovery per second +2500", "On Use: not implemented "],
    "k_effects": ["범위내 아군 초당 생명력 회복 2500", "사용시 5초간 사용지점에 매초마다 정화의 신의 가호 발동(능력치비례)(쿨타임 120초)"]    
  },
  "I0N3": {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 2000,
      "agi" : 2000,
      "int" : 2000,
      "mp" : 20000
    },
    "label" : "Supreme God's Mana Rune",
    "k_label": "최상급 신의 마나룬"    
  },
  "I0N4": {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 2000,
      "agi" : 2000,
      "int" : 2000
    },  
    "label" : "Supreme God's Mana Potion",
    "k_label": "최상급 신의 마나포션",
    "effects" : ["On Use: Restore 45% of maximum mana (25s cd)"],
    "k_effects" : ["사용시 최대마나 45%회복 (쿨타임 25초)"]   
  },
  "I0N5": {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 2000,
      "agi" : 2000,
      "int" : 2000,
      "hp" : 35000
    },
    "label" : "Supreme God's Life Rune",
    "k_label": "최상급 대혼돈의 생명룬"    
  },
  "I0N6": {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 2000,
      "agi" : 2000,
      "int" : 2000,
      "movement_speed" : 150,
      "attack_speed" : 160
    },
    "label" : "Supreme God's Ascension Rune",
    "k_label": "최상급 신의 순풍룬"   
  },
  "I0N7": {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 2000,
      "agi" : 2000,
      "int" : 2000,
      "damage_increase" : 30
    },
    "label" : "Supreme God's Magic Rune",
    "k_label": "최상급 신의 일격룬"    
  },
  "I0N8": {
    "type" : "auxiliary",
    "color" : "god",
    "stats" : {
      "str" : 2000,
      "agi" : 2000,
      "int" : 2000
    },  
    "label" : "Supreme God's Potion",
    "k_label": "최상급 신의 포션",
    "effects" : ["On Use: Restore 50% of health (25s cd)"],
    "k_effects" : ["사용시 최대생명력 50%회복 (쿨타임 25초)"]    
  },
  "I0N9": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1100,
      "str": 4000,
      "agi": 4000,
	    "int" : 4000,
	    "damage_taken" : -27
	  },
    "label": "Supreme Guardian Helmet",
    "k_label": "최상급 수호신의 빛"    
  },
  "I0NA": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1700,
      "str": 4000,
      "agi": 4000,
	    "int" : 4000,
      "magic_resistance" : 30
	  },
    "label": "Supreme Magic Resistance Helmet",
    "k_label": "최상급 신의 저항 투구"   
  },
  "I0NB": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 900,
	    "int" : 5500,
      "mp" : 40000
	  },
    "label": "Supreme Wisdom Helmet",
    "k_label": "최상급 신의 지혜",
    "effects": ["Recovers 100% MP on use (80s cd)"],
    "k_effects": ["사용시 MP100% 회복 (쿨타임 80초)"]    
  },
  "I0NC": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1100,
      "str": 4000,
      "agi": 4000,
	    "int" : 4000
	  },
    "label": "Supreme Anti-Magic Helmet",
    "k_label": "최상급 정화의 신의 결계",
    "effects": ["Gives 13s of magic inmunity on use (90s cd)"],
    "k_effects": ["사용시 13초간 마법면역(쿨타임 90초)"]    
  },
  "I0ND": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1100,
      "str": 4000,
      "agi": 4000,
	    "int" : 4000,
	    "hp" : 50000,
	    "damage_increase" : 70
	  },
    "label": "Supreme Strength Helmet",
    "k_label": "최상급 정화의 신의 빛",
    "bugged": true
  },
  "I0NE": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1000,
      "str": 4000,
      "agi": 4000,
	    "int" : 4000,
      "hp": 50000,
	    "damage_increase" : 110,
	    "damage_taken" : 40
	  },
    "label": "Supreme Desctruction Helmet",
    "k_label": "최상급 신의 저주",
    "bugged": true
  },
  "I0NF": {
    "type" : "artifact",
    "color" : "god",
    "stats" : {
      "str" : 6000,
      "agi" : 6000,
      "int" : 6000,
      "damage_increase" : 36
    },
    "label" : "Supreme Light Wings of Destruction",
    "k_label": "최상급 눈부신 신의 날개",
    "effects" : ["Enemies within range take 36% Additional Damage"],
    "k_effects": ["범위내 적들 추가데미지 36% 오라"]    
  },
  "I0NG": {
		"type" : "artifact",
		"color" : "god",
		"stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
			"attack_speed" : 300,
			"movement_speed" : 200
		},
		"label" : "Supreme Boots of Destruction",
    "k_label": "최상급 신의 각반",
		"effects" : ["On Use: Dash forward (2.2s cd)"],
		"k_effects" : ["사용시 전방으로 대쉬(쿨타임2.2초)"]    
  },
  "I0NH": {
		"type" : "artifact",
		"color" : "god",
		"stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
      "armor": 1100,
			"hp" : 45000
		},
		"label" : "Supreme God's Barrier",
    "k_label": "최상급 신의 방벽",
		"effects" : ["Generate a shield that can block up to 55000 damage every 10 seconds"],
		"k_effects" : ["10초마다 55000의 쉴드 생성"]    
  },
  "I0NI": {
		"type" : "artifact",
		"color" : "god",
	  "stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
			"hp" : 55000
		},
		"label" : "Supreme Life Wings of Destruction",
    "k_label": "최상급 신의 생명의 날개",
		"effects" : ["When HP is below 40%, any damage taken will restore 100% of MAX HP", "On use restore 20% of MAX HP every second for 10 seconds (120s cd)"],
		"k_effects" : ["생명력이 40%이하일때 즉사가 아닌 공격을받을면", "즉시 생명력 100%를 회복하며 10초간 초당 생명력 20% 회복 (쿨타임 120초)"]    
  },
  "I0NJ": {
		"type" : "artifact",
		"color" : "god",
		"stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
			"attack_speed" : 150,
			"movement_speed" : 40 
		},		
		"label" : "Supreme God's Blue Wings",
    "k_label": "최상급 신의 푸른 날개",
		"effects" : ["Allies have 45% movement speed and 150% attack speed increased", "Enemies have 30% movement speed and attack speed reduced", "Freeze nearby enemies on use, dealing 150000 + (STR + AGI + INT) x150 (180s cd)"],
		"k_effects" : ["주변 적군 공이속 30%감소", "주변 아군 공속 150% 이속 45%증가", "사용시 주변 적들을 얼려버림 (150000 + (STR + AGI + INT) x150)(쿨타임 180초)"]
  },
  "I0NK": {
		"type" : "artifact",
		"color" : "god",
		"stats" : {
			"str" : 6000,
			"agi" : 6000,
			"int" : 6000,
			"damage_increase" : 75
		},
		"label" : "Supreme Wings of Destruction",
    "k_label": "최상급 파멸의 날개"    
  },
  "I03F": {
	    "type" : "armor",
	    "color" : "god",
	    "stats" : {
	    	"armor" : 1200,
	    	"int" : 7000,
	    	"damage_taken" : 18,
	    	"damage_increase" : 100
	    },
	    "label" : "God's Amplifying Robes",
      "k_label": "신의 증폭 로브"    
  },
  "I04A": {
	    "type" : "armor",
	    "color" : "god",
	    "stats" : {
	    	"armor" : 1300,
	    	"int" : 8000,
	    	"damage_taken" : 21,
	    	"damage_increase" : 115
	    },
	    "label" : "Supreme God's Amplifying Robes",
      "k_label": "최고급 신의 증폭 로브",
      "bugged": true
  },
  "I03G": {
    "type": "armor",
    "color": "god",
    "stats": {
      "armor": 1500,
      "int": 13000
    },
    "label": "Supreme Robes of Trust",
    "k_label": "최고급 투신의 로브"    
  },
  "I04I": {
    "type": "material",
    "color": "black",
    "label": "God of Destruction Piece",
    "k_label": "파멸의 신의 조각"
  },
  "I04K": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 600000,
        "int": 13000
      },
      "label": "Supreme Staff of Destruction",
      "k_label": "최상급 파멸의 지팡이",
      "effects": ["49% armor increase to nearby allies"],
      "k_effects": ["주변아군 추가데미지 49%증가 오라 생성"]    
  },
  "I0BV": {
    
  }
}