var LocalStrategy   = require('passport-local').Strategy;
var Client= require('../models/Client');

module.exports = function(passport) {
    // used to serialize the user for the session
    passport.serializeUser(function(client, done) {
        done(null, client.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        Client.findById(id, function(err, client) {
          console.log(client.id);
            done(err, client);
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
        Client.findOne({ 'local.email' :  email }, function(err, client) {

            if (err)
                return done(err);
            if (client) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                var new_client = new Client();

                new_client.local.email    = email;
                new_client.local.password = new_client.generateHash(password);
                  // console.log(passport.session.email);
                new_client.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, new_client);
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
        Client.findOne({ 'local.email' :  email }, function(err, client) {

            if (err)
                return done(err);

            if (!client)
                return done(null, false, req.flash('loginMessage', 'You are not found'));


            if (!Client.validPassword(password))
                return done(null, false, req.flash('loginMessage', ' Wrong password'));


            return done(null, client);
        });

    }));


};
