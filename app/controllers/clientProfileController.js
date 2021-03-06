let clientProfile = require('../models/clientProfile');
let clientPicture = require('../models/clientPictures');
let clientVideo = require('../models/clientVideos');

let clientProfileController = { // the name of the client should be saved in a session to use it to save  pictures or video uploaded by the client

        createClientProfile:function(req, res){

            res.render('createClientProfile');

        },

        viewAllClientProfiles:function(req, res){
          clientProfile.find(function(err, clientprofs){
            if(err){
              res.send(err.message);
            }else {
              res.json(clientprofs);
            }
          });
        },

        saveClientProfile:function(req, res){

            // console.log(req.session);                   ////////////session
            var clientName = req.session.clientname;
            // var clientName = req.body.clientName;
            var clientDescription = req.body.clientDescription;
            var clientInfo = req.body.clientInfo;
            var clientPaymentInfo = req.body.paymentInfo;
            var category = req.body.category;
            var email = req.body.email;
            var fullname = req.body.fullname;
            var contactNo = req.body.contactNo;

            // console.log(clientName + ' ' + clientDescription + ' ' + clientInfo + ' ' + clientPaymentInfo + ' ' + category + ' ' + email + ' ' + fullname + ' ' + contactNo );

            var clientProfileData = {
                                    clientName:clientName,
                                    clientDescription:clientDescription,
                                    clientInfo:clientInfo,
                                    paymentInfo:clientPaymentInfo,
                                    category:category,
                                    email:email,
                                    fullname:fullname,
                                    contactNo:contactNo
                                  };

                            //      console.log(clientProfileData);

            let client_profile = new clientProfile(clientProfileData);

            client_profile.save(function(err, client_profile){

                    if(err){
                      // console.log(err.message);
                      // res.json({success: false, msg:'Failed to create profile'});
                      res.status(504);
                      res.end(err);
                    }else{
                      // console.log("client profile saved!");
                      // res.json({success: true, msg:'Profile created successfully!'});
                      // console.log('Client saved');
                      res.end(err);
                    }
            });
        },
/////////////////////////////////////////////////////////////
        uploadClientFile:function(req, res){
          res.render('addClientFile');
        },
/////////////////////////////////////////////////////////////
        uploadClientPicture:function(req, res){ // stores the name of the client which is unique and the name of the picture which is also unique in the database

      if(req.file == null){
        console.log("there is no picture chosen!");
      }else{
        var mime_type = req.file.mimetype;                      // mime_type contains the type of file with extension, for images it contains 'image/png' the extension might change
        var check_type = mime_type.substr(0,5);                 // check_type substring the first five letters which is an image if the file is a image

        if(check_type != 'image'){
          console.log("not image!");
          console.log(mime_type);
        }
        else {
        console.log(mime_type);
        var picture_name = req.file.filename;                 // the filename is generated by multer and it's unique

        /////////
        var picture = {
                     clientName:req.session.clientname,           ////////////session
                     pictureName:picture_name
                   };
        let client_picture = new clientPicture(picture);

        client_picture.save(function(err, client_picture){
          if(err){
            console.log(err.message);
          }else{
            console.log("Picture is saved successfully!");
            res.redirect('/viewClientProfile');
          }
          });
        }
      }
      },


/////////////////////////////////////////////////////////////
        uploadClientVideo:function(req, res){   // stores the name of the client which is unique and the name of the video which is also unique in the database

      if(req.file == null){
        console.log("there is no video chosen!");
      }else{
        var mime_type = req.file.mimetype;               // mime_type contains the type of file with extension, for videos it contains 'video/mp4' the extension might change
        var check_type = mime_type.substr(0,5);         // check_type substring the first five letters which is a video if the file is a video

        if(check_type != 'video'){
          console.log("not video!");
          console.log(mime_type);
        }
        else {
        console.log(mime_type);
        var video_name = req.file.filename;           // the filename is generated by multer and it's unique

        /////////
        var video = {
                     clientName:req.session.clientname,               ////////////session
                     videoName:video_name
                   };
        let client_video = new clientVideo(video);

        client_video.save(function(err, client_video){
          if(err){
            console.log(err.message);
          }else{
            console.log("Video is saved successfully!");
            res.redirect('/viewClientProfile');
          }
        });
        }
      }
    },

/////////////////////////////////////////////////////////////

      viewClientProfile:function(req, res){

        /////clientname is retrieved from session

      //  var clientname = req.session.clientname;
          var clientname = req.session.clientname;

        var getProfile = clientProfile.findOne({'clientName':clientname}, 'clientName clientDescription clientInfo paymentInfo category email fullname contactNo', function(err, clientProfile){

            if(err){

                  console.log(err.message);


            }else if(clientProfile == null){

                console.log("no profile with this client name!");

                return;

            }else{

              //    var clientProfile = {clientName:clientprofile.clientName, clientDescription:clientprofile.clientDescription, clientInfo:clientprofile.clientInfo, paymentInfo:clientprofile.paymentInfo};


//////////////////// get pictures
                  var clientPicturesResult;
                  clientPicture.find({'clientName':clientProfile.clientName}, 'pictureName', function(err, clientPictures){

                      if(err){

                         console.log(err.message);
                         return;

                      }else{

                      //  console.log(clientPictures);
                        clientPicturesResult = clientPictures;
                        getClientVideos();
                      // res.render('viewClientProfile', {clientProfile, clientPicturesResult});

                      }

                  });

//////////////////////////// get videos

         function getClientVideos(){
          clientVideo.find({'clientName':clientProfile.clientName}, 'videoName', function(err, clientVideos){


              if(err){

                console.log(err.message);
                return;

              }else{

               clientVideosResult = clientVideos;
            //  console.log(clientVideosResult);
            //  console.log(clientPicturesResult);
             res.render('viewClientProfile', {clientProfile, clientPicturesResult, clientVideosResult});
              }

          });
        }

        }


        });

      },

      updateClientProfile:function(req, res){

        var clientname = req.session.clientname;
        var clientDescription = req.body.description;
        var clientInfo = req.body.clientInfo;
        var clientPaymentInfo = req.body.paymentInfo;
        var category = req.body.category;
        var email = req.body.email;
        var fullname = req.body.fullname;
        var contactNo = req.body.contactNo;

        clientProfile.findOne({'clientName':clientname}, function(err, clientProfile){
            if(err){
                  console.log(err.message);
            }else if(clientProfile == null){
                console.log("no profile with this client name!");
                return;
              }else{
                  if(clientDescription != null){
                    clientProfile.clientDescription = clientDescription;
                  }
                  if(clientInfo != null){
                    clientProfile.clientInfo = clientInfo;
                  }
                  if(clientPaymentInfo != null){
                    clientProfile.clientPaymentInfo = clientPaymentInfo;
                  }
                  if(category != null){
                    clientProfile.category = category;
                  }
                  if(email != null){
                    clientProfile.email = email;
                  }
                  if(fullname != null){
                    clientProfile.fullname = fullname;
                  }
                  if(contactNo != null){
                    clientProfile.contactNo = contactNo;
                  }
                  clientProfile.save(function(err){
                        if(err){
                          console.log(err.message);
                        }else{
                          console.log("saved");
                        }
                  });
              }
      });
    },

    deleteClientProfile:function(req, res){
      var clientname = req.session.clientname;
      clientProfile.remove({'clientName':clientname}, function(err){
          if(err){
                console.log(err.message);
          }else{
                console.log("Client profile removed!");
          }
    });
  },

  deleteAllClientProfiles:function(req, res){
    clientProfile.remove(function(err){
      if(err){
        res.send(err.message);
      }else{
        res.send("Clients deleted successfully!");
      }
    });
  }
}

module.exports = clientProfileController;
