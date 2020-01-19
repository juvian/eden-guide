module.exports.chests = [] 

class ItemDrop {
  constructor(id, chance) {
    this.id = id;
    this.chance = Number((chance || 100).toFixed(2));
  }
}

class Chest {
  constructor(id) {
    this.id = id;
    this.drops = [];
    module.exports.chests.push(this);
  }
  
  add(id, chance) {
    this.drops.push(new ItemDrop(id, chance));
    return this;
  }
  
  addMany(id, qty, chance) {
    for (let i = 0; i < qty; i++) {
      this.drops.push(new ItemDrop(id, chance));
    }
    return this;
  }
  
  addItems(itemArray, chance) {
    itemArray.forEach(item => this.drops.push(new ItemDrop(item, (chance || 100) / itemArray.length)));
    return this;
  }
}

class Unit extends Chest {
  constructor(id) {
    super(id);
    this.unit = true;
  }
}

new Chest("I0JR")
  .add("I0FY")
  .add("I0FU")
  .add("I0JV")
  .add("I0JW", 1)
  .add("I0EX", 10)
  .add("I0JY", 1);


new Chest("I0JS")
  .add("I0FZ")
  .add("I0FV")
  .addMany("I0JV", 2)
  .add("I0JW", 1.2)
  .add("I0EX", 10)
  .add("I0JY", 1);

new Chest("I0JT")
  .add("I0G0")
  .add("I0FW")
  .addMany("I0JV", 3)
  .add("I0JW", 1.5)
  .add("I0EX", 10)
  .add("I0JY", 1);

new Chest("I0JU")
  .add("I0G1")
  .add("I0FX", 30)
  .addMany("I0JV", 4)
  .add("I0JW", 2)
  .add("I0EX", 10)
  .add("I0JY", 1);


new Chest("I0EV")
  .add("I0EX", 1)
  .add("I0FY")
  .add("I0FU")
  .add("I0FK", 3);

new Chest("I0EW")
  .add("I0EX", 1.2)
  .add("I0FZ")
  .add("I0FV")
  .add("I0JO", 5);


new Chest("I0FI")
  .add("I0EX", 1.5)
  .add("I0G0")
  .add("I0FW")
  .add("I0JP", 4);

new Chest("I0FJ")
  .add("I0EX", 10)
  .add("I0G1")
  .add("I0JQ", 40);

new Chest("I0FU")
  .add("I05W")
  .add("I05X")
  .add("I071")
  .add("I072");

new Chest("I0FV")
  .add("I06Y")
  .add("I06L");

new Chest("I0FW")
  .add("I076")
  .add("I07L")
  .add("I086");

new Chest("I0FX")
  .add("I037")
  .add("I0AB");

let udg_Acangel_Item = ["I09D", "I093", "I08Z", "I0A4", "I09W", "I09Y", "I09X", "I099", "I09P", "I09L", "I09H", "I0A5", "I0AS", "I0C5", "I0C9", "I0CF", "I0G4", "I0IP"]
let udg_Acangel_Item2 = ["I0A3", "I09Z", "I0A2", "I0A1", "I0A0", "I03C", "I0BP", "I0BR", "I0BQ", "I0BS", "I0BT", "I0IC"]
let udg_Acangel_Item_S = ["I080", "I04C", "I07F"];
let udg_Acangel_Item_ALL = ["I07O", "I0BD", "I077", "I081", "I07G", "I045", "I04D", "I04E", "I082", "I087", "I07M"];

new Chest("I0AB")
  .add("I0FB", 6)
  .add("I0LO", 6)
  .add("I0AQ", 15)
  .add("I0A6", 8)
  .add("I0BU", 8)
  .add("I0FJ", 10)
  .addItems(udg_Acangel_Item_S, 9)
  .addItems(udg_Acangel_Item_ALL, 90);


new Chest("I0KL")
  .add("I0FB", 4)
  .add("I0LO", 4)
  .add("I0AQ", 11)
  .add("I0A6", 6)
  .add("I0BU", 6)
  .add("I0FJ", 7)
  .addItems(udg_Acangel_Item_S, 9)
  .addItems(udg_Acangel_Item_ALL, 90);

new Chest("I0A6")
  .add("I04Z")
  .addItems(udg_Acangel_Item);

new Chest("I0BU")
  .add("I04Z")
  .addItems(udg_Acangel_Item2)

let udg_AcDevill_Item = ["I0DM", "I0DK", "I0DJ", "I0DE", "I0DF", "I0DD", "I0DC", "I0DL", "I0DG", "I0DH", "I0DI", "I0GA"]
let udg_AcDevill_Item02 = ["I0DR", "I0DP", "I0DO", "I0DN", "I0DQ", "I04G", "I038", "I0DW", "I0DX", "I04T", "I0GQ", "I0IH", "I0IJ", "I0IN"]
let udg_AcDevill_Epic = ["I0D9", "I0DB"];
let udg_AcDevill_Nomal = ["I0CZ", "I0D3",  "I0CY", "I0D0", "I0D1", "I0D2", "I0D8", "I0D7", "I0D6"];

new Chest("I037")
  .add("I0DY", 4)
  .add("I035", 8)
  .add("I0DS", 8)
  .add("I0FJ", 10)
  .addItems(udg_AcDevill_Epic, 10)
  .addItems(udg_AcDevill_Nomal, 91);

new Chest("I0KJ")
  .add("I0DY", 3)
  .add("I035", 6)
  .add("I0DS", 6)
  .add("I0FJ", 7)
  .addItems(udg_AcDevill_Epic, 10)
  .addItems(udg_AcDevill_Nomal, 91);

new Chest("I0DS")
  .add("I0DT")
  .addItems(udg_AcDevill_Item);

new Chest("I035")
  .add("I0DT")
  .addItems(udg_AcDevill_Item02);

let udg_GOD_Item_Int = ["I0IT", "I0IU", "I0IV", "I0IW", "I0J4", "I0JL", "I0J5", "I0J8", "I0J1", "I0JD", "I0J9", "I0JI", "I0JH", "I0J7", "I0J3", "I0J6", "I0JE", "I0J2", "I0JC", "I0JK", "I0JA", "I0JJ", "I0JM", "I0JF", "I0JB", "I0JG", "I0JN", "I0IZ", "I0KB"/*, "I0D5"*/]
let udg_GOD02_Item_Int = ["I0KM", "I0KN", "I0KO", "I0KP", "I0KQ", "I0KR", "I0KS", "I0KT", "I0KU", "I0KV", "I0KW", "I03F"];
let udg_GOD02_Item_Int2 = ["I0L1", "I0L2", "I0L3", "I0L4", "I0L5", "I0L6", "I0L7", "I0L8", "I0L9", "I0LA", "I0LB", "I0LC", "I0LD", "I0L0"]
let udg_Event_Item_Int = ["I034", "I06I", "I06Z", "I065", "I05Y", "I06A", "I07K", "I033", "I0CR", "I04H", "I07X"];

new Chest("I0IX").addItems(udg_GOD_Item_Int);

new Chest("I0KX").addItems(udg_GOD02_Item_Int);

new Chest("I0LE").addItems(udg_GOD02_Item_Int2);


new Chest("I05W")
  .add('I03A' , 7)
  .add('I03D' , 7)
  .add('I0A7' , 6.5)
  .add('I041' , 7.5)
  .add('I03I' , 7)
  .add('I04Y' , 7)
  .add("I0EV", 8);

new Chest("I05X")
  .add('I03Z' , 7)
  .add('I03J' , 7)
  .add('I0A7' , 6.5)
  .add('I046' , 7)
  .add('I03P' , 7)
  .add("I0EV", 8);


new Chest("I06L")
  .add('I06F' , 6.5)
  .add('I06G' , 6.5)
  .add('I0A8' , 6.5)
  .add('I0BD' , 1.5)
  .add('I0B6' , 6.5)
  .add('I0IL' , 1.5)
  .add('I06J' , 12)
  .add("I0EW", 10);

new Chest("I06Y")
  .add('I04E' , 1.5)
  .add('I06X' , 6.5)
  .add('I0A8' , 6.5)
  .add('I06V' , 6.5)
  .add('I06T' , 6.5)
  .add('I051' , 6.5)
  .add('I070' , 12)
  .add("I0EW", 10);


new Chest("I071")
  .add('I067' , 7)
  .add('I069' , 7)
  .add('I0A7' , 6.5)
  .add('I066' , 3)
  .add('I068' , 7)
  .add("I0EV", 8);


new Chest("I072")
  .add('I03M' , 6.5)
  .add('I061' , 6.5)
  .add('I064' , 6.5)
  .add('I063' , 6.5)
  .add('I0A7' , 6.5)
  .add('I062' , 6.5)
  .add("I0EV", 8);


new Chest("I076")
  .add('I0F3' , 0.2)
  .add('I0FG' , 0.2)
  .add('I04C' , 1.5)
  .add('I0A9' , 8)
  .add('I04D' , 3)
  .add('I07C' , 3)
  .add('I077' , 15)
  .add('I0D8' , 3)
  .add('I0D6' , 3)
  .add('I0D9' , 1.5)
  .add('I0F2' , 0.2)
  .add('I0FE' , 0.2)
  .add("I0FI", 8);

new Chest("I0K4")
  .add('I0F3' , ( 0.20 * 0.80 ))
  .add('I0FG' , ( 0.20 * 0.80 ))
  .add('I04C' , ( 1.50 * 0.80 ))
  .add('I0A9' , ( 8.00 * 0.80 ))
  .add('I04D' , ( 3.00 * 0.80 ))
  .add('I07C' , ( 3.00 * 0.80 ))
  .add('I077' , ( 15.00 * 0.80 ))
  .add('I0D8' , ( 3.00 * 0.80 ))
  .add('I0D6' , ( 3.00 * 0.80 ))
  .add('I0D9' , ( 1.50 * 0.80 ))
  .add('I0F2' , ( 0.20 * 0.80 ))
  .add('I0FE' , ( 0.20 * 0.80 ))
  .add("I0FI", 8.00 * 0.8);

new Chest("I07L")
  .add('I0FF' , 0.2)
  .add('I0EZ' , 0.2)
  .add('I07F' , 1.5)
  .add('I0A9' , 8)
  .add('I045' , 3)
  .add('I07G' , 3)
  .add('I07O' , 3)
  .add('I07M' , 15)
  .add('I0CY' , 3)
  .add('I0D1' , 3)
  .add('I0CZ' , 3)
  .add('I0D3' , 3)
  .add('I0D0' , 3)
  .add('I0D2' , 3)
  .add("I0FI", 8.00);

new Chest("I0K8")
  .add('I0FF' , ( 0.20 * 0.80 ))
  .add('I0EZ' , ( 0.20 * 0.80 ))
  .add('I07F' , ( 1.50 * 0.80 ))
  .add('I0A9' , ( 8.00 * 0.80 ))
  .add('I045' , ( 3.00 * 0.80 ))
  .add('I07G' , ( 3.00 * 0.80 ))
  .add('I07O' , ( 3.00 * 0.80 ))
  .add('I07M' , ( 15.00 * 0.80 ))
  .add('I0CY' , ( 3.00 * 0.80 ))
  .add('I0D1' , ( 3.00 * 0.80 ))
  .add('I0CZ' , ( 3.00 * 0.80 ))
  .add('I0D3' , ( 3.00 * 0.80 ))
  .add('I0D0' , ( 3.00 * 0.80 ))
  .add('I0D2' , ( 3.00 * 0.80 ))
  .add("I0FI", 8.00 * 0.8);

new Chest("I086")
  .add('I080' , 1.5)
  .add('I0A9' , 8)
  .add('I082' , 3)
  .add('I081' , 3)
  .add('I087' , 15)
  .add('I0F9' , 0.2)
  .add('I0FD' , 0.2)
  .add('I0FL' , 0.2)
  .add('I0D7' , 3)
  .add('I0DB' , 1.5)
  .add('I0F1' , 0.2)
  .add('I0FA' , 0.2)
  .add('I0FM' , 0.2)
  .add("I0FI", 8.00);

new Chest("I0K6")
  .add('I080' , ( 1.50 * 0.80 ))
  .add('I0A9' , ( 8.00 * 0.80 ))
  .add('I082' , ( 3.00 * 0.80 ))
  .add('I081' , ( 3.00 * 0.80 ))
  .add('I087' , ( 15.00 * 0.80 ))
  .add('I0F9' , ( 0.20 * 0.80 ))
  .add('I0FD' , ( 0.20 * 0.80 ))
  .add('I0FL' , ( 0.20 * 0.80 ))
  .add('I0D7' , ( 3.00 * 0.80 ))
  .add('I0DB' , ( 1.50 * 0.80 ))
  .add('I0F1' , ( 0.20 * 0.80 ))
  .add('I0FA' , ( 0.20 * 0.80 ))
  .add('I0FM' , ( 0.20 * 0.80 ))
  .add("I0FI", 8.00 * 0.8);

  
new Chest("I0HA")
  .add('I0HT' , 2)
  .add('I0HB' , 2)
  .add('I0HC' , 2)
  .add('I0IX' , 8.5);

new Chest("I0FO")
  .add('I05W' , 2)
  .add('I05X' , 2)
  .add('I071' , 2)
  .add('I072' , 2);

new Chest("I0KA")
  .add('I06L' , 3)
  .add('I06Y' , 3);


new Chest("I0LV").add("I0EX", 0.3).add("I0FY");

new Chest("I0LW").add("I0EX", 0.45).add("I0FZ");

new Chest("I0LX").add("I0EX", 0.6).add("I0G0");

new Chest("I0LY").add("I0EX", 1).add("I0G1");

new Chest("I0LU")
  .add('I080' , ( 1.50 * 0.40 ))
  .add('I0A9' , ( 8.00 * 0.40 ))
  .add('I082' , ( 3.00 * 0.40 ))
  .add('I081' , ( 3.00 * 0.40 ))
  .add('I087' , ( 15.00 * 0.40 ))
  .add('I0F9' , ( 0.20 * 0.40 ))
  .add('I0FD' , ( 0.20 * 0.40 ))
  .add('I0FL' , ( 0.20 * 0.40 ))
  .add('I0D7' , ( 3.00 * 0.40 ))
  .add('I0DB' , ( 1.50 * 0.40 ))
  .add('I0F1' , ( 0.20 * 0.40 ))
  .add('I0FA' , ( 0.20 * 0.40 ))
  .add('I0FM' , ( 0.20 * 0.47 ))
  .add('I0FF' , ( 0.20 * 0.40 ))
  .add('I0EZ' , ( 0.20 * 0.40 ))
  .add('I07F' , ( 1.50 * 0.40 ))
  .add('I0A9' , ( 8.00 * 0.40 ))
  .add('I045' , ( 3.00 * 0.40 ))
  .add('I07G' , ( 3.00 * 0.40 ))
  .add('I07O' , ( 3.00 * 0.40 ))
  .add('I07M' , ( 15.00 * 0.40 ))
  .add('I0CY' , ( 3.00 * 0.40 ))
  .add('I0D1' , ( 3.00 * 0.40 ))
  .add('I0CZ' , ( 3.00 * 0.40 ))
  .add('I0D3' , ( 3.00 * 0.40 ))
  .add('I0D0' , ( 3.00 * 0.40 ))
  .add('I0D2' , ( 3.00 * 0.40 ))
  .add('I0F3' , ( 0.20 * 0.40 ))
  .add('I0FG' , ( 0.20 * 0.40 ))
  .add('I04C' , ( 1.50 * 0.40 ))
  .add('I0A9' , ( 8.00 * 0.40 ))
  .add('I04D' , ( 3.00 * 0.40 ))
  .add('I07C' , ( 3.00 * 0.40 ))
  .add('I077' , ( 15.00 * 0.40 ))
  .add('I0D8' , ( 3.00 * 0.40 ))
  .add('I0D6' , ( 3.00 * 0.40 ))
  .add('I0D9' , ( 1.50 * 0.40 ))
  .add('I0F2' , ( 0.20 * 0.40 ))
  .add('I0FE' , ( 0.20 * 0.40 ))
  .add("I0FI", 8.00 * 0.4);

new Chest("I0M7").add("I0DY", 3).add("I035", 6).add("I0DS", 6).add("I0FB", 4).add("I0LO", 4).add("I0AQ", 11).add("I0A6", 6).add("I0BU", 6);

new Chest("I0KY").add("I0KZ", 1).add("I0KX", 2.5).add("I0LE", 2.5);

new Chest("I0BV").add("I0K4", 2).add("I0K6", 2).add("I0K8", 2)

new Unit("n00G")
  .add("I021", 100)
  .add("I022", 100);

new Unit("n002")
  .add("I027", 30)
  .add("I00D", 100)
  .add("I023", 100);

new Unit("n00H")
  .add("I02C", 30)
  .add("I028", 100)
  .add("I029", 100);

new Unit("n010")
  .add("I02D", 30)
  .add("I02E", 30)
  .add("I02F", 30)
  .add("I02M", 100)
  .add("I02L", 100)
  .add("I02K", 100)
  .add("I02J", 100);

new Unit("n00B")
  .add("I02H", 8)
  .add("I02I", 8)
  .add("I02G", 8);

new Unit("n00D")
  .add("I02H", 8)
  .add("I02I", 8)
  .add("I02G", 8);

new Unit("n00C")
  .add("I02P", 100)
  .add("I02R", 100)
  .add("I02Q", 100);

new Unit("n00J")
  .add("I02T", 100)
  .add("I02N", 100);

new Unit("n00L")
  .add("I000", 30)
  .add("I001", 30)
  .add("I002", 30)
  .add("I02N", 100)
  .add("I02T", 100);

new Unit("n00M")
  .add("I006", 8)
  .add("I007", 8)
  .add("I008", 8);

new Unit("n009")
  .add("I003", 100)
  .add("I005", 100)
  .add("I004", 100);

new Unit("n00N")
  .add("I026", 8)
  .add("I00E", 8)
  .add("I00M", 8);

new Unit("n00P")
  .add("I00G", 8)
  .add("I00H", 8)
  .add("I00I", 8);

new Unit("n00Q")
  .add("I00C", 8)
  .add("I00N", 8)
  .add("I00O", 8);

new Unit("n00Y")
  .add("I00J", 100)
  .add("I00K", 100)
  .add("I00L", 100)
  .add("I011", 100)
  .add("I00Y", 100);

new Unit("n00Z")
  .add("I00Z", 30)
  .add("I010", 30)
  .add("I00X", 100)
  .add("I00Q", 100)
  .add("I00P", 100);

new Unit("n00V")
  .add("I013", 8)
  .add("I014", 8)
  .add("I015", 8);

new Unit("n00W")
  .add("I01F", 8)
  .add("I01H", 8)
  .add("I01G", 8);

new Unit("n006")
  .add("I01J", 100)
  .add("I01I", 100)
  .add("I01K", 100);

new Unit("n013")
  .add("I01C", 30)
  .add("I01D", 30)
  .add("I01E", 30)
  .add("I019", 100)
  .add("I01A", 100)
  .add("I01B", 100)
  .add("I01L", 100)
  .add("I01M", 100);

new Unit("n00R")
  .add("I01N", 8)
  .add("I01O", 8)
  .add("I01P", 8);

new Unit("n00S")
  .add("I01V", 8);

new Unit("n00T")
  .add("I01T", 8)
  .add("I01U", 8);

new Unit("n015")
  .add("I01Q", 100)
  .add("I01R", 100)
  .add("I01S", 100)
  .add("I02V", 100)
  .add("I02U", 100)
  .add("I01S", 100);

new Unit("n016")
  .add("I01Z", 30)
  .add("I020", 30)
  .add("I02S", 30)
  .add("I030", 30)
  .add("I01W", 100)
  .add("I01X", 100)
  .add("I01Y", 100);

new Unit("n03R")
  .add("I0FO", 100);

new Unit("n03S")
  .add("I0FO", 100)
  .add("I0FO", 100)
  .add("I0FO", 100)
  .add("I0FO", 100)
  .add("I0FO", 100)
  .add("I0FO", 100);

new Unit("n03T")
  .add("I05X", 100)
  .add("I05W", 100)
  .add("I071", 100)
  .add("I072", 100);

new Unit("n04M")
  .add("I0KA", 100);

new Unit("n04N")
  .add("I0KA", 100)
  .add("I0KA", 100)
  .add("I0KA", 100)
  .add("I0KA", 100)
  .add("I0KA", 100)
  .add("I0KA", 100);

new Unit("n04O")
  .add("I06L", 100)
  .add("I06Y", 100);

//정수



// 스몰




new Unit("n04C").add("I0JS");

new Unit("n04D").add("I0JT");

new Unit("n04E").add("I0JU");

new Unit("n00X").add("I00F", 30);

new Unit("n019")
  .add("I02X", 25)
  .add("I02W", 25)
  .add("I02Y", 25)
  .add("I02Z", 25)
  .add("I031", 25);

new Unit("n01X")
  .add("I05R", 30)
  .add("I05S", 30)
  .add("I03N", 30)
  .add("I05T", 30)
  .add("I02Y", 30);

new Unit("n02B")
  .add("I03E", 20)
  .add("I03Y", 20)  
  .add("I05U", 20);

new Unit("n02C")
  .add("I03K", 20)
  .add("I043", 20)  
  .add("I04W", 20);

new Unit("n02D")
  .add("I04M", 20)
  .add("I05V", 20)  
  .add("I040", 20);

new Unit("n022").add("I05W");

new Unit("n023").add("I05X");

new Unit("n024").add("I06L");

new Unit("n02A").add("I06Y");

new Unit("e02J").add("I072");

new Unit("n00E").add("I071");

new Unit("n003").add("I076").add("I0LR");

new Unit("n01Y").add("I07L").add("I0LQ");

new Unit("e05T").add("I086").add("I0LS");

new Unit("n027").add("I0AB").add("I0AD").add("I0M5");

new Unit("n02Y").add("I037").add("I036").add("I0M6");

new Unit("n03Z").add("I0HA").add("I0IY");

new Unit("n04Q").add("I0KY").add("I0IY");

new Unit("n04I").add("I0K4").add("I0LR");

new Unit("e0DF").add("I0K6").add("I0LS");

new Unit("n04K").add("I0K8").add("I0LQ");

new Unit("n051").add("I0KJ").add("I036").add("I0M6");

new Unit("n059").add("I0KL").add("I0AD").add("I0M5");

new Unit("e0D8").add("I0M7");

new Unit("n04B").add("I0JR");

new Unit("n05B").add("I0BV");

new Unit("n05C").addMany("I0BV", 6);
