//rawan
var mongoose = require ('mongoose');
var clientEventSchema = mongoose.schema({
client_name:{
  type: String,
  required: true

},
event_name:{
  type: String,
  required: true
},
starting_date:{
  type: Date,
  required: true

},
ending_date:{
  type:Date,
  required: true
}
,
price:{
  type: String,
  required: true
},
location:{
  type: String,
  required: true
}
});
var clientEvent = mongoose.model("clientEvent", clientEventSchema);
module.exports = clientEvent;
