let hot_deals = require('../models/hot_deals');


let hot_deals_config = {

    create_hot_deals:function(req, res){
      //req.body.client_username=req.session.username;
        let hotdeal = new hot_deals(req.body);

        hot_deals.save(function(err, hotdeal){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{


                 //res.redirect('/index');//front end
                    console.log(hotdeal.description); //test

            }
        })
    }
}

module.exports = hot_dealsController;
