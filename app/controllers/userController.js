let User = require('../models/User');
let Subscription= require('../models/Subscription');
let Notification= require('../models/Notification');

let userController = {
  // Add user methods
  userSubscribeToClient:function(req,res){
    let subscription = new Subscription({"clientUsername": req.body.username,"userUsername": req.session.username});
    user.save(function(err, subscription){
      if(err){
        let errMessage="error occured when subscribing ";
        res.redirect('/SubscriptionError',errmessage);
      }else{
        res.redirect("/subscribed");
      }
    })
  },
    userUnsubscribe:function(req,res){
      Subscription.remove({"clientUsername": req.body.username,"userUsername": req.session.username});
      res.redirect('/userUnsubscribe');
    }
  },
//  notifyUsers:function(req,res)

}

module.exports = userController;
