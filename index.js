// Import dependencies

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Define web server port

var port = process.env.PORT || 8008;

// ===== MIDDLEWARE =====

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log('CRM Server now active on port', port);
});