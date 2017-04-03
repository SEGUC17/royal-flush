var mongoose=require('mongoose');

var administratorSchema=mongoose.Schema({
  //administrator Schema entry
  firstName:String,
    lastName:String,
    username:{
      type:String,
      required:true,
      unique:true
    },
      password: String,
      Image: String,



})

var Administrator= mongoose.model("Administrator",administratorSchema);
module.exports=Administrator;
