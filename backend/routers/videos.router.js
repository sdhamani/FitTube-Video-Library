const express = require("express");
const router = express.Router();
const Video = require("../models/video.model");

const { extend } = require("lodash");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const Videos = await Video.find({});
      res.json({ success: true, Videos });
    } catch (error) {
      res.status(500).json({
        successs: false,
        message: "Not able to get videos",
        errorMessage: error.message,
      });
    }
  })
  .post(async (req, res) => {
    try {
      const video = req.body;
      const NewVideo = new Video(Video);
      const savedVideo = await NewVideo.save();
      const Videos = await Video.find({});
      res.json({ success: true, Videos, message: "Video Added" });
    } catch (error) {
      res.json({
        successs: false,
        message: "Not able to add video",
        errorMessage: error.message,
      });
    }
  });

module.exports = router;
