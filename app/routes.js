// require dependincies
var express = require('express');
var router = express.Router();
var multer = require('multer');
var projectController = require('./controllers/projectController');
var SignUpController = require('./controllers/SignUpController');
var loginController = require('./controllers/loginController');
var upload = multer({dest: __dirname +'/../public/img/users'});
var upload2 = multer({dest: __dirname + '/../public/img/users/scrnshot'});


// add routes
router.get('/', loginController.loginmenu);

router.get('/loginmenu',loginController.loginmenu );
router.post('/SignUp',upload.single("Image"), SignUpController.SignUp);
router.get('/register', SignUpController.register);

router.post('/login', loginController.login);

router.get('/logout', loginController.logout);

router.post('/portfolio',loginController.viewFeedback);
router.get('/portfolio',loginController.viewFeedback);




// export router

module.exports = router;
