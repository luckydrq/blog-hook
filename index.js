var http = require('http');
var isSupportGenerator = require('node-generator-detector')();
var app = isSupportGenerator ? require('./lib/koa.js') : require('./lib/express.js');
var port = app.get('port') || 3000;

http.createServer(app)
  .listen(port)
  .on('connect', function(){
    console.log('Server start listening at %s', port);
  });
