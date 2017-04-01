var mongoose = require('mongoose');

//var mongoose = require('mongoose');
// var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var hot_dealsSchema = mongoose.Schema({

    local            : {
        title        : String,
        password     : String,
    },

});

// methods ======================
// generating a hash
// userSchema.methods.generateHash = function(password) {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.local.password);
// };

// create the model for users and expose it to our app
module.exports = mongoose.model('hot_deals', hot_dealsSchema);

var hot_deals = mongoose.model("hot_deals", hot_dealsSchema);

module.exports = hot_deals;
