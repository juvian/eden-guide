
var translation = require('../data/translations');
var items = require('../data/processed').items;
var builds = require("../data/builds").builds;
var charIdToName = require("../data/builds").idToName;
var exphbs  = require('express-handlebars');

module.exports = function (app) {

  var hbs = exphbs.create({
      // Specify helpers which are only registered on this instance.
      helpers: {
          eq: function (v1, v2) {
            return v1 === v2;
          },
          ne: function (v1, v2) {
              return v1 !== v2;
          },
          lt: function (v1, v2) {
              return v1 < v2;
          },
          gt: function (v1, v2) {
              return v1 > v2;
          },
          lte: function (v1, v2) {
              return v1 <= v2;
          },
          gte: function (v1, v2) {
              return v1 >= v2;
          },
          and: function (v1, v2) {
              return v1 && v2;
          },
          or: function (v1, v2) {
              return v1 || v2;
          },
          not: function (v1) {
            return !v1
          },
          item: function(item, lang) {
            return item.html(1, lang);
          },
          getImage : function(build) {
            if (build.images.length == 0) return "";
            return build.images[Math.floor(Math.random()*build.images.length)]
          },
          fullType: function(str, lang){
            if (str == "int") return translation.translate("intelligence");
            else if (str == "agi") return translation.translate("agility");
            else if (str == "str") return translation.translate("strength");
          },
          toJSON: function (obj) {
            return JSON.stringify(obj, null, 3);
          },
          text: function (str, lang) {
            return translation.translate(str, lang)
          },
          getCharImage: function (char) {
            return hbs.helpers.getImage(builds[charIdToName[char]])
          },
          getCharName: function (char, lang) {
            return translation.translate(charIdToName[char], lang)
          },
          json: function (obj) {
            return JSON.stringify(obj)
          },
          size: function (arr) {
            return arr ? arr.length : 0;
          }
      },
    partialsDir  : ['./partials'],
    defaultLayout: null
  });

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

}