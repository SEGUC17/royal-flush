const express = require('express');
const Client = require('../models/Clients');

const router = express.Router();

router.get('/client',(req,res)=>{
  //const verified = req.body.verified;
  //const name = req.body.name;

  Client.getClientByVerificationStatus((err,client)=>{
    if(err)
    throw err;
    //else if(verified == false)
    res.json(this.name);
    



  });
});
module.exports=router;
