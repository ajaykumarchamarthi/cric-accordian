const mongoose = require("mongoose");

const teamsPlayedSchema = new mongoose.Schema({
  years: {
    type: String,
    required: [true, "Year played is required"],
  },
  team: {
    type: String,
    required: [true, "Team played is required"],
  },
});

const domesticInfoSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  no_teams_played: [teamsPlayedSchema],
  image1: {
    type: String,
    required: [true, "Image1 is required"],
  },
  image2: {
    type: String,
    required: [true, "Image2 is required"],
  },
  image3: {
    type: String,
    required: [true, "Image3 is required"],
  },
});

domesticInfoSchema.pre(/^find/, function (next) {
  this.populate({
    path: "profileId",
    select: "_id",
  });
  next();
});

const DomesticInfo = new mongoose.model("DomesticInfo", domesticInfoSchema);
module.exports = DomesticInfo;
