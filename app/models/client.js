var mongoose= require('mongoose');

var client= mongoose.Schema({

  clientName:String,
  username:String,
  email:String,
  address:String,
  clientVerification:Boolean


  },{
    versionKey: false

    });

var client = mongoose.model("client", client);
module.exports = client;
