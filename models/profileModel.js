const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    requires: [true, "Profile must have a name"],
  },
  born: {
    type: String,
    require: [true, "Profile must have a born information"],
  },
  batting: {
    type: String,
    requires: [true, "Profile must have a batting"],
  },
  bowling: {
    type: String,
  },
  role: {
    type: String,
    requires: [true, "Profile must have a role"],
  },
  image: {
    type: String,
    require: [true, "Profile must have a image"],
  },
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
