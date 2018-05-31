var db = require("../utils/db");
var translation = require("../public/translations");
var items = require("../public/items").items;
var builds = require("../public/builds").builds;
var charIdToName = require("../public/builds").idToName;
var itemIdToName = require("../public/items").idToName;

var k_items =  JSON.parse(JSON.stringify(items));
translation.checkLanguage(k_items, "kor");
var types = ["weapon", "armor", "accessory", "helmet", "artifact", "auxiliary"];
var middlewares = require("../utils/middlewares");


module.exports = function (app) {
  app.get("/chars/:char/custom-build", middlewares.validChar, function (request, response) {
    response.render('create-build', {layout: 'custom-build', char: builds[request.params.char].id});    
  });

  app.get("/chars/:char/builds", middlewares.validChar, function (request, res, next) {    
    db.builds.find({char: res.locals.char, status: "public"}, function (err, records) {
      if (err) return next(new Error(err))
      return res.render("builds", {builds: records.sort((a, b) => Object.keys(a.favorites).length - Object.keys(b.favorites).length)})  
    })
  }); 
  
  app.get("/chars/:char/:code?", middlewares.validChar, function (request, response) {
    var char = JSON.parse(JSON.stringify(builds[request.params.char]));    

    if (request.params.code) {
      char.items = processCode(request.params.code).items;
    }

    char.items = char.items.map(v => itemIdToName[v])
    response.render('char', {layout: 'char-build', items: (request.session.lang == "kor" ? k_items : items), data: char,  types: types, byType: getItemsByType(char)});    
  });


  app.get("/my-builds", middlewares.authenticate, function (req, res) {
    db.builds.find({username: res.locals.user.username}, function (err, records) {
      if (err) return next(new Error(err))
      return res.render("builds", {builds: records, page: "my-builds"})  
    })
  });
  
  app.get("/pending-approval", middlewares.authenticate, function (req, res, next) {
    if (!res.locals.user.mod) next(new Error(translation.translate('invalid-action', req.session.lang)));
      db.builds.find({status: "pending"}, function (err, records) {
        if (err) return next(new Error(err))
        return res.render("builds", {builds: records, page: "waiting-approval"})  
      })  
  });

 
  app.get("/favorites", middlewares.authenticate, function (req, res, next) {
    var find = {}
    
    find["favorites." + res.locals.user._id] = true;
    
    db.builds.find(find, function (err, records) {
      if (err) return next(new Error(err))
      return res.render("builds", {builds: records})  
    })
  }) 

  
  app.get("/custom-build/:id", middlewares.validBuild, middlewares.getUser, function (req, res) {
      var build = res.locals.build;
      var char = builds[charIdToName[build.char]];
      var canEdit = res.locals.loggedIn && req.session.username == build.username;  
      var isFavorite = res.locals.user && res.locals.build.favorites && res.locals.build.favorites[res.locals.user._id];

      build.items = build.items.map(v => itemIdToName[v]);
      
      return res.render("char", {layout: "char-build", items: (req.session.lang == "kor" ? k_items : items), data: Object.assign({}, char, build), byType: getItemsByType(build), types: types, canEdit: canEdit, isFavorite: isFavorite})
  });
  

  app.get("/custom-build/:id/delete", middlewares.authenticate, middlewares.validBuild, function (req, res, next) {
    if (res.locals.user.username != res.locals.build.username) {
      return next(new Error(translation.translate("not-owner")));
    }
    
    db.builds.remove({_id: req.params.id, username: res.locals.user.username}, function (err, build) {
      if (err) return next(new Error(err))
      return res.redirect("/my-builds");
    })
  });

  app.get("/custom-build/:id/edit", middlewares.authenticate, middlewares.validBuild, function (req, res) {
    var build = res.locals.build;
    var char = builds[charIdToName[build.char]];
    build.items = build.items.map(v => itemIdToName[v]);
    
    return res.render("create-build", {layout: 'custom-build', build: build});
  });  
  
  app.post("/custom-build/:id/favorite", middlewares.authenticate, middlewares.validBuild, function (req, res, next) {
    middlewares.favorite(req, res, next, true);
  });

  app.post("/custom-build/:id/unfavorite", middlewares.authenticate, middlewares.validBuild, function (req, res, next) {
    middlewares.favorite(req, res, next, false);
  });
  
  app.post("/save-build", middlewares.authenticate, middlewares.getBuild, function (req, res, next) {
    if (req.body.id == null) {  
      db.builds.insert({items: req.body.items, username: res.session.username, char: req.body.char, status: "private", description: req.body.description, title: req.body.title, favorites: {}}, function(err, build){
        if (err) return next(new Error(err));
        return res.send({id: build._id})
      })
    } else {
      var itemsChanged = res.locals.build.items.sort().join("") != req.body.items.sort().join("");
      var changes = {items: req.body.items, description: req.body.description, title: req.body.title}
      
      if (itemsChanged) {
        if(res.locals.build.status == "public") changes.status = "private";
      }

      db.builds.update({username: req.session.username, _id: req.body.id}, {$set: changes}, function(err, num) {
        if (err) return next(new Error(err));
        if (num == 0) return next(new Error(translation.translate("not-owner", req.session.lang)));
        return res.send({id: req.body.id})
      });
    }
  });
  
  
  app.get("/custom-build/:id/public", middlewares.authenticate, middlewares.validBuild, function (req, res, next) {
    if (res.locals.build.status != 'private') next(new Error(translation.translate("invalid-action", req.session.lang)));
    middlewares.changeStatus(req, res, next, "pending")
  });

  app.get("/custom-build/:id/approve", middlewares.authenticate, middlewares.validBuild, function (req, res, next) {
    middlewares.changeStatus(req, res, next, "public")
  });
 
  app.get("/custom-build/:id/reject", middlewares.authenticate, middlewares.validBuild, function (req, res, next) {
    middlewares.changeStatus(req, res, next, "private")
  });  
  
  function processCode (code) {
    var ids = Buffer.from(code, 'base64').toString().split(",")
    return {items: ids}
  }
  
  function getItemsByType (build) {
    var byType = {};
    
    for(var i = 0; i < build.items.length;i++) {
      var item = items[build.items[i]];
      if (!byType[item.type]) {
        byType[item.type] = {
          main: null,
          switching: []
        }
      }
      if (byType[item.type].main) {
        byType[item.type].switching.push(build.items[i]);
      } else {
        byType[item.type].main = build.items[i]
      }
    }
    
    return byType;
  }
}