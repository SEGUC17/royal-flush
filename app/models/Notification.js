var mongoose=require('mongoose');

var notificationSchema=mongoose.Schema({
  clientUsername:{
    type:String,
    required:true
  },
  userUsername:{
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
