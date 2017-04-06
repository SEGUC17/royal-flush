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
 },// searching for a client or event, a function for every field for a filtered search

 searchForClientEvent: function(req,res){

     clientEvent.findByClient_name(({},function(err, clientEvents)){
       if(err) throw err;
       console.log(clientEvents);

     });

     clientEvent.findByEvent_name(({},function(err, clientEvents)){
       if(err) throw err;
       console.log(clientEvents);

     });
     clientEvent.findByStarting_date(({},function(err, clientEvents)){
       if(err) throw err;
       console.log(clientEvents);

     });
     clientEvent.findByEnding_date(({},function(err, clientEvents)){
       if(err) throw err;
       console.log(clientEvents);

     });
     clientEvent.findByPrice(({},function(err, clientEvents)){
       if(err) throw err;
       console.log(clientEvents);

     });
     clientEvent.findByLocation(({},function(err, clientEvents)){
       if(err) throw err;
       console.log(clientEvents);

     });


 }
}
module.exports = clientEventController;
