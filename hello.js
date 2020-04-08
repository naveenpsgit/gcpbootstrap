var express = require('express');
var app = express();
var os = require('os');
var name = os.hostname();

app.get('/', function (req, res) {
   res.send(name); 
});

app.listen(8080, function () {
   console.log('Example app listening on port 8080!');
});
