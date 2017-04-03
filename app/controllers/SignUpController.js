let Registrations = require('../models/Registrations');
var multer = require('multer');
var fs = require('fs');
let SignUpController = {
  register:function(req, res){
    var registered = true;
      res.render('register',{registered});
  },
  SignUp:function(req,res){
  var filesaved =  req.file.filename;
  var origname = req.file.originalname;
  var dist = req.file.destination;
  var mongofile = req.body.username + '.jpg';
  fs.rename(dist+'/'+filesaved,dist+'/'+mongofile,function(err){
    if(err) console.log(err);
    else {
      console.log('done');
    }
  });

  let add = new admin({firstName:req.body.firstName,lastName:req.body.lastName,username:req.body.username,password:req.body.password,Image:mongofile});
  add.save(function(err, add){
    if(err){
      var registered = false;
      res.render('register',{registered})
    }else{
      var registered = true;
      var correctuser = true;
      res.render('login',{registered, correctuser});
    }
  })
}
}
module.exports = SignUpController;
