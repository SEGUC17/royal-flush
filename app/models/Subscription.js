var mongoose=require('mongoose');

var subscriptionSchema= mongoose.Schema({
  clientId:{
    type:String,
    required:true
  },
  userId:{
    type:String,
    required:true
  }
})

var Subscription = mongoose.model("subscription", subscriptionSchema);
module.exports=Subscription;
