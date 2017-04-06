let verifyClientController = {

ViewUnverifiedClients:function(req,res,next){ //view all unverifies clients
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
												},





ViewClient:function(req, res, next){ //view a single client to see his profile

sess=req.session;
var email2 = req.query.email;

Client.findOne({email : email2}, function(err, client2){



    Client_profile.find({Client_profile.email : email2}, function(err, Client_profile2){


        if(sess.student){
            res.render('viewClient.html', {Client : client2, Client_profile : Client_profile2});
        }

    });

});

},


verifyClient: function(req,res){ //verify and send email

	sess=req.session;
	var email2 = req.query.email;
	var x = Client.findOne({email : email2});
	x.varified = true;
	VerificationEmail(req,res);
	//db.Client.remove({x});
},

rejectClient: function(req,res){//reject and send email

	sess=req.session;
	var email2 = req.query.email;
	var x = Client.findOne({email : email2});
	RejectionEmail(req,res);
	db.Client.remove({x});
}


}
