// var userController = require ('./controllers/userController.js')
module.exports = function(app, passport) {


    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // LOGIN
    app.get('/login', function(req, res) {

        res.render('login.ejs', { message: req.flash('loginMessage') });
    });
// in order to get passport session to save the id to be used after (login process)
    app.post('/login', passport.authenticate('local-login', {
     successRedirect : '/profile',
     failureRedirect : '/login',
     failureFlash : true
 }));

    // SIGNUP
    app.get('/signup', function(req, res) {


        res.render('signup.ejs', { message: req.flash('signup complete !') });
    });

  // in order to get passport session to save the id to be used after (signup process)

    app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash : true
}));
// view data of the client

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

//LOGOUT
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// check if the client logged in or not
function isLoggedIn(req, res, next) {


    if (req.isAuthenticated())
        return next();


    res.redirect('/');
}
