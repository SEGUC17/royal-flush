// var userController = require ('./controllers/userController.js')
module.exports = function(app, passport) {



//get the root page
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    // LOGIN
    app.get('/login', function(req, res) {

        res.render('login.ejs', { message: req.flash('loginMessage') });
    });
    //use the passport session withe post

    app.post('/login', passport.authenticate('local-login', {
     successRedirect : '/profile',
     failureRedirect : '/login',
     failureFlash : true
 }));

    // SIGNUP
    app.get('/signup', function(req, res) {


        res.render('signup.ejs', { message: req.flash('signup complete !') });
    });

//use the passport session withe post
    app.post('/signup', passport.authenticate('local-signup', {
    successRedirect : '/profile',
    failureRedirect : '/signup',
    failureFlash : true
}));

//show the data of the user

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

// check the user logged in
function isLoggedIn(req, res, next) {


    if (req.isAuthenticated())
        return next();


    res.redirect('/');
}
