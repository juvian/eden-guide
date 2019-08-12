(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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


},{}],2:[function(require,module,exports){
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
  .add("I0FX")
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
  .add("I0EX", 2)
  .add("I0G1")
  .add("I0FX")
  .add("I0JQ", 4);

new Chest("I0FU")
  .add("I05W")
  .add("I05X")
  .add("I071")
  .add("I072");

new Chest("I0FV")
  .add("I06Y")
  .add("I06L");

new Chest("I0FW")
  .add("I0DU")
  .add("I0DV")
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
  .add("I0AC", 6)
  .add("I0AQ", 15)
  .add("I0A6", 8)
  .add("I0BU", 8)
  .addItems(udg_Acangel_Item_S, 7)
  .addItems(udg_Acangel_Item_ALL, 77);


new Chest("I0KL")
  .add("I0FB", 4)
  .add("I0AC", 4)
  .add("I0AQ", 11)
  .add("I0A6", 6)
  .add("I0BU", 6)
  .addItems(udg_Acangel_Item_S, 6)
  .addItems(udg_Acangel_Item_ALL, 82);

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
  .add("I0DS", 9)
  .addItems(udg_AcDevill_Epic, 7)
  .addItems(udg_AcDevill_Nomal, 76);

new Chest("I0KJ")
  .add("I0DY", 3)
  .add("I035", 6)
  .add("I0DS", 7)
  .addItems(udg_AcDevill_Epic, 8)
  .addItems(udg_AcDevill_Nomal, 81);

new Chest("I0DS")
  .add("I0DT")
  .addItems(udg_AcDevill_Item);

new Chest("I035")
  .add("I0DT")
  .addItems(udg_AcDevill_Item02);

let udg_GOD_Item_Int = ["I0IT", "I0IU", "I0IV", "I0IW", "I0J4", "I0JL", "I0J5", "I0J8", "I0J1", "I0JD", "I0J9", "I0JI", "I0JH", "I0J7", "I0J3", "I0J6", "I0JE", "I0J2", "I0JC", "I0JK", "I0JA", "I0JJ", "I0JM", "I0JF", "I0JB", "I0JG", "I0JN", "I0IZ", "I0KB"]
let udg_GOD02_Item_Int = ["I0KM", "I0KN", "I0KO", "I0KP", "I0KQ", "I0KR", "I0KS", "I0KT", "I0KU", "I0KV", "I0KW"];
let udg_GOD02_Item_Int2 = ["I0L1", "I0L2", "I0L3", "I0L4", "I0L5", "I0L6", "I0L7", "I0L8", "I0L9", "I0LA", "I0LB", "I0LC", "I0LD"]
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
  .add('I04Y' , 7);

new Chest("I05X")
  .add('I03Z' , 7)
  .add('I03J' , 7)
  .add('I0A7' , 6.5)
  .add('I046' , 7)
  .add('I03P' , 7);

new Chest("I06L")
  .add('I06F' , 6.5)
  .add('I06G' , 6.5)
  .add('I0A8' , 6.5)
  .add('I0BD' , 1.5)
  .add('I0B6' , 6.5)
  .add('I0IL' , 1.5)
  .add('I06J' , 12);

new Chest("I06Y")
  .add('I04E' , 1.5)
  .add('I06X' , 6.5)
  .add('I0A8' , 6.5)
  .add('I06V' , 6.5)
  .add('I06T' , 6.5)
  .add('I051' , 6.5)
  .add('I070' , 12);

new Chest("I071")
  .add('I067' , 7)
  .add('I069' , 7)
  .add('I0A7' , 6.5)
  .add('I066' , 3)
  .add('I068' , 7);

new Chest("I072")
  .add('I03M' , 6.5)
  .add('I061' , 6.5)
  .add('I064' , 6.5)
  .add('I063' , 6.5)
  .add('I0A7' , 6.5)
  .add('I062' , 6.5);

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
  .add('I0FE' , 0.2);

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
  .add('I0FE' , ( 0.20 * 0.80 ));

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
  .add('I0D2' , 3);

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
  .add('I0D2' , ( 3.00 * 0.80 ));

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
  .add('I0FM' , 0.2);

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
  .add('I0FM' , ( 0.20 * 0.80 ));

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
  .add('I0FM' , ( 0.20 * 0.80 ));
  
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

new Chest("I0KY")
  .add("I0KZ", 0.6)
  .add("I0KX", 1.5)
  .add("I0LE", 1.5);

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



new Unit("n04B").add("I0JR");

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

new Unit("n003").add("I076");

new Unit("n01Y").add("I07L");

new Unit("e05T").add("I086");

new Unit("n027").add("I0AB").add("I0AD");

new Unit("n02Y").add("I037").add("I036");

new Unit("n03Z").add("I0HA").add("I0IY");

new Unit("n04Q").add("I0KY").add("I0IY");

new Unit("n04I").add("I0K4");

new Unit("e0DF").add("I0K6");

new Unit("n04K").add("I0K8");

new Unit("n051").add("I0KJ").add("I036");

new Unit("n059").add("I0KL").add("I0AD");
},{}],3:[function(require,module,exports){
module.exports = {
  "I07P" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 25000,
			"agi" : 1800,
			"damage_increase" : 15
		},
		"label" : "Sword of the Swordman",
    "k_label": "검객의 검"
	},
	"I0BV" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 25000,
			"int" : 1800,
			"damage_increase" : 15
		},
		"label" : "Warden's Staff",
    "k_label": "위저드의 지팡이"
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
			"agi" : 2600
		},
		"label" : "Dagger of Divine Light",
    "k_label": "신성한 빛의 단검",
		"effects" : ["Each attack has 12% chance to deal 300000 + AGI x10 bonus damage"],
    "k_effects": ["공격시 확률적으로 빛의심판 발동 (12% 기회 300000 + AGI x10)"]
	},
	"I06C" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"str" : 2600,
      "attack_speed": 20
		},
		"label" : "Sword of Divine Light",
    "k_label": "신성한 빛의 대검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x13 bonus damage"],
    "k_effects": ["공격시 확률적으로 빛의심판 발동 (12% 기회 300000 + STR x13)"]
	},
	"I06E" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"int" : 2600
		},
		"label" : "Staff of Divine Light",
    "k_label": "신성한 빛의 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x42 bonus damage"],
    "k_effects": ["스킬의 모든히트에 확률적으로 빛의심판 발동(8% 기회 30000 + INT x42)"]
	},
	"I06M" : {
		"type" : "weapon",
		"color" : "purple",
		"stats" : {
			"atk" : 60000,
			"str" : 2300,
			"agi" : 2300
		},
		"label" : "Sword of Chaotic Light",
    "k_label": "혼돈의 빛의 검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x5 bonus damage"],
    "k_effects": ["공격시 확률적으로 빛의심판 발동 (12% 기회 300000 + (STR + AGI) x5)"]
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
    "k_effects": ["스킬의 모든히트에 확률적으로 빛의심판 발동(8% 기회 30000 + (STR + INT) x20)"]
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
			"atk" : 70000,
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
			"atk" : 70000,
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
			"atk" : 70000,
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
			"attack_speed" : 100
		},
		"label" : "Meteorite Dagger",
    "k_label": "운석 단검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x20 bonus damage"],
    "k_effects": ["공격시 확률적으로 운석 소환 (12% 기회 300000 + AGI x20)"]
	},
	"I0CD" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"str" : 3500,
      "attack_speed": 80
		},
		"label" : "Black Earth Mace",
    "k_label": "운석 철퇴",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x20 bonus damage"],
    "k_effects": ["공격시 확률적으로 운석 소환 (12% 기회 300000 + STR x20)"]
	},
	"I075" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 3300
		},
		"label" : "Staff of Judgement",
    "k_label": "심판의 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x52 bonus damage", "Intelligence increased by 1000 (duration 10s, 120s cd)"],
    "k_effects": ["스킬공격시 확률적으로 대상에게 천벌시전 (8% 기회 30000 + INT x52)", "사용시 지능 1000증가(지속시간 10초)(쿨타임 120초)"]
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
			"agi" : 2600
		},
		"label" : "Chaotic Meteorite Sword",
    "k_label": "혼돈의 운석 검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x9 bonus damage", "On Use: An outward explosion of Black Eart, dealing 300000 + (STR + AGI) x55 damage (120s cd)"],
    "k_effects": ["공격시 확률적으로 운석 소환 (12% 기회 300000 + (STR + AGI) x9)", "사용시 검은대지의 폭발 생성 (300000 + (STR + AGI) x55)(쿨타임 120초)"]
	},
	"I07E" : {
		"type" : "weapon",
		"color" : "orange",
		"stats" : {
			"atk" : 100000,
			"int" : 2800,
			"str" : 2600
		},
      "label" : "Judge's Staff of Chaos",
    "k_label": "혼돈의 심판 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x22 bonus damage"],
    "k_effects": ["모든스킬 히트에 확률적으로 천벌이 내려침 (8% 기회 30000 + (STR + INT) x22)"]
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
			"attack_speed" : 160
		},
		"label" : "Moonlight Dagger",
    "k_label": "달빛 단검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x28 bonus damage"],
    "k_effects": ["기본공격시 확률적으로 달빛의 힘으로 적을 공격함 (12% 기회 300000 + AGI x28)"]
	},
	"I0CE" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 5000,
      "attack_speed": 100
		},
		"label" : "Mjollnir",
    "k_label": "묠니르",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x30 bonus damage"],
    "k_effects": ["기본공격시 확률적으로 전격로 적을 공격함 (12% 기회 300000 + STR x30)"]
	},
	"I08W" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000,
			"mp" : 20000
		},
		"label" : "Sage's Staff",
    "k_label": "현자의 지팡이",
		"effects" : ["Generates Bonus Damage based on max mana (3.5% per 10,000)", "Consumes 4% of max mana per cast", "This passive will not work if below 10% maximum mana"],
    "k_effects": ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 3.5%)", "스킬사용시 최대마력의 4%감소 (마력이 10%이상 있을때 작동)"]
	},
	"I08Y" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 4000,
			"agi" : 4000
		},
		"label" : "Bloody Moonlight Dagger",
    "k_label": "붉은달빛 단검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x7 bonus damage", "On Use: Causes an explosion of moonlight, dealing 300000 + (STR + AGI) x70 (80s cd)"],
    "k_effects": ["기본공격시 확률적으로 붉은 달빛의 힘으로 적을 공격함 (12% 기회 300000 + (STR + AGI) x7)","사용시 달빛 폭발 발생 (300000 + (STR + AGI) x70)(쿨타임 80초)"]
	},
	"I095" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"str" : 4000,
			"int" : 4000
		},
		"label" : "Hades Chaos Staff",
    "k_label": "하데스의 혼돈지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x28 bonus damage"],
    "k_effects": ["스킬공격에 확률적으로 죽음의 폭발발생 (8% 기회 30000 + (STR + INT) x28)"]
	},
	"I094" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 160000,
			"int" : 5000
		},
		"label" : "Hades Staff",
    "k_label": "하데스의 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x70 bonus damage"],
    "k_effects": ["스킬공격에 확률적으로 죽음의 폭발발생 (8% 기회 30000 + INT x70)"]
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
    "k_label": "드워프의 고급 로브"
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
			"hp_regen" : -500,
      "damage_increase": 25,
      "damage_taken": 5
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
			"damage_increase" : 25
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
    "k_label": "드워프의 최고급 로브"
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
			"mp" : 15000
		},
		"label" : "Refined Mana Robe",
    "k_label": "드레곤 마력 로브",
		"effects" : ["Creates a shield that blocks max mana x0.25 every 10s. Does not stack"],
    "k_effects": ["10초마다 최대마나 x 0.25의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"]
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
			"mp" : 25000
		},
		"label" : "Refined Mana Crystal Robe",
    "k_label": "정제된 드레곤 마력 로브",
		"effects" : ["Creates a shield that blocks max mana x0.32 every 10s. Does not stack"],
		"k_effects" : ["10초마다 최대마나 x 0.32의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"]
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
    "k_label": "최고급 미스릴 로브"
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
    "k_label": "타오르는 악마의 반지"
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
			"mp" : 5000,
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
			"mp" : 30000,
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
			"str" : 4000,
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
		"k_effects" : ["사용시 MP60% 회복 (쿨타임 120초)"]
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
		"k_effects" : ["10초마다 25000의 쉴드 생성"]
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
			"attack_speed" : 150,
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
      "attack_speed": 160
		},
		"label" : "Archangel's Judgement +1",
    "k_label": "대천사의 심판 +1",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x48 bonus damage"],
    "k_effects": ["기본공격시 확률적으로 대천사의 심판 발동 (12% 기회 300000 + STR x48)"]
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
			"attack_speed" : 200
		},
		"label" : "Archangel's Dagger +1",
    "k_label": "대천사의 단검 +1",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x42 bonus damage"],
		"k_effects" : ["대천사만이 사용한다는 단검 적을 순식간에 분쇄시켜버림 (12% 기회 300000 + AGI x42)"]
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
		"k_effects" : ["사용시 정의의 일격 시전 (340000 + (STR + AGI + INT) x225)(쿨타임 120초)"]
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
			"mp" : 28000
		},
		"label" : "Niflheim +1",
    "k_label": "대천사의 마력 지팡이 +1",
		"effects" : ["Generates Bonus Damage based on maximum mana (4.4% per 10,000)","Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
    "k_effects": ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.4%)", "스킬사용시 최대마력의 4%감소", "마력이 10%이상 있을때 작동"]
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
			"agi" : 5900
		},
		"label" : "Archangel's Sword +1",
    "k_label": "대천사의 소검 +1",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x15 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x105 damage (80s cd)"],
    "k_effects": ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x15)", "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x105)(쿨타임 80초)"]
	},
	"I09Q" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 260000,
			"str" : 5900,
			"int" : 5900
		},
		"label" : "Archangel's Battle Staff +1",
    "k_label": "대천사의 전투지팡이 +1",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x45.6 bonus damage"],
    "k_effects": ["일부 직업의 모든스킬에 확률적으로 대천사의 푸른심판 발동 (8% 기회 30000 + (STR + INT) x45.6)"]
	},
	"I09M" : {
		"type" : "weapon",
		"color" : "red",
    "stats" : {
			"atk" : 260000,
			"int" : 7000
		},
		"label" : "Archangel's Staff +1",
    "k_label": "대천사의 지팡이 +1",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x114 bonus damage"],
    "k_effects": ["일부 직업의 모든스킬에 확률적으로 대천사의 심판 발동 (8% 기회 30000 + INT x114)"]
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
      "attack_speed": 160
		},
		"label" : "Archangel's Judgement +2",
    "k_label": "대천사의 심판 +2",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x56 bonus damage"],
		"k_effects" : ["기본공격시 확률적으로 대천사의 심판 발동 (12% 기회 300000 + STR x56)"]
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
			"attack_speed" : 200
		},
		"label" : "Archangel's Dagger +2",
    "k_label": "대천사의 단검 +2",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x48 bonus damage"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 심판생성 (12% 기회 300000 + AGI x48)"]
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
			"mp" : 32000
		},
		"label" : "Niflheim +2",
    "k_label": "대천사의 마력 지팡이 +2",
		"effects" : ["Generates Bonus Damage based on maximum mana (4.6% per 10,000)", "Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
		"k_effects" : ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.6%)", "스킬사용시 최대마력의 4%감소", "마력이 10%이상 있을때 작동"]
	},
	"I0AL" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"agi" : 7500,
			"hp" : 50000
		},
		"label" : "Archangel's Bow of Life +2",
    "k_label": "대천사의 생명의활 +2",
		"effects" : ["Every 10 attacks will recover AGI x6 HP (9s cd)", "Every 6 spells will recover AGI x6 HP (10s cd)", "On Use: Restores AGI x8 HP (120s cd)"],
		"k_effects" : ["기본공격 10회시 생명력회복 (AGI x6)(쿨타임 10초)", "스킬사용 6회시 생명력회복 (AGI x6)(쿨타임 10초)", "사용시  생명력회복 (AGI x8)(쿨타임 120초)"]
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
			"agi" : 6300
		},
		"label" : "Archangel's Sword +2",
    "k_label": "대천사의 소검 +2",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x17 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x120 damage (80s cd)"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x17)", "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x120)(쿨타임 80초)"]
	},
	"I09R" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"str" : 6300,
			"int" : 6300
		},
		"label" : "Archangel's Battle Staff +2",
    "k_label": "대천사의 전투지팡이 +2",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x50.4 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 푸른심판 발동 (8% 기회 30000 + (STR + INT) x50.4)"]
	},
	"I09N" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 300000,
			"int" : 7500
		},
		"label" : "Archangel's Staff +2",
    "k_label": "대천사의 지팡이 +2",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x126 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 심판 발동 (8% 기회 30000 + INT x126)"]
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
      "attack_speed": 160
		},
		"label" : "Archangel's Judgement +3",
    "k_label": "대천사의 심판 +3",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x64 bonus damage"],
		"k_effects" : ["기본공격시 확률적으로 대천사의 심판 발동 (12% 기회 300000 + STR x64)"]
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
			"attack_speed" : 200
		},
		"label" : "Archangel's Dagger +3",
    "k_label": "대천사의 단검 +3",
		"effects" : ["Each attack has a 12% chance to deal 300000 + AGI x53 bonus damage"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 심판생성 (12% 기회 300000 + AGI x53)"]
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
			"mp" : 36000
		},
		"label" : "Niflheim +3",
    "k_label": "대천사의 마력 지팡이 +3",
		"effects" : ["Generates Bonus Damage based on maximum mana (4.9% per 10,000)", "Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
		"k_effects" : ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.9%)", "스킬사용시 최대마력의 4%감소", "마력이 10%이상 있을때 작동"]
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
			"atk" : 300000,
			"str" : 6700,
			"agi" : 6700
		},
		"label" : "Archangel's Sword +3",
    "k_label": "대천사의 소검 +3",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x19 bonus damage","On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x135 damage (80s cd)"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x19)","사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x135)(쿨타임 80초)"]
	},
	"I09S" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"str" : 6700,
			"int" : 6700
		},
		"label" : "Archangel's Battle Staff +3",
    "k_label": "대천사의 전투지팡이 +3",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x60 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 푸른심판 발동 (8% 기회 30000 + (STR + INT) x60)"]
	},
	"I09O" : {
		"type" : "weapon",
		"color" : "red",
    	"stats" : {
			"atk" : 350000,
			"int" : 8000
		},
		"label" : "Archangel's Staff +3",
    "k_label": "대천사의 지팡이 +3",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x147 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 심판 발동 (8% 기회 30000 + INT x147)"]
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
		"k_effects" : ["사용시 고위천사 소환"]
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
			"atk" : 150000,
			"str" : 5000,
      "damage_increase": 35
		},
		"label" : "Beresa’s Sword",
    "k_label": "베레스라의 검"
	},
	"I0D4" : {
		"type" : "weapon",
		"color" : "blue",
		"stats" : {
			"atk" : 150000,
			"str" : 5000,
      "damage_increase": 35
		},
		"label" : "Hellfire Claymore",
    "k_label": "헬파이어 클레이모어",
    "effects": ["Deals 200000 + STR x100 per pillar for a total of 8 pillars in clockwise motion (180s cd)"],
    "disabled": true
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
			"atk" : 25000,
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
			"hp" : 5000
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
			"damage_increase" : 8
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
			"int" : 400,
			"damage_increase" : 10
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
    "k_label": "광기의 투구"
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
		"k_effects" : ["사용시 민첩비례 생명력 회복 (AGI x3)(쿨타임 60초)"]
	},
	"I03M" : {
		"type" : "accessory",
		"color" : "purple",
		"stats" : {
			"str" : 800,
			"agi" : 800,
			"int" : 800,
			"movement_speed" : 150,
			"magic_resistance" : 10
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
			"int" : 1600
		},
		"label" : "Sword of Light",
    "k_label": "빛의검",
		"effects" : ["Each attack has 12% chance to deal 300000 + AGI x5 bonus damage"],
		"k_effects" : ["공격시 확률적으로 빛의심판 발동 (12% 기회 300000 + AGI x5)"]
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
    "k_label": "빛의 투구"
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
    "k_label": "수호석 반지"
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
    "k_label": "신속의 갑옷"
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
			"mp" : 15000
		},
		"label" : "Mana Storm Staff",
    "k_label": "마나 폭풍 지팡이",
		"effects" : ["Generates Bonus Damage based on maximum mana (2.8% per 10,000)", "Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
		"k_effects" : ["사용자의 마나에 비례하여 추가데미지 생성 (비뮬 - 1만당 2.8%)", "스킬사용시 최대마력 5%감소", "마력이 10%이상 있을때 작동"]	
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
			"attack_speed" : 150,
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
		"k_effects" : ["10초마다 33000의 쉴드 생성"]
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
			"attack_speed" : 200
		},
		"label" : "The Archangel’s Dagger",
    "k_label": "대천사의 단검",
    "effects" : ["Each attack has a 12% chance to deal 300000 + AGI x37 bonus damage"],
    "k_effects" : ["기본공격시 일정확률로 대천사의 심판생성 (12% 기회 300000 + AGI x37)"]
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
		  "atk" : 260000,
			"int" : 6500,
			"mp" : 25000
		},
		"label" : "Niflheim",
    "k_label": "대천사의 마력 지팡이",
		"effects" : ["Generates Bonus Damage based on maximum mana (4.2% per 10,000)", "Consumes 4% of maximum mana per cast", "This passive will not work if below 10% maximum mana"],
		"k_effects" : ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 4.2%)", "스킬사용시 최대마력의 4%감소", "마력이 10%이상 있을때 작동"]
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
			"agi" : 5500
		},
		"label" : "The Archangel’s Sword",
    "k_label": "대천사의 소검",
		"effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x11 bonus damage", "On Use: Executes the Archangel of Justice’s Light, dealing 400000 + (STR + AGI) x90 damage (80s cd)"],
		"k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x11)(능력치 비례)", "사용시 대천사의 빛의 처형 발동 (400000 + (STR + AGI) x90)(쿨타임 80초)"]
	},
	"I09P" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"str" : 5500,
			"int" : 5500
		},
		"label" : "Archangel’s Battle Staff",
    "k_label": "대천사의 전투지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + (STR + INT) x38.4 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 푸른심판 발동 (8% 기회 30000 + (STR + INT) x38.4"]
	},
	"I09L" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 230000,
			"int" : 6500
		},
      "label" : "The Archangel’s Staff",
    "k_label": "대천사의 지팡이",
		"effects" : ["Each spell has a 8% chance to deal 30000 + INT x96 bonus damage"],
		"k_effects" : ["일부 직업의 모든스킬에 확률적으로 대천사의 심판 발동 (8% 기회 30000 + INT x96)"]
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
    "k_label": "대천사의 증폭 지팡이"
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
      "attack_speed": 160
		},
		"label" : "Archangel’s Judgement",
    "k_label": "대천사의 심판",
		"effects" : ["Each attack has a 12% chance to deal 300000 + STR x40 bonus damage"],
		"k_effects" : ["기본공격시 확률적으로 대천사의 심판 발동 (12% 기회 300000 + STR x40)"]
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
		"k_effects" : ["기본공격시 최대체력 0.8%소모(체력 1%이상일때 작동) 매공격시 어둠의 일격을 가합니다 (30000 + AGI x16)"]
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
			"int" : 3500
		},
		"label" : "Shadow Contract",
    "k_label": "어둠의 계약",
		"effects" : ["Each spell consumes 4% of HP and MP adding 40% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 40% 증가"]
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
		"k_effects" : ["사용시 3가지중 랜덤효과 발동", "15초동안 추가데미지 150%증가", "15초동안 마법방어력 100%/방어력 10000증가", "10초간 마법사용 불가능 (쿨타임 120초)"]
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
	    	"mp" : 35000
	    },
	    "label" : "Corrupted Mana Robes",
      "k_label": "대악마의 검은 마력로브",
		  "effects" : ["Creates a shield that blocks max mana x0.48 every 10s. Does not stack"],
		  "k_effects" : ["10초마다 최대마나 x 0.48의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"]
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
	    	"hp" : 30000,
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
	    	"hp" : 30000,
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
	    	"hp" : 30000,
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
	 "I0DA" : {
      "type" : "artifact",
	    "color" : "blue",
	    "stats" : {
	    	"str" :2000,
	    	"agi" :2000,
	    	"int" :2000,
        "hp": 20000
	    },
	    "label" : "War God’s Banner",
      "k_label": "대악마의 깃발",
	    "effects" : ["On Use: within 1000 range for 15s", "Recover 3% of Maximum HP every second", "Provide 35% Bonus damage and 100% attack speed", "Item cannot be removed 120s after using (120s cd)"],
	    "k_effects" : ["사용시 범위 1000에 15초간", "초당체력 3%회복", "추가데미지 35% 공격속도 100% 오라 생성(쿨타임 120초)", "사용시 120초간 아이템을 벗을수없음"],
	    "disabled" : true
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
			"int" : 5000
		},
		"label" : "Soul Contract",
    "k_label": "검은 어둠의 계약",
		"effects" : ["Each spell consumes 4% of HP and MP adding 60% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 60% 증가"]
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
	    	"mp" : 40000
	    },
	    "label" : "Chaotic Blight Robes",
      "k_label": "대혼돈의 마력로브",
		  "effects" : ["Creates a shield that blocks max mana x0.58 every 10s. Does not stack"],
		  "k_effects" : ["10초마다 최대마나 x 0.58의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"]
	},
	"I0E0" : {
	    "type" : "armor",
	    "color" : "red",
	    "stats" : {
	    	"armor" : 1300,
	    	"str" : 5500,
	    	"hp" : 30000,
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
	    	"hp" : 30000,
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
	    	"hp" : 30000,
	    	"hp_regen_percent" : 3
	    },
	    "label" : "Chaotic Armor of Rejuvenation",
      "k_label": "대혼돈의 치유의 갑옷"
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
      "k_label": "대혼돈의 수호 로브"
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
	    	"armor" : 800,
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
    "k_effects" : ["일렉트로 마스터가 착용시 최대 전력 50증가", "포션메이커가 착용시 재료넣기 증가 재료 1증가"]
  },
  "I0F0": {
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
    "disabled": true
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
      "damage_increase": 25
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
    "effects": ["Damages enemies that attack the user (Allstats x 8)", "When worn by Protector of Light “Holy Light” becomes red and adds (Strength x 10) additional damage"],
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
  "I0G2": {
    "type": "weapon",
    "color": "god",
    "stats": {
      
     },
    "label": "Sealed God Sword",
    "k_label": "봉인된 신의 무구"
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
    "k_label": "대천사의 대검 +3"
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
  "I0H5": {
    "type": "armor",
    "color": "god",
    "stats": {
      "armor" : 1000,
      "str": 3800,
      "agi": 3800,
      "int": 3800,
      "hp": 30000
    },
    "label": "Sealed God Armor",
    "k_label": "봉인된 신의 갑옷"    
  },	
	"I0HA" : {
	    "type" : "chest",
	    "color" : "black",
	    "label" : "Sealed God of Destruction",
      "k_label": "봉인된 파멸의 신",
	    "effects" : ["Requires at least 11000 base stats for devil drop"],
	    "k_effects" : ["드랍하려면 최소한 11000의 스탯이 필요하다."]
	},
  "I0H6": {
    "type": "accessory",
    "color": "god",
    "stats": {
      "str": 3500,
      "agi": 3500,
      "int": 3500
    },
    "label": "Sealed God Accessory",
    "k_label": "봉인된 신의 악세서리"
  },
  "I0H7": {
    "type": "auxiliary",
    "color": "god",
    "stats": {
      "str": 1500,
      "agi": 1500,
      "int": 1500
    },
    "label": "Sealed God Rune",
    "k_label": "봉인된 신의 룬"
  },
  "I0H8": {
    "type": "helmet",
    "color": "god",
    "stats": {
      "str": 3500,
      "agi": 3500,
      "int": 3500,
      "armor": 1000
    },
    "label": "Sealed God Helmet",
    "k_label": "봉인된 신의 투구"
  },
  "I0H9": {
    "type": "artifact",
    "color": "god",
    "stats": {
      "str": 4500,
      "agi": 4500,
      "int": 4500
    },
    "label": "Sealed God Wings",
    "k_label": "봉인된 신의 날개"  
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
      "attack_speed": 300
    },
    "label": "Sealed God Dagger",
    "k_label": "신의 단검",
    "effects": ["Each attack has a 12% chance to deal 300000 + AGI x60 bonus damage"],
    "k_effects": ["기본공격시 일정확률로 신의 일격을 가함 (12% 기회 300000 + AGI x60)"]
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
        "mp": 45000
      },
      "label": "God's Magic Staff",
      "k_label": "신의 마력 지팡이",
      "effects": ["Generates extra damage proportional to mana (5.6% every 10000)", "4% reduction of maximum hp when using skill", "(Works when above 10% max hp)"],
      "k_effects": ["사용자의 마나의 비례한 추가데미지 생성 (비율 - 1만당 5.6%)", "스킬사용시 최대마력의 4%감소", "(마력이 10%이상 있을때 작동)"]
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
        "agi": 9500
      },
      "label": "God's Sword",
      "k_label": "신의 소검",
      "effects" : ["Each attack has a 12% chance to deal 300000 + (STR + AGI) x23 bonus damage", "On use: 400000 + (STR + AGI) x180 damage"],
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + (STR + AGI) x23)", "사용시 400000 + (STR + AGI) x180 (쿨타임 80초)"]
  },
    "I0GD": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "str": 11000,
        "attack_speed": 250
      },
      "label": "God's Judgement",
      "k_label": "신의 심판",
      "effects" : ["Each attack has a 12% chance to deal 300000 + STR x80 bonus damage"],
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (12% 기회 300000 + STR x80)"]
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
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (8% 기회 30000 + (STR + INT) x72)"]
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
      "k_label": "신의 증폭 지팡이"
  },
    "I0HN": {
      "type": "weapon",
      "color": "god",
      "stats": {
        "atk": 500000,
        "int": 11000
      },
      "label": "God's Judgement Staff",
      "k_label": "신의 심판 지팡이",
      "effects" : ["Each attack has a 8% chance to deal 30000 + INT x180 bonus damage"],
		  "k_effects" : ["기본공격시 일정확률로 대천사의 죽음의심판생성 (8% 기회 30000 + INT x180)"] 
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
		"k_effects" : ["10초마다 38000의 쉴드 생성"]
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
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 80% 증가"]   
	},
  "I0IQ" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 260000,
			"int" : 7000
		},
		"label" : "Archangel Contract +1",
    "k_label": "대천의 계약 +1",
		"effects" : ["Each spell consumes 4% of HP and MP adding 95% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 95% 증가"]
	},
  "I0IR" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 300000,
			"int" : 7500
		},
		"label" : "Archangel Contract +2",
    "k_label": "대천의 계약 +2",
		"effects" : ["Each spell consumes 4% of HP and MP adding 110% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 110% 증가"]
	},
  "I0IS" : {
		"type" : "weapon",
		"color" : "red",
		"stats" : {
			"atk" : 350000,
			"int" : 8000
		},
		"label" : "Archangel Contract +3",
    "k_label": "대천의 계약 +3",
		"effects" : ["Each spell consumes 4% of HP and MP adding 135% bonus damage (Only activates when above 10% of these thresholds)"],
		"k_effects" : ["모든 능력사용시 체력과 마나 4% 소모 (10%이상일때 발동) 추가데미지 135% 증가"]
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
    "k_effects": ["에로우 리볼버의 기본공격 민첩 비례 데미지가 2증가"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0J2": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Psychic]", 
    "k_label": "해방된 힘 [염동술사]",
    "effects": ["Enchances Shockwave"],
    "k_effects": ["충격파를 강화합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}   
  },
  "I0J3": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Sniper]", 
    "k_label": "해방된 힘 [스나이퍼]",
    "effects": ["Enchances Explosive Magazines"],
    "k_effects": ["폭발성 탄창을 강화합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0J4": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Fighter]", 
    "k_label": "해방된 힘 [격투가]",
    "effects": ["Increases max skill link to 65"],
    "k_effects": ["스킬연계의 최대치가 65로 증가합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0J5": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Death Scythe]", 
    "k_label": "해방된 힘 [데스사이즈]",
    "effects": ["Enchances Cursed Possession"],
    "k_effects": ["오니화를 강화합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0J6": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Assassin]", 
    "k_label": "해방된 힘 [암살자]",
    "effects": ["Enchances Hot Blooded damage by 20%"],
    "k_effects": ["블러드 히트의 데미지 증가율이 20% 추가증가"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0J7": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Shooter]", 
    "k_label": "해방된 힘 [슈터]",
    "effects": ["Reduces missiles cd by 3s"],
    "k_effects": ["폭격의 쿨타임이 3초감소합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0J8": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Lancer]", 
    "k_label": "해방된 힘 [랜서]",
    "effects": ["Reduces Javelin cd by 1s"],
    "k_effects": ["투창의 쿨타임이 1초 감소합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0J9": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Martial Artist]", 
    "k_label": "해방된 힘 [무도가]",
    "effects": ["Increases Hectopascal Kick proc chance by 10%"],
    "k_effects": ["헥토파스칼 킥의 확률증가가 10% 추가로 증가합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JA": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Electromaster]", 
    "k_label": "해방된 힘 [일렉트로 마스터]",
    "effects": ["Reduces Eye of the Storm cd by 15s"],
    "k_effects": ["뇌단의 쿨타임 15초가 감소합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JB": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Explosion Wizard]", 
    "k_label": "해방된 힘 [폭렬마법사]",
    "effects": ["Increases Ignite ticks by 6"],
    "k_effects": ["발화의 공격횟수가 6회 증가합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JC": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Overmind]", 
    "k_label": "해방된 힘 [오버마인드]",
    "effects": ["Increases Thunder Calling int multiplier by 2%"],
    "k_effects": ["초월의 룬의 지능증가폭이 2% 증가합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JD": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Bard]", 
    "k_label": "해방된 힘 [바드]",
    "effects": ["Reduces cooldown of Stage by 12s", "Not Implemented"],
    "k_effects": ["달아오르는 무대의 쿨타임 12초 감소", "작동 안함"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JE": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Enchanter]", 
    "k_label": "해방된 힘 [야천의 마도사]",
    "effects": ["Reduces Unison cd by 11s"],
    "k_effects": ["유니즌 인의 쿨타임이 11초 감소합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JF": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Potion Maker]", 
    "k_label": "해방된 힘 [포션메이커]",
    "effects": ["Improved Gather Materials"],
    "k_effects": ["재료넣기를 강화합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JG": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Priest]", 
    "k_label": "해방된 힘 [프리스트]",
    "effects": ["Increases Baumkuchen Feeding int multiplier by 1.2%"],
    "k_effects": ["바움쿠헨 먹이기 회복지능 계수가 1.2 증가합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0KB": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Specialist]", 
    "k_label": "가이아 갑옷",
    "effects": ["?"],
    "k_effects": ["?"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JH": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Blood Lord]", 
    "k_label": "해방된 힘 [블러드로드]",
    "effects": ["Decreases cooldown of Heartspan by 10s"],
    "k_effects": ["코코로와타리의 쿨타임 10초감소"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JI": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Berserker]", 
    "k_label": "해방된 힘 [버서커]",
    "effects": ["Increases Frenzy str multiplier by 1.5%"],
    "k_effects": ["폭주의 공격시 스텟비례 데미지가 1.5 증가합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JJ": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Kamui]", 
    "k_label": "해방된 힘 [카무이]",
    "effects": ["Reduces basic atacks needed to activate Empower by 2"],
    "k_effects": ["참격의 패시브공격회수가 2감소합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JK": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Regular Hunter]", 
    "k_label": "해방된 힘 [이레귤러 헌터]",
    "effects": ["Reduces energy required by Dash by 1"],
    "k_effects": ["대쉬의 에너지 사용이 1줄어듭니다. 강화합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JL": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Great Sword]", 
    "k_label": "해방된 힘 [그레이트 소드]",
    "effects": ["Increases Blockade duration by 0.15s"],
    "k_effects": ["봉쇄의 지속시간이 0.15초 증가합니다"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
  },
  "I0JM": {
    "type": "unleash",
    "color": "god",
    "label": "Unleash Power [Crusader]", 
    "k_label": "해방된 힘 [크루세이더]",
    "effects": ["Reduces the cooldown of Light Casts by 20s", "Not working"],
    "k_effects": ["빛의 집속의 쿨타임이 20초 감소합니다", "작동 안함", "Not working"],
    "stats":  {'str': 1500, 'int': 1500, 'agi': 1500}
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
    "k_effects": ["그림자 숨기의 지속시간이 3초 증가합니다"],
    "stats": {'str': 1500, 'int': 1500, 'agi': 1500}
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
		"effects" : ["On Use: Causes an explosion, dealing 700000 + STR x450 damage (45s cd)"],
    "k_effects": ["사용시 용기의 폭발 시전 (700000 + STR x450)(쿨타임 45초)"]
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
    },
    "label": "Divine Mana Robes",
    "effects" : ["Creates a shield that blocks max mana x0.7 every 10s. Does not stack"],
    "k_effects": ["10초마다 최대마나 x 0.7의 쉴드생성 (아이템끼리는 쉴드가 중첩되지 않습니다)"],
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
    "k_label": "신의 빛의 경갑"
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
    "k_label": "신의 빛의 로브"
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
    "k_label": "정화된 생명의 갑옷"
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
    "k_label": "정화된 치유의 갑옷"
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
    "label": "Purification Power",
    "k_label": "정화된 신의 권능"
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
			"hp_regen" : 2500,
      "damage_increase": 45
		},
		"label" : "Purified Fury Ring",
    "k_label": "신의 분노 반지",
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
    "k_label": "정화신의 수호"
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
	    "armor" : 1500,
      "str": 3500,
      "agi": 7000,
	    "int" : 3500,
	    "hp" : 50000,
	    "damage_increase" : 60
	  },
    "label": "Strength Helmet",
    "k_label": "정화의 신의 빛"
  },
  "I0L9": {
    "type": "helmet",
    "color": "god",
    "stats" : {
	    "armor" : 1500,
      "str": 3500,
      "agi": 7000,
	    "int" : 3500,
      "hp": 50000,
	    "damage_increase" : 90,
	    "damage_taken" : 30
	  },
    "label": "Desctruction Helmet",
    "k_label": "파멸의 신의 저주"
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
      "str": 5500,
      "agi": 5500,
	    "int" : 5500
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
  "I030": {
    "label": "Axe of Massacre",
    "k_label": "짐승의 털옷",
    "type": "weapon",
    "color": "green",
    "stats": {
      "str": 250,
      "int": 250,
      "agi": 250,
      "movement_speed": 90
    }
  },
  "I02B": {
    "label": "Stolen Armor",
    "k_label": "도적두목의 갑옷",
    "type": "armor",
    "color": "green",
    "stats": {
      "armor": 30
    }
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
    }
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
      "int": 80,
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
      "str": 80
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
    }
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
    }
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
    }
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
      "int": 120
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
      "armor": 130,
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
    }
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
      "str": 300,
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
    }
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
    }
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
      "armor": 200
    }
  },
  "I0IY": {
    "disabled": true,
    "label": "500 Points"
  }
}
},{}],4:[function(require,module,exports){
let translator = require('./translations.js');
let translate = translator.translate;
let items = require('./itemdata.js');

class Item {
  constructor(item) {
    Object.assign(this, item);
  }
  
  html(qty) {
    qty = qty || 1;
    let info = this.info();
    let drops = this.dropsHtml();
    let txt = info + (info.trim() && drops.trim() ? "<br/>" : "") + drops;
    return `<span class="${this.color} item-tooltip" data-placement="bottom" data-toggle="tooltip" data-html="true" title="${txt}">${this.translatedLabel() + (qty > 1 ? ' x' + qty : '')}</span>`;
  }
  
  info() {
    let template = this.statsHtml();
    template += this.effectsHtml();
    template += this.statsPointsHtml();
    
    return template.endsWith("<br/>") ? template.substring(0, template.lastIndexOf("<br/>")) : template;
  }
  
  statsHtml() {
    let txt =  "";
    
    if (this.stats) {
      txt += "<span class = 'capitalize'>"
      for (var stat in this.stats) {
        txt += this.formatStat(stat, this.stats[stat]) + '<br/>';
      }
      txt += "</span>"
    }
    
    return txt;
  }
  
  effectsHtml() {
    let effects = this.translatedEffects();
    return effects == null ? "" : effects.join("<br/>")
  }
  
  translatedEffects() {
    return translator.lang() == "eng" ? this.effects : this.k_effects;
  }
  
  translatedLabel() {
    return translator.lang() == "eng" ? this.label : this.k_label;
  }
  
  statsPointsHtml() {
    return this.stats_points == null ? "" : ("<br/>" + translate("gives") + " " + this.stats_points + " "  + translate("stats points"))
  }  
  
  dropsArray() {
    return this.drops === undefined ? [] : this.drops;
  }
  
  dropsHtml() {
    return this.dropsArray().map(drop => `${drop.chest.parent.translatedLabel()} (${drop.chance} % ${translate('chance')})`).join("<br/>");
  }
  
  formatStat(stat, val) {
      if (stat == "atk") return translate("attack") + " : +" + val;
      else if (stat == "int") return translate("intelligence") + " : +" + val;
      else if (stat == "agi") return translate("agility") + " : +" + val;
      else if (stat == "str") return translate("strength") + " : +" + val;
      else if (stat == "damage_taken") return translate("damage taken") + " : " + (val >= 0 ? "+" : "") + val + "%";
      else if (stat == "attack_speed") return translate("attack speed") + " : +" + val + "%";
      else if (stat == "damage_increase") return translate("damage increase") + " : +" + val + "%";
      else if (stat == "hp") return translate("HP") + " : +"+val;
      else if (stat == "mp") return translate("MP") + " : +"+val;
      else if (stat == "movement_speed") return translate("movement speed") + " : +"+val+ "%";
      else if (stat == "hp_regen") return translate("HP regeneration") + " : +"+val + " " + translate("per second");
      else if (stat == "hp_regen_percent") return translate("HP regeneration") + ": +"+val + "% " + translate("max HP per second");
      else if (stat == "armor") return translate("armor") +" : +" +val;
      else if (stat == "max_health") return translate("max HP") + " : +" + val + "%";
      else if (stat == "enemy_armor") return translate("enemy armor") + " : " + val + "%"; 
      else if (stat == "enemy_speed") return translate("enemy speed") + " : " + val + "%";
      else if (stat == "magic_resistance") return translate("magic resistance") + " : +" + val + "%";
      else if (stat == "max_int") return translate("intelligence increase") + " : +" + val + "%";    
      else if (stat == "critical_hit") return this.stats["critical_hit_chance"] + '%' + translate('chance') + ' x' + val + " " + translate("critical hit")
  }
  
  materials() {
    return this.crafts ? this.crafts[0] : {items: []};
  }
  
  tree (qty) {
      qty = qty || 1;
      var materials = this.materials().items.reduce(function(all, current) {
          all[current] = all[current] || 0;
          all[current] += 1;
          return all;
        }, {});
      return {
        innerHTML : this.html(qty),
        children : Object.keys(materials).map(key => items[key].tree(materials[key]))
      }
    }
}

for (let id in items) {
  items[id] = new Item(items[id]);
  items[id].id = id; 
}

module.exports = items;


},{"./itemdata.js":3,"./translations.js":6}],5:[function(require,module,exports){
let chests = require('./drops.js').chests;
let crafts = require('./craftings.js').craftings;
let units = require('./units.js');
let items = require('./items.js');

crafts.forEach(craft => {
  if (items[craft.id] === undefined) console.log(craft.id);
  items[craft.id].crafts = items[craft.id].crafts || [];
  items[craft.id].crafts.push(craft);
});

chests.forEach(chest => {
  if (!chest.unit) {
    if(items[chest.id] === undefined) console.log(chest.id);
    items[chest.id].chest = chest;
    chest.parent = items[chest.id];
  } else {
    if(units[chest.id] === undefined) console.log(chest.id);
    units[chest.id].chest = chest;
    chest.parent = units[chest.id];
  }
  
  chest.drops.forEach(drop => {
    if (items[drop.id] === undefined) console.log(drop.id);
    items[drop.id].drops = items[drop.id].drops || [];
    items[drop.id].drops.push({chest: chest, chance: drop.chance});
  });  
});


for (let id in items) {
  if (items[id].disabled) delete items[id];
}

let types = new Set()

for (let id in items) {
  types.add(items[id].type);
}

types = Array.from(types);

module.exports = {items, chests, units, types};
},{"./craftings.js":1,"./drops.js":2,"./items.js":4,"./units.js":7}],6:[function(require,module,exports){
exports.translations = {
  "350-tip" : {
    "eng": "Note that this guide is intended for levels 350+. Some items you might need to be up to level 400 before you can use them",
    "kor": "이 가이드는 레벨 350 이상을 대상으로합니다. 일부 아이템은 사용하기 전에 레벨을 400까지 올려야 할 수도 있습니다."
  },
  "back_main": {
    "eng": "Back to Main",
    "kor": "메인으로 돌아 가기"
  },
  "view_characters": {
    "eng": "View Characters",
    "kor": "캐릭터 보기"
  },
  "view_item_build": {
    "eng": "View Item Build",
    "kor": "추천 아이템 빌드 보기"
  },
  "create_custom_build" : {
    "eng": "Create Custom Build",
    "kor": "맞춤 빌드 만들기"
  },
  "back_characters": {
    "eng": "Back to Characters",
    "kor": "캐릭터로 돌아가기"
  },
  "save-to-account": {
    "eng": "Save to account",
    "kor": "계정에 저장"
  },
  "custom_build": {
    "eng": "Custom Build",
    "kor": "맞춤 빌드"
  },
  "add_build": {
    "eng": "Add to build",
    "kor": "빌드에 추가"
  },
  "new_versions": {
    "eng": "new versions have been released since you last visited the page",
    "kor": "마지막으로 페이지를 방문한 이후로 새 버전이 출시되었습니다."
  },
  "check_changes": {
    "eng": "Check changes",
    "kor": "변경 사항 확인"
  },
  "changes_on": {
    "eng": "Changes on version",
    "kor": "버전 변경"
  },
  "released_on": {
    "eng": "released on",
    "kor": "발매일"
  },
  "changelog": {
    "eng": "Changelog",
    "kor": "변경 로그"
  },
  "view_changelog": {
    "eng": "View Changelog",
    "kor": "변경 내역보기"
  },
  "username": {
    "eng": "Username",
    "kor": "사용자 이름"
  },
  "password": {
    "eng": "Password",
    "kor": "암호"
  },
  "register": {
    "eng": "Register",
    "kor": "계정생성"
  },
  "login": {
    "eng": "Login",
    "kor": "로그인"
  },
  "bad-user": {
    "eng": "Wrong username",
    "kor": "잘못된 사용자 이름"
  },
  "bad-password": {
    "eng": "Wrong password",
    "kor": "잘못된 비밀번호"
  },
  "logout": {
    "eng": "Logout",
    "kor": "로그 아웃"
  },
  "get-url": {
    "eng": "Get URL",
    "kor": "URL 가져 오기"
  },
  "not-logged-in": {
    "eng": "Not logged in",
    "kor": "로그인하지 않았습니다"
  },
  "invalid-id": {
    "eng": "Invalid id",
    "kor": "잘못된 ID"
  },
  "my-builds": {
    "eng": "My Builds",
    "kor": "내 빌드"
  },
  "view": {
    "eng": "View",
    "kor": "보기"
  },
  "edit": {
    "eng": "Edit",
    "kor": "수정하기"
  },
  "confirm": {
    "eng": "Are you sure?",
    "kor": "확실합니까?"
  },
  "yes": {
    "eng": "Yes",
    "kor": "예"
  },
  "no": {
    "eng": "No",
    "kor": "아니"
  },
  "not-owner" : {
    "eng": "You are not the owner of this build",
    "kor": "이 빌드의 소유자가 아닙니다."
  },
  "enter-title": {
    "eng": "Enter title",
    "kor": "제목 입력"
  },
  "optional": {
    "eng": "(optional)",
    "kor": "(선택사항)"
  },
  "description": {
    "eng": "Description",
    "kor": "설명"
  },  
  "main": {
    "eng": "Main",
    "kor": "메인"
  },
  "switching": {
    "eng": "Situational",
    "kor": "스위칭"
  },
  "delete": {
    "eng": "Delete",
    "kor": "삭제"
  },
  "public": "공공의",
  "private": "은밀한",
  "pending": {
    "eng": "Waiting approval",
    "kor": "승인 대기중"
  },
  "request-public": {
    "eng": "Request go public",
    "kor": "대중에게 요청하십시오"
  },
  "invalid-action": {
    "eng": "Invalid action",
    "kor": "부적절한 행동"
  },
  "favorites": {
    "eng": "Favorites",
    "kor": "즐겨 찾기"
  },
  "try-build": {
    "eng": "Try Build",
    "kor": "빌드 해보기"
  },
  "get-code": {
    "eng": "Get code",
    "kor": "코드를 얻다"
  },  
  "configuration": {
    "eng": "Configuration",
    "kor": "구성"
  },  
  "missing-code": {
    "eng": "Missing Code",
    "kor": "누락 된 코드"
  },  
  "revoke": {
    "eng": "Revoke approval",
    "kor": "승인 취소"
  },  
  "approve": "승인하다",
  "reject": "받지 않다",
  "status": "상태",
  "by": "by",  
  "items": "아이템",
  "characters": "캐릭터",
  "already exists": "이미 존재 함",
  'name': '이름',
  'type': '유형',
  'actions': '행위',
  'all': '모든',
  'weapon': '무기',
  'armor': '갑옷',
  'accessory': '악세서리',
  'helmet': '투구',
  'artifact': '아티팩트',
  'auxiliary': '보조장비',
  'material' : '재료',
  'stats': '스텟',
  'chest': '보물함',
  'mythic +3': '신화 +3',
  'mythic +2': '신화 +2',
  'mythic +1': '신화 +1',
  'mythic': '신화',
  'epic': '에픽',
  'legendary': '레전더리',
  "skill": "기술",
  'unique': '유니크',
  'attack': '공격력',
  'intelligence': '지능',
  'INT': '지능',
  'agility': '민첩',
  'AGI': '민첩',
  'strength': '힘',
  'STR': '힘',
  'damage taken': '받는데미지',
  'attack speed': '공격속도',
  'damage increase': '추가데미지',
  'movement speed': '이동속도 증가',
  'HP regeneration': 'HP 재건',
  'per second': '초당',
  'max HP per second': '초당 최대 생명',
  'max HP': '최대 체력',
  'enemy armor': '적의 갑옷',
  'enemy speed': '적의 속도',
  'magic resistance': '마법 저항력',
  'intelligence increase': '사 지능 증가',
  'gives': '주는',
  'stats points': '통계 점수',
  'build tree for': '에 대한 트리 만들기',
  'chance': '기회',
  'view build tree': '빌드 트리보기',
  'choose raid / boss / chest': '레이드 / 보스 / 보물함 선택',
  'item guide': '아이템 안내',
  "acerola": "블러드 로드",
  "hurk": "허크",
  "zero": "Zero",
  "shinobu": "오시노 시노부",
  "krul": "쿠루루 체페시",
  "roselinde": "빛의 수호자",
  "darkness": "라라티나",
  "enju": "아이하라 엔쥬",
  "shiki": "나나야 시키",
  "sinon": "시논",
  "mari": "마리",
  "ayase": "아라가키 아야세",
  "homura": "아케미 호무라",
  "scathach": "스카자하",
  "shinoa": "히이라기 시노아",
  "kanna": "칸나 카무이",
  "lawmaker": "법덕후",
  "megumin": "메구밍",
  "tatsumaki": "타츠마키",
  "pio": "피오",
  "mashiro": "시이나 마시로",
  "kaede": "카에데",
  "hayate": "야가미 하야테",
  "satsuki": "키류인 사츠키",
  "shuvi": "슈비",
  "god": "신",
  "Unleash": "해방",
  "unleash": "해방",
  "HP": "HP",
  "MP": "MP",
  "critical_hit": "크리티컬"
}

exports.lang = function () {
  let config = exports.config
  return config && config.lang ? config.lang : "eng";
}

exports.translate = function (str, lang) {
  if (str == null) return str;
  lang = lang || exports.lang();
  
  if (Array.isArray(str) == false) {  
    if (!exports.translations[str]) {
      console.warn(str + ' does not have translation');
      return str;
    }
    
    if ((lang == 'eng' || lang == null) && typeof exports.translations[str] == 'string') return str;
    if (typeof exports.translations[str] == 'string') return exports.translations[str]; 

    return exports.translations[str][lang] || str;
  } else {
    return str.map(v => exports.translate(v))
  }
}

},{}],7:[function(require,module,exports){
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
    
  },
  "n04C": {
    
  },
  "n04D": {
    
  },
  "n04E": {
    
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

},{"./translations.js":6}],8:[function(require,module,exports){
let translator = require('../data/translations.js');
let items = require("../data/processed.js").items;
let chests = require('../data/processed.js').chests;
let types = require('../data/processed.js').types;

var columns = [];

$(document).on("language", function () {
    if ($("#table").length) {
      itemArray = Object.values(items);
      initializeRaids();
      initializeTable();  
    }
});

function getFilteredData () {
  var filters = {};
  
  if ($("#table thead tr .type select").val() != translator.translate("all")) {  
    filters.type = $("#table thead tr .type select").val().toLowerCase()
  } 

  if ($("#table thead tr .name select").val() != translator.translate("all")) {
    filters.color = $("#table thead tr .name select").val().toLowerCase()
  }
  
  if ($(".raid").val()!= translator.translate("all")) {
    filters.raid = $(".raid").val().toLowerCase()
  }
  
  return itemArray.filter(function(item) {
     if (filters.type && item.type.includes(filters.type) == false) return false;
     if (filters.color && item.color != filters.color) {
       if (filters.color.indexOf("red") != -1) {
         if (item.color != "red") return false;
         if (filters.color == "red-0" && item.label.indexOf("+") != -1) return false;
         if (filters.color == "red-1" && item.label.indexOf("+1") == -1) return false;
         if (filters.color == "red-2" && item.label.indexOf("+2") == -1) return false;
         if (filters.color == "red-3" && item.label.indexOf("+3") == -1) return false;
       } else return false
     }
     if (filters.raid && item.dropsArray().every(d => d.chest.parent.translatedLabel().toLowerCase() != filters.raid)) return false;
     return true;
  })
}

function initializeTable () {
  initializeColumns();
  $("#table").on("post-body.bs.table", function () {
    $('[data-toggle="tooltip"]').each(function(){
      $(this).tooltip({container: $(this)});
    })
  }).on("post-header.bs.table", function () {
    if($(this).find("thead tr .type select").length == 0) {
      $(this).find("thead tr .type").append("<div class = 'text-left'><select class = 'capitalize'>"+["all"].concat(types).map(v => "<option>"+translator.translate(v)+"</option>")+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
    if($(this).find("thead tr .name select").length == 0) {
      var options = [{l : "all", v : "all"}, {l: "god", v: "god"}, {l : "mythic +3", v : "red-3"}, {l : "mythic +2", v : "red-2"}, {l : "mythic +1", v : "red-1"}, {l : "mythic", v : "red-0"}, {l : "epic", v : "blue"}, {l : "legendary", v : "orange"}, {l : "unique", v : "purple"}, {l : "material", v : "black"}]
      options.forEach(v => v.l = translator.translate(v.l));
      $(this).find("thead tr .name").append("<div class = 'text-left'><select class='capitalize'>"+options.map(v => `<option class = '${v.v.split('-')[0]}' value='${v.v}'>${v.l}</option>`)+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
  });

  $('#table').bootstrapTable({columns : columns, data : itemArray, sortName : "label", pagination : true, search : true, locale: translator.lang() == "kor" ? "kor" : "en"});
  
  $(".raid").change(function(){
    $("#table").bootstrapTable("load", getFilteredData())
  })  
  
}

function initializeColumns() {
  columns = [
    {
      field : translator.lang() == "eng" ? "label" : "k_label",
      title : translator.translate("name"),
      sortable : true,
      formatter : function (value, item) {
        return item.html();
      },
      class : "name capitalize"
    },
    {
      field : "type",
      title : translator.translate("type"),
      sortable : true,
      class : "capitalize type",
      formatter: val => translator.translate(val)
    },
    {
      field : "actions",
      title : translator.translate("actions"),
      formatter : function (value, item) {
        var html = "";

        if (page == "custom-build" && ["weapon", "armor", "accessory", "helmet", "artifact", "auxiliary", "unleash"].indexOf(item.type) != -1) {
            html += `<button data-item="${item.id}" class = "btn btn-primary add-build">${translator.translate('add_build')}</button>`  
        }

        if (item.crafts) {
          html += `<button data-item="${item.id}" class = "btn btn-primary build-tree" data-toggle="modal" data-target="#item-tree-modal">${translator.translate('view build tree')}</button>`; 
        }

        return html;
      },
      class: "capitalize"
    },
    {
      field: "crafts",
      visible: false
    }
  ]
}


function initializeRaids () {
  let raids = new Set()
  raids.add(translator.translate('all'));
  
  chests.forEach(chest => {
    if (chest.parent.translatedLabel()) {
      raids.add(chest.parent.translatedLabel().toLowerCase());
    }
  });
  
  $(".raid").append(Array.from(raids).sort().map(v => $("<option>").text(v)));
}


},{"../data/processed.js":5,"../data/translations.js":6}],9:[function(require,module,exports){
let translate = require('../data/translations.js').translate;

$(function(){
  notifyNewChanges();
  setupChangeLanguage();
  
  $('[data-toggle=confirmation]').confirmation({
    rootSelector: '[data-toggle=confirmation]',
    btnOkLabel: translate("yes"),
    btnCancelLabel: translate("no")
    // other options
  });
  
})

function notifyNewChanges () {
  if (localStorage) {
    var lastVersion = localStorage.version;
    var currentVersion = config.version;

    if (lastVersion != null && currentVersion != lastVersion || (lastVersion == null && currentVersion == '1.4.3')) {
      var qty = 1;
      
      for (var i = 0; i < config.changeLog.length;i++) {
        if (config.changeLog[i].version == lastVersion) {
          qty = i;
          break;
        }
      }
      
      if (document.URL.includes("changelog") == false) {
        $(`<div class="alert alert-info text-center" role="alert">${qty} ${translate('new_versions')}. <a class = "btn btn-info" href = "/changelog">${translate('check_changes')}</a></div>`).prependTo('body').alert();
      }
      
      localStorage.version = currentVersion;
      
    }
  }
}

function setupChangeLanguage () {
  $(".language img").click(function(){
    if (config.lang != $(this).attr('class')) {
       window.location.href = window.location.href.replace(window.location.search, "") + "?lang=" + $(this).attr('class').replace("selected", "");
    }
  }) 

  $("." + config.lang).addClass('selected')
  
}
                              
function showError (err) {
  $("body").append(`<div class="alert alert-danger alert-dismissible fade show" role="alert">
                      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                      ${err}
                    </div>`)
}
},{"../data/translations.js":6}],10:[function(require,module,exports){
var main = {}
var switching = {}
let items = require('../data/processed').items;

$(document).on("click", ".add-build", function(){
  var item = $(this).data("item")
  addItem(item)
})

$(function(){
  if (window.data) {
    data.items.forEach(addItem);
    $("#title").val(data.title);
    $("#description").val(data.description);
  }
})

function addItem(item) {
  if (Object.keys(main).filter(v => items[v].type == items[item].type).length) {
    switching[item] = true  
  } else {
    main[item] = true;
  }
  refreshBuild()
}

function getTemplate (v) {
  return `<li data-item-id="${items[v].id}" data-item="${v}" class="list-group-item">
            ${items[v].html()}
            <button type="button" style="margin-left:10px" class="close" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </li>`
}

function refreshBuild() {
  $(".custom-build.main ul").empty().append(Object.keys(main).map(v => getTemplate(v)))
  $(".custom-build.switching ul").empty().append(Object.keys(switching).map(v => getTemplate(v)))
  $(".item-tooltip").tooltip({container: $('.custom-build'), placement: "bottom"});
  
  $(".close").click(function(){
    if ($(this).closest(".custom-build").hasClass("main")) {
      delete main[$(this).parent().data("item")];
    } else {
      delete switching[$(this).parent().data("item")];
    }
    refreshBuild();
  })
}

$(".get-url").click(function(){
  var ids = Object.keys(main).concat(Object.keys(switching)).map(v => items[v].id).join()
  var hash = btoa(ids)
  
  $(this).attr("href", hash)
})

$(".save-build").click(function(){
  var ids = Object.keys(main).concat(Object.keys(switching)).map(v => items[v].id)
  
  $(this).addClass("disabled").blur();
    
  fetch("/save-build", {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({items: ids, char: char, id: (window.data ? data._id : null), title: $("#title").val(), description: $("#description").val()})
  }).then(res=>res.json())
    .then(res => {
      if (res.error) {
        showError(res.error);
        $(".save-build").removeClass("disabled");
      } else {
        window.location.href = "/custom-build/" + res.id;
      }
    }).catch((err) => {
      showError(err);
      $(".save-build").removeClass("disabled")
    });
    
  return false;
})
},{"../data/processed":5}],11:[function(require,module,exports){
window.client = window.client || {}
Object.assign(window.client, {
  items: require('../data/processed.js').items,
  translator: require('../data/translations.js')
});

module.exports = {}
},{"../data/processed.js":5,"../data/translations.js":6}],12:[function(require,module,exports){
let items = require('../data/processed.js').items;
let translate = require('../data/translations.js').translate;

var simple_chart_config = {
      chart: {
          container: "#item-tree",
          rootOrientation: "EAST",
          nodeAlign: "BOTTOM",
          connectors: {
            type: "step",
            style: {
              "stroke-width": 2
            }
          },
          levelSeparation:    45,
      },
      nodeStructure: null
  };

$(function(){
  $('#item-tree-modal').on('shown.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var item = items[button.data('item')] // Extract info from data-* attributes
    simple_chart_config.nodeStructure = item.tree();

    var modal = $(this);
    modal.find(".modal-title").html(`${translate("Build Tree for")} <span class = '${item.color}'>${item.label}</span>(${item.materials().chance + '%' + translate("chance")})`)
    new Treant(simple_chart_config);
    $('#item-tree-modal').find(".item-tooltip").tooltip({container: $('#item-tree-modal'), placement: "bottom"});
  })

  $(".item-tooltip").tooltip({placement: "bottom"});  
  
});

},{"../data/processed.js":5,"../data/translations.js":6}]},{},[9,8,12,11,10]);
