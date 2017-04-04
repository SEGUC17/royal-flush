var mongoose = require('mongoose');

var client_profile_schema = mongoose.Schema({

  clientName:String,
  clientDescription:String,
  clientInfo:String,
  paymentInfo:String,
  category:String,

},{
  versionKey: false

  });

var client_profile_model = mongoose.model("clientProfile", client_profile_schema);

module.exports = client_profile_model;
