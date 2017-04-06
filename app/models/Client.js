var mongoose = require('mongoose');

var clientSchema= mongoose.Schema({
  //Client schema


})

var Client = mongoose.model("client", clientSchema);
module.exports = Client;
