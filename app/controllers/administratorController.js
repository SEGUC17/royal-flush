let Administrator = require('../models/Client');

let administratorController = {



  getAllUnverifiedClients:function(req, res){

      Client.find({verified:false},{name:true, verified:true},null,function(err,cients){
          if(err)
              res.send(err.message);
          else
              console.log(clients);
              res.render('index', {clients});
      })
 }


}


module.exports = administratorController;
