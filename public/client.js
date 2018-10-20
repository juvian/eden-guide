var itemArray;
var columns = [
  {
    field : "label",
    title : translate("Name"),
    sortable : true,
    formatter : function (value, item) {
      return getItemHtml(item);
    },
    class : "name"
  },
  {
    field : "type",
    title : translate("Type"),
    sortable : true,
    class : "type"
  },
  {
    field : "actions",
    title : translate("Actions"),
    formatter : function (value, item) {
      var html = "";

      if (page == "custom-build" && translate(["weapon", "armor", "accessory", "helmet", "artifact", "auxiliary"]).indexOf(item.type) != -1) {
          html += `<button data-item="${item.key}" class = "btn btn-primary add-build">${translate('add_build')}</button>`  
      }
      
      if (item.materials) {
        html += `<button data-item="${item.key}" class = "btn btn-primary build-tree" data-toggle="modal" data-target="#item-tree-modal">${translate('View Build Tree')}</button>`; 
      }
      
      return html;
    }
  },
  {
    field: "materials",
    visible: false,
    formatter: function (val) {
      if (val) return val.map(v => items[v].label).toString();
      return '';
    }
  }
]


$(function(){
    itemArray = Object.keys(items).filter(k => !items[k].disabled).map(v => {items[v].key = v; return items[v]});
    initializeRaids();
    initializeTable();
})

function getFilteredData () {
  var filters = {};
  
  if ($("#table thead tr .type select").val() != translate("All")) {  
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
    $('[data-toggle="tooltip"]').each(function(){
      $(this).tooltip({container: $(this)});
    })
  }).on("post-header.bs.table", function () {
    if($(this).find("thead tr .type select").length == 0) {
      $(this).find("thead tr .type").append("<div class = 'text-left'><select>"+["All", "Weapon", "Armor", "Accessory", "Helmet", "Artifact", "Auxiliary","Material", "Stats", "Chest"].map(v => "<option>"+translate(v)+"</option>")+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
    if($(this).find("thead tr .name select").length == 0) {
      var options = [{l : "All", v : "All"}, {l: "God", v: "god"}, {l : "Mythic +3", v : "red-3"}, {l : "Mythic +2", v : "red-2"}, {l : "Mythic +1", v : "red-1"}, {l : "Mythic", v : "red-0"}, {l : "Epic", v : "blue"}, {l : "Legendary", v : "orange"}, {l : "Unique", v : "purple"}, {l : "Material", v : "black"}]
      options.forEach(v => v.l = translate(v.l));
      $(this).find("thead tr .name").append("<div class = 'text-left'><select>"+options.map(v => `<option class = '${v.v.split('-')[0]}' value='${v.v}'>${v.l}</option>`)+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
  });

  $('#table').bootstrapTable({columns : columns, data : itemArray, sortName : "label", pagination : true, search : true, locale: (config.lang == 'eng' ? 'en' : 'kr')});
  
  $(".raid").change(function(){
    $("#table").bootstrapTable("load", getFilteredData())
  })  
  
}



function initializeRaids () {
  var raids = ["Choose raid / Boss / Chest",
              "Amon of Hellfire",
              "Archangel of Valor",
              "Archangel Treasure Chest",
              "Archangel’s Assistance",
              "Archangel’s Trinket",
              "Avatar of Insanity",
              "Beresa of the Black Earth",
              "Belial of Pain",
              "Black Soul Stone",
              "Blue Dragon",
              "Celestial Waterstone",
              "Devil Lord Hellgainer",
              "Devil of Agony’s Treasure Chest",
              "Devil of Despair",
              "Destroyer",
              "Dwarven Siege Machine",
              "Elemental Treant",
              "Heaven's Guardian",
              "Mother Tree",
              "Silverback Wolf",
              "Remnants of the Archdemon",
              "Revenant of Meditation",
              "Sealed God of Destruction"
              ]
  
  $(".raid").append(raids.map(v => $("<option>").text(translate(v))));
}

