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
app.use(bodyParser.json())


// serve the files in /public
app.use(express.static(path.join(__dirname, 'public')));

//---------------------Ignore above here-------------------//

app.get('/', function (req, res) {
  res.redirect('/colors')
})


app.get('/colors', function(req, res) {
  db.getAll('colors', function (err, colorsObj) {
    if (err) {
      res.send('hey sorry user cant find the colors')
    }
    res.render('colors-index', colorsObj)
  })
})



//
// app.delete('/colors/:colorName', function(req,res){
//   var name = req.params.colorName
//
//   var user = ._find(colors, function(c){
//     return c.
//   })
//   var colorName =
// })

// app.get('/colors/:id', function (req, res){
//   db.getAll('colors', function (err, colorsObj){
//     var color = _.find(colorsObj.hexValue, function(color){
//       // console.log(color.id === Number(req.params.id));
//       return color.id === Number(req.params.id)
//       // console.log(req.params)
//     })
//     // console.log(color)
//     res.render('colors-show', colorsObj)
//   })
// })


  module.exports = app;
