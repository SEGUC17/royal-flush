var mongoose = require('mongoose');

var reservationSchema = mongoose.Schema({
    eventId: {
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
    acceptsRefundPolicy: {
        type: Boolean,
        required: true
    },
    cancelled: {
        type: Boolean,
        required: true,
        default: false
    }
});

var Reservation = mongoose.model("reservation", reservationSchema);
module.exports = Reservation;
