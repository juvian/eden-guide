module.exports = function(app){

  app.get("/utils/commands", function (request, response, next) {
    return response.render('commands');
  });
  
  app.get("/utils/script-commands", function(req, res) {
    return res.render('script-commands');
  });
  
}