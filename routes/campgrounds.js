var express = require("express");
var router = express.Router();
var Campground = require("../models/campground");
// var middleware = require("../middleware");

//INDEX -show all campgrounds
router.get("/", function(req, res){

    //Get All Campground From DB 
   Campground.find({}, function(err, campgrounds){
        if(err){
            console.log("DATABASE ERROR");
            console.log(err);
        }
        else{
           res.render("campground/index", {campgrounds: campgrounds});
    
    }
    }); 
});

 //CREATE - add new campground to DB
router.post("/", function(req, res){
    var title = req.body.title;
    var desc = req.body.desc;
    // var image = req.body.image;
    var depart = req.body.depart;
    var newCampground = {title:title,desc:desc,depart:depart,date:Date.now()};
    //create a new campground and save it to DB
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        }
        else{
            //redirect back to campground
            res.redirect("/campgrounds");          
        }
    });
    
}); 

//NEW - show form to create new campground
router.get("/new",function(req, res){
    res.render("campground/new"); 
});

//Show - shows more info about one campground
router.get("/:id", function(req, res){
    //find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err){
            console.log(err);
        } else{
            //render show template with that campground
            res.render("campground/show", {campground: foundCampground});
        }
    });
}); 

//DESTROY CAMPGROUND ROUTE
router.delete("/:id",function(req, res){
    Campground.findByIdAndRemove(req.params.id, function(err){
            res.redirect("/campgrounds");
    });
});

module.exports = router;