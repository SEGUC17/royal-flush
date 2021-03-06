
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
//we use variables already deafined in local strategy but we set username as an email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

        process.nextTick(function() {


        User.findOne({ 'local.email' :  email }, function(err, user) {
//find user with the same entred email
            if (err)
                return done(err);//if err return error
            if (user) {//if we have user with the same email
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {//registered as a new user

                var new_user = new User();

                new_user.local.email    = email;
                new_user.local.password = new_user.generateHash(password);
                  // console.log(passport.session.email);
                new_user.save(function(err) {//save it in the data base
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
      //we use variables already deafined in local strategy but we set username as an email

        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

      //check if the user axists
        User.findOne({ 'local.email' :  email }, function(err, user) {

            if (err)//if err return error
                return done(err);

            if (!user)//if we didn't find a user with the entered username or email
                return done(null, false, req.flash('loginMessage', 'You are not found'));


            if (!user.validPassword(password))//we valied the password if we find the email through predefined method
                return done(null, false, req.flash('loginMessage', ' Wrong password'));


            return done(null, user);
        });

    }));

};
