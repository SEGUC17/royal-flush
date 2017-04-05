var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var clientSchema= mongoose.Schema({

      local            : {
          name      : {
          type:String,
          required :true
        },
          username  :{
            type:String,
            required:true,
            unique:true
          },
          email     :{
            type:String,
            required:true

          },
          password  : {
            type:String,
            required:true
          },
          address   :{
          type:  String,
          required:true
        },
          created   :{
            type : Date,
            default : Date.now
          },
          phone     :{
          type:  Number,
          required:true
        },
          verified  :{
          type:  Boolean,
          required:true
        },
          start_hour :{
          type:  String,
          required:true
        },
          end_hour  :{
          type:  String,
          required:true
        },
          working_days :{
          type:  String,
          required:true
        },
          category:{
          type:String,
          required: true
},
      },
  });

var Client = mongoose.model("client", clientSchema);
module.exports = Client;
