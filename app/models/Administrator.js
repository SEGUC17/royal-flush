var mongoose=require('mongoose');

var administratorSchema=mongoose.Schema({
  //administrator Schema entry
  email:{
    type: String,
    required: true
  },
  username:{
    type:String,
    required: true
  },
  password:{
    type:String,
    requied: true
  }

})

var Administrator= mongoose.model("administrator",administratorSchema);
module.exports=Administrator;
