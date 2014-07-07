var koa = require('koa');
var logger = require('koa-logger');
var parse = require('co-body');
var app = koa();

app.use(logger());

module.exports = app;
