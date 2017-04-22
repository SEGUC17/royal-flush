let client = require('../models/Client');
let clientProfile = require('../models/clientProfile');

let verifyClientController = {

// viewUnverifiedClients:function(req,res,next){ //view all unverifies clients

// 									var ViewUnverifiedClients = client.find({'clientVerification':false},'clientName' ,function(err, unverifiedClients){

// 															if(err){
// 																console.log(err.message);
// 															}else{
// 																res.send(unverifiedClients);
// 															}
// 									});
// 												},


//viewClient:function(req, res, next){ //view a single client to see his profile

//var username = "Greedah";                      ////////////////// AG: req.session.email

//var viewClient = client.findOne({'username':username}, 'clientName username email address clientVerification', function(err, client){

//					if(err){
//						console.log(err.message);
//					}else{
//						console.log(client);
//					}

//});

//},

// //function(req, res, next){
//     db.tasks.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, task){
//         if(err){
//             res.send(err);
//         }
//         res.json(task);
//     });
// }

ViewClient: function(req, res, next){
	var username = req.body.username;
    db.clients.findOne({'username': username}, function(err, client){
        if(err){
            res.send(err);
        }
        res.json(client);
    });
},


viewClient:function(req, res, next){ //view a single client to see his profile

var email = req.query.email;                     ////////////////// AG: req.session.email

var viewClient = clientProfile.findOne({'email':email}, 'clientName username email address clientVerification', function(err, client){

					if(err){
						console.log(err.message);
					}else{
						res.send()
					}

});

}
,


verifyClient: function(req,res){ //verify and send email

	var username = req.body.username;

	var getClient = client.findOne({'username':username}, function(err, client){

		if(err){
			res.send(err.message);
		}else{

			getClient.clientVerification = true;

			getClient.save(function(err){
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



module.exports = verifyClientController;
