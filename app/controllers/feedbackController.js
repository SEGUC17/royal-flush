let Feedback = require('../models/Feedback');

let feedbackController = {
  // Views all feedbacks
  getAllFeedbacks: function (req, res) {
    Feedback.find(function (err, feedbacks) {
      if (err) {
        res.send(err.message);
      }
      else {
        res.json(feedbacks);
      }
    });
  },
  // Get client specific feedbacks using client_id
  getAllClientFeedbacks: function (req, res) {
    Feedback.find({ client_id: req.params.client_id }, function (err, feedbacks) {
      if (err) {
        res.send(err.message);
      }
      else {
        res.json(feedbacks);
      }
    });
  },
  // View single feedback using feedback_id
  getFeedback: function (req, res) {
    Feedback.findOne({ _id: req.params.feedback_id }, function (err, feedback) {
      if (err) {
        res.send(err.message);
      }
      else {
        res.json(feedback);
      }
    });
  },
  // Add a new Deal using feedback_id
  addNewFeedback: function (req, res) {
    let feedback = new Feedback(req.body);
    feedback.save(function (err, feedback) {
      if (err) {
        res.send(err.message);
      }
      else {
        console.log(feedback);
        res.end();
      }
    });
  },
  // Delete all available feedbacks :: Testing reasons
  deleteAllFeedbacks: function (req, res, next) {
    Feedback.remove(function (err, feedbacks) {
      if (err) {
        res.send(err.message);
      }
      else {
        res.send("All feedbacks are deleted.");
      }
    });
  },

  // Delete specific feedback using _id
  deleteFeedback: function (req, res, next) {
    Feedback.remove({ _id: req.params.feedback_id }, function (err, feedback) {
      if (err) {
        res.send(err.message);
      }
      else {
        res.json("Deleted");
      }
    });
  },
  // Update feedback's information
  updateFeedback: function (req, res) {
    req.body.body = "New body"; // Will be provided through frontend
    Feedback.update({ _id: req.params._id }, req.body, function (err, feedback) {
      if (err) {
        res.send(err.message);
      }
      else {
        res.send("Your feedback has been updated successfully.");
      }
    });
  }

}

module.exports = feedbackController;
