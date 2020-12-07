var mongoose   = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment"); 

var data = [
    {
        name: "Camp Room on the Roof",
        image: "https://res.cloudinary.com/simplotel/image/upload/x_0,y_0,w_3584,h_2016,r_0,c_crop,q_60,fl_progressive/w_960,f_auto,c_fit/youreka/Youreka_Summer_camps_in_India_Chakrata1_w5st2g",
        description: "A more than perfect camp for the adventure enthusiasts, the Camp Room on the Roof is situated 25 km from Chakrata, a quaint town near Dehradun. This camp is actually located on the step farms obviously giving it a mind-blowing view. From the campsite, you can enjoy the view of the Virratkhai Valley. Setting up base here, you can head off to pursue activities like mountaineering, mountain biking, or rafting in the pristine Yamuna River. The surrounding view will calm the vistas of your mind."
    },
    {
        name: "Rishikesh Valley",
        image: "https://www.holidify.com/blog/wp-content/uploads/2016/08/rishikesh-valley.jpg",
        description: "When it comes to camping, Rishikesh Camping experience has to be on the list! This amazing Rishikesh Valley camp is not only close to nature but also has a more spiritual connection. The tents here are styled in a hermit fashion and are designed to give you a total aloof time. This camp is your go-to place if you are looking for a chance to introspect your inner self. The food served here is completely organic. Apart from detoxifying, you can undertake rafting, trekking, ayurvedic spas and the grand elephant rides. Camping in Rishikesh is one of the best in India!"
    },
    {
        name: "Kipling Camp",
        image: "https://www.holidify.com/blog/wp-content/uploads/2016/08/kipling-camp.jpg",
        description: "Camping in the largest protected Tiger Reserve in the country has to be unparalleled experience, right? The Kipling Camp is located in the Kanha National Park in Madhya Pradesh. This camp site is in the Satpura Hills refreshed by the water of the Narmada. Camping here lets you experience the dense wild forest and an amazingly peaceful weather. The best thing to do here is to go bird watching or pursue a jungle safari. This one is a complete family vacation spot with the chance to make joyous memories."
    }
]
function seedDB(){
    //Remove All Campground
    Campground.deleteMany({}, function(err){
        /*if(err){
            console.log(err);
        }
        else{
            console.log("Campgrounds removed");
            //Add  A few Campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added a Campground");
                        //CREATE A COMMENT
                        Comment.create({
                            text: "This is place is great",
                            author: "harsh"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            }else{
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created a Comment");
                            }
                        })
                    }
                });
            });
        }*/
    });

    
    
}

module.exports = seedDB;
