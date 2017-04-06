let Subscription= require('../models/Subscription');
let Notification= require('../models/Notification');
let Client= require('../models/Client');
let clientEvent= require('../models/clientEvent');

let clientController ={
  collectingSubscription:function(req,res){// collecting ALL subscribed to clients and collect them for later usage
    let subscriptions;
    Subscription.find({userId:req.params.user_id},function(err,subscriptions){
      if(err){
        res.send(err.message);
      }else{
        subscriptions={subscriptions};
        res.return(subscriptions);
      //  res.redirect('/notifyUsers',{subscriptions});
      }
    })
  /*  for (var i = 0; i < subscriptions.length; i++) {
      let notification = new Notification ({"clientId": subscriptions[i].clientId, "userId": subscriptions[i].userId, "viewed": false, "message": "new event created by "+req.session.name});
      notification.save(function(err, notification){
        if(err){
          res.send(err.message);
        }else{
          res.redirect('/clientProfile');
        }
      })*/
    // }
},
  getAllClients:function(req, res){ // ALL clients Not filtered for viewing porpose
    Client.find(function(err, clients){
      if(err){
        res.send(err.message);
      }else{
        res.render('hompage',{clients});
      }
    })
  },
  searchForClients:function(req, res){// search function byy client name and event name
    let es; // collection of events (temprory)
    let cs;// collection of clients then will be have es added to it and passed

    let searchKey = req.body.searchKey ;

    //search by name for all possible clients
    Client.find({ name : searchKey }, function(err, clients){
      if(err){
        res.send("error with search");

      }else{
        cs={clients};
      }
    });

    // search by name for all possible Events
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
