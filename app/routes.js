var express = require('express');
var router = express.Router();
var clientController = require ('./controllers/clientController');
var clientEventController = require('./controllers/clientEventController');

//routes for client sign up
router.get('/',clientController.createClient);
router.post('/clientSignUp',clientController.createClient);

//routes for searching on client event
router.get('/searchForClientEvent',clientEventController.searchForClientEvent);
//searching by name
router.post('/searchByname',clientEventController.searchForClientEvent.findByClient_name);
//searching by event name
router.post('/searchByEventName',clientEventController.searchForClientEvent.findByEvent_name);
// searching by starting date
router.post('searchByStartingDate',clientEventController.searchForClientEvent.findByStarting_date);
//by ending date
router.post('searchByEndingDate',clientEventController.searchForClientEvent.findByEnding_date);
//by price
router.post('searchByPrice',clientEventController.searchForClientEvent.findByPrice);
//by location
router.post('searchByLocation',clientEventController.searchForClientEvent.findByLocation);






module.exports = router;
// routers for client sign up
