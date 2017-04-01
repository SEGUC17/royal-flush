// require dependencies

var express = require('express');
var router = require('./app/routes');
var multer = require('multer');
// var upload = multer({dest: './public/uploads/ClientPicturesUploads/'});
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/db";

/////
var client_profile_controller = require('./app/controllers/clientProfileController');
/////


var app = express();

app.set('view engine', 'ejs');


///////// multer

app.post('/uploadClientPicture',  multer({dest: './public/uploads/ClientPicturesUploads/'}).single('myImage'), client_profile_controller.uploadClientPicture); // uploads video using multer to destination then calls picture method
app.post('/uploadClientVideo',  multer({dest: './public/uploads/ClientVideossUploads/'}).single('myVideo'), client_profile_controller.uploadClientVideo);     // uploads video  using multer to destination then calls video method
////////
// configure app


// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

mongoose.connect(DB_URI);

app.use(router);

// connecting to port 8080

app.listen(8080, function(){


    console.log("Server is listening on port 8080");

});
