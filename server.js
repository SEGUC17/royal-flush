// require dependencies

var express = require('express');
var router = require('./app/routes');
var multer = require('multer');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('client-sessions');
var DB_URI = "mongodb://localhost:27017/db";



var app = express();

app.set('view engine', 'ejs');




// configure app


// app.use(bodyParser.json());
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


app.listen(8080, function() {
    console.log("Server is listening on port 8080");
})
