var express = require("express");

module.exports = express.static('public', {
    setHeaders: function (res, path) {
        if (path.indexOf('.js') != -1) {
          res.header("Content-Type", "application/javascript; charset=utf-8");
        }
    }
})