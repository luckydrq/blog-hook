var util = require('util');
var supportGenerator = require('node-generator-detector')();
if (!supportGenerator) {
  require('gnode');
}

var http = require('http');
var app = require('./lib/server.js');
var port = process.env.NODE_PORT || 7002;

if (!module.parent) {
  app.listen(port, function(err) {
    console.log(util.format('Server start listening at %s', port));
  });
}
