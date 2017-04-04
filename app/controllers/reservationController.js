var Reservation = require('../models/Reservation.js');

var reservationController = {
    addReservation: function(req, res) {
        var reservation = new Reservation(req.body);
        reservation.save(function(err, reservation) {
            if (err) {
                res.json({
                    error: err,
                    data: null
                });
            } else {
                res.json({
                    error: null,
                    data: reservation
                });
            }
        });
    },

    cancelReservation: function(req, res) {
        var res = Reservation.findOne({
            _id: req.body
        });
        res.update(query, {
            $set: {
                cancelled: true
            }
        }, function(err, reservation) {
            if (err) {
                res.json({
                    error: err.message,
                    date: null
                });
            } else {
                res.json({
                    error: null,
                    data: reservation
                });
            }
        })
    }
};





module.exports = reservationController;
