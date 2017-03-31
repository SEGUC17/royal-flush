var mongoose = require('mongoose');

var client_profile_picture_schema = mongoose.Schema({

  clientName:String,
  pictureName:String

},{
  versionKey: false

  });

var client_profile_picture_model = mongoose.model("client_profile_pictures", client_profile_picture_schema);

module.exports = client_profile_picture_model;
