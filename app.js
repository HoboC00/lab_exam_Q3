var express        = require("express"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    // flash          = require("connect-flash"),
    // passport       = require("passport"),
    // LocalStrategy  = require("passport-local"),
    Campground     = require("./models/campground"),
    methodOverride = require("method-override"),
    // Comment        = require("./models/comment"),
    User           = require("./models/user"),
    seedDB         = require("./seeds"); 

var commentRoutes    = require("./routes/comment"),
    campgroundRoutes = require("./routes/campgrounds"),
    indexRoutes       = require("./routes/index");    
    
mongoose.connect("mongodb://localhost/temp", {useNewUrlParser: true});    
//mongoose.connect("mongodb://rohit:Rohit8130@ds159184.mlab.com:59184/myyelpcamp");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(methodOverride("_method"));
// app.use(flash());
//seedDB(); //seed the database

//PASSPORT CONFRIGURATION
// app.use(require("express-session")({
//     secret: "Rohit is idiot",
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());  

// app.use(function(req, res, next){
//     res.locals.currentUser = req.user;
//     res.locals.error       = req.flash("error");
//     res.locals.success     = req.flash("success");
//     next();
// });

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
	console.log("Yelpcamp Server has Started");
});

app.listen(3000, function(){
    console.log("YelpCamp Server Has Started!!"); 
});
