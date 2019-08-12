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

