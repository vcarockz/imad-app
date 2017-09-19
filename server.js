var express = require('express');
var morgan = require('morgan');
var path = require('path');
var crypto = require('crypto');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString());
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/images.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'images.png'));
});

function hash (input, salt){
    var hashed = crypto.pbkdf2Sync(input, salt, 10000,512, 'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input',function(req,res){
   var hashedString = hash(req.params.input, 'this-is-a-random-string');
   res.send(hashedString);
});



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
