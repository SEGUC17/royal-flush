// var fs = require('fs')
let client_profile = require('../models/clientProfile');

let client_profile_controller = {

        createClientProfile:function(req, res){

            res.render('createClientProfile');

        },

        // uploadClientPicture:function(req, res){
        //
        //               // fs.readFile(req.file.path, function(err, data){
        //               //
        //               //     res.send("hi");
        //               //
        //               // });
        //
        // }



}

module.exports = client_profile_controller;
