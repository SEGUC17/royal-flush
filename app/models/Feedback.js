var mongoose= require('mongoose');

var feedbackSchema= mongoose.model({
  //feedback schema
  username:String,
  title: String,
  Url: String,
  type:String,
  scrnshot: String



})

var Feedback= mongoose.model("feedback", feedbackSchema);
module.export=Feedback;
