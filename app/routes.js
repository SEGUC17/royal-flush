var express = require('express');
var router = express.Router();
var verifyClientController = require('./controllers/verifyClientController');
var emailController = require('./controllers/emailController');
var mandrill = require('node-mandrill')('AIzaSyATF9snxRM9NRydzxDnZvO9JMVS1fePrXA'); 
//Add routes here

router.get('/varifyClients',verifyClientController.ViewUnverifiedClients);

router.get('/ViewClient',verifyClientController.ViewClient);

router.post( '/api/sendemail/',emailController.VerificationEmail);

router.post( '/api/sendemail/',emailController.RejectionEmail);

router.post('/ViewClient',verifyClientsController.verifyClient);

module.exports = router;
