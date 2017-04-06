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
  //redirect to login page it is not a registered user in the database
  loginmenu:function(req,res){
    var correctuser = true;
    var registered = false;
    res.render('login',{correctuser,registered});
  },



//login as an admin by searching for his current username in the database of adminstrators, if login
 // is successful render to his home page else stay in the same page. 
  login:function(req,res){
    var correctuser = false;
    Adminstrator.findOne({username:req.body.username, password:req.body.password},function(err,reg){
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
    //  hasPortfolio = reg.hasPortfolio;
    res.redirect('/');
  }
  }

    })

  },
  //function to view the feedbacks of users
  viewFeedback:function(req,res){
   
  //Adminstrator navigate through feedbacks using his own username
    Administrator.findOne({username:user},function(err,reg){
      if(err){
        console.log(err);
      }else{
        if(reg){
        console.log(usrname);
   //displaying the  feedbacks by their usernames, to open one click on the username of the username's feedback
   //done for front-end implemntation wise.       
        Feedback.find({username:user},function(err,work){
          if(err){
            console.log(err);
          }else{
            if(!work){
              console.log('no work')
            }else{
              console.log('work');

              res.render('Feedbacks', {reg, work, isOwner});
        }
          }
        })
}else{
  console.log('no log');
}
      }
    })


  },
  //method for logout of the website.
  logout:function(req,res){
    loggedin = false;
    res.redirect('/');
  },

}
module.exports = SignUpController;
