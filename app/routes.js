var express = require('express');
var router = express.Router();
var user_controller = require('./controllers/userController');


////////////////////////////////////////////////// sprint 2 Amr Abu Greedah
router.get('/getUser', user_controller.getUser);
router.get('/subscriptions', user_controller.getSubscribedClients);
router.get('/reservations', user_controller.getReservations);


module.exports = router;
