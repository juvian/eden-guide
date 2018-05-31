var build = {}

$(document).on("click", ".add-build", function(){
  var item = $(this).data("item")
  addItem(item)
})

$(function(){
  if (data) {
    data.items.forEach(addItem);
    $("#title").val(data.title);
    $("#description").val(data.description);
  }
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

$(".get-url").click(function(){
  var ids = Object.keys(build).map(v => items[v].id).join()
  var hash = btoa(ids)
  
  $(this).attr("href", hash)
})

$(".save-build").click(function(){
  var ids = Object.keys(build).map(v => items[v].id)
  
  $(this).addClass("disabled").blur();
    
  fetch("/save-build", {
    method: 'post',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify({items: ids, char: char, id: (data ? data._id : null), title: $("#title").val(), description: $("#description").val()})
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