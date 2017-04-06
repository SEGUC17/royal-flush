var mongoose= require('mongoose');

var feedbackSchema= mongoose.model({
  //feedback schema


})

var Feedback= mongoose.model("feedback", feedbackSchema);
module.export=Feedback;
