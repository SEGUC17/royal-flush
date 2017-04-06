let Subscription= require('../models/Subscription');
let Notification= require('../models/Notification');
let Client= require('../models/Clients');
let clientEvent= require('../models/clientEvent');

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
      let notification = new Notification ({"clientId": subscriptions[i].clientId, "userId": subscriptions[i].userId, "viewed": false, "message": "new event created by "+req.session.name});
      notification.save(function(err, notification){
        if(err){
          res.send(err.message);
        }else{
          res.redirect('/clientProfile');
        }
      })
    }
},
  getAllClients:function(req, res){
    Client.find(function(err, clients){
      if(err){
        res.send(err.message);
      }else{
        res.render('hompage',{clients});
      }
    })
  },
  searchForClients:function(req, res){
    let es;
    let cs;

    let searchKey = req.body.searchKey ;
    Client.find({ name : searchKey }, function(err, clients){
      if(err){
        res.send("error with search");

      }else{
        cs={clients};
      }
    });
    clientEvent .find({eventName:searchKey} , function(err, clientEvents){
      if(err){
        res.send("error with search");

      }else{
        es={clientEvents};
      }
    });
    cs.push(es);
    res.render("search",cs);
  }
}
module.exports = clientController;
