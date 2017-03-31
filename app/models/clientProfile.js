var mongoose = require('mongoose');

var client_profile_schema = mongoose.Schema({

  clientInfo:String,
  paymentInfo:String,

},{
  versionKey: false

  });

var client_profile_model = mongoose.model("client_profile", client_profile_schema);

module.exports = client_profile_model;
