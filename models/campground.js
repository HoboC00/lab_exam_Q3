var mongoose = require("mongoose"); 
var campgroundSchema = new mongoose.Schema({
    title:String,
    desc:String,
    depart:String,
    date:Date
});

module.exports = mongoose.model("Campground", campgroundSchema);
