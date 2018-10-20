module.exports = function(app){

  app.get("/utils/commands", function (request, response, next) {
    return response.render('commands');
  });
  
}