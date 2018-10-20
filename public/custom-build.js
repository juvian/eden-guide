var main = {}
var switching = {}

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
            ${getItemHtml(items[v])}
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