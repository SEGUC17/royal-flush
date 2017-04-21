var express = require('express');
var app = express();
var path = require('path');
// var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
//var flash = require('connect-flash');

// var morgan       = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var session = require('express-session');
var routes=require('./routes/routes');

// var config = require('./app/controllers/userPassport')(passport);
mongoose.Promise = global.Promise;
var DB_URI = "mongodb://localhost:27017/DB1";
const cors = require('cors');
app.use(cors());

//var app = express();

// app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/public'));
//app.use(cookieParser()); // read cookies (needed for auth)
app.use('/',routes);
//app.use('/', index);
app.use('/api', routes);


// app.use(session({ secret: 'final destination' }, resave: true));
// session secret
//app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
//app.use(flash()); // use connect-flash for flash messages stored in session

// require('./app/userroutes.js')(app, passport); // load our routes and pass in our app and fully configured passp

mongoose.connect(DB_URI);
//app.use(routes);

app.listen(8080, function () {
  console.log("Server is listening on port 8080");
})
