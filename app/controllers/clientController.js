//rawan
let Client = require('../models/Client');
let clientController = {
  
createClient: function(req,res){
  let client = new Client(req.body);

  client.save(function(err, clients){
    if(err)
    throw err;
    else
    console.log(clients);
  });
}
// client profile is needed
// implemented in the link



}


module.exports = clientController;
