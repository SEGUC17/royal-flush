// require dependencies

var express = require('express');
var router = require('./app/routes');
var multer = require('multer');
var upload = multer({dest: './public/uploads/ClientPicturesUploads/'});
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/mini";


var app = express();

app.set('view engine', 'ejs');


///////// multer

app.post('/uploadClientPicture', upload.single('myImage'), function(req, res, next){});
////////
// configure app


app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

mongoose.connect(DB_URI);

app.use(router);

// connecting to port 8080

app.listen(8080, function(){


    console.log("Server is listening on port 8080");

});
