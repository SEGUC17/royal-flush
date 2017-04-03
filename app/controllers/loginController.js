let Registrations = require('../models/Registrations');
let Project = require('../models/Project');
var multer = require('multer');
let Work = require('../models/work');
let Feedback = require('../models/Feedback')
let administrator = require('../models/administrator')
var fs = require('fs');
var loggedin = false;
var usrname;
var pass;
var user;
var curuser;
var isOwner;
var hasPortfolio;
let SignUpController = {
  register:function(req, res){
      res.render('register');
  },
  loginmenu:function(req,res){
    var correctuser = true;
    var registered = false;
    res.render('login',{correctuser,registered});
  },




  login:function(req,res){
    var correctuser = false;
    Registrations.findOne({username:req.body.username, password:req.body.password},function(err,reg){
      if(err){
      console.log(err);
    }else{
    if(!reg){
      var registered = false;
        res.render('login',{correctuser,registered});
    }else{
      loggedin = true;
      usrname = req.body.username;
      pass = req.body.password;
      hasPortfolio = reg.hasPortfolio;
    res.redirect('/');
  }
  }

    })

  },
  viewFeedback:function(req,res){
    if(req.body.user!= undefined){
    user = req.body.user;
    curuser = req.body.curuser;
    console.log(user);
    if(user == curuser){
      isOwner = true;
    }else{
      isOwner = false;
    }
  }
    Administrator.findOne({username:user},function(err,reg){
      if(err){
        console.log(err);
      }else{
        if(reg){
        console.log(usrname);
        Feedback.find({username:user},function(err,work){
          if(err){
            console.log(err);
          }else{
            if(!work){
              console.log('no work')
            }else{
              console.log('work');

              res.render('Portfolio', {reg, work, isOwner});
        }
          }
        })
}else{
  console.log('no log');
}
      }
    })


  },
  logout:function(req,res){
    loggedin = false;
    res.redirect('/');
  },

}
module.exports = SignUpController;
