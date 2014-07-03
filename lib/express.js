var path = require('path');
var spawn = require('child_process').spawn;

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
    var cp = spawn('bash', [path.join(__dirname, '../build.sh')]);
    var stdout = '', stderr = '';

    cp.stdout.on('data', function(data) {
      stdout += data;
    });
    cp.stderr.on('data', function(data) {
      stderr += data;
    });
    cp.on('close', function(code) {
      if (code) {
        console.error(stderr);
        res.send(500, stderr);
      } else {
        console.log(stdout);
        res.send(200, 'sync success!');
      }
    });
  }
});

module.exports = app;
