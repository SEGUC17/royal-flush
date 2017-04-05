let Client = require('../models/Client');

let clientController = {
  //view all clients
  getAllClients:function(req, res){
    Client.find(function(err, clients){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(clients);
      }
    });
  },
  // get Client
  getClient:function(req, res){
    Client.findOne({_id:req.params.client_id}, function(err, client){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(client)
      }
    });
  },

  getCategoryClients:function(req, res){
    Client.find({category:req.params.category}, function(err, clients){
      if(err){
        res.send(err.message);
      }
      else {
        res.json(clients);
      }
    });
  },

  addNewClient:function(req, res){
    req.body.name = "Dina";
    req.body.username = "sss";
    req.body.email = "d";
    req.body.password = "d";
    req.body.address = "street";
    req.body.phone = "011";
    req.body.start_hour = "08:00";
    req.body.end_hour = "23:59";
    req.body.working_days = "saturday,sunday,monday,thursday";

    let client = new Client(req.body);
    client.save(function(err, client){
      if(err){
        res.send(err.message);
      }
      else{
        res.send("Created");
      }
    });
  }
}

module.exports = clientController;
