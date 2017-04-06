var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var DB_URI = "mongodb://localhost:27017/DB1";
var port     = process.env.PORT || 8080;
var passport = require('./config/passport');
var flash    = require('connect-flash');
var session = require('express-session');


var configDB = require('./config/database.js');
require('./config/passport')(passport); // pass passport for configuration

app.configure(function() {

	// set up our express application
	app.use(express.logger('dev')); // log every request to the console
	app.use(express.cookieParser()); // read cookies (needed for auth)
	app.use(express.bodyParser()); // get information from html forms

	app.set('view engine', 'ejs'); // set up ejs for templating

	// required for passport
	app.use(express.session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
	app.use(passport.initialize());
	app.use(passport.session()); // persistent login sessions
	app.use(flash()); // use connect-flash for flash messages stored in session

});

require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

var app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + '/public'));

mongoose.connect(DB_URI);
app.use(router);

app.listen(8080, function(){
  console.log("Server is listening on port 8080");
})
