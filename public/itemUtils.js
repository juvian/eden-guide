function getItemTree(itemId) {
  var item = items[itemId]
  return {
    innerHTML : getItemHtml(item),
    children : (item.materials || []).map(getItemTree)
  }
}

function getItemHtml(item){
  var itemInfo = getItemInfo(item);
  var dropInfo = getDropInfo(item);
  var txt = itemInfo + (itemInfo.trim() && dropInfo.trim() ? "<br/><br/>" : "") + dropInfo;
  return `<span class="${item.color} item-tooltip" data-toggle="tooltip" data-html="true" title="${txt}">${item.label}</span>`;
}

function toArr (smth) {
  if (smth == null) return []
  if (smth instanceof Array == false) return [smth]
  return smth
}

function getItemInfo (item) {
  var template = "";

  if (item.stats) {
    for (var stat in item.stats) {
      template += formatStat(stat, item.stats[stat]) + "<br/>";
    }
  }

  template += toArr(item.effects).join("<br/>");
  
  if(item.stats_points) {
    template += "<br/>Gives " + item.stats_points + " stats points"
  }

  return template.endsWith("<br/>") ? template.substring(0, template.lastIndexOf("<br/>")) : template

}

function getDropInfo (item) {
  var from = toArr(item.raid).concat(toArr(item.boss)).concat(toArr(item.chest)).filter(v => !!v);
  var chances = toArr(item.chances);

  if (!from[0]) return "";

  return from.map((f, i) => f + " (" + chances[i] + "% chance" + ")").join(", ")
}

function formatStat (stat, val) {
  if (stat == "atk") return "Attack : +" + val;
  else if (stat == "int") return "Intelligence : +" + val;
  else if (stat == "agi") return "Agility : +" + val;
  else if (stat == "str") return "Strength : +" + val;
  else if (stat == "damage_taken") return "Damage Taken : " + (val >= 0 ? "+" : "") + val + "%";
  else if (stat == "attack_speed") return "Attack Speed : +" + val + "%";
  else if (stat == "damage_increase") return "Damage increase : +" + val + "%";
  else if (stat == "hp") return "Hit Points : +"+val;
  else if (stat == "mp") return "Mana Points : +"+val;
  else if (stat == "movement_speed") return "Movement Speed : +"+val+ "%";
  else if (stat == "hp_regen") return "Hit Point Regeneration : +"+val + " per second";
  else if (stat == "hp_regen_percent") return "Hit Point Regeneration : +"+val + "% MAX HP per second";
  else if (stat == "armor") return "Armor : +" +val;
  else if (stat == "max_health") return "Max Hit Points : +" + val + "%";
  else if (stat == "enemy_armor") return "Enemy Armor : " + val + "%"; 
  else if (stat == "enemy_speed") return "Enemy Speed : " + val + "%";
  else if (stat == "magic_resistance") return "Magic Resistance : +" + val + "%";
  else if (stat == "max_int") return "Intelligence increase : +" + val + "%";

  else console.warn("stat not defined : " + stat)
}