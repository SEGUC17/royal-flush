var mongoose = require('mongoose');

var hot_dealsSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
  description:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    required:true
  }
  image:{
    type:String,
    required:true
  }
  category:{
    type:String,
    required:true
  }


})

var hot_deals = mongoose.model("HotDeals", hot_dealsSchema);

module.exports = hot_deals;
