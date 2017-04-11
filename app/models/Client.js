//rawan
var mongoose = require ('mongoose');
var clientSchema = mongoose.Schema({
username:{
type: String,
required: true,
unique: true

},
password:{
type: String,
required: true

},
name:{
type: String,
required: true
},
address:{
  type: String,
  required: true
},

email:{
  type: String,
  required: true,
  unique: true
},
created:{
  type: String,
  required: true
},
phone:{
  type: String,
  required: true,
  unique: true
},
verified: Boolean

})
var client = mongoose.model("client",clientSchema);
module.exports = client;
