const express  = require('express');
const path = require('path');
const bodyParser   = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const flash    = require('connect-flash');
const router  = require('./app/routes.js');
const config = require('./app/config/database');

// const morgan       = require('morgan');
const cookieParser = require('cookie-parser');
const session      = require('express-session');

// const config =require('./app/controllers/userPassport')(passport);
// const DB_URI = "mongodb://localhost:27017/DB1";

const app = express();
app.use(cors());

// Set our api routes  Abu Greedah
app.use('/api', api);

// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({ extended: true }));
// >>>>>>> de7397d57657435c23218f95463359110ade42c5
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser()); // read cookies (needed for auth)


// app.use(session({ secret: 'final destination' }, resave: true));
// session secret
require('./app/config/passport')(passport);
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

require('./app/userroutes.js')(app, passport); // load our routes and pass in our app and fully configured passp

mongoose.connect(config.database);
app.use('/', router);
app.use('/users', router);

app.listen(8080, function(){
  console.log("Server is listening on port 8080");
})
