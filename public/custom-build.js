var build = {}

$(document).on("click", ".add-build", function(){
  var item = $(this).data("item")
  addItem(item)
})

function addItem(item) {
  build[item] = true
  refreshBuild()
}

function refreshBuild() {
  $(".custom-build ul").empty().append(Object.keys(build).map(v => `<li data-item="${v}" class="list-group-item">
                                                                      ${getItemHtml(items[v])}
                                                                      <button type="button" style="margin-left:10px" class="close" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                      </button>
                                                                    </li>`))
  $(".item-tooltip").tooltip({container: $('.custom-build'), placement: "bottom"});
  
  $(".close").click(function(){
    delete build[$(this).parent().data("item")];
    refreshBuild();
  })
}

$(".save-build").click(function(){
  var ids = Object.keys(build).map(v => items[v].id).sort().join()
  var hash = btoa(ids)
  
  $(this).attr("href", hash)
})

function saveBuild () {
  
}