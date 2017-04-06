// require dependencies

var express = require('express');
var multer = require('multer');
// var upload = multer({dest: './uploads/'});
var router = require('./app/routes');
var multer = require('multer');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('client-sessions');
var DB_URI = "mongodb://localhost:27017/db";

/////
var client_profile_controller = require('./app/controllers/clientProfileController');
/////


var app = express();
app.set('view engine', 'ejs');

<<<<<<< HEAD
app.use(multer({dest: './uploads/'}).single('dealImage'));
=======



///////// multer
app.post('/uploadClientPicture',  multer({dest: './public/uploads/ClientPicturesUploads/'}).single('myImage'), client_profile_controller.uploadClientPicture); // uploads video using multer to destination then calls picture method
app.post('/uploadClientVideo',  multer({dest: './public/uploads/ClientVideosUploads/'}).single('myVideo'), client_profile_controller.uploadClientVideo);     // uploads video  using multer to destination then calls video method
////////
// configure app


// app.use(bodyParser.json());
>>>>>>> origin/seif_amr
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




app.use(express.static(__dirname + '/public'));


mongoose.connect(DB_URI);

//////// session
app.use(session({
  cookieName: 'session',
  secret: 'random_string_goes_here',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));
////////

app.use(router);

// <<<<<<< HEAD
// app.listen(9000, function(){
//   console.log("Server is listening on port 9000");
// =======

app.listen(8080, function() {
    console.log("Server is listening on port 8080");
})
