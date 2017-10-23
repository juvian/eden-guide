// server.js
// where your node app starts

// init project
var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();


var fs = require("fs"),
    json;

function readJsonFileSync(filepath, encoding){

    if (typeof (encoding) == 'undefined'){
        encoding = 'utf8';
    }
    var file = fs.readFileSync(filepath, encoding);
    return JSON.parse(file);
}

function getConfig(file){

    var filepath = __dirname + '/' + file;
    return readJsonFileSync(filepath);
}

var builds = getConfig('public/builds.json');
eval(fs.readFileSync('public/items.js')+'');
eval(fs.readFileSync('public/itemUtils.js')+'');


var hbs = exphbs.create({
    // Specify helpers which are only registered on this instance.
    helpers: {
        item: function(id) {
          return items[id];  
        },
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
        item: function(item) {
          return getItemHtml(item);
        },
        getImage : function(build) {
          if (build.images.length == 0) return "";
          return build.images[Math.floor(Math.random()*build.images.length)]
        },
        translate: function(str){
          if (str == "int") return "intelligence";
          else if (str == "agi") return "agility";
          else if (str == "str") return "strength";
        }
    }
});

app.engine('handlebars', hbs.engine);


// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('view engine', 'handlebars');


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/changelog", function (request, response) {
  response.sendFile(__dirname + '/views/changelog.html');
});

app.get("/chars", function (request, response) {
  response.render('chars', {layout : 'char-build', chars: Object.keys(builds), builds: builds, heroTypes: ["str", "agi", "int"]});
});

app.get("/chars/:char", function (request, response) {
  request.params.char = request.params.char.toLowerCase();
  if (builds.hasOwnProperty(request.params.char) == false) {
    response.redirect("/chars");
  } else {
    response.render('char', {layout: 'char-build', items: items, build: builds[request.params.char], types: ["weapon", "armor", "accessory", "helmet", "artifact", "auxiliary"]});    
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
