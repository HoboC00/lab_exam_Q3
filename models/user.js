var mongoose               = require("mongoose"),
    passportLocalMonngoose = require("passport-local-mongoose");
var userSchema = new mongoose.Schema({
    username:  String,
    passsword: String
});

userSchema.plugin(passportLocalMonngoose);

module.exports = mongoose.model("User", userSchema);