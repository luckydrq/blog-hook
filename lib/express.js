var express = require('express');
var app = express();
var debug = require('debug')('express');
var bodyParser = require('body-parser');

app.use(bodyParser());

// routes
require('./routes')(app);

module.exports = app;
