// Dependencies

var express = require('express');
var router = express.Router();
var client_profile_controller = require('./controllers/clientProfileController');
var client_profile_event_controller = require('./controllers/clientEventController');






//Add routes
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












//Export
module.exports = router;
