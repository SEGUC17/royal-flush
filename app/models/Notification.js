var mongoose=require('mongoose');

var notificationSchema=mongoose.Schema({
  clientId:{
    type:String,
    required:true
  },
  userId:{
    type:String,
    required:true
  },
  viewed:Boolean,
  message:{
    type:String,
    required:true
  }
})

var Notification= mongoose.model("notification", notificationSchema);
module.exports=Notification;
