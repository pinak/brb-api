var express = require('express');
var app = express();

require('./routes.js')(app);

var server = app.listen(3000);
