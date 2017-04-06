let administrator = require('../models/administrator');

let administratorController={
  administratorLogin: function(req, res){
    administrator.findOne({password: req.body.password, username: req.body.username},function(err, administrator){
      if(err){
        res.send(err.message);
      }else if (!administrator) {
        res.send('Wong information');

      }else{
        res.redirect('/administratorHome');
      }
    })
  }


}

module.exports = administratorController;
