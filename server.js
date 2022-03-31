// server.js
// where your node app starts

// init project
var express = require('express');
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')
var fs = require("fs"),
    json;
const cors = require('cors');
var builds = require('./data/builds').builds;
var changeLog = require('./data/changelog.json');

var db = require("./utils/db");

var app = express();

var browserify = require('browserify');
var b = browserify();
b.add('./public/common.js').add('./public/client.js').add('./public/item-tree.js').add('./public/imports.js').add('./public/custom-build.js');
b.bundle().pipe(fs.createWriteStream('./public/browser-bundle.js'));

app.locals.changeLog = changeLog
app.locals.version = changeLog[0].version;

app.use(require("./utils/static"));

app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieSession({
  name: 'session',
  keys: ['lang', 'token', 'username'],
  maxAge: 24 * 60 * 60 * 1000 * 1000 // 1000 days
}))

app.use(require("./utils/handleLocals"))

require('./routes')(app);

app.get("/items.json", function (request, response) {
  delete require.cache[require.resolve('./data/drops.js')]
  delete require.cache[require.resolve('./data/itemdata.js')]
  
  let items = require('./data/itemdata.js');
  let drops = require('./data/drops.js').chests;
  let craftings = require('./data/craftings.js').craftings;
  return response.send({craftings:craftings, drops: drops, items: items});
})

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.render('items', {layout : 'items'});
});

app.get("/changelog", function (request, response) {
  response.render('changelog');
});

app.get("/chars", function (request, response) {
  response.render('chars', {layout : 'char-build', chars: Object.keys(builds), builds: builds, heroTypes: ["str", "agi", "int"]});
});

app.get('/test2', function(req, res) {
  res.render('test');
})

app.get('/test3.json', cors({
    origin: '*'
}), function(req, res) {
  return res.send({"code": 200, "msg": "JTdCJTIyc3RhdHVzJTIyJTNBdHJ1ZSUyQyUyMmV4cGlyZVRpbWUlMjIlM0EyNjQ3ODE5MDAzMDc2JTdE"})
})


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});



require("./utils/errors")(app);
