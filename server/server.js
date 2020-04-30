const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/src/html-pages/landing-page.html'));
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/src/html-pages/login.html'));
});


app.listen(process.env.PORT || 8080);
