let clientEvent = require('../models/clientEvent');

let client_event_controller = { // the name of the client should be saved in a session to use it to save data to the database

  createClientEvent:function(req, res){

      res.render('createClientEvent');

  },

  saveClientEvent:function(req, res){

      var sDate = new Date(req.body.startingDate.toString());
      var eDate = new Date(req.body.endingDate.toString());

      //console.log(req.body);
      var clientName = req.session.clientname;          ////////////session
      var eventName =  req.body.eventName;
      var startingDate = (new Date(req.body.startingDate)).toDateString();
      var endingDate = (new Date(req.body.endingDate)).toDateString();
      var price = req.body.price;

      if(sDate > eDate){

        console.log("Start date is after the end date!");
        return;
      }
    //  console.log(startingDate);

      var clientEventData = {
                              clientName:clientName,
                              eventName:eventName,
                              startingDate:startingDate,
                              endingDate:endingDate,
                              price:price

                            };

                          //  console.log(clientEventData);

      let client_event = new clientEvent(clientEventData);

      client_event.save(function(err, client_event){

              if(err){
                console.log(err);
              }else{
                res.redirect('/viewClientProfile');
                console.log("client event saved!");
              }

      });


  },

  viewClientEvents:function(req, res){

    /////clientname is retrieved from session

  //  var clientname = req.session.clientname;
      var clientname = req.session.clientname;

      var getEvents = clientEvent.find({'clientName':clientname}, 'clientName eventName startingDate endingDate price', function(err, events){

          if(err){

            console.log(err.message);

          }else{
              console.log(events);
              res.render('viewClientEvents', {events});

          }

      });

  },

  updateClientEvent:function(req, res){

    var clientName = req.session.clientname;
    var eventName = req.body.eventName;
    var startingDate = req.body.startingDate;
    var endingDate = req.body.endingDate;
    var price = req.body.price;

    var sDate = new Date(startingDate.toString());
    var eDate = new Date(endingDate.toString());

    clientEvent.findOne({'clientName':clientName, 'eventName':eventName}, function(err, clientEvent){
        if(err){
              console.log(err.message);
        }else if(clientEvent == null){
            console.log("no event found!");
            return;
          }else{
              if(eventName != null){
                clientEvent.eventName = eventName;
              }
              if(startingDate != null){
                clientEvent.startingDate = startingDate;
              }
              if(endingDate != null){
                clientEvent.endingDate = endingDate;
              }
              if(price != null){
                clientEvent.price = price;
              }
              if(sDate > eDate){
                console.log("Start date is after end date!");
                return;
              }
              clientEvent.save(function(err){
                    if(err){
                      console.log(err.message);
                    }else{
                      console.log("saved");
                    }
              });
          }
  });
},

deleteClientEvent:function(req, res){
  var clientName = req.session.clientname;
  var eventName = req.body.eventName;
  clientEvent.remove({'clientName':clientName, 'eventName':eventName}, function(err){
      if(err){
            console.log(err.message);
      }else{
            console.log("Client event removed!");
      }
});
},

}

module.exports = client_event_controller;
