module.exports.craftings = [];

class Craft {
  constructor(id, chance) {
    this.id = id;
    this.chance = chance || 100;
    this.items = [];
    module.exports.craftings.push(this);
  }
  
  add(arr) {
    this.items = this.items.concat(arr);
  }
  
}

new Craft('I0A7', 100.0).add(["I05Y"]);


new Craft('I0A7', 100.0).add(["I034"]);


new Craft('I0A7', 100.0).add(["I065"]);


new Craft('I0A7', 100.0).add(["I06A"]);


new Craft('I0A7', 100.0).add(["I05Y"]);


new Craft('I0A7', 100.0).add(["I034"]);


new Craft('I0A7', 100.0).add(["I065"]);


new Craft('I0A7', 100.0).add(["I06A"]);


new Craft('I0A8', 100.0).add(["I06Z"]);


new Craft('I0A8', 100.0).add(["I06I"]);


new Craft('I0A8', 100.0).add(["I06Z"]);


new Craft('I0A8', 100.0).add(["I06I"]);


new Craft('I0A9', 100.0).add(["I04H"]);


new Craft('I0A9', 100.0).add(["I033"]);


new Craft('I0A9', 100.0).add(["I04H"]);


new Craft('I0A9', 100.0).add(["I033"]);


new Craft('I0EG', 100.0).add(["I0A3", "I0LI", "I0DY", "I0FB", "I0A9", "I0A9", "I0AC"]);


new Craft('I0EH', 100.0).add(["I09Z", "I0LI", "I0DY", "I0AC", "I0A9", "I0A9", "I0FB"]);


new Craft('I0EI', 100.0).add(["I0A2", "I0LI", "I0DY", "I0AC", "I0A9", "I0A9", "I0FB"]);


new Craft('I0EJ', 100.0).add(["I0A1", "I0LI", "I0DY", "I0AC", "I0A9", "I0A9", "I0FB"]);


new Craft('I0EK', 100.0).add(["I0A0", "I0LI", "I0DY", "I0AC", "I0A9", "I0A9", "I0FB"]);


new Craft('I0EL', 100.0).add(["I0D3", "I0LI", "I0DY", "I0AC", "I0A9", "I0A9", "I0FB"]);


new Craft('I07P', 100.0).add(["I03Z", "I03Y"]);


new Craft('I0BV', 100.0).add(["I05U", "I0A7"]);


new Craft('I03Q', 100.0).add(["I03Y", "I03E", "I0A7"]);


new Craft('I060', 100.0).add(["I05U", "I03E", "I0A7"]);


new Craft('I078', 100.0).add(["I064", "I0A7", "I05U"]);


new Craft('I07S', 100.0).add(["I07P", "I0A7", "I0A8"]);


new Craft('I0BW', 100.0).add(["I0BV", "I0A7", "I0A7"]);


new Craft('I07U', 100.0).add(["I061", "I0A7", "I0A8"]);


new Craft('I07V', 100.0).add(["I063", "I0A7", "I0A8"]);


new Craft('I07W', 100.0).add(["I064", "I0A7", "I0A8"]);


new Craft('I06D', 100.0).add(["I067", "I03Y", "I0A8", "I0A7"]);


new Craft('I06C', 100.0).add(["I067", "I03E", "I0A8", "I0A7"]);


new Craft('I06E', 100.0).add(["I067", "I05U", "I0A8", "I0A7"]);


new Craft('I06M', 100.0).add(["I03Q", "I0A7", "I0A8"]);


new Craft('I06N', 100.0).add(["I060", "I0A8", "I0A7"]);


new Craft('I07A', 100.0).add(["I078", "I0A7", "I0A8"]);


new Craft('I06K', 100.0).add(["I066", "I0A7", "I0A8", "I0A8"]);


new Craft('I06P', 100.0).add(["I03A", "I0A7", "I0A8"]);


new Craft('I06Q', 100.0).add(["I03D", "I0A7", "I0A8"]);


new Craft('I06O', 100.0).add(["I03Z", "I0A7", "I0A8"]);


new Craft('I074', 100.0).add(["I06D", "I06O", "I0A8", "I0A8", "I0A7"]);


new Craft('I0CD', 100.0).add(["I06C", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I075', 100.0).add(["I06Q", "I06E", "I0A7", "I0A7", "I0A8"]);


new Craft('I073', 100.0).add(["I06P", "I03A", "I0A8", "I0A8", "I0A7"]);


new Craft('I07T', 100.0).add(["I0A8", "I0A8", "I0A7", "I0A7", "I07S"]);


new Craft('I0BX', 100.0).add(["I0BW", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0BZ', 100.0).add(["I06X", "I0A8", "I0A7"]);


new Craft('I07B', 100.0).add(["I06Q", "I07A", "I0A8", "I0A8", "I0A7"]);


new Craft('I07D', 100.0).add(["I06M", "I06P", "I0A8", "I0A8", "I0A7"]);


new Craft('I07E', 100.0).add(["I06N", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I085', 100.0).add(["I07W", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I083', 100.0).add(["I07V", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I084', 100.0).add(["I07U", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I07Y', 100.0).add(["I06K", "I0A9", "I0A9", "I0A9"]);


new Craft('I07Z', 100.0).add(["I07T", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BY', 100.0).add(["I0BX", "I0A9", "I0A9", "I0A9"]);


new Craft('I0C0', 100.0).add(["I0BZ", "I0A9", "I0A9", "I0A9"]);


new Craft('I08R', 100.0).add(["I073", "I0A9", "I0A9", "I0A9"]);


new Craft('I08S', 100.0).add(["I07B", "I0A9", "I0A9", "I0A9"]);


new Craft('I08T', 100.0).add(["I07C", "I0A9", "I0A9", "I0A9"]);


new Craft('I08V', 100.0).add(["I074", "I0A9", "I0A9", "I0A9"]);


new Craft('I0CE', 100.0).add(["I0CD", "I0A9", "I0A9", "I0A9"]);


new Craft('I08W', 100.0).add(["I07O", "I0A9", "I0A9", "I0A9"]);


new Craft('I08Y', 100.0).add(["I07D", "I0A9", "I0A9", "I0A9"]);


new Craft('I095', 100.0).add(["I07E", "I0A9", "I0A9", "I0A9"]);


new Craft('I094', 100.0).add(["I075", "I0A9", "I0A9", "I0A9"]);


new Craft('I09T', 100.0).add(["I084", "I0A9", "I0A9", "I0A9"]);


new Craft('I09U', 100.0).add(["I083", "I0A9", "I0A9", "I0A9"]);


new Craft('I09V', 100.0).add(["I085", "I0A9", "I0A9", "I0A9"]);


new Craft('I047', 100.0).add(["I0D7", "I0A9", "I0A9", "I0A9"]);


new Craft('I04F', 100.0).add(["I0D8", "I0A9", "I0A9", "I0A9"]);


new Craft('I039', 100.0).add(["I0D6", "I0A9", "I0A9", "I0A9"]);


new Craft('I089', 100.0).add(["I040", "I0A7"]);


new Craft('I08J', 100.0).add(["I04M", "I04M", "I0A7", "I0A7"]);


new Craft('I08I', 100.0).add(["I05V", "I05V", "I0A7", "I0A7"]);


new Craft('I08K', 100.0).add(["I040", "I040", "I0A7", "I0A7"]);


new Craft('I06B', 100.0).add(["I062", "I0A7", "I0A7"]);


new Craft('I08A', 100.0).add(["I089", "I0A7", "I0A7"]);


new Craft('I06R', 100.0).add(["I041", "I0A7", "I0A8"]);


new Craft('I06S', 100.0).add(["I03I", "I0A7", "I0A8"]);


new Craft('I08M', 100.0).add(["I08J", "I0A7", "I0A8"]);


new Craft('I08L', 100.0).add(["I08I", "I0A8", "I0A8"]);


new Craft('I08N', 100.0).add(["I08K", "I0A8", "I0A8"]);


new Craft('I03H', 100.0).add(["I06R", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I042', 100.0).add(["I06S", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0G8', 100.0).add(["I08A", "I0A8", "I0A8"]);


new Craft('I07N', 100.0).add(["I03I", "I0A8", "I0A8"]);


new Craft('I0B8', 100.0).add(["I06T", "I0A8", "I0A8", "I03J"]);


new Craft('I0B7', 100.0).add(["I051", "I0A8", "I0A8", "I041"]);


new Craft('I0B9', 100.0).add(["I0B6", "I0A8", "I0A8", "I03I"]);


new Craft('I0BJ', 100.0).add(["I06B", "I0A8", "I0A8"]);


new Craft('I08O', 100.0).add(["I08L", "I0A8", "I0A8"]);


new Craft('I08P', 100.0).add(["I08M", "I0A8", "I0A8"]);


new Craft('I08Q', 100.0).add(["I08N", "I0A8", "I0A8"]);


new Craft('I0BL', 100.0).add(["I03H", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BM', 100.0).add(["I042", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BN', 100.0).add(["I082", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BO', 100.0).add(["I07N", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BK', 100.0).add(["I0BJ", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BA', 100.0).add(["I0B8", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BB', 100.0).add(["I0B7", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BC', 100.0).add(["I0B9", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BH', 100.0).add(["I08O", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BI', 100.0).add(["I08P", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BG', 100.0).add(["I08Q", "I0A9", "I0A9", "I0A9"]);


new Craft('I0G9', 100.0).add(["I0G8", "I0A9", "I0A9", "I0A9"]);


new Craft('I0E3', 100.0).add(["I0DF", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E2', 100.0).add(["I0DE", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E4', 100.0).add(["I0DD", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0DZ', 100.0).add(["I0DM", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E0', 100.0).add(["I0DK", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E1', 100.0).add(["I0DJ", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E7', 100.0).add(["I0DG", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E8', 100.0).add(["I0DH", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E9', 100.0).add(["I0DI", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E6', 100.0).add(["I0DL", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0E5', 100.0).add(["I0DC", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0GB', 100.0).add(["I0GA", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I03L', 100.0).add(["I0A7", "I0A7", "I03K"]);


new Craft('I044', 100.0).add(["I0A7", "I0A7", "I043"]);


new Craft('I0GM', 100.0).add(["I043", "I0A7", "I0A7"]);


new Craft('I04X', 100.0).add(["I03M", "I0A7", "I0A8"]);


new Craft('I06W', 100.0).add(["I044", "I0A7", "I0A8"]);


new Craft('I06U', 100.0).add(["I03L", "I0A7", "I0A8"]);


new Craft('I0GN', 100.0).add(["I0GM", "I0A7", "I0A8"]);


new Craft('I07J', 100.0).add(["I06W", "I0A9", "I0A8", "I0A7"]);


new Craft('I07J', 100.0).add(["I06W", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0IF', 100.0).add(["I04X", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I08B', 100.0).add(["I06U", "I0A9", "I0A8", "I0A7"]);


new Craft('I08B', 100.0).add(["I06U", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I08C', 100.0).add(["I06W", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0GO', 100.0).add(["I0GN", "I0A8", "I0A8", "I0A7"]);


new Craft('I08F', 100.0).add(["I07J", "I0A9", "I0A9", "I0A9", "I043"]);


new Craft('I08E', 100.0).add(["I08C", "I0A9", "I0A9", "I0A9", "I03K"]);


new Craft('I0GP', 100.0).add(["I0GO", "I0A9", "I0A9", "I0A9"]);


new Craft('I08D', 100.0).add(["I08B", "I0A9", "I0A9", "I0A9", "I043"]);


new Craft('I0IG', 100.0).add(["I0IF", "I0A9", "I0A9", "I0A9"]);


new Craft('I0I9', 100.0).add(["I081", "I0A9", "I0A9", "I0A9"]);


new Craft('I0CK', 100.0).add(["I0A9", "I0A9", "I0A9", "I07G"]);


new Craft('I0CL', 100.0).add(["I0A9", "I0A9", "I0A9", "I045"]);


new Craft('I0EE', 100.0).add(["I0DN", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0EC', 100.0).add(["I0DP", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0EB', 100.0).add(["I0DR", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0ED', 100.0).add(["I0DO", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0EF', 100.0).add(["I0DQ", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0GR', 100.0).add(["I0GQ", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0IK', 100.0).add(["I0IJ", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0II', 100.0).add(["I0IH", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I03S', 100.0).add(["I069", "I0A7", "I0A8"]);


new Craft('I04S', 100.0).add(["I04Y", "I0A7", "I0A8"]);


new Craft('I04R', 100.0).add(["I046", "I0A7", "I0A8"]);


new Craft('I03R', 100.0).add(["I04R", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I07I', 100.0).add(["I04S", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I07H', 100.0).add(["I03S", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0CJ', 100.0).add(["I06G", "I0A8", "I0A8", "I0A7"]);


new Craft('I08X', 100.0).add(["I04D", "I06V"]);


new Craft('I0CV', 100.0).add(["I0CJ", "I0A9", "I0A9"]);


new Craft('I0CX', 100.0).add(["I03R", "I0A9", "I0A9"]);


new Craft('I0CT', 100.0).add(["I07H", "I0A9", "I0A9"]);


new Craft('I0CU', 100.0).add(["I07I", "I0A9", "I0A9"]);


new Craft('I0IM', 100.0).add(["I0IL", "I0A9", "I0A9"]);


new Craft('I0CW', 100.0).add(["I08X", "I0A9", "I0A9"]);


new Craft('I0EQ', 100.0).add(["I04T", "I0LH", "I0A9", "I0A9", "I0DY", "I0FB", "I0AC"]);


new Craft('I0IO', 100.0).add(["I0IN", "I0LH", "I0A9", "I0A9", "I0DY", "I0FB", "I0AC"]);


new Craft('I0EP', 100.0).add(["I0DX", "I0LH", "I0A9", "I0A9", "I0DY", "I0FB", "I0AC"]);


new Craft('I0EM', 100.0).add(["I04G", "I0LH", "I0A9", "I0A9", "I0DY", "I0FB", "I0AC"]);


new Craft('I0EO', 100.0).add(["I0DW", "I0LH", "I0A9", "I0A9", "I0DY", "I0FB", "I0AC"]);


new Craft('I0EN', 100.0).add(["I038", "I0LH", "I0A9", "I0A9", "I0DY", "I0FB", "I0AC"]);


new Craft('I03B', 100.0).add(["I0A7", "I0A7", "I04W"]);


new Craft('I06H', 100.0).add(["I068", "I0A7", "I0A8"]);


new Craft('I04Q', 100.0).add(["I03B", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I079', 100.0).add(["I03P", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I088', 100.0).add(["I06H", "I0A9", "I0A8", "I04W"]);


new Craft('I088', 100.0).add(["I06H", "I0A8", "I0A8", "I06A", "I04W"]);


new Craft('I08G', 100.0).add(["I088", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I08H', 100.0).add(["I04Q", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I08U', 100.0).add(["I04E", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I0BE', 100.0).add(["I0BD", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BF', 100.0).add(["I079", "I0A9", "I0A9", "I0A9"]);


new Craft('I0GK', 100.0).add(["I0BQ", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0GL', 100.0).add(["I0BT", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0GI', 100.0).add(["I0BP", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0GJ', 100.0).add(["I0BR", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0IA', 100.0).add(["I0BS", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0ID', 100.0).add(["I0IC", "I0LH", "I0DY", "I0A9", "I0A9", "I0FB", "I0AC"]);


new Craft('I0CG', 100.0).add(["I0CF", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0G5', 100.0).add(["I0G4", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0C6', 100.0).add(["I0C5", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0CA', 100.0).add(["I0C9", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I096', 100.0).add(["I093", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I09E', 100.0).add(["I09D", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I090', 100.0).add(["I08Z", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0AE', 100.0).add(["I0A4", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0AH', 100.0).add(["I09W", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0AK', 100.0).add(["I09Y", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0AN', 100.0).add(["I09X", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I09A', 100.0).add(["I099", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I09Q', 100.0).add(["I09P", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I09M', 100.0).add(["I09L", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I09I', 100.0).add(["I09H", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0AR', 100.0).add(["I0A5", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0AT', 100.0).add(["I0AS", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0IQ', 100.0).add(["I0IP", "I0LG", "I0FB", "I0AQ", "I0AC"]);


new Craft('I0CH', 100.0).add(["I0CG", "I0CF", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0G6', 100.0).add(["I0G5", "I0G4", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0CB', 100.0).add(["I0CA", "I0C9", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0AI', 100.0).add(["I0AH", "I09W", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09F', 100.0).add(["I09E", "I09D", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I097', 100.0).add(["I096", "I093", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I091', 100.0).add(["I090", "I08Z", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0C1', 100.0).add(["I0AT", "I0AS", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0AF', 100.0).add(["I0AE", "I0A4", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0AL', 100.0).add(["I0AK", "I09Y", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0AO', 100.0).add(["I0AN", "I09X", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0C7', 100.0).add(["I0C6", "I0C5", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09B', 100.0).add(["I09A", "I099", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09R', 100.0).add(["I09Q", "I09P", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09N', 100.0).add(["I09M", "I09L", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09J', 100.0).add(["I09I", "I09H", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0C3', 100.0).add(["I0AR", "I0A5", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0IR', 100.0).add(["I0IQ", "I0IP", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0CI', 100.0).add(["I0CH", "I0CF", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0G7', 100.0).add(["I0G6", "I0G4", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0CC', 100.0).add(["I0CB", "I0C9", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0AJ', 100.0).add(["I0AI", "I09W", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09G', 20.0).add(["I09F", "I09D", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I098', 100.0).add(["I097", "I093", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I092', 100.0).add(["I091", "I08Z", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0AG', 100.0).add(["I0AF", "I0A4", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0AM', 100.0).add(["I0AL", "I09Y", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0AP', 100.0).add(["I0AO", "I09X", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09C', 100.0).add(["I09B", "I099", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09S', 100.0).add(["I09R", "I09P", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09O', 100.0).add(["I09N", "I09L", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I09K', 100.0).add(["I09J", "I09H", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0C2', 100.0).add(["I0C1", "I0AS", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0C4', 100.0).add(["I0C3", "I0A5", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0C8', 100.0).add(["I0C7", "I0C5", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0IS', 100.0).add(["I0IR", "I0IP", "I0FB", "I0FB", "I0FB", "I0AQ", "I0AQ", "I0AQ", "I0AC", "I0AC"]);


new Craft('I0C9', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0IP', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09D', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I093', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I08Z', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A4', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0AS', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09W', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09Y', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09X', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I099', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09P', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0C5', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09L', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09H', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A5', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0CF', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0G4', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BP', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BR', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BQ', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BS', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0BT', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0IC', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A3', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I09Z', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A2', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A1', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0A0', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I03C', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0AC', 100.0).add(["I04Z", "I04Z", "I04Z", "I04Z", "I04Z"]);


new Craft('I0DY', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DR', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DP', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DO', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DN', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0GQ', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DQ', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0IJ', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0IH', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DM', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DK', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DJ', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DE', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DF', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DD', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0GA', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DC', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DL', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DG', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DH', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DI', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I04G', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I038', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DW', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0DX', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0IN', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I04T', 100.0).add(["I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT", "I0DT"]);


new Craft('I0HK', 100.0).add(["I0HT", "I0HB", "I0HC", "I0AM"]);


new Craft('I0HE', 100.0).add(["I0HT", "I0HB", "I0HC", "I0CC"]);


new Craft('I0HP', 100.0).add(["I0HT", "I0HB", "I0HC", "I0C4"]);


new Craft('I0HD', 100.0).add(["I0HT", "I0HB", "I0HC", "I098"]);


new Craft('I0HG', 100.0).add(["I0HT", "I0HB", "I0HC", "I092"]);


new Craft('I0I2', 100.0).add(["I0HT", "I0HB", "I0HC", "I0G7"]);


new Craft('I0HH', 100.0).add(["I0HT", "I0HB", "I0HC", "I0AG"]);


new Craft('I0G3', 100.0).add(["I0HT", "I0HB", "I0HC", "I0AP"]);


new Craft('I0HJ', 100.0).add(["I0HT", "I0HB", "I0HC", "I0AJ"]);


new Craft('I0GC', 100.0).add(["I0HT", "I0HB", "I0HC", "I09C"]);


new Craft('I0HN', 100.0).add(["I0HT", "I0HB", "I0HC", "I09O"]);


new Craft('I0GD', 100.0).add(["I0HT", "I0HB", "I0HC", "I0CI"]);


new Craft('I0HL', 100.0).add(["I0HT", "I0HB", "I0HC", "I09S"]);


new Craft('I0HF', 100.0).add(["I0HT", "I0HB", "I0HC", "I09G"]);


new Craft('I0HM', 100.0).add(["I0HT", "I0HB", "I0HC", "I0C8"]);


new Craft('I0HO', 100.0).add(["I0HT", "I0HB", "I0HC", "I09K"]);


new Craft('I0HI', 100.0).add(["I0HT", "I0HB", "I0HC", "I0C2"]);


new Craft('I0HV', 100.0).add(["I0HT", "I0HB", "I0HC", "I0GI"]);


new Craft('I0IE', 100.0).add(["I0HT", "I0HB", "I0HC", "I0ID"]);


new Craft('I0HX', 100.0).add(["I0HT", "I0HB", "I0HC", "I0GK"]);


new Craft('I0HW', 100.0).add(["I0HT", "I0HB", "I0HC", "I0GJ"]);


new Craft('I0HU', 100.0).add(["I0HT", "I0HB", "I0HC", "I0GL"]);


new Craft('I0IB', 100.0).add(["I0HT", "I0HB", "I0HC", "I0IA"]);


new Craft('I0I3', 100.0).add(["I0HT", "I0HB", "I0HC", "I0EG"]);


new Craft('I0I4', 100.0).add(["I0HT", "I0HB", "I0HC", "I0EH"]);


new Craft('I0I5', 100.0).add(["I0HT", "I0HB", "I0HC", "I0EI"]);


new Craft('I0I7', 100.0).add(["I0HT", "I0HB", "I0HC", "I0EJ"]);


new Craft('I0I6', 100.0).add(["I0HT", "I0HB", "I0HC", "I0EK"]);


new Craft('I0I8', 100.0).add(["I0HT", "I0HB", "I0HC", "I0EL"]);

