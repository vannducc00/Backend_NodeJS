const express = require("express");
const {
  getHomePage,
  getXYZ
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/abc", getXYZ);

module.exports = router;
