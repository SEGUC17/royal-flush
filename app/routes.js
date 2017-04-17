var express = require('express');
var router = express.Router();
// <<<<<<< HEAD
//
// var clientController = require('./controllers/clientController');
// var reservationController = require('./controllers/reservationController');
//
//
//
// // Client Routes
// router.get('/viewClients', clientController.getAllClients);
// router.get('/addNewClient', clientController.addNewClient);
// router.get('/getCategoryClients/:category', clientController.getCategoryClients)
// // Reservation Routes
// router.get('/makeReservation/:client_id/:booked_date_time', reservationController.makeReservation);
// router.get('/viewReservations', reservationController.getAllReservations);
// router.get('/viewReservation/:reservation_id', reservationController.getReservation);
// router.get('/cancelReservation/:reservation_id', reservationController.cancelReservation);
// =======
var clientController= require('./controllers/clientController');
var userController=require('./controllers/userController');
var dealController = require('./controllers/dealController');
var feedbackController = require('./controllers/feedbackController');
var administratorController= require('./controllers/administaratorController');
var clientProfileController = require('./controllers/clientProfileController');
var clientEventController = require('./controllers/clientEventController');

// Deal Routes
router.get('/viewDeal/:deal_id', dealController.getDeal);
router.get('/viewDeals', dealController.getAllDeals);
router.get('/viewAllClientDeals/:client_id', dealController.getAllClientDeals);
router.post('/addNewDeal', dealController.addNewDeal); // Should change to post when frontend is added
router.get('/deleteAllDeals', dealController.deleteAllDeals);
router.get('/deleteDeal/:deal_id', dealController.deleteDeal);
router.get('/updateDeal/:deal_id', dealController.updateDeal); // Should change to post when frontend is added
router.get('/viewCategoryDeals/:category', dealController.getCategoryDeals);
router.get('/viewBudgetDeals/:price', dealController.getBudgetDeals);
router.get('/viewDateDeals/:start_date', dealController.getDateDeals);
router.get('/viewTodayDeals', dealController.getTodayDeals);

// Feedback Routes
router.get('/viewFeedback/:feedback_id', feedbackController.getFeedback);
router.get('/viewFeedbacks', feedbackController.getAllFeedbacks);
router.get('/viewAllClientFeedbacks/:client_id', feedbackController.getAllClientFeedbacks);
router.post('/addNewFeedback/:client_id', feedbackController.addNewFeedback); // Should change to post when frontend is added
router.get('/deleteAllFeedbacks', feedbackController.deleteAllFeedbacks);
router.get('/deleteFeedback/:feedback_id', feedbackController.deleteFeedback);
router.get('/updateFeedback/:feedback_id', feedbackController.updateFeedback); // Should change to post when frontend is added

//Add routes here
router.get('/collectingSubscription',clientController.collectingSubscription);
router.get('/getAllClients',clientController.getAllClients);
router.post('/searchForClientByName',clientController.searchForClientByName);
router.post('/searchForClientByLocation',clientController.searchForClientByLocation);
router.post('/searchForClientByCategory',clientController.searchForClientByLocation);

//router.post('/searchForClient',clientController.searchForClientEventByName);

router.get('/userSubscribeToClient',userController.userSubscribeToClient);
router.get('/userUnsubscribe', userController.userUnsubscribe);

// Amr's routes Added Manually

router.post('/createClientProfile', clientProfileController.createClientProfile);
router.post('/saveClientProfile',  clientProfileController.saveClientProfile);

router.post('/uploadClientFile', clientProfileController.uploadClientFile);
router.post('/uploadClientPicture', clientProfileController.uploadClientPicture);
router.post('/uploadClientVideo', clientProfileController.uploadClientVideo);

router.post('/updateClientProfile', clientProfileController.updateClientProfile);
router.post('/deleteClientProfile', clientProfileController.deleteClientProfile);


router.post('/viewClientProfile', clientProfileController.viewClientProfile);

router.post('/createClientEvent',  clientEventController.createClientEvent);
router.post('/saveClientEvent', clientEventController.saveClientEvent);
router.post('/viewClientEvents', clientEventController.viewClientEvents);

router.post('/updateClientEvent', clientEventController.updateClientEvent);
router.post('/deleteClientEvent', clientEventController.deleteClientEvent);

router.get("/administratorLogin", administratorController.administratorLogin);
// router.get("/viewFeedback", clientController.viewFeedback);

module.exports = router;
