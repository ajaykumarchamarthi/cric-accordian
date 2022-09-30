const express = require("express");
const router = express.Router();

const profileController = require("../controller/profileController");
const nationalInfoController = require("../controller/nationalInfoController");
const domesticInfoController = require("../controller/domesticInfoController");

router.post("/newprofile", profileController.createProfile);
router.get("/profiles", profileController.getAllProfile);
router.get("/profileinfo", profileController.getProfile);

router.post("/newnationalinfo", nationalInfoController.createNationalInfo);
router.get("/allnationalinfo", nationalInfoController.getAllNationalInfo);
router.get("/nationalinfo", nationalInfoController.getNationalInfo);

router.post("/newdomesticinfo", domesticInfoController.createDomesticInfo);
router.get("/alldomesticinfo", domesticInfoController.getAlldomesticInfo);
router.get("/domesticInfo", domesticInfoController.getdomesticInfo);

module.exports = router;
