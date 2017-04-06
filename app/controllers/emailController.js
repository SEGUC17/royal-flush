

let emailController = {

sendEmail: function( _name, _email, _subject, _message) { //email function(to send an email)
    mandrill('/messages/send', {
        message: {
            to: [{email: _email , name: _name}],
            from_email: 'hassanelkoussy@gmail.com',
            subject: _subject,
            text: _message
        }
    }, function(error, response){
        if (error) console.log( error );
        else console.log(response);
    });
},


VerificationEmail: function(req,res){ 

    var _name = req.body.name;
    var _email = req.body.email;
    var _subject = "Verification";
    var _messsage = "Dear Customer,/n Congratulations you are now verified.";

    //implement your spam protection or checks. 

    sendEmail ( _name, _email, _subject, _message );
},

RejectionEmail: function(req,res){ //send rejection email

    var _name = req.body.name;
    var _email = req.body.email;
    var _subject = "Rejection";
    var _messsage = "Dear Customer,/n Your request to create an account was rejected.";

    //implement your spam protection or checks. 

    sendEmail ( _name, _email, _subject, _message );



}

}

module.exports = emailController;




