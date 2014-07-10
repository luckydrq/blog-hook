var koa = require('koa');
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var debug = require('debug')('server');

var app = koa();
var blog = {
  testHook: function *() {
    this.body = 'success';
  },

  updateHook: function *() {
    var body = yield parse.json(this);
    debug(JSON.stringify(body));

    var repo = body.repository;

  }
};

app.use(logger());
app.use(route.get('/hook', blog.testHook));
app.use(route.post('/hook', blog.updateHook));

module.exports = app;
