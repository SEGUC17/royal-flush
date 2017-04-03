var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
  firstName:String,
  lastName:String,
  username:{
    type:String,
    required:true,
    unique:true
  },
    password: String,
    Image: String,
    hasPortfolio: Boolean
})
var Registrations = mongoose.model("Registrations", projectSchema);
module.exports = Registrations;
