var express = require('express');
var router = express.Router();
var dealController = require('./controllers/dealController');
var feedbackController = require('./controllers/feedbackController');
var clientController = require('./controllers/clientController');
var reservationController = require('./controllers/reservationController');

// Deal Routes
router.get('/viewDeal/:deal_id', dealController.getDeal);
router.get('/viewDeals', dealController.getAllDeals);
router.get('/viewAllClientDeals', dealController.getAllClientDeals);
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
// Client Routes
router.get('/getAllClients', clientController.getAllClients);
router.get('/addNewClient', clientController.addNewClient);
router.get('/getCategoryClients/:category', clientController.getCategoryClients)
// Reservation Routes
router.get('/makeReservation/:client_id/:reservation_date', reservationController.makeReservation);
router.get('/viewReservations', reservationController.getAllReservations);

module.exports = router;
