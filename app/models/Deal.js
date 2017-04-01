var mongoose = require('mongoose');

var dealSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true,
    default:0.0
  },
  description:{
    type:String,
    required:true
  },
  start_date:{
    type:Date,
    required:true,
    default: Date.now
  },
  end_date:{
    type:Date,
    required:true,
     default: Date.now
  },
  terms:{
    type:String,
    default:"No terms apply."
  },
  image_path:{
    type:String,
    required:true
  },
  expired:{
    type:Boolean,
    default:false
  },
  client_id:{
    type:String,
    required:true
  },
  event_id:{
    type:String,
    default:"0"
  }
})

var Deal = mongoose.model("deal", dealSchema);
module.exports = Deal;
