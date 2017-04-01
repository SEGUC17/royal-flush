let Feedback = require('../models/Feedback');

let feedbackController = {
// Views all feedbacks
  getAllFeedbacks:function(req, res){
    Feedback.find(function(err, feedbacks){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(feedbacks);
      }
    });
  },
  // Get client specific feedbacks using client_id
  getAllClientFeedbacks:function(req, res){
    var client_id = 1; // This should change with session value
    Feedback.find({client_id:client_id}, function(err, feedbacks){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(feedbacks);
      }
    });
  },
// View single feedback using feedback_id
  viewFeedback:function(req, res){
    Feedback.findOne({_id:req.params.feedback_id}, function(err, feedback){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(feedback);
      }
    });
  },
// Add a new Deal using feedback_id
  addNewFeedback:function(req, res){
    // var user_id = 1; // This should change with session value
    req.body.description = "This is a description";
    req.body.client_id = req.params.client_id;
    req.body.user_id = "1"; // Session value

    let feedback = new Feedback(req.body);
    feedback.save(function(err, feedback){
      if(err){
        res.send(err.message);
      }
      else{
        res.json("/viewFeedbacks");
      }
    });
  }

}

module.exports = feedbackController;
