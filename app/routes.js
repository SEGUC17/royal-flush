var express = require('express');
var router = express.Router();

//Add routes here

router.get('/varifyClients',varifyClientControler.ViewUnverifiedClients);

router.get('/ViewClient',varifyClientControler.ViewClient);

router.post( '/api/sendemail/',emailController.VerificationEmail);

router.post( '/api/sendemail/',emailController.RejectionEmail);

router.post('/ViewClient',varifyClientsController.verifyClient);

module.exports = router;
