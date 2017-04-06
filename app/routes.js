var express = require('express');
var administratorController= require('./controllers/administratorController');
var clientController=require('./controllers/clientController');
var router = express.Router();

//Add routes here
router.get("/administratorLogin", administratorController.administratorLogin);
router.get("/viewFeedback", clientController.viewFeedback);


module.exports = router;
