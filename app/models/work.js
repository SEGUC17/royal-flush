var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    username:String,
    title: String,
    Url: String,
    type:String,
    scrnshot: String

})

var Work = mongoose.model("work", projectSchema);

module.exports = Work;
