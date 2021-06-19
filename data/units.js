let translator = require('./translations.js');

let units = {
  "n00G" : {
    "label": "Bloodthirsty Rabbit",
    "k_label": "광란한 핏빛 토끼"
  },
  "n002": {
    "label": "Lord of Talinn Forest",
    "k_label": "탈린 숲의 지배자"
  },
  "n00H": {
    "label": "Talinn Shore Rogue",
    "k_label": "탈린 기슭 도적단장"
  },
  "n010": {
    "label": "Kingdom’s Betrayer",
    "k_label": "배신한 기사단원 칼"
  },
  "n00B": {
    "label": "Snowy Bear",
    "k_label": "새하얀 털 곰"
  },
  "n00C": {
    "label": "Icy Heart",
    "k_label": "혹한의 설인"
  },
  "n00D": {
    "label": "Frosty Bear",
    "k_label": "푸른 털 곰"
  },
  "n00J": {
    "label": "Guardian of the Frigid Wasteland",
    "k_label": "혹한의 푸른 수호자"
  },
  "n00M": {
    "label": "Forest Tuskarr",
    "k_label": "나무망치 투스카르"
  },
  "n00L": {
    "label": "Queen of the Frigid Wasteland",
    "k_label": "혹한의 여왕 레엔"
  },
  "n009": {
    "label": "Ruler of the Plains",
    "k_label": "평원의 지배자"
  },
  "n00N": {
    "label": "Satyr",
    "k_label": "평원의 사티로스"
  },
  "n00P": {
    "label": "Blue Scale Murloc",
    "k_label": "시실리아 푸른비늘 은둔자"
  },
  "n00Q": {
    "label": "Purple Scale Murloc",
    "k_label": "시실리아 해저동굴 습격자"
  },
  "n00Y": {
    "label": "Giant Murloc",
    "k_label": "시실리나 푸른비늘 습격자"
  },
  "n00Z": {
    "label": "Deep-sea Guardian",
    "k_label": "심해의 수문장"
  },
  "n00V": {
    "label": "Lava Elemental",
    "k_label": "용암 괴인"
  },
  "n00W": {
    "label": "Lava Turtle",
    "k_label": "용암 거북"
  },
  "n006": {
    "label": "Magma Turtle",
    "k_label": "마그마 터틀"
  },
  "n013": {
    "label": "Fallen Hellfire Spirit",
    "k_label": "타락한 지옥불정령"
  },
  "n00R": {
    "label": "Winter Wolf",
    "k_label": "설산의 다이어 울프"
  },
  "n00S": {
    "label": "Mountain Spectre",
    "k_label": "설산의 망령"
  },
  "n00T": {
    "label": "Mountain Spectre",
    "k_label": "설산의 망령"
  },
  "n015": {
    "label": "Frostbite Hydra",
    "k_label": "서리의 새끼 히드라"
  },
  "n016": {
    "label": "Blue Dragon Knight",
    "k_label": "푸른 용군단 기사"
  },
  "n03R": {
    "label": "Deep Sea Robot",
    "k_label": "하급 수련 로봇"
  },
  "n03S": {
    "label": "Deep Sea Lord",
    "k_label": "하급 수련 관장"
  },
  "n03T": {
    "label": "Rabbit",
    "k_label": "라구 래빗"
  },
  "n04M": {
    "label": "Intermediate Training Center Knight",
    "k_label": "중급 수련 기사"
  },
  "n04N": {
    "label": "Intermediate Training Center Knight",
    "k_label": "중급 수련 관장"
  },
  "n04O": {
    "label": "Shinning Rabbit",
    "k_label": "빛나는 라구 래빗"
  },
  "n003": {
    "label": "Lord of Black Earth Beresa",
    "k_label": "검은 대지군주 베레스라"
  },
  "n01Y": {
    "label": "Blue Dragon",
    "k_label": "블루 드래곤"
  },
  "n05T": {
    "label": "",
    "k_label": ""
  },
  "n04I": {
    "label": "",
    "k_label": ""
  },
  "n04K": {
    "label": "",
    "k_label": ""
  },
  "n0DF": {
    "label": "",
    "k_label": ""
  },
  "n04B": {
    "label": "[Event] Chirno Low",
    "k_label": "[Event] 치르노 하급"
  },
  "n04C": {
    "label": "[Event] Chirno Middle",
    "k_label": "[Event] 치르노 중급"    
  },
  "n04D": {
    "label": "[Event] Chirno Advanced",
    "k_label": "[Event] 치르노 고급"      
  },
  "n04E": {
    "label": "[Event] Chirno Finest",
    "k_label": "[Event] 치르노 최고급"    
  },
  "n00X": {
    
  },
  "n019": {
    
  },
  "n01X": {
    
  },
  "n02B": {
    
  },
  "n02C": {
    
  },
  "n02D": {
    
  },
  "n022": {
    
  },
  "n023": {
    
  },
  "n024": {
    
  },
  "n02A": {
    
  },
  "e02J": {
    
  },
  "n00E": {
    
  },
  "n003": {
    
  },
  "n01Y": {
    
  },
  "e05T": {
    
  },
  "n027": {
    
  },
  "n02Y": {
    
  },
  "n03Z": {
    
  },
  "n04Q": {
    
  },
  "n04I": {
    
  },
  "e0DF": {
    
  },
  "n04K": {
    
  },
  "n051": {
    
  },
  "n059": {
    
  },
  "e0D8": {
    label: "Scheme",
    "k_label": "춈스케"
  },
  "n05B": {
    "label": "Easter Bunny",
    "k_label": "만렙 토끼"
  }, 
  "n05C": {
    "label": "Black Easter Bunny",
    "k_label": "흑화한 만렙 토끼"
  },
  "n05P": {
    "label": "Spirit King",
    "k_label": "마신왕"
  },
  "n025": {
    "label": "Archangel of Justice",
    "k_label": "정의의 대천사"
  },
  "n026": {
    "label": "Archangel of Death",
    "k_label": "죽음의 대천사"
  },
  "n02X": {
    "label": "Demon of Destruction",
    "k_label": "파괴의 대악마"
  },
  "n030": {
    "label": "Great Devil of Chaos(Open)",
    "k_label": "혼돈의 대악마(개방)"
  },
  "n05Z": {
    "label": "Pillar of Hope",
    "k_label": "희망의 기둥"
  },
  "n05Y": {
    "label": "Heavenly King",
    "k_label": "천신왕"
  },
  "n062": {
    "label": "Dimensional Barrage",
    "k_label": "차원 안정기"
  },
  "n05F": {
    "label": "Monument of Chaos",
    "k_label": "혼돈의 비석"
  },
  "n05G": {
    "label": "Chaos headstone",
    "k_label": "대혼돈의 비석"
  },
  "n06B": {
    "label": "Genesis",
    "k_label": "창세신"
  }
}

class Unit {
  constructor(unit) {
    Object.assign(this, unit);
  }
  
  translatedLabel() {
    return (translator.lang() == "eng" ? this.label : this.k_label) || "";
  }
}

for (let unit in units) {
  units[unit] = new Unit(units[unit]);
}


module.exports = units;
