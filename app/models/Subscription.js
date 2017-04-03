var mongoose=reqiure('mongoose');

var subscriptionSchema= mongoose.Schema({
  clientUsername:{
    type:String,
    required:true
  },
  userUsername:{
    type:String,
    required:true
  }
})

var Subscription = mongoose.model("subscription", subscriptionSchema);
module.exports=Subscription;
