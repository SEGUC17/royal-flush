var mongoose = require('mongoose');

var reservationSchema = mongoose.Schema({

    eventName: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    tier: {
        type: String,
        required: true
    },

    // Making sure that the user agrees to the refund policy of the client
    acceptsRefundPolicy: {
        type: Boolean,
        required: true
    },

    // A variable that makes sure that the reservation wasn't cancelled by user
    cancelled: {
        type: Boolean,
        required: true,
        default: false
    }
});

var Reservation = mongoose.model("reservation", reservationSchema);
module.exports = Reservation;
