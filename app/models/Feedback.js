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

// =======
// var mongoose= require('mongoose');
//
// var feedbackSchema= mongoose.model({
//   //feedback schema
//   clientId:{
//     type:String,
//     required: true
//   },
//   userId:{
//     type:String,
//     required:true
//   },
//   message:{
// >>>>>>> origin/seif2

// <<<<<<< HEAD
// var Feedback = mongoose.model("feedback", feedbackSchema);
// module.exports = Feedback;
// =======
var Feedback= mongoose.model("feedback", feedbackSchema);
module.export=Feedback;
// >>>>>>> origin/seif2
