var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
  //Client schema
  username:{
    type:String,
    required:true,
    unique:true,
    trim:true
           },
  password:{
    type:String,
    required:true,
    unique:false,
    trim:true
           },
  name:{
    type:String,
    required:true,
    unique:false,
    trim:true
  }
  address:{
    type:String,
    required:true,
    unique:false,
    trim:true
          },
  created:{
    type:Date,
    required:true,
    unique:false,
    trim:true,
    default:Date.now
          },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true
        },
  phone:{
    type:String,
    required:true,
    unique:true,
    trim:true
        },
  verified:{
    type:Boolean
           }
})

var Client = mongoose.model("client", clientSchema);

module.exports = Client;
