const NationalInfo = require("../models/nationalInfoModel.js");

exports.createNationalInfo = async (req, res) => {
  try {
    const {
      profileId,
      test_debut,
      odi_debut,
      t20I_debut,
      test_image,
      odi_image,
      t20I_image,
    } = req.body;

    const nationalInfo = await NationalInfo.create({
      profileId,
      test_debut,
      odi_debut,
      t20I_debut,
      test_image,
      odi_image,
      t20I_image,
    });

    res.status(201).json({
      status: "success",
      data: {
        nationalInfo,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllNationalInfo = async (req, res) => {
  try {
    const nationalInfo = await NationalInfo.find();

    res.status(200).json({
      status: "success",
      data: {
        nationalInfo,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getNationalInfo = async (req, res) => {
  try {
    const { profileId } = req.body;
    const nationalInfo = await NationalInfo.findById(profileId);

    res.status(200).json({
      status: "success",
      data: {
        nationalInfo,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
