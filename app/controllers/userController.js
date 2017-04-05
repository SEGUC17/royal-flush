let User = require('../models/User');
let Client= require('../models/Client');
let Subscription= require('../models/Subscription');
let Notification= require('../models/Notification');

let userController = {
  // Add user methods
  userSubscribeToClient:function(req,res){
    Client.findOne({client.Id: req.body.clientId}, function(err, client){
      if(err){
        res.send('Client Error try again later');
      }else{
        let subscription = new Subscription({"clientId": req.body.clientId,"userId": req.session.user.Id});
        user.save(function(err, subscription){
          if(err){
            let errMessage="error occured when subscribing ";
            res.redirect('/SubscriptionError',errmessage);
          }else{
            res.redirect("/subscribed");
          }
        });
      }
    });

  },
    userUnsubscribe:function(req,res){
      Subscription.remove({"clientId": req.body.userId,"userId": req.session.user.Id});
      res.redirect('/userUnsubscribe');
    }
  },
//  notifyUsers:function(req,res)



module.exports = userController;
