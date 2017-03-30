var mongoose = require('mongoose');

var dealSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  start_date:{
    type:{type: Date, default: Date.now},
    required:true
  },
  end_date:{
    type:{type: Date, default: Date.now},
    required:true
  },
  terms:{
    type:String
  },
  picture_path:{
    type:String,
    required:true
  },
  expired:{
    type:Boolean,
    required:true
  },
  client_id:{
    type:String,
    required:true
  },
  event_id:{
    type:String,
    required:true
  }

})

var Deal = mongoose.model("deal", dealSchema);
module.exports = Deal;
