// Adding model dependency
var Reservation = require('../models/Reservation.js');

// Creating the controller
var reservationController = {

    // Creating the adding reservation function
    addReservation: function(req, res) {

        // Creating a varible that will hold the json file in the request
        var reservation = new Reservation(req.body);

        // Saving the data to the database
        reservation.save(function(err, reservation) {
            if (err) {

                // Handling errors from the database
                res.json({
                    error: err,
                    data: null
                });
            } else {

                // returning the record that was added into the db
                res.json({
                    error: null,
                    data: reservation
                });
            }
        });
    },

    // Creating the cancelling reservation function
    cancelReservation: function(req, res) {

        // Creating a variable query that has the id of the event from the request
        var query = {
            _id: req.body._id
        }

        // Using the query to fetch the record from the db and updating the "cancelled" variable to true
        Reservation.update(query, {
            $set: {
                cancelled: true
            }
        }, function(err, reservation) {

            // Handling errors from db
            if (err) {
                res.json({
                    error: err,
                    date: null
                });

                // Returning the update info from db
            } else {
                res.json({
                    error: null,
                    data: reservation
                });
            }
        })
    }
};




// Exporting the controller
module.exports = reservationController;
