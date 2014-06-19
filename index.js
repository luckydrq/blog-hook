var http = require('http');
var app = require('node-generator-detector')() ? require('./lib/koa.js') : require('./lib/express.js');
var port = app.get('port') || 7002;

http.createServer(app)
  .listen(port)
  .on('connect', function(){
    console.log('Server start listening at %s', port);
  });
