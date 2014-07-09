var koa = require('koa');
var logger = require('koa-logger');
var route = require('koa-route');
var parse = require('co-body');
var app = koa();
var blog = {
  testHook: function *() {
    this.body = 'success';
  }
};

app.use(logger());
app.use(route.get('/hook', blog.testHook));

module.exports = app;
