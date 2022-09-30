const DomesticInfo = require("../models/domesticInfoModel.js");

exports.createDomesticInfo = async (req, res) => {
  try {
    const { profileId, no_teams_played, image1, image2, image3 } = req.body;

    const domesticinfo = await DomesticInfo.create({
      profileId,
      no_teams_played,
      image1,
      image2,
      image3,
    });

    res.status(201).json({
      status: "success",
      data: domesticinfo,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAlldomesticInfo = async (req, res) => {
  try {
    const domesticInfo = await DomesticInfo.find();

    res.status(200).json({
      status: "success",
      data: {
        domesticInfo,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getdomesticInfo = async (req, res) => {
  try {
    const { profileId } = req.body;
    const domesticInfo = await DomesticInfo.findById(profileId);

    res.status(200).json({
      status: "success",
      data: {
        domesticInfo,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
