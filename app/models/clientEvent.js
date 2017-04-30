var mongoose = require('mongoose');

var client_event_schema = mongoose.Schema({

  clientName: String,
  eventName: { type: String, required: true },
  startingDate: { type: Date, required: true },
  endingDate: { type: Date, required: true },
  location: { type: String, required: true },
  price: String


}, {
    versionKey: false

  });

const clientEvent = module.exports = mongoose.model("clientEvent", client_event_schema);

//method definition
// module.exports.findByEventName = function (name, callback) {
//   const query = { eventName: { $regex: ".*" + name + ".*", $options: 'i' } };

//   event.find(query, callback);
// }

module.exports.findByEventName = function (eventName, callback) {
  const query = { eventName: { $regex: ".*" + eventName + ".*", $options: 'i' } };
 

 clientEvent.find(query, callback);
}
