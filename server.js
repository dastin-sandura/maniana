var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

//Images
app.get('/banner.jpg', function (req, res) {
  res.sendFile(__dirname + '/app/images/banner.jpg');
});

//HTML
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

//JS
app.get('/scripts/front.js', function (req, res) {
  res.sendFile(__dirname + '/app/scripts/front.js');
});

app.get('/scripts/main.js', function (req, res) {
  res.sendFile(__dirname + '/app/scripts/main.js');
});

app.get('/models/task.js', function (req, res) {
  res.sendFile(__dirname + '/app/models/task.js');
});

app.get('/models/taskList.js', function (req, res) {
  res.sendFile(__dirname + '/app/models/taskList.js');
});

// CSS
app.get('/styles/taskForm.css', function (req, res) {
  res.sendFile(__dirname + '/app/styles/taskForm.css');
});

//Offline mock data
app.get('/mock-task-list', function (req, res) {
  console.error("Sending the funky file");
  res.sendFile(__dirname + '/app/mock-task-list.json');
});
