let translator = require('../data/translations.js');
let items = require("../data/processed.js").items;
let chests = require('../data/processed.js').chests;
let types = require('../data/processed.js').types;
let tags = require('../data/processed.js').tags;

var columns = [];
let tagFilters = new Set();

$(document).on("language", function () {
    if ($("#table").length && window.itemArray === undefined) {
      itemArray = Object.values(items).filter(i => i.label);
      initializeRaids();
      initializeTable();
      $(".bugged").text(translator.translate('bugged').replace("{0}", itemArray.filter(i => i.bugged).length))
    }
});

function getFilteredData () {
  var filters = {};
  
  if ($("#table thead tr .type select").val() != "all") {  
    filters.type = $("#table thead tr .type select").val().toLowerCase()
  } 
  
  if ($(".raid").val()!= translator.translate("all")) {
    filters.raid = $(".raid").val().toLowerCase()
  }
  
  return itemArray.filter(function(item) {
     if (filters.type && item.type != filters.type) return false;
     if (tagFilters.size && item.tags.every(tag => tagFilters.has(tag) == false)) return false;
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
      $(this).find("thead tr .type").append("<div class = 'text-left'><select class = 'capitalize'>"+["all"].concat(types).map(v => "<option value='"+v+"'>"+translator.translate(v)+"</option>").join('')+"</select></div>").find("select").on("change", function () {
        $("#table").bootstrapTable("load", getFilteredData())
      })
    }
    if($(this).find("thead tr .name select").length == 0) {
      var options = [{l: translator.translate("all"), v: "all"}].concat(tags.map(c => ({l: translator.translate(c), v: c})).sort((a, b) =>  a.l.localeCompare(b.l)));
      $(this).find("thead tr .name").append("<div class = 'text-left'><select class='capitalize'>"+options.map(v => `<option class = '${v.v.split('-')[0]}' value='${v.v}'>${v.l}</option>`)+"</select></div>").find("select").on("change", function () {
        tagFilters.add($(this).val());
        refreshFilters();
      })
    }
  });

  $('#table').bootstrapTable({columns : columns, data : itemArray, sortName : "label", pagination : true, search : true, locale: translator.lang() == "kor" ? "kor" : "en"});
  
  $(".raid").change(function(){
    $("#table").bootstrapTable("load", getFilteredData())
  })  
  
  $(".fixed-table-toolbar").addClass("form-row").on("click", ".close", function(){
    let tag = $(this).closest(".tag").data("tag");
    tagFilters.delete(tag);
    refreshFilters();
    return false;
  });
  
  $(".search").addClass("col-3");
  refreshFilters();
}

function refreshFilters() {
  tagFilters.delete('all');
  
  $(".fixed-table-toolbar").children(".tags").remove();
  let tagsEl = $("<div class='tags col-9 my-auto'></div>");
  
  for (let tag of tagFilters) {
    tagsEl.append(`<span data-tag="${tag}" class="tag badge badge-pill badge-primary">
                    <span>${translator.translate(tag)}</span>
                    <button type="button" class="close" aria-label="Close">
                      <span class="close" aria-hidden="true">&times;</span>
                    </button>
                  </span>`);
  }
  
  $(".fixed-table-toolbar").prepend(tagsEl);  
  
  $("#table").bootstrapTable("load", getFilteredData())
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

        if (page == "custom-build" && ["weapon", "armor", "accessory", "helmet", "artifact", "auxiliary", "unleash", "token"].indexOf(item.type) != -1) {
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
      visible: false,
      formatter: function(val, item) {
        if (val) {
          return JSON.stringify(item.tree())
        }
      }
    },
    {
      field: "id",
      visible: false
    }
  ]
}


function initializeRaids () {
  let raids = new Set()  
  chests.forEach(chest => {
    if (chest.parent.translatedLabel()) {
      raids.add(chest.parent.translatedLabel().toLowerCase());
    }
  });
  
  $(".raid").append([translator.translate('all')].concat(Array.from(raids).sort()).map(v => $(`<option>`).text(v)));
}

