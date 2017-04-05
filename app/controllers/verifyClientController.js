let varifyClientsController = {

function ViewUnverifiedClients(req,res,next){
						var resultArray = [];
						mongo.connect(url,function(err,db){
							assert.equal(null,err);
							var cursor = db.collection('Clients').find()
							cursor.forEach(function(doc, err){
								assert.equal(null, err);
								resultArray.push(doc);
							}, function(){
							db.close();
							res.render('/verifyClients', {items: resultArray});
							}); 
										});
												};





function ViewClient(req, res, next){

sess=req.session;
var email2 = req.query.email;

Client.findOne({email : email2}, function(err, client2){



    Client_profile.find({Client_profile.email : email2}, function(err, Client_profile2){


        if(sess.student){
            res.render('viewClient.html', {Client : client2, Client_profile : Client_profile2});
        }

    });

});

};


function verifyClient(req,res){

	sess=req.session;
	var email2 = req.query.email;
	var x = Client.findOne({email : email2});
	x.varified = true;
	VerificationEmail(req,res);
	//db.Client.remove({x});
}
function rejectClient(req,res){

	sess=req.session;
	var email2 = req.query.email;
	var x = Client.findOne({email : email2});
	RejectionEmail(req,res);
	db.Client.remove({x});
}


}
