var mongoose = require('mongoose');

var client_profile_video_schema = mongoose.Schema({

  clientName:String,
  videoName:String

},{
  versionKey: false

  });

var client_profile_video_model = mongoose.model("clientVideo", client_profile_video_schema);

module.exports = client_profile_video_model;
