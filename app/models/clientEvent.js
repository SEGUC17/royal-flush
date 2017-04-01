var mongoose= require('mongoose');

var client_event_schema= mongoose.Schema({

    clientName:String,
    eventName:{type:String, required:true},
    startingDate:{type:Date, required:true},
    endingDate:{type:Date, required:true},
    price:String,


  },{
    versionKey: false

    });

var event = mongoose.model("clientEvent", client_event_schema);
module.exports = event;
