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
    modal.find(".modal-title").html(`${translate("build tree for")} <span class = '${item.color}'>${item.label}</span>(${item.materials().chance + '%' + translate("chance")})`)
    new Treant(simple_chart_config);
    $('#item-tree-modal').find(".item-tooltip").tooltip({container: $('#item-tree-modal'), placement: "bottom"});
  })

  $(".item-tooltip").tooltip({placement: "bottom"});  
  
});
