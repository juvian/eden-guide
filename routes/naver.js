module.exports = function(app){
  app.get("/naver/login", function (request, response) {
    response.render('naver', {login:true});
  });
  app.get("/naver/code", function (request, response) {
    response.render('naver', {login:false});
  });
}