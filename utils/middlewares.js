var db = require("./db");
var translation = require('../data/translations');
var builds = require("../data/builds").builds;

module.exports.getUser = function (req, res, next) {
  db.users.findOne({username: req.session.username, token: req.session.token || "a"}, function (err, user) {
    if (err) return next(new Error(err));
    res.locals.user = user;
    next();
  });
}

module.exports.authenticate = function(req, res, next) {
  module.exports.getUser(req, res, function(err) {
    if (err) return next(err);
    if (res.locals.user == null) {
      return next(new Error(translation.translate("not-logged-in", req.session.lang)))
    }
    req.session.isAdmin = res.locals.user.admin
    req.session.isMod = res.locals.user.mod
    next();  
  });
}

module.exports.getBuild = function (req, res, next) {
  db.builds.findOne({_id: req.params.id || req.body.id}, function (err, build) {
    if (err) return next(new Error(err));
    res.locals.build = build;  
    next();
  });
}

module.exports.validBuild = function (req, res, next) {
  module.exports.getBuild(req, res, function(err) {
    if (err) return next(err);
    if (res.locals.build == null) {
      return next(new Error(translation.translate("invalid-id", req.session.lang)))
    }
    next();  
  });
}

module.exports.changeStatus = function (req, res, next, status) {
  if (!res.locals.user.mod) next(new Error(translation.translate('invalid-action', req.session.lang)));

  db.builds.update({_id: res.locals.build._id}, {$set: {status: status}}, function(err, count){
    if (err) return next(new Error(err));
    if (count == 0) return next(new Error(translation.translate("invalid-action", req.session.lang)));
    return res.redirect("/my-builds");
  });
}

module.exports.favorite = function (req, res, next, fav) {
  if (res.locals.build.username == res.locals.user.username) next(new Error(translation.translate('invalid-action', req.session.lang)));

  db.builds.update({_id: res.locals.build._id}, (fav ? {$addToSet: {favorites: res.locals.user._id}} : {$pull: {favorites: res.locals.user._id}}), function (err) {
    if (err) return next(new Error(err));
    res.send("");
  });
}



module.exports.validChar = function (req, res, next) {
  req.params.char = req.params.char.toLowerCase();
  
  if (builds.hasOwnProperty(req.params.char) == false) {
    return res.redirect("/chars");
  } 
  
  res.locals.char = builds[req.params.char].id;
  next();
}

module.exports.isAdmin = function (req, res, next) {
  if (!res.locals.user.mod) next(new Error(translation.translate('invalid-action', req.session.lang)));
  next();
}