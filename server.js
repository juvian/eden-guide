// server.js
// where your node app starts

// init project
var express = require('express');
var exphbs  = require('express-handlebars');
var cookieSession = require('cookie-session')
var Datastore = require('nedb')
var bodyParser = require('body-parser')
var fs = require("fs"),
    json;
var passwordHash = require('password-hash');

var db = {}
db.users = new Datastore({ filename: '.data/users', autoload: true });
db.builds = new Datastore({ filename: '.data/builds', autoload: true });


var app = express();

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
  name: 'session',
  keys: ['lang', 'token', 'username'],
  maxAge: 24 * 60 * 60 * 1000 * 1000 // 1000 days
}))

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}

function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}

app.use(clientErrorHandler)
app.use(errorHandler)



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
var k_items =  JSON.parse(JSON.stringify(items));
checkLanguage(k_items, "kor");

(function noRepeatedIds () {
  var itemIdsids = {}
  for (var item in items) {
    if (itemIdsids[items[item].id] || itemIdsids[items[item].label] || itemIdsids[items[item].k_label]) console.error("repeated item id", items[item].id);
    itemIdsids[items[item].id] = true;
    itemIdsids[items[item].label] = true;
    itemIdsids[items[item].k_label] = true;
  }
}());

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
app.use(express.static('public', {
    setHeaders: function (res, path) {
        if (path.indexOf('.js') != -1) {
          res.header("Content-Type", "application/javascript; charset=utf-8");
        }
    }
}));

app.set('view engine', 'handlebars');

var handleLocals = function (req, res, next) {
  if (req.query && req.query.lang) {
    res.locals.lang = req.query.lang;
  } else {
    res.locals.lang = req.session.lang || 'eng';
  }
  
  req.session.lang = res.locals.lang;
  res.locals.errors = res.locals.errors || []
  res.locals.loggedIn = !!req.session.token && !!req.session.username
  res.locals.session = req.session
  res.locals.url = req.url.replace("/", "")
  
  if (req.url.indexOf("roselinde") != -1) return res.redirect(req.url.replace("roselinde", "darkness"))
  
  next();
}


app.use(handleLocals)


// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.render('items', {layout : 'items'});
});

app.get("/logout", function (request, response) {
  request.session.token = null
  request.session.username = null
  return response.redirect("/");
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
    response.render('create-build', {layout: 'custom-build', char: builds[request.params.char].id});    
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
      db.users.insert({username: username, password: hash});  
      return response.redirect("login")
    } else {
      response.locals.errors.push(username + " " + translate("already exists", request.session.lang))
      return response.render("register")  
    }  
  })
});

app.post("/save-build", function (req, res) {
  db.users.findOne({username: req.session.username, password: req.session.token}, function (err, user) {
    if (user == null) {
      return res.send({error: translate("not-logged-in", req.session.lang)});
    } else {
      db.builds.insert({items: req.body.items, username: req.session.username, char: req.body.char, creation: new Date().getTime(), status: "unlisted"}, function(err, build){
        if (err) return res.send({error: err});
        return res.send({id: build._id})
      })
    }
  })
})

app.get("/login", function (request, response) {
  if (response.locals.loggedIn) return response.redirect("/")
  return response.render("register");  
})

app.post("/login", function (request, response) {
  var username = request.body.username;
  var password = request.body.password;
  
  db.users.findOne({username: username}, function(err, record){
    if (record == null) {
      response.locals.errors.push(translate("bad-user", request.session.lang))
      return response.render("register")
    } else {
      if (passwordHash.verify(password, record.password)) {
        request.session.token = record.password;
        request.session.username = username;
        return response.redirect("/")
      }
      
      response.locals.errors.push(translate("bad-password", request.session.lang))
      return response.render("register")
    }
  })
})

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


function processCode (code, build) {
  var ids = Buffer.from(code, 'base64').toString().split(",")
  build = JSON.parse(JSON.stringify(build)); 
  
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