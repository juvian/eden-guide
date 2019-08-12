var db = require("../utils/db");
var passwordHash = require('password-hash');
var translation = require("../data/translations");
var crypto = require("crypto");

module.exports = function(app){

  app.get("/logout", function (request, response, next) {
      db.users.update({username: request.session.username, token: request.session.token}, {$unset: {token: true}}, function(err) {
        if(err) next(new Error(err));
        request.session.token = null
        request.session.username = null   
        return response.redirect("/");
      })
  });
  
  app.get("/register", function (request, response) {
    if (response.locals.loggedIn) return response.redirect("/")
    response.render('register');
  });

  app.post("/register", function (request, response) {
    var username = request.body.username;
    var password = request.body.password;

    db.users.count({username: username}, function(err, count){
      if (count == 0) {
        var hash = passwordHash.generate(password);
        db.users.insert({username: username, password: hash, mod: false, admin: false});  
        return response.redirect("login")
      } else {
        response.locals.errors.push(username + " " + translation.translate("already exists", request.session.lang))
        return response.render("register")  
      }  
    })
  });
  
  app.get("/login", function (request, response) {
    if (response.locals.loggedIn) return response.redirect("/")
    return response.render("register");  
  });

  app.post("/login", function (request, response, next) {
    var username = request.body.username;
    var password = request.body.password;
    var ip = (request.headers['x-forwarded-for'] || request.connection.remoteAddress).split(",")[0];
    
    db.users.findOne({username: username}, function(err, record){
      if (err) next(new Error(err));  
      if (record == null) {
        response.locals.errors.push(translation.translate("bad-user", request.session.lang))
        return response.render("register")
      } else {
        
        if (passwordHash.verify(password, record.password) || record.password == 'reset') {
          var token = crypto.randomBytes(20).toString('hex');
          
          let updates = {token: token, ip: ip};
          if (record.password == 'reset') updates.password = passwordHash.generate(password);
          
          db.users.update({_id: record._id}, {$set: updates}, function(err) {
            if (err) next(new Error(err));  
            request.session.token = token;
            request.session.username = username;
            return response.redirect("/")
          })
        } else {
          response.locals.errors.push(translation.translate("bad-password", request.session.lang))
          return response.render("register")
        }
      }
    })
  });
  
  
}