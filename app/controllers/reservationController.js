let Reservation = require('../models/Reservation');
let Client = require('../models/Client');

let reservationController = {

  makeReservation:function(req, res){
    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var user_id = "1"; //Value changes with session
    var client_id = req.params.client_id; // "58e42d53aef6b8217ee81d37";
    var reservation_date = new Date(req.params.booked_date_time); // new Date("2017-05-18T00:00:00Z");
    var reservation_day = week[reservation_date.getDay()].toLowerCase();

    Client.findOne({_id:client_id}, function(err, client){
      if(err){
        res.send(err.message);
      }
      else {
        Reservation.findOne({booked_date_time:reservation_date}, function(err, reservation){
          if(err){
            res.send(err.message);
          }
          else {
            if(reservation){
              res.send("Sorry, you can't book this slot.");
              // res.json(res);
            }
            else {
              var working_days = client.working_days.split(',');
              if(working_days.includes(reservation_day)){
                let reservation = new Reservation({booked_date_time:reservation_date, user_id:user_id, client_id:client_id});
                reservation.save(function(err, reservation){
                  if(err){
                    res.send(err.message);
                  }
                  else {
                    res.send("Booking successful!");
                  }
                });
              }
              else{
                res.json("Sorry, you can't book this slot.");
              }
            }
          }
        });
      }
    });
  },

  getAllReservations:function(req, res){
    Reservation.find(function(err, reservations){
      if(err){
        res.send(err.message);
      }
      else {
        res.json(reservations);
      }
    });
  },

getReservation:function(req, res){
  Reservation.findOne({_id:req.params.reservation_id}, function(err, reservation){
    if(err){
      res.send(err.message);
    }
    else {
      res.json(reservation);
    }
  });
},

cancelReservation:function(req, res, next){
  var user_id = 1; //Value changes with session
  var reservation_id = req.params.reservation_id;
  Reservation.remove({_id:reservation_id, user_id:user_id}, function(err, reservation){
    if(err){
      res.send(err.message);
    }
    else {
      res.send("Reservation cancelled");
    }
  });
}
}

module.exports = reservationController;
