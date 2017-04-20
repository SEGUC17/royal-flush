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
      //we use variables already deafined in local strategy but we set username as an email

        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

        process.nextTick(function() {


        Client.findOne({ 'local.email' :  email }, function(err, client) {
          //find client with the same entred email
            if (err)
                return done(err);//if error we return error
            if (client) {// if we find same email in the database
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {//registred as a new client in the data base

                var new_client = new Client();

                new_client.local.email    = email;
                new_client.local.password = new_client.generateHash(password);
                  // console.log(passport.session.email);
                new_client.save(function(err) {//save it in the database
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
      //we use variables already deafined in local strategy but we set username as an email

        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {

      //check if the user axists
        Client.findOne({ 'local.email' :  email }, function(err, client) {

            if (err)
                return done(err);//if error we return an error

            if (!client)// we didn't find the email of the client in the database
                return done(null, false, req.flash('loginMessage', 'You are not found'));


            if (!Client.validPassword(password))// we find the client but wrong password
                return done(null, false, req.flash('loginMessage', ' Wrong password'));


            return done(null, client);
        });

    }));


};
