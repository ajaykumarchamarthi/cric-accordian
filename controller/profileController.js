const Profile = require("../models/profileModel");

exports.createProfile = async (req, res) => {
  try {
    const profile = await Profile.create({
      name: req.body.name,
      born: req.body.born,
      batting: req.body.batting,
      bowling: req.body.bowling,
      role: req.body.role,
      image: req.body.image,
    });

    res.status(201).json({
      status: "success",
      data: {
        profile,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllProfile = async (req, res) => {
  try {
    const profiles = await Profile.find();

    res.status(200).json({
      status: "success",
      data: {
        profiles,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getProfile = async (req, res) => {
  try {
    const { profileId } = req.body;
    const profile = await Profile.findById(profileId);

    res.status(200).json({
      status: "success",
      data: {
        profile,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
