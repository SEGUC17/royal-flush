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
// Deal Routes
router.get('/viewDeal/:deal_id', dealController.getDeal);
router.get('/viewDeals', dealController.getAllDeals);
router.get('/viewAllClientDeals/:client_id', dealController.getAllClientDeals);
router.get('/addNewDeal', dealController.addNewDeal); // Should change to post when frontend is added
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
router.get('/addNewFeedback/:client_id', feedbackController.addNewFeedback); // Should change to post when frontend is added
router.get('/deleteAllFeedbacks', feedbackController.deleteAllFeedbacks);
router.get('/deleteFeedback/:feedback_id', feedbackController.deleteFeedback);
router.get('/updateFeedback/:feedback_id', feedbackController.updateFeedback); // Should change to post when frontend is added

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



>>>>>>> origin/seif_amr

module.exports = router;
