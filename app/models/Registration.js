var mongoose = require('mongoose');

var registrationSchema = mongoose.Schema({
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
    }
});

var Registration = mongoose.model("registration", registrationSchema);
module.exports = Registration;
