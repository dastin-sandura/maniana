var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

app.get('/', function(req, res) {
    console.log("Got it on the / directory");
    res.sendFile(__dirname + '/app/index.html');
});

app.get('/banner.jpg', function(req, res) {
    console.log("Got it on the / directory");
    res.sendFile(__dirname + '/app/images/banner.jpg');
});