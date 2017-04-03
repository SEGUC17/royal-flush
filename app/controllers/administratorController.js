let Administrator = require('../models/Client');

let administratorController = {

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

const clients = [{name:ahmed, verified:false, address:asd}, {name:omar, verified:true, address:qwe}, {name:hazem, verified:false, address:opo}];

client.insertMany(clients,function(err, docs){
  if(err)
      res.send(err)
})

}
}

module.exports = administratorController;
