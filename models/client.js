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
  // generating a hash
  clientSchema.methods.generateHash = function(password) {
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };

  // checking if password is valid
  clientSchema.methods.validPassword = function(password) {
      return bcrypt.compareSync(password, this.local.password);
  };

var Client = mongoose.model("client", clientSchema);
module.exports = Client;