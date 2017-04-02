var mongoose = require('mongoose');

var feedbackSchema= mongoose.Schema({
  body:{
    type:String,
    required:true,
    maxLength:5
  },
  date:{
    type:Date,
    default:Date.now
  },
  client_id:{
    type:String,
    required:true
  },
  user_id:{
    type:String,
    required:true
  }
})

var Feedback = mongoose.model("feedback", feedbackSchema);
module.exports = Feedback;
