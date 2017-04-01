let hot_deals = require('../models/hot_deals');
// projects = new Project(Project.projectSchema);


let hot_deals_config = {

    getevents:function(req, res){

      // console.log(req.query.username);
        hot_deals.find(function(err, hot_deals){


            if(err)
                res.send(err.message);
            else{

                res.render('index', {hot_deals});
                        //  projects.collection.remove();

              }
        })
    },

    createevent:function(req, res){
        let hotdeal = new hot_deals(req.body);

        hot_deals.save(function(err, hotdeal){
            if(err){
                res.send(err.message)
                console.log(err);
            }
            else{
                // projects.remove();
                console.log(project);
                res.redirect('/index');

            }
        })
    }
}

module.exports = hot_deals_config;
