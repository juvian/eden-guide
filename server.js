// server.js
// where your node app starts

// init project
var express = require('express');
var exphbs  = require('express-handlebars');
var cookieSession = require('cookie-session')

var app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['lang'],
  maxAge: 24 * 60 * 60 * 1000 * 1000 // 1000 days
}))

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

var types = ["weapon", "armor", "accessory", "helmet", "artifact", "auxiliary"];
var builds = getConfig('public/builds.json');
var changeLog = getConfig('public/changelog.json');

app.locals.changeLog = changeLog
app.locals.version = changeLog[0].version;

eval(fs.readFileSync('public/translations.js')+'');
eval(fs.readFileSync('public/items.js')+'');
eval(fs.readFileSync('public/itemUtils.js')+'');

var serverRender = true;
var k_items =  Object.assign({}, items);
checkLanguage(k_items, "kor");

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
        item: function(item, lang) {
          return getItemHtml(item, 1, lang);
        },
        getImage : function(build) {
          if (build.images.length == 0) return "";
          return build.images[Math.floor(Math.random()*build.images.length)]
        },
        fullType: function(str, lang){
          if (str == "int") return translate("Intelligence", lang);
          else if (str == "agi") return translate("Agility", lang);
          else if (str == "str") return translate("Strength", lang);
        },
        toJSON: function (obj) {
          return JSON.stringify(obj, null, 3);
        },
        text: function (str, lang) {
          return translate(str, lang)
        }
    },
  partialsDir  : [__dirname + '/partials']
});

app.engine('handlebars', hbs.engine);

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.set('view engine', 'handlebars');

var languageSetting = function (req, res, next) {
  if (req.query && req.query.lang) {
    res.locals.lang = req.query.lang;
  } else {
    res.locals.lang = req.session.lang || 'eng';
  }
  
  req.session.lang = res.locals.lang;
  
  next();
}

app.use(languageSetting)


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.render('items', {layout : 'items'});
});

app.get("/test", function (request, response) {
  response.render('items', {layout : 'items'});
});

app.get("/changelog", function (request, response) {
  response.render('changelog');
});

app.get("/chars", function (request, response) {
  response.render('chars', {layout : 'char-build', chars: Object.keys(builds), builds: builds, heroTypes: ["str", "agi", "int"]});
});

app.get("/chars/:char/custom-build", function (request, response) {
  request.params.char = request.params.char.toLowerCase();
  if (builds.hasOwnProperty(request.params.char) == false) {
    response.redirect("/chars");
  } else {
    response.render('create-build', {layout: 'custom-build'});    
  }
});

app.get("/chars/:char/:code?", function (request, response) {
  request.params.char = request.params.char.toLowerCase(); 
  if (builds.hasOwnProperty(request.params.char) == false) {
    response.redirect("/chars");
  } else {
    var build = builds[request.params.char];    

    if (request.params.code) {
      build = processCode(request.params.code, build);
    }
    
    response.render('char', {layout: 'char-build', items: (request.session.lang == "kor" ? k_items : items), build: build, types: types});    
  }
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


function processCode (code, build) {
  var ids = Buffer.from(code, 'base64').toString().split(",")
  build = JSON.parse(JSON.stringify(build)); 
  console.log(build)
  
  types.forEach(type => build[type] = [])
  
  for (var item in items) {
    if (ids.indexOf(items[item].id) != -1) {
      build[items[item].type].push(item)
    }
  }
  
  return build
}

var chunks = function(array, size) {
  var results = [];
  while (array.length) {
    results.push(array.splice(0, size));
  }
  return results;
};