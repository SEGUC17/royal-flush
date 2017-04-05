var mongoose = require('mongoose');
// add autoincrement reservationId
var reservationSchema = mongoose.Schema({
  booked_date_time:{
    type:Date,
    required:true
  },
  user_id:{
    type:String,
    required:true
  },
  client_id:{
    type:String,
    required:true
  }
  // clientprofile_id:{
  //   type:String,
  //   required:true
  // }
})
var Reservation = mongoose.model("reservation", reservationSchema);
module.exports = Reservation;
