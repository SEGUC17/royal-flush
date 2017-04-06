let Registrations = require('../models/Registrations');
var multer = require('multer');
var fs = require('fs');
let SignUpController = {
 //function to render to register page when clicking on register button as an admin
  register:function(req, res){
    var registered = true;
      res.render('register',{registered});
  },
  //function used to sign up as an adminstrator
  SignUp:function(req,res){
  var filesaved =  req.file.filename;     //the following is responsible for saving picture with its path to mongodb as profile picture for admin
  var origname = req.file.originalname;
  var dist = req.file.destination;
  var mongofile = req.body.username + '.jpg';
  fs.rename(dist+'/'+filesaved,dist+'/'+mongofile,function(err){
    if(err) console.log(err);
    else {
      console.log('done');
    }
  });
//adding a new admin to the database admins with the following inputs in the front end
  let add = new admin({firstName:req.body.firstName,lastName:req.body.lastName,username:req.body.username,password:req.body.password,Image:mongofile});
  add.save(function(err, add){
    if(err){
      var registered = false;
 //any wrong values, stay in the same page     
      res.render('register',{registered})
    }else{
      var registered = true;
      var correctuser = true;
 //render to login page so admin can login using his new account     
      res.render('login',{registered, correctuser});
    }
  })
}
}
module.exports = SignUpController;
