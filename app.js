var express = require('express')
var exphbs = require('express-handlebars');
var path = require('path')
var _ = require('lodash')
var bodyParser = require('body-parser')
var fs = require('fs')
var db = require('./data/db')
// var db = require('./db/showimg')

var app = express();

// view engine setup
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))

// serve the files in /public
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//

app.get('/', function (req, res) {
  res.redirect('/color')
})





  module.exports = app;
