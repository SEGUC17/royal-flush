//require dependencies
var express = require('express');
var router = express.Router();
var clientController = require('./controllers/clientController');
var Client = require ('../models/Client');

//add routes
router.get('/clientSignup', function(req,res){
  res.render('clientSignup');
});


router.post('/clientSignup', function(req,res){
  var newClient = new Client (req.body);
  Client.createClient(newClient, function(err, Client){
            if(err) throw err;
            else {
              console.log(client);
            }

  });
});

//export router
module.exports = router;
