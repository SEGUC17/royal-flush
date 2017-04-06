// let Client = require('../models/Client');
//
// let clientController = {
//   //view all clients
//   getAllClients:function(req, res){
//     Client.find(function(err, clients){
//       if(err){
//         res.send(err.message);
//       }
//       else{
//         res.json(clients);
//       }
//     });
//   },
//   // get Client
//   getClient:function(req, res){
//     Client.findOne({_id:req.params.client_id}, function(err, client){
//       if(err){
//         res.send(err.message);
//       }
//       else{
//         res.json(client)
//       }
//     });
//   },
//
//   getCategoryClients:function(req, res){
//     Client.find({category:req.params.category}, function(err, clients){
//       if(err){
//         res.send(err.message);
//       }
//       else {
//         res.json(clients);
//       }
//     });
//   },
//
//   addNewClient:function(req, res){
//     req.body.name = "Dina";
//     req.body.username = "sss";
//     req.body.email = "d";
//     req.body.password = "d";
//     req.body.address = "street";
//     req.body.phone = "011";
//     req.body.start_hour = "08:00";
//     req.body.end_hour = "23:59";
//     req.body.working_days = "saturday,sunday,monday,thursday";
//
//     let client = new Client(req.body);
//     client.save(function(err, client){
//       if(err){
//         res.send(err.message);
//       }
//       else{
//         res.send("Created");
//       }
//     });
//   }
// }
//
// =======
let Subscription= require('../models/Subscription');
let Notification= require('../models/Notification');
let Client= require('../models/Client');
let clientEvent= require('../models/clientEvent');
let Feedback= require('../models/Feedback');

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

  // viewFeedback: function(req, res){
  //   Feedback.find({clientId: req.params.client_id}, function(err, feedbacks){
  //     if (err) {
  //       res.send(err.message);
  //     }else{
  //       res.render('feedbacks',{feedbacks});
  //     }
  //   })
  // }
}
// >>>>>>> origin/seif_amr
// =======
// let Client = require('../models/Client');
// let Feedback= require('../models/feedback');
//
// let clientController={
//
// }
//
// >>>>>>> origin/seif2
module.exports = clientController;
