let user = require('../models/User');
let subscription = require('../models/Subscription');
let reservation = require('../models/Reservation');
let client = require('../models/Client');

let user_controller = {

  getUser:function(req, res){

      user_Id = "58f3b7fe6bb367a838cb4891";    ///////required from session

      user.findOne({'_id':user_Id}, 'name username email address', function(err, user){
          if(err){
                console.log(err.message);
          }else if(user == null){
              console.log("no profile with this userId!");
              return;
          }else{
            res.json(user);
          }
        });
  },

  getSubscribedClients:function(req, res){

    user_Id = "58f3b7fe6bb367a838cb4891";           // req from session

    subscription.find({'userId':user_Id}, 'clientId userId', function(err, subscriptions){
        if(err){
          console.log(err.message);
        }else if(subscriptions == null){
          console.log("no subscriptions");
          return;
        }else{

          let array = [];
          var jj = 0;
          for (var i = 0; i < subscriptions.length; i++) {
             var clientId = subscriptions[i].clientId;

             client.findOne({'_id':clientId}, 'name email category', function(err, client){
               if(err){
                 console.log(err.message);
               }else if(client == null){
                 console.log("no clients");
               }else{
                 var clientJson = {"name":client.name, "email":client.email, "category":client.category};
                  array.push(clientJson);
               }
               if(jj == subscriptions.length-1){
                 sendResponse();
               }
               jj = jj + 1;
             });
          }
          function sendResponse(){
            // console.log(array);
            res.json(array);
          }
        }
    });
  },

  getReservations:function(req, res){

    user_Id = "58f3b7fe6bb367a838cb4891";       // req from session

    reservation.find({'user_id':user_Id}, 'booked_date_time client_id user_id', function(err, reservations){
        if(err){
          console.log(err.message);
        }else if(reservations == null){
          console.log("no reservations");
          return;
        }else{
          let array = [];
          var jj = 0;
          for (var i = 0; i < reservations.length; i++) {
             var clientId = reservations[i].client_id;
             var booked_date_time = reservations[i].booked_date_time;
             client.findOne({'_id':clientId}, 'name email category', function(err, client){
               if(err){
                 console.log(err.message);
               }else if(client == null){
                 console.log("no client");
               }else{
                 var clientJson = {"name":client.name, "email":client.email, "category":client.category, "booked_date_time":booked_date_time};
                  array.push(clientJson);


               }
               if(jj == reservations.length-1){
                 sendResponse();
               }
                    jj = jj + 1;
             });
          }
          function sendResponse(){
            res.json(array);
          }
        }
    });
  },



}

module.exports = user_controller;
