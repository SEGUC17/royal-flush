var mongoose= require('mongoose');

var client_event_schema= mongoose.Schema({

    clientName:String,
    eventName:{type:String, required:true},
    startingDate:{type:Date, required:true},
    endingDate:{type:Date, required:true},
    location:{type: String, required:true},
    price:String


  },{
    versionKey: false

    });

var event = mongoose.model('clientEvent', client_event_schema);

module.exports = event;
//method definition
module.exports.findByClientName= function(clientName,callback) {
  const query = {name:clientName};
event.find(query, callback);
}
