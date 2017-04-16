var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
      name:{
      type:String,
      required :false
    },
    username:{
      type:String,
      required:false,
      unique:false
    },
    email:{
      type:String,
      required:false
    },
    password:{
      type:String,
      required:false
    },
    address:{
    type:  String,
    required:false
  },
});

var User = mongoose.model("user", userSchema);

module.exports = User;
