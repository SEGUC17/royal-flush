let Deal = require('../models/Deal');

let dealController = {

// Views all deals
  getAllDeals:function(req, res){
    Deal.find(function(err, deals){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(deals);
      }
    });
  },
// Get Client specific deals using client_id
  getAllClientDeals:function(req, res){
    var client_id = 1; // This should change with session value
    Deal.find({client_id:client_id}, function(err, deals){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(deals);
      }
    });
  },
// View single deal using deal_id
  viewDeal:function(req, res){
    Deal.findOne({_id:req.params.deal_id}, function(err, deal){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(deal);
      }
    });
  },

  viewCategoryDeals:function(req, res){
    Deal.find({category:req.params.category}, function(err, deals){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(deals);
      }
    });
  },

  viewBudgetDeals:function(req, res){
    Deal.find({price:req.params.price}, function(err, deals){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(deals);
      }
    });
  },

  viewTodayDeals:function(req, res){
    var current_date = Date();
    Deal.find({start_date:current_date, expired:0}, function(err, deals){
      if(err){
        res.send(err.message);
      }
      else{
        res.json(deals);
      }
    });
  }
// Add a new Deal using client_id
  addNewDeal:function(req, res){
    // req.body.client_id = req.session.id; //Session value
    req.body.title = "Title 1"; // Will be provided through frontend
    req.body.price = 0.9494; // Will be provided through frontend
    req.body.description = "Description 1"; // Will be provided through frontend
    req.body.start_date = new Date("2017-05-18T00:00:00Z"); // Will be provided through frontend
    req.body.end_date = new Date("2017-06-18T00:00:00Z"); // Will be provided through frontend
    req.body.image_path = "Path 1"; // Should be replaced by bottom line
    // req.body.image_path = req.file.path; // Will be provided through frontend
    req.body.expired = true; // Will be provided through frontend
    req.body.event_id = "3"; // Will be provided through frontend
    req.body.category = "Food"; // Will be provided through frontend
    ///
    req.body.client_id = "2"; // Session value

    let deal = new Deal(req.body);
    deal.save(function(err, deal){
      if(err){
        res.send(err.message);
      }
      else{
        res.redirect('/viewDeals');
      }
    });
  },
// Delete all available deals :: Testing reasons
  deleteAllDeals:function(req, res, next){
    Deal.remove(function(err, deals){
      if(err){
        res.send(err.message);
      }
      else{
        res.send("All deals are deleted");
      }
    });
  },
// Delete specific deal using _id
  deleteDeal:function(req, res, next){
    // var client_id = req.session.id; // Session value
    Deal.remove({_id:req.params.deal_id}, function(err, deal){
      if(err){
        res.send(err.message);
      }
      else{
        res.json("Deleted");
      }
    })
  },
// Update deal's information
  updateDeal:function(req, res){
    req.body.title="New title"; // Will be provided through frontend
    // req.body.price; // Will be provided through frontend
    // req.body.description; // Will be provided through frontend
    // req.body.start_date; // Will be provided through frontend
    // req.body.end_date; // Will be provided through frontend
    // req.body.terms; // Will be provided through frontend
    // req.body.image_path; // Will be provided through frontend
    // req.body.expired;// Will be provided through frontend
    // req.body.event_id; // Will be provided through frontend
    Deal.update({_id:req.params.deal_id}, req.body, function(err, deal){
      if(err){
        res.send(err.message);
      }
      else{
        res.send("Deal '" + req.body.title + "' was successfully updated.");
      }
    });
  }

}

module.exports = dealController;
