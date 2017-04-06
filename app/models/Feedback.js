var mongoose= require('mongoose');

var feedbackSchema= mongoose.model({
  //feedback schema
  clientId:{
    type:String,
    required: true
  },
  userId:{
    type:String,
    required:true
  },
  message:{
    type:String,
    required:true
  }
})

var Feedback= mongoose.model("feedback", feedbackSchema);
module.export=Feedback;
