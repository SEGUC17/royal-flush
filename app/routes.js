var express = require('express');
var router = express.Router();
var verifyClientController = require('./controllers/verifyClientController');
var emailController = require('./controllers/emailController');
var mandrill = require('node-mandrill')('AIzaSyATF9snxRM9NRydzxDnZvO9JMVS1fePrXA');                 ///////////////// !!!!!!!!!!!!!!!!!!!!!!!!!!!! ignore
//Add routes here

router.get('/varifyClients',verifyClientController.viewUnverifiedClients);

router.get('/viewClient',verifyClientController.viewClient);

router.post( '/api/sendemail/',emailController.verificationEmail);

router.post( '/api/sendemail/',emailController.rejectionEmail);

//router.post('/ViewClient',verifyClientController.viewClient);

module.exports = router;
