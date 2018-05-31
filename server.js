// server.js
// where your node app starts

// init project
var express = require('express');
var cookieSession = require('cookie-session')
var bodyParser = require('body-parser')
var fs = require("fs"),
    json;
var itemIdToName = require("./public/items").idToName
var items = require("./public/items").items
var translation = require("./public/translations");
var itemUtils = require("./public/itemUtils").load(items, translation.translate);

var builds = require('./public/builds').builds;
var changeLog = require('./public/changelog.json');

var db = require("./utils/db");

var app = express();

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
  return response.send(JSON.stringify(items));
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


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});


require("./utils/errors")(app);