$(function(){
  notifyNewChanges();
  setupChangeLanguage();
})

function notifyNewChanges () {
  if (localStorage) {
    var lastVersion = localStorage.version;
    var currentVersion = config.version;

    if (lastVersion != null && currentVersion != lastVersion || (lastVersion == null && currentVersion == '1.4.3')) {
      var qty = 1;
      
      for (var i = 0; i < config.changeLog.length;i++) {
        if (config.changeLog[i].version == lastVersion) {
          qty = i;
          break;
        }
      }
      
      if (document.URL.includes("changelog") == false) {
        $(`<div class="alert alert-info text-center" role="alert">${qty} ${translate('new_versions')}. <a class = "btn btn-info" href = "/changelog">${translate('check_changes')}</a></div>`).prependTo('body').alert();
      }
      
      localStorage.version = currentVersion;
      
    }
  }
}

function setupChangeLanguage () {
  $(".language img").click(function(){
    if (config.lang != $(this).attr('class')) {
       window.location.href = window.location.href.replace(window.location.search, "") + "?lang=" + $(this).attr('class').replace("selected", "");
    }
  }) 

  $("." + config.lang).addClass('selected')
  
}
                              
