module.exports.craftings = [];

class Craft {
  constructor(id, chance, qty) {
    this.id = id;
    this.chance = chance || 100;
    this.qty = qty || 1;
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


new Craft('I0A8', 100.0).add(["I06Z"]);


new Craft('I0A8', 100.0).add(["I06I"]);


new Craft('I0A9', 100.0).add(["I04H"]);


new Craft('I0A9', 100.0).add(["I033"]);


new Craft('I0A9', 100.0).add(["I07K"]);


new Craft('I0A9', 100.0).add(["I07X"]);


new Craft('I0A9', 100.0).add(["I0CR"]);


new Craft('I0A9', 100.0, 2).add(["I0EA"]);


new Craft('I0EG', 100.0).add(["I0A3", "I0LI", "I00R", "I00V", "I0A9", "I0A9"]);


new Craft('I0EH', 100.0).add(["I09Z", "I0LI", "I00R", "I00V", "I0A9", "I0A9"]);


new Craft('I0EI', 100.0).add(["I0A2", "I0LI", "I00R", "I00V", "I0A9", "I0A9"]);


new Craft('I0EJ', 100.0).add(["I0A1", "I0LI", "I00R", "I00V", "I0A9", "I0A9"]);


new Craft('I0EK', 100.0).add(["I0A0", "I0LI", "I00R", "I00V", "I0A9", "I0A9"]);


new Craft('I0EL', 100.0).add(["I03C", "I0LI", "I00R", "I00V", "I0A9", "I0A9"]);


new Craft('I07P', 100.0).add(["I03Z", "I03Y"]);


new Craft('I0BV', 100.0).add(["I05U", "I0A7"]);


new Craft('I03Q', 100.0).add(["I03Y", "I03E", "I0A7"]);


new Craft('I060', 100.0).add(["I05U", "I03E", "I0A7"]);


new Craft('I078', 100.0).add(["I064", "I0A7", "I05U"]);


new Craft('I07S', 100.0).add(["I07P", "I0A7", "I0A8"]);


new Craft('I0BW', 100.0).add(["I0OU", "I0A7", "I0A7"]);


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


new Craft('I03H', 100.0).add(["I06R", "I0A8", "I0A7", "I0A7"]);


new Craft('I042', 100.0).add(["I06S", "I0A8", "I0A7", "I0A7"]);


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


new Craft('I0E3', 100.0).add(["I0DF", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E2', 100.0).add(["I0DE", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E4', 100.0).add(["I0DD", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0DZ', 100.0).add(["I0DM", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E0', 100.0).add(["I0DK", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E1', 100.0).add(["I0DJ", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E7', 100.0).add(["I0DG", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E8', 100.0).add(["I0DH", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E9', 100.0).add(["I0DI", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E6', 100.0).add(["I0DL", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0E5', 100.0).add(["I0DC", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0GB', 100.0).add(["I0GA", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I03L', 100.0).add(["I0A7", "I0A7", "I03K"]);


new Craft('I044', 100.0).add(["I0A7", "I0A7", "I043"]);


new Craft('I0GM', 100.0).add(["I043", "I0A7", "I0A7"]);


new Craft('I04X', 100.0).add(["I03M", "I0A7", "I0A8"]);


new Craft('I06W', 100.0).add(["I044", "I0A7", "I0A8"]);


new Craft('I06U', 100.0).add(["I03L", "I0A7", "I0A8"]);


new Craft('I0GN', 100.0).add(["I0GM", "I0A7", "I0A8"]);


new Craft('I07J', 100.0).add(["I06W", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I0IF', 100.0).add(["I04X", "I0A8", "I0A8", "I0A7", "I0A7"]);


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


new Craft('I0EE', 100.0).add(["I0DN", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0EC', 100.0).add(["I0DP", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0EB', 100.0).add(["I0DR", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0ED', 100.0).add(["I0DO", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0EF', 100.0).add(["I0DQ", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0GR', 100.0).add(["I0GQ", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0IK', 100.0).add(["I0IJ", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0II', 100.0).add(["I0IH", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


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


new Craft('I0EQ', 100.0).add(["I04T", "I0LH", "I0A9", "I0A9", "I00R", "I00V"]);


new Craft('I0IO', 100.0).add(["I0IN", "I0LH", "I0A9", "I0A9", "I00R", "I00V"]);


new Craft('I0EP', 100.0).add(["I0DX", "I0LH", "I0A9", "I0A9", "I00R", "I00V"]);


new Craft('I0EM', 100.0).add(["I04G", "I0LH", "I0A9", "I0A9", "I00R", "I00V"]);


new Craft('I0EO', 100.0).add(["I0DW", "I0LH", "I0A9", "I0A9", "I00R", "I00V"]);


new Craft('I0EN', 100.0).add(["I038", "I0LH", "I0A9", "I0A9", "I00R", "I00V"]);


new Craft('I03B', 100.0).add(["I0A7", "I0A7", "I04W"]);


new Craft('I06H', 100.0).add(["I068", "I0A7", "I0A8"]);


new Craft('I04Q', 100.0).add(["I03B", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I079', 100.0).add(["I03P", "I0A8", "I0A8", "I0A7", "I0A7"]);


new Craft('I088', 100.0).add(["I06H", "I0A9", "I0A8", "I04W"]);


new Craft('I08G', 100.0).add(["I088", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I08H', 100.0).add(["I04Q", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I08U', 100.0).add(["I04E", "I0A9", "I0A9", "I0A9", "I04W"]);


new Craft('I0BE', 100.0).add(["I0BD", "I0A9", "I0A9", "I0A9"]);


new Craft('I0BF', 100.0).add(["I079", "I0A9", "I0A9", "I0A9"]);


new Craft('I0GK', 100.0).add(["I0BQ", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0GL', 100.0).add(["I0BT", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0GI', 100.0).add(["I0BP", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0GJ', 100.0).add(["I0BR", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0IA', 100.0).add(["I0BS", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0ID', 100.0).add(["I0IC", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0OU', 100.0).add(["I05U", "I0A7"]);


new Craft('I0NP', 100.0).add(["I0NO", "I0LH", "I00R", "I0A9", "I0A9", "I00V"]);


new Craft('I0NT', 100.0).add(["I0NS", "I0LH", "I0A9", "I0A9", "I00R", "I00V"]);


new Craft('I0CG', 100.0).add(["I0CF", "I0LG", "I00V"]);


new Craft('I0G5', 100.0).add(["I0G4", "I0LG", "I00V"]);


new Craft('I0C6', 100.0).add(["I0C5", "I0LG", "I00V"]);


new Craft('I0CA', 100.0).add(["I0C9", "I0LG", "I00V"]);


new Craft('I096', 100.0).add(["I093", "I0LG", "I00V"]);


new Craft('I09E', 100.0).add(["I09D", "I0LG", "I00V"]);


new Craft('I090', 100.0).add(["I08Z", "I0LG", "I00V"]);


new Craft('I0AE', 100.0).add(["I0A4", "I0LG", "I00V"]);


new Craft('I0AH', 100.0).add(["I09W", "I0LG", "I00V"]);


new Craft('I0AK', 100.0).add(["I09Y", "I0LG", "I00V"]);


new Craft('I0AN', 100.0).add(["I09X", "I0LG", "I00V"]);


new Craft('I09A', 100.0).add(["I099", "I0LG", "I00V"]);


new Craft('I09Q', 100.0).add(["I09P", "I0LG", "I00V"]);


new Craft('I09M', 100.0).add(["I09L", "I0LG", "I00V"]);


new Craft('I09I', 100.0).add(["I09H", "I0LG", "I00V"]);


new Craft('I0AR', 100.0).add(["I0A5", "I0LG", "I00V"]);


new Craft('I0NX', 100.0).add(["I0NW", "I0LG", "I00V"]);


new Craft('I0IQ', 100.0).add(["I0IP", "I0LG", "I00V"]);


new Craft('I0O3', 100.0).add(["I0O2", "I0LG", "I00V"]);


new Craft('I0PG', 100.0).add(["I0PF", "I0LG", "I00V"]);


new Craft('I0PN', 100.0).add(["I0PM", "I0LG", "I00V"]);


new Craft('I0CH', 100.0).add(["I0CG", "I00V", "I00V"]);


new Craft('I0G6', 100.0).add(["I0G5", "I00V", "I00V"]);


new Craft('I0CB', 100.0).add(["I0CA", "I00V", "I00V"]);


new Craft('I0AI', 100.0).add(["I0AH", "I00V", "I00V"]);


new Craft('I09F', 100.0).add(["I09E", "I00V", "I00V"]);


new Craft('I097', 100.0).add(["I096", "I00V", "I00V"]);


new Craft('I091', 100.0).add(["I090", "I00V", "I00V"]);


new Craft('I0AF', 100.0).add(["I0AE", "I00V", "I00V"]);


new Craft('I0AL', 100.0).add(["I0AK", "I00V", "I00V"]);


new Craft('I0AO', 100.0).add(["I0AN", "I00V", "I00V"]);


new Craft('I0C7', 100.0).add(["I0C6", "I00V", "I00V"]);


new Craft('I09B', 100.0).add(["I09A", "I00V", "I00V"]);


new Craft('I09R', 100.0).add(["I09Q", "I00V", "I00V"]);


new Craft('I09N', 100.0).add(["I09M", "I00V", "I00V"]);


new Craft('I09J', 100.0).add(["I09I", "I00V", "I00V"]);


new Craft('I0C3', 100.0).add(["I0AR", "I00V", "I00V"]);


new Craft('I0IR', 100.0).add(["I0IQ", "I00V", "I00V"]);


new Craft('I0NY', 100.0).add(["I0NX", "I00V", "I00V"]);


new Craft('I0O4', 100.0).add(["I0O3", "I00V", "I00V"]);


new Craft('I0PH', 100.0).add(["I0PG", "I00V", "I00V"]);


new Craft('I0PO', 100.0).add(["I0PN", "I00V", "I00V"]);


new Craft('I0CI', 100.0).add(["I0CH", "I00V", "I00V", "I00V"]);


new Craft('I0G7', 100.0).add(["I0G6", "I00V", "I00V", "I00V"]);


new Craft('I0CC', 100.0).add(["I0CB", "I00V", "I00V", "I00V"]);


new Craft('I0AJ', 100.0).add(["I0AI", "I00V", "I00V", "I00V"]);


new Craft('I09G', 100.0).add(["I09F", "I00V", "I00V", "I00V"]);


new Craft('I098', 100.0).add(["I097", "I00V", "I00V", "I00V"]);


new Craft('I092', 100.0).add(["I091", "I00V", "I00V", "I00V"]);


new Craft('I0AG', 100.0).add(["I0AF", "I00V", "I00V", "I00V"]);


new Craft('I0AM', 100.0).add(["I0AL", "I00V", "I00V", "I00V"]);


new Craft('I0AP', 100.0).add(["I0AO", "I00V", "I00V", "I00V"]);


new Craft('I09C', 100.0).add(["I09B", "I00V", "I00V", "I00V"]);


new Craft('I09S', 100.0).add(["I09R", "I00V", "I00V", "I00V"]);


new Craft('I09O', 100.0).add(["I09N", "I00V", "I00V", "I00V"]);


new Craft('I09K', 100.0).add(["I09J", "I00V", "I00V", "I00V"]);


new Craft('I0C4', 100.0).add(["I0C3", "I00V", "I00V", "I00V"]);


new Craft('I0C8', 100.0).add(["I0C7", "I00V", "I00V", "I00V"]);


new Craft('I0IS', 100.0).add(["I0IR", "I00V", "I00V", "I00V"]);


new Craft('I0NZ', 100.0).add(["I0NY", "I00V", "I00V", "I00V"]);


new Craft('I0O5', 100.0).add(["I0O4", "I00V", "I00V", "I00V"]);


new Craft('I0PI', 100.0).add(["I0PH", "I00V", "I00V", "I00V"]);


new Craft('I0PP', 100.0).add(["I0PO", "I00V", "I00V", "I00V"]);


new Craft('I04B', 100.0).add(["I0KZ"]);


new Craft('I04I', 100.0).add(["I0HT", "I0HT"]);


new Craft('I04I', 100.0).add(["I0HB", "I0HB"]);


new Craft('I04I', 100.0).add(["I0HC", "I0HC"]);


new Craft('I0HK', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HE', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HP', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HD', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HG', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0I2', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HH', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0G3', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HJ', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0GC', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HN', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0GD', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HL', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HF', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0O0', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0O7', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0PQ', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HM', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0HO', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I04N', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0PJ', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LK"]);


new Craft('I0IE', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0HX', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0HW', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0HU', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0IB', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LL"]);


new Craft('I0I3', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I4', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I5', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I7', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I6', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0I8', 100.0).add(["I0HT", "I0HB", "I0HC", "I0LM"]);


new Craft('I0M4', 100.0).add(["I0HK", "I04B", "I04I"]);


new Craft('I0M8', 100.0).add(["I0HE", "I04B", "I04I"]);


new Craft('I0M9', 100.0).add(["I0HP", "I04B", "I04I"]);


new Craft('I0MA', 100.0).add(["I0HD", "I04B", "I04I"]);


new Craft('I0MB', 100.0).add(["I0I2", "I04B", "I04I"]);


new Craft('I0MC', 100.0).add(["I0HG", "I04B", "I04I"]);


new Craft('I0MD', 100.0).add(["I0HH", "I04B", "I04I"]);


new Craft('I0ME', 100.0).add(["I0G3", "I04B", "I04I"]);


new Craft('I0MF', 100.0).add(["I0HJ", "I04B", "I04I"]);


new Craft('I0MG', 100.0).add(["I0GC", "I04B", "I04I"]);


new Craft('I0MH', 100.0).add(["I0HN", "I04B", "I04I"]);


new Craft('I0MI', 100.0).add(["I0GD", "I04B", "I04I"]);


new Craft('I0MJ', 100.0).add(["I0HL", "I04B", "I04I"]);


new Craft('I0MK', 100.0).add(["I0HF", "I04B", "I04I"]);


new Craft('I0O1', 100.0).add(["I0O0", "I04B", "I04I"]);


new Craft('I0ML', 100.0).add(["I0HM", "I04B", "I04I"]);


new Craft('I0MM', 100.0).add(["I0HO", "I04B", "I04I"]);


new Craft('I04O', 100.0).add(["I04N", "I04B", "I04I"]);


new Craft('I0O6', 100.0).add(["I0O7", "I04B", "I04I"]);


new Craft('I0PR', 100.0).add(["I0PQ", "I04B", "I04I"]);


new Craft('I0PK', 100.0).add(["I0PJ", "I04B", "I04I"]);


new Craft('I04A', 100.0).add(["I03F", "I04B", "I04I", "I0LL"]);


new Craft('I0MN', 100.0).add(["I0KO", "I04B", "I04I", "I0LL"]);


new Craft('I0MO', 100.0).add(["I0KP", "I04B", "I04I", "I0LL"]);


new Craft('I0MP', 100.0).add(["I0KQ", "I04B", "I04I", "I0LL"]);


new Craft('I0NR', 100.0).add(["I0NQ", "I04B", "I04I", "I0LL"]);


new Craft('I0MQ', 100.0).add(["I0KR", "I04B", "I04I", "I0LL"]);


new Craft('I0MR', 100.0).add(["I0KT", "I04B", "I04I", "I0LL"]);


new Craft('I0MS', 100.0).add(["I0KU", "I04B", "I04I", "I0LL"]);


new Craft('I0MT', 100.0).add(["I0KV", "I04B", "I04I", "I0LL"]);


new Craft('I0MV', 100.0).add(["I0KW", "I04B", "I04I", "I0LL"]);


new Craft('I0MW', 100.0).add(["I0KN", "I04B", "I04I", "I0LL"]);


new Craft('I0MU', 100.0).add(["I0KS", "I04B", "I04I", "I0LL"]);


new Craft('I03G', 100.0).add(["I0KM", "I04B", "I04I", "I0LL"]);


new Craft('I0MX', 100.0).add(["I0L2", "I04B", "I04I", "I0LL"]);


new Craft('I0MY', 100.0).add(["I0L1", "I04B", "I04I", "I0LL"]);


new Craft('I04P', 100.0).add(["I0L3", "I04B", "I04I", "I0LL"]);


new Craft('I0MZ', 100.0).add(["I0L6", "I04B", "I04I", "I0LL"]);


new Craft('I0N0', 100.0).add(["I0L7", "I04B", "I04I", "I0LL"]);


new Craft('I0N1', 100.0).add(["I0L4", "I04B", "I04I", "I0LL"]);


new Craft('I0H8', 100.0).add(["I0L5", "I04B", "I04I", "I0LL"]);


new Craft('I0N2', 100.0).add(["I0L0", "I04B", "I04I", "I0LL"]);


new Craft('I0N3', 100.0).add(["I0I3", "I04B", "I04I"]);


new Craft('I0N4', 100.0).add(["I0I4", "I04B", "I04I"]);


new Craft('I0N5', 100.0).add(["I0I5", "I04B", "I04I"]);


new Craft('I0N6', 100.0).add(["I0I7", "I04B", "I04I"]);


new Craft('I0N7', 100.0).add(["I0I6", "I04B", "I04I"]);


new Craft('I0N8', 100.0).add(["I0I8", "I04B", "I04I"]);


new Craft('I0N9', 100.0).add(["I0LA", "I04B", "I04I", "I0LL"]);


new Craft('I0NA', 100.0).add(["I0LC", "I04B", "I04I", "I0LL"]);


new Craft('I0NB', 100.0).add(["I0LD", "I04B", "I04I", "I0LL"]);


new Craft('I0NV', 100.0).add(["I0NU", "I04B", "I04I", "I0LL"]);


new Craft('I0NC', 100.0).add(["I0LB", "I04B", "I04I", "I0LL"]);


new Craft('I0ND', 100.0).add(["I0L8", "I04B", "I04I", "I0LL"]);


new Craft('I0NE', 100.0).add(["I0L9", "I04B", "I04I", "I0LL"]);


new Craft('I0NG', 100.0).add(["I0HX", "I04B", "I04I"]);


new Craft('I0NH', 100.0).add(["I0IB", "I04B", "I04I"]);


new Craft('I0NI', 100.0).add(["I0HW", "I04B", "I04I"]);


new Craft('I0NJ', 100.0).add(["I0IE", "I04B", "I04I"]);


new Craft('I0NK', 100.0).add(["I0HU", "I04B", "I04I"]);


new Craft('I0QZ', 100.0).add(["I0OW", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R0', 100.0).add(["I0P8", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R1', 100.0).add(["I0PL", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R2', 100.0).add(["I0PA", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R3', 100.0).add(["I0OX", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R4', 100.0).add(["I0OY", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R5', 100.0).add(["I0OZ", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R6', 100.0).add(["I0P0", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R7', 100.0).add(["I0P1", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R8', 100.0).add(["I0P2", "I0OT", "I0OT", "I0QW"]);


new Craft('I0R9', 100.0).add(["I0PT", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RA', 100.0).add(["I0P3", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RB', 100.0).add(["I0OV", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RC', 100.0).add(["I0P4", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RD', 100.0).add(["I0P5", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RE', 100.0).add(["I0P6", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RF', 100.0).add(["I0P7", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RG', 100.0).add(["I0PS", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RI', 100.0).add(["I0P9", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RH', 100.0).add(["I0PB", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RJ', 100.0).add(["I0PC", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RK', 100.0).add(["I0PD", "I0OT", "I0OT", "I0QW"]);


new Craft('I0RS', 100.0).add(["I0OD", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RT', 100.0).add(["I0OG", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RU', 100.0).add(["I0OC", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RV', 100.0).add(["I0OE", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RW', 100.0).add(["I0OB", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RX', 100.0).add(["I0OI", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RY', 100.0).add(["I0OH", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RZ', 100.0).add(["I0OF", "I0OT", "I0OT", "I0QY"]);


new Craft('I0RL', 100.0).add(["I0OP", "I0OT", "I0OT"]);


new Craft('I0RM', 100.0).add(["I0OL", "I0OT", "I0OT"]);


new Craft('I0RN', 100.0).add(["I0OO", "I0OT", "I0OT"]);


new Craft('I0RO', 100.0).add(["I0OM", "I0OT", "I0OT"]);


new Craft('I0RP', 100.0).add(["I0ON", "I0OT", "I0OT"]);


new Craft('I0RQ', 100.0).add(["I0OJ", "I0OT", "I0OT"]);


new Craft('I0RR', 100.0).add(["I0OK", "I0OT", "I0OT"]);


new Craft('I0S1', 100.0).add(["I0QB", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S2', 100.0).add(["I0Q2", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S3', 100.0).add(["I0QC", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S4', 100.0).add(["I0Q9", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S5', 100.0).add(["I0Q3", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S6', 100.0).add(["I0Q4", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S7', 100.0).add(["I0Q5", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S8', 100.0).add(["I0QA", "I0QN", "I0QN", "I0QX"]);


new Craft('I0S9', 100.0).add(["I0Q6", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SA', 100.0).add(["I0Q7", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SB', 100.0).add(["I0Q8", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SC', 100.0).add(["I0Q1", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SD', 100.0).add(["I0QD", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SE', 100.0).add(["I0QH", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SF', 100.0).add(["I0QL", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SG', 100.0).add(["I0QI", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SH', 100.0).add(["I0QJ", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SI', 100.0).add(["I0QK", "I0QN", "I0QN", "I0QX"]);


new Craft('I0SJ', 100.0).add(["I0QQ", "I0QN", "I0QN"]);


new Craft('I0SK', 100.0).add(["I0QP", "I0QN", "I0QN"]);


new Craft('I0SL', 100.0).add(["I0QO", "I0QN", "I0QN"]);


new Craft('I0SM', 100.0).add(["I0QR", "I0QN", "I0QN"]);


new Craft('I0SN', 100.0).add(["I0QS", "I0QN", "I0QN"]);


new Craft('I00W', 100.0).add(["I0ST", "I0QX", "I0T9", "I0T9"]);


new Craft('I016', 100.0).add(["I0SO", "I0QX", "I0T9", "I0T9"]);


new Craft('I017', 100.0).add(["I0SU", "I0QX", "I0T9", "I0T9"]);


new Craft('I018', 100.0).add(["I0SP", "I0QX", "I0T9", "I0T9"]);


new Craft('I024', 100.0).add(["I0SS", "I0QX", "I0T9", "I0T9"]);


new Craft('I025', 100.0).add(["I0SV", "I0QX", "I0T9", "I0T9"]);


new Craft('I032', 100.0).add(["I0SQ", "I0QX", "I0T9", "I0T9"]);


new Craft('I033', 100.0).add(["I0SR", "I0QX", "I0T9", "I0T9"]);


new Craft('I04V', 100.0).add(["I0T0", "I0QX", "I0T9", "I0T9"]);


new Craft('I050', 100.0).add(["I0T2", "I0QX", "I0T9", "I0T9"]);


new Craft('I052', 100.0).add(["I0T1", "I0QX", "I0T9", "I0T9"]);


new Craft('I053', 100.0).add(["I0SW", "I0QX", "I0T9", "I0T9"]);


new Craft('I05I', 100.0).add(["I0SX", "I0QX", "I0T9", "I0T9"]);


new Craft('I05K', 100.0).add(["I0SY", "I0QX", "I0T9", "I0T9"]);


new Craft('I05L', 100.0).add(["I0SZ", "I0QX", "I0T9", "I0T9"]);


new Craft('I04U', 100.0).add(["I0TC", "I0T9", "I0T9"]);


new Craft('I034', 100.0).add(["I0TD", "I0T9", "I0T9"]);


new Craft('I03X', 100.0).add(["I0TE", "I0T9", "I0T9"]);


new Craft('I04H', 100.0).add(["I0TF", "I0T9", "I0T9"]);


new Craft('I048', 100.0).add(["I0TG", "I0T9", "I0T9"]);


new Craft('I05Y', 100.0).add(["I0TH", "I0T9", "I0T9"]);