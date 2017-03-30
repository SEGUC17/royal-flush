// Dependencies

var express = require('express');
var router = express.Router();
var client_profile_controller = require('./controllers/clientProfileController');






//Add routes
router.get('/createClientProfile', client_profile_controller.createClientProfile);
// router.post('/uploadClientPicture', client_profile_controller.uploadClientPicture);








//Export
module.exports = router;
