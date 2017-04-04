let Client = require('../models/Client');
let clientController = {
  // implemented in the mini project
getAllClients:function(req, res){
  Client.find(function(err,client){
    if(err)
    res.send(err.message);
    else
    res.send(client);


  });
},
createClient: function(req,res){
  let client = new Client(req.body);

  client.save(function(err, client){
    if(err)
    res.send(err.message)
    else
    res.send("msg");
  });
},
// client profile is needed
// implemented in the link
searchforClient: function(req,res){
  var cursor =Client.find({ // fields for the client profile


  });
  //retrieving matching records
  cursor.each(); 
}

}


module.exports = clientController;
