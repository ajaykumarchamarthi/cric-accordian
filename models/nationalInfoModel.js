const mongoose = require("mongoose");

const nationalInfoSchema = new mongoose.Schema({
  profileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
  test_debut: {
    type: String,
    required: [true, "Test debut info is required"],
  },
  odi_debut: {
    type: String,
    required: [true, "ODI debut info is required"],
  },
  t20I_debut: {
    type: String,
    required: [true, "T20I debut info is required"],
  },
  test_image: {
    type: String,
    required: [true, "Test debut image info is required"],
  },
  odi_image: {
    type: String,
    required: [true, "ODI debut image info is required"],
  },
  t20I_image: {
    type: String,
    required: [true, "T20I debut image info is required"],
  },
});

nationalInfoSchema.pre(/^find/, function (next) {
  this.populate({
    path: "profileId",
    select: "_id",
  });
  next();
});

const NationalInfo = mongoose.model("NationalInfo", nationalInfoSchema);
module.exports = NationalInfo;
