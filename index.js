var supportGenerator = require('node-generator-detector')();
if (!supportGenerator) {
  require('gnode');
}

var http = require('http');
var app = require('./lib/server.js');
var port = app.get('port') || 7002;

if (!module.parent) {
  http.createServer(app).listen(port, function(){
    console.log('Server start listening at %s', port);
  });
}
