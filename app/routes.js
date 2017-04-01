var express = require('express');
var router = express.Router();
var dealController = require('./controllers/dealController');
var feedbackController = require('./controllers/feedbackController');

// Deal Routes
router.get('/viewDeal/:deal_id', dealController.viewDeal);
router.get('/viewDeals', dealController.getAllDeals);
router.get('/viewAllClientDeals', dealController.getAllClientDeals);
router.get('/addNewDeal', dealController.addNewDeal); // Should change to post when frontend is added
router.get('/deleteAllDeals', dealController.deleteAllDeals);
router.get('/deleteDeal/:deal_id', dealController.deleteDeal);
router.get('/updateDeal/:deal_id', dealController.updateDeal); // Should change to post when frontend is added

router.get('/viewFeedback/:feedback_id', feedbackController.viewFeedback);
router.get('/viewFeedbacks', feedbackController.getAllFeedbacks);
router.get('/viewAllClientFeedbacks', feedbackController.getAllClientFeedbacks);
router.get('/addNewFeedback', feedbackController.addNewFeedback);
// router.get('/deleteAllFeedbacks', feedbackController.deleteAllFeedbacks);

module.exports = router;
