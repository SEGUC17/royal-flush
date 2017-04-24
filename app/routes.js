var express = require('express');
var router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

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
const User = require('./models/User');
const config = require('./config/database');


//////////User Routes
router.get('/getUser', userController.getUser);
router.get('/subscriptions', userController.getSubscribedClients);
router.get('/reservations', userController.getReservations);
router.post('/test', user_controller.updateInfo);
//////////
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

router.get("/viewAllClientProfiles", clientProfileController.viewAllClientProfiles);
router.get("/deleteAllClientProfiles", clientProfileController.deleteAllClientProfiles);
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
router.post('/searchForClientEventByName',clientEventController.searchForClientEventByName);

router.post('/updateClientEvent', clientEventController.updateClientEvent);
router.post('/deleteClientEvent', clientEventController.deleteClientEvent);

router.get("/administratorLogin", administratorController.administratorLogin);
// router.get("/viewFeedback", clientController.viewFeedback);
router.post('/register', (req, res, next) => {
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    } else {
      res.json({success: true, msg:'User registered'});
    }
  });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user){
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch){
        const token = jwt.sign(user, config.secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT '+token,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});

// Profile
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});

router.get('/client',(req,res)=>{
  //const verified = req.body.verified;
  //const name = req.body.name;

  Client.getClientByVerificationStatus((err,client)=>{
    if(err)
    throw err;
    //else if(verified == false)
    res.json(this.name);




  });
});
router.delete('/client',(req,res) =>{
  Client.VerifyClients((err, id)=>{
    if(err)
    throw err;
    res.json(client);

  });

});

module.exports = router;
