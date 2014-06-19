var express = require('express');
var app = express();
var debug = require('debug')('express');
var bodyParser = require('body-parser');

app.use(bodyParser());

// routes
app.get('/hook', function(req, res, next){
  var json = req.body;
  
  res.send(200, 'success');
});
app.post('/hook', function(req, res, next){
  res.set('Content-Type', 'application/json');
  res.send(200, req.body);
});

module.exports = app;
