const mongoose = require('mongoose');
//const config = require('./app/db');

const clientSchema= mongoose.Schema({

     local            : {
          name      : {
          type:String,
          required :true
        },
          username  :{
            type:String,
            //required:true,
            unique:true
          },
          email     :{
            type:String,
            //required:true

          },
          password  : {
            type:String,
            //required:true
          },
          address   :{
          type:  String,
          //required:true
        },
          created   :{
            type : Date,
            default : Date.now
          },
          phone     :{
          type:  Number,
          //required:true
        },
          verified  :{
          type:  Boolean,

          //required:true
        },
          start_hour :{
          type:  String,
          //required:true
        },
          end_hour  :{
          type:  String,
          //required:true
        },
          working_days :{
          type:  String,
          //required:true
        },
          category:{
          type:String,
          //required: true
}
      }
  });




const client = module.exports = mongoose.model("client", clientSchema);
//getting unverified clients
module.exports.getClientsByVerificationStatus = (callback) =>{
  const query = {verified: "false"}
  client.findByVerificationStatus(query, callback);
}
//verify Clients by deleting them from unverified clients
module.exports.VerifyClients = function(req, res) {
  Song.findByIdAndRemove(req.params.id, function(err, song) {
    if (err) {
      throw new Error(err);
    }
    res.send(song);
  });
};

//module.exports = client;
