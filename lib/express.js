var path = require('path');
var exec = require('child_process').exec;

var express = require('express');
var app = express();
var debug = require('debug')('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

// middleware
app.use(logger());
app.use(bodyParser());

// routes
app.get('/hook', function(req, res, next){
  res.send(200, 'success');
});
app.post('/hook', function(req, res, next){
  debug(req.body);
  var repo = req.body.repository;

  if (/\/blog$/.test(repo.url)) {
    exec(['bash', path.join(__dirname, '../build.sh')].join(' '), function(err, stdout, stderr){
      debug(stdout);
      if (err) res.send(200, err.message);
      else res.send(200, 'sync success!');
    });
  }
});

module.exports = app;
