
var LocalStrategy   = require('passport-local').Strategy;
var User= require('../models/User');


module.exports = function(passport) {
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          console.log(user.id);
            done(err, user);
        });
    });


    // LOCAL SIGNUP

    passport.use('local-signup', new LocalStrategy({

        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

        process.nextTick(function() {

      //check if the user already exist
        User.findOne({ 'local.email' :  email }, function(err, user) {

            if (err)
                return done(err);
            if (user) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                var new_user = new User();

                new_user.local.email    = email;
                new_user.local.password = new_user.generateHash(password);
                  // console.log(passport.session.email);
                new_user.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, new_user);
                });
            }
        });
        });
    }));

    // LOCAL LOGIN

    passport.use('local-login', new LocalStrategy({

        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

      //check if the user axists
        User.findOne({ 'local.email' :  email }, function(err, user) {

            if (err)
                return done(err);

            if (!user)
                return done(null, false, req.flash('loginMessage', 'You are not found'));


            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', ' Wrong password'));


            return done(null, user);
        });

    }));

};
