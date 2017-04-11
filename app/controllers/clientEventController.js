// rawan

let clientEventController = require('../models/clientEvent');
let clientEventController = {
 createEvent: function(req,res){
   let clientEvent = new clientEvent (req.body);
   clientEvent.save(function(err,project){
       if(err)
       res.send(err.message);
       else res.send("msg");
   });
 },

// A filtered search for client or event
 searchForClientEvent: function(req,res){
findByClient_name({},function(err,clientEvents){
  if(err)n
  throw err;
  console.log(this.client_name);
});
findByLocation({},function(err,clientEvents){
  if(err)
  throw err;
  console.log(this.location);

});
findByStarting_date({},function(err,clientEvents){
  if(err)
  throw err;
  console.log(this.starting_date);
});
findByPrice({},function(err,clientEvents){
  if(err)
  throw err;
  console.log(this.price);
});
findByEvent_name({},function(err,clientEvents){
  if(err)
  throw err;
  console.log(this.event_name);
});




     clientEvent.findByEvent_name(req,res);


     clientEvent.findByStarting_date(req,res);

     clientEvent.findByEnding_date(req,res);

     clientEvent.findByPrice(req,res);
     clientEvent.findByLocation(req,res);
     clientEvent.findByClient_name(req,res);


 }
}

//A function for each field


module.exports = clientEventController;
