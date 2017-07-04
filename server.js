var express = require('express');
var app = express();

//your routes here
var root = process.cwd();
app.get('/', function (req, res) {
    res.sendFile('views/index.html',{root});
});
app.get('/home', function (req, res) {
    res.sendFile('views/home.html',{root});
});
app.get('/output', function (req, res) {
    res.sendFile('views/output.html',{root});
});
app.use(express.static('views/public',{root}));
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

