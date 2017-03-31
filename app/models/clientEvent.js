var mongoose= require('mongoose');

var event_schema= mongoose.Schema({


    eventName:{type:String, required:true},
    startingDate:{type:Date, required:true},
    endingDate:{type:Date, required:true},
    price:String,


  },{
    versionKey: false

    });


})

var event = mongoose.model("event", event_schema);
module.exports = event;
