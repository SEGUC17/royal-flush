let client = require('../models/client');

let ClientController = {

viewUnverifiedClients:function(req,res,next){ //view all unverifies clients

									var ViewUnverifiedClients = find({'clientVerification':false}, 'clientVerification', function(err, unverifiedClients){

															if(err){
																console.log(err.message);
															}else{
																res.send(unverifiedClients);
															}
									});
												},


viewClient:function(req, res, next){ //view a single client to see his profile

var username = "Greedah";                      ////////////////// AG: req.session.email

var viewClient = client.findOne({'username':username}, 'clientName username email address clientVerification', function(err, client){

					if(err){
						console.log(err.message);
					}else{
						console.log(client);
					}

});

},


verifyClient: function(req,res){ //verify and send email

	var username = req.body.username;

	var getClient = client.findOne({'username':username}, function(err, client){

		if(err){
			res.send(err.message);
		}else{

			client.clientVerification = true;

			client.save(function(err){
				if(err){
					res.send(err);
				}
			});
			VerificationEmail(req,res);
		}
	});
},

rejectClient: function(req,res){//reject and send email

	sess=req.session;
	var email2 = req.query.email;
	var x = Client.findOne({email : email2});
	RejectionEmail(req,res);
	db.Client.remove({x});
},


}



module.exports = ClientController;
