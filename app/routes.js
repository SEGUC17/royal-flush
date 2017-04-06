var express = require('express');
var router = express.Router();
var clientController= require('./models/clientController');
var userController=require('./models/userController');

//Add routes here
router.get('/collectingSubscription',clientController.collectingSubscription);
router.get('/getAllClients',clientController.getAllClients);
router.get('/searchForClients',clientController.searchForClients);
router.get('/userSubscribeToClient',userController.userSubscribeToClient);
router.get('/userUnsubscribe', userController.userUnsubscribe);


module.exports = router;
