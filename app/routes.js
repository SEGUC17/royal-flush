var express = require('express');
var router = express.Router();
var reservationController = require('./controllers/reservationController');

//Add routes here

router.post('/reservation/new', reservationController.addReservation);
router.post('/reservation/cancel', reservationController.cancelReservation);

module.exports = router;
