var express = require('express');
var multer = require('multer');
// var upload = multer({dest: './uploads/'});
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/DB1";

var app = express();
app.set('view engine', 'ejs');

// <<<<<<< HEAD
// app.use(multer({dest: './uploads/'}).single('dealImage'));
// app.use(bodyParser.urlencoded({extended:false}));
// =======
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// >>>>>>> origin/seif2
app.use(express.static(__dirname + '/public'));

mongoose.connect(DB_URI);
app.use(router);

// <<<<<<< HEAD
// app.listen(9000, function(){
//   console.log("Server is listening on port 9000");
// =======
app.listen(8080, function() {
    console.log("Server is listening on port 8080");
>>>>>>> origin/seif2
})
