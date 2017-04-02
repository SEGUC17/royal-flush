// Dependencies

var express = require('express');
var router = express.Router();
var client_profile_controller = require('./controllers/clientProfileController');
var client_profile_event = require('./controllers/clientEventController');






//Add routes
router.get('/createClientProfile', client_profile_controller.createClientProfile);
router.post('/saveClientProfile',  client_profile_controller.saveClientProfile);

router.get('/uploadClientFile', client_profile_controller.uploadClientFile);
router.post('/uploadClientPicture', client_profile_controller.uploadClientPicture);
router.post('/uploadClientVideo', client_profile_controller.uploadClientVideo);

router.get('/viewClientProfile', client_profile_controller.viewClientProfile);

router.get('/createClientEvent',  client_profile_event.createClientEvent);
router.post('/saveClientEvent',  client_profile_event.saveClientEvent);










//Export
module.exports = router;
