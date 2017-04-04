var Registration = require('../models/Registration.js');

var registrationController = {
    addRegistration: function(req, res) {
        var registration = new Registration(req.body);
        registration.save(function(err, registration) {
            if (err) {
                res.json({
                    error: err.message,
                    data: null
                });
            } else {
                res.json({
                    error: null,
                    data: registration
                });
            }
        });
    }
};


module.exports = registrationController;
