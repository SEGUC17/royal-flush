let Subscription= require('../models/Subscription');
let Notification= require('../models/Notification');

let clientController ={
  collectingSubscription:function(req,res){
    let subscriptions;
    Subscription.find({"clientId":req.session.clientId},function(err,subscriptions){
      if(err){
        res.send(err.message);
      }else{
        subscriptions={subscriptions};
      //  res.redirect('/notifyUsers',{subscriptions});
      }
    })
    for (var i = 0; i < subscriptions.length; i++) {
      let notification = new Notification ({"clientId": subscriptions[i].clientId, "userId": subscriptions[i].userId, "viewed": false; "message": "new event created by "+req.session.name});
      notification.save(function(err, notification){
        if(err){
          res.send(err.message);
        }else{
          res.redirect('/clientProfile');
        }
      })
    },
}
}
module.exports = clientController;
