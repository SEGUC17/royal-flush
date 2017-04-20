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

const event = mongoose.model('clientevent', client_event_schema);

module.exports = event;
//method definition
module.exports.findByEventName = function (eventName, callback) {
  const query = { eventName: { $regex: ".*" + eventName + ".*", $options: 'i' } };

  event.find(query, callback);
}
