var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var clientSchema= mongoose.Schema({

      local            : {
          name      : String,
          username  : String,
          email     : String,
          password  : Number,
          address   :String,
          created   :Date,
          phone     :Number,
          verified  :Boolean,
          start_hour :String,
          end_hour  :String,
          working_days :String,
          category: String

      },
  });

var Client = mongoose.model("client", clientSchema);
module.exports = Client;
