var express = require('express');
var router = express.Router();
var clientController= require('./controllers/clientController');
var userController=require('./controllers/userController');

//Add routes here
router.get('/collectingSubscription',clientController.collectingSubscription);
router.get('/getAllClients',clientController.getAllClients);
router.get('/searchForClients',clientController.searchForClients);
router.get('/userSubscribeToClient',userController.userSubscribeToClient);
router.get('/userUnsubscribe', userController.userUnsubscribe);

// Amr's routes Added Manually

router.post('/createClientProfile', client_profile_controller.createClientProfile);
router.post('/saveClientProfile',  client_profile_controller.saveClientProfile);

router.post('/uploadClientFile', client_profile_controller.uploadClientFile);
router.post('/uploadClientPicture', client_profile_controller.uploadClientPicture);
router.post('/uploadClientVideo', client_profile_controller.uploadClientVideo);

router.post('/updateClientProfile', client_profile_controller.updateClientProfile);
router.post('/deleteClientProfile', client_profile_controller.deleteClientProfile);


router.post('/viewClientProfile', client_profile_controller.viewClientProfile);

router.post('/createClientEvent',  client_profile_event_controller.createClientEvent);
router.post('/saveClientEvent', client_profile_event_controller.saveClientEvent);
router.post('/viewClientEvents', client_profile_event_controller.viewClientEvents);

router.post('/updateClientEvent', client_profile_event_controller.updateClientEvent);
router.post('/deleteClientEvent', client_profile_event_controller.deleteClientEvent);




module.exports = router;
