$(function(){
  $(".star").click(function(){
    
    if ($(this).hasClass("disabled")) return false;
    
    fetch($(this).data("url") + ($(this).find(".fa").hasClass("far") ? "favorite" : "unfavorite"), {
      method: 'post',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({favorite: $(this).find(".fa").hasClass("far")})
    }).then(() => $(".star").removeClass("disabled"))
    .catch((err) => {
        showError(err);
        $(".star").removeClass("disabled")
    });
    
    $(".favorites").text(Number($(".favorites").text()) + ($(this).find(".fa").hasClass("far") ? 1 : -1))
    
    $(this).find(".fa").toggleClass("far");
    $(this).addClass("disabled").blur();

    return false;  
  });
})