
// let User = require('../models/User');
// let Client= require('../models/Client');
// let Subscription= require('../models/Subscription');
// let Notification= require('../models/Notification');

// let userController = {
// =======
let user = require('../models/User');
let subscription = require('../models/Subscription');
let reservation = require('../models/Reservation');
let client = require('../models/Client');
let Notification= require('../models/Notification');

let userController = {
  //////Amr Abu Greedah
  getUser:function(req, res){
  // let user_Id = req.session.user_Id;
    //  user_Id ="590503d4b61d3c7d55fd1523";    ///////required from session

      user.findById(req.body.id, function(err, user){
          if(err){
                console.log(err.message);
          }else if(user == null){
            res.json({success: false, msg:"User not found"});
              return;
          }else{
            res.json({success: true, user: user});
          }
        });
   
   },

  getSubscribedClients:function(req, res){
  // let user_Id = req.session.user_Id;
    user_Id = "58f3b7fe6bb367a838cb4891";           // req from session

    subscription.find({'userId':user_Id}, 'clientId userId', function(err, subscriptions){
        if(err){
          console.log(err.message);
        }else if(!subscriptions ){
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
                 console.log("no client");
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
  // let user_Id = req.session.user_Id;
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

    updateInfo:function(req, res){
        // let user_Id = req.session.user_Id;
        var update =
        {
          name : req.body.name,
         email : req.body.email,
         address : req.body.address
        }

      user.findOneAndUpdate({_id:req.body.id},update, function(err, userProfile){
            if(err){
                  console.log(err.message);
            }else if(userProfile == null){
                console.log("no profile with this Id name!");
                return;
            }
            else{
              res.json({success: true, msg:"User Profile Updated"});
            }
              // }else{
              //     // if(name != ''){
              //     //   userProfile.name = name;
              //     // }
              //     // if(email != ''){
              //     //   userProfile.email = email;
              //     // }
              //     // if(address != ''){
              //     //   userProfile.address = address;
              //     // }
              //     // userProfile.save(function(err){
              //     //       if(err){
              //     //         console.log(err.message);
              //     //       }else{
              //     //         console.log("saved");
              //     //       }
              //     });
              });
    },
  //////Amr Abu Greedah
  // Add user methods
  userSubscribeToClient:function(req,res){
    // subscribe functions for the user

    // make sure the client id provided is poresesnt
// <<<<<<< HEAD
//     Client.findOne({_id: req.body.clientId}, function(err, client){
// =======
    client.findOne({_id: req.body.clientId}, function(err, client){
// >>>>>>> de7397d57657435c23218f95463359110ade42c5
      if(err){
        res.send('Client Error try again later');
      }else if (client){
        //only if yes the subscription is created
// <<<<<<< HEAD
//         let subscription = new Subscription({"clientId": req.body.clientId,"userId": req.params.user_id});
// =======
        let subscription = new subscription({"clientId": req.body.clientId,"userId": req.params.user_id});
// >>>>>>> de7397d57657435c23218f95463359110ade42c5
        user.save(function(err, subscription){
          if(err){
            let errMessage="error occured when subscribing ";
            res.redirect('/SubscriptionError',errmessage);
          }else{
            res.redirect("/subscribed");
          }
        });
      }else{
        res.send('error');
      }
    });

  },
    userUnsubscribe:function(req,res){
      //removal of subscription from memory
// <<<<<<< HEAD
//       Subscription.remove({"clientId": req.body.userId,"userId": req.params.user_id});
// =======
      subscription.remove({"clientId": req.body.userId,"userId": req.params.user_id});
// >>>>>>> de7397d57657435c23218f95463359110ade42c5
      res.redirect('/userUnsubscribe');
    }
  }
//  notifyUsers:function(req,res)

module.exports = userController;
