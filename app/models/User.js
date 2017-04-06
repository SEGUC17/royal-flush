var mongoose = require('mongoose');

var userSchema = mongoose.Schema({

  //Add user schema here

})

var User = mongoose.model("user", userSchema);

module.exports = User;
