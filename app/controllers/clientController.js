let Client = require('../models/Client');
let Feedback= require('../models/feedback');

let clientController={
  viewFeedback: function(req, res){
    Feedback.find({clientId: req.params.client_id}, function(err, feedbacks){
      if (err) {
        res.send(err.message);
      }else{
        res.render('feedbacks',{feedbacks});
      }
    })
  }
}

module.exports = clientController;
