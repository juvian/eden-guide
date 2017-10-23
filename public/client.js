// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
var itemArray;
var columns = [
  {
    field : "label",
    title : "Name",
    sortable : true,
    formatter : function (value, item) {
      return `<b class = '${item.color}' data-toggle="tooltip" data-html="true" title="${getItemInfo(item)}">${value}</b>`
    },
    class : "name"
  },
  {
    field : "type",
    title : "Type",
    sortable : true,
    class : "type"
  },
  {
    field : "materials",
    title : "Materials",
    formatter : function (value, item) {
      return value ? getMaterials(item).materials.map(v => `<b class = '${items[v.item].color}'>${items[v.item].label + (v.qty > 1 ? ' x' + v.qty : '')}</b>`).join("<b>, </b>") + `<b>  (</b><a  class = 'all-mats' data-toggle="tooltip" data-html="true" title="${getMaterials(item).expanded.map(v => '<b class = \''+items[v.item].color+'\'>' + items[v.item].label + ' x' + v.qty + '</b>').join('<br/>')}">view base materials</a><b>)</b>` : "";
    }
  },
  {
    field : "raid",
    title : "Drops From",
    formatter : function (value, item) {
      return dropText(item);
    }
  }
]

function dropText (item) {
  var from = toArr(item.raid).concat(toArr(item.boss)).concat(toArr(item.chest)).filter(v => !!v);
  var chances = toArr(item.chances);

  if (!from[0]) return "";

  return from.map((f, i) => f + " (" + chances[i] + "% chance" + ")").join(", ")
}

function toArr (smth) {
  if (smth == null) return []
  if (smth instanceof Array == false) return [smth]
  return smth
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

function getItemInfo (item) {
  var template = "";

  if (item.stats) {
    for (var stat in item.stats) {
      template += formatStat(stat, item.stats[stat]) + "<br/>";
    }
  }

  template += toArr(item.effects).concat(toArr(item.stats_points).map(v => "Gives " + item.stats_points + " stats points")).join("<br/>")

  return template

}

function getMaterials (item) {
  if (typeof item == "string") item = items[item];

  var result = {materials : [], expanded : []};

  if (!item.materials || !item.materials.length) return result;

  var needed = {}

  for (var i = 0; i < item.materials.length; i++) {
    needed[item.materials[i]] = (needed[item.materials[i]] || 0) + 1;
  }

  for (var mat in needed) {
    result.materials.push({item : mat, qty : needed[mat]});
  }

  needed = result.materials.reduce(function(obj, material) {
    var mats = getMaterials(material.item).expanded;

    mats.forEach(function(mat) {
      obj[mat.item] = (obj[mat.item] || 0) + mat.qty * material.qty;  
    });

    if (mats.length == 0) obj[material.item] = (obj[material.item] || 0) + material.qty;

    return obj;
  }, {})

  for (mat in needed) {
    result.expanded.push({item : mat, qty : needed[mat]});
  }			


  return result;
}

function getStats (items) {
  return items.reduce(function(obj, item) {
    if (item.stats) {
      for (var stat in item.stats) {
        obj[stat] = (obj[stat] || 0) + item.stats[stat];
      }
    }
  }, {})
}

$(function(){
    itemArray = Object.keys(items).filter(k => !items[k].disabled).map(v => items[v]);
    initializeTable();
})

function getFilteredData () {
  var filters = {};
  
  if ($("#table thead tr .type select").val() != "All") {  
    filters.type = $("#table thead tr .type select").val().toLowerCase()
  } 

  if ($("#table thead tr .name select").val() != "All") {
    filters.color = $("#table thead tr .name select").val().toLowerCase()
  }
  
  if ($(".raid").val() != $(".raid option:eq(0)").val()) {
    filters.raid = $(".raid").val()
  }
  return itemArray.filter(function(item) {
     if (filters.type && item.type != filters.type) return false;
     if (filters.color && item.color != filters.color) {
       if (filters.color.indexOf("red") != -1) {
         if (item.color != "red") return false;
         if (filters.color == "red-0" && item.label.indexOf("+") != -1) return false;
         if (filters.color == "red-1" && item.label.indexOf("+1") == -1) return false;
         if (filters.color == "red-2" && item.label.indexOf("+2") == -1) return false;
         if (filters.color == "red-3" && item.label.indexOf("+3") == -1) return false;
       } else return false
     }
     if (filters.raid && (item.boss != filters.raid && (!item.raid || item.raid.indexOf(filters.raid) == -1) && (!item.chest || item.chest.indexOf(filters.raid) == -1))) return false;
     return true;
  })
}

function initializeTable () {
  $("#table").on("post-body.bs.table", function () {
    $('[data-toggle="tooltip"]').tooltip();
  }).on("post-header.bs.table", function () {
    if($(this).find("thead tr .type select").length == 0) {
      $(this).find("thead tr .type").append("<div class = 'text-left'><select>"+["All", "Weapon", "Armor", "Accessory", "Helmet", "Artifact", "Auxiliary","Material", "Stats", "Chest"].map(v => "<option>"+v+"</option>")+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
    if($(this).find("thead tr .name select").length == 0) {
      var options = [{l : "All", v : "All"}, {l : "Mythic (Red) +3", v : "red-3"}, {l : "Mythic (Red) +2", v : "red-2"}, {l : "Mythic (Red) +1", v : "red-1"}, {l : "Mythic (Red)", v : "red-0"}, {l : "Epic (Light Blue)", v : "blue"}, {l : "Legendary (Orange)", v : "orange"}, {l : "Unique (Purple)", v : "purple"}, {l : "Materials (Black)", v : "black"}]
      $(this).find("thead tr .name").append("<div class = 'text-left'><select>"+options.map(v => `<option class = '${v.v.split('-')[0]}' value='${v.v}'>${v.l}</option>`)+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
  });

  $('#table').bootstrapTable({columns : columns, data : itemArray, sortName : "label", pagination : true, search : true});
  
  $(".raid").change(function(){
    $("#table").bootstrapTable("load", getFilteredData())
  })  
  
}