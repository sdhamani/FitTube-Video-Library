const express = require("express");
const router = express.Router();
const privateRoute = require("../middlewares/verifyToken");
const User = require("../models/user.model");
const Video = require("../models/video.model");
const { extend } = require("lodash");

router.get("/", privateRoute, async (req, res) => {
  const userId = req.user._id;
  try {
    let user = await User.findById(userId);

    let history = user.history;

    res.json({
      success: true,
      message: "History Videos fetched Successfully",
      history: history,
    });
  } catch (error) {
    res.json({
      success: true,
      errorMessage: error.message,
      message: "Error occured while getting History",
      userId: req.user._id,
    });
  }
});

router.delete("/", privateRoute, async (req, res) => {
  const userId = req.user._id;
  try {
    let user = await User.findById(userId);

    user.history = [];
    await user.save();
    res.json({
      success: true,
      message: "History Videos deleted Successfully",
      history: user.history,
    });
  } catch (error) {
    res.json({
      success: true,
      errorMessage: error.message,
      message: "Error occured while deleting History",
      userId: req.user._id,
    });
  }
});

router.param("videoId", async (req, res, next, id) => {
  try {
    const video = await Video.findById(id);
    if (!video) {
      return res.status(400).json({
        success: false,
        message: "Video not found",
      });
    }
    req.video = video;
    next();
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

router.route("/:videoId").post(privateRoute, async (req, res) => {
  try {
    const videoId = req.video._id;
    const userId = req.user._id;
    let user = await User.findById(userId);
    let history = user.history;

    let newHistoryItem = {
      videoId: videoId,
    };
    history.push(newHistoryItem);
    user.history = history;
    await user.save();
    let Returnuser = await User.findById(userId).populate("history.videoId");
    history = Returnuser.history;

    res.json({
      success: true,
      message: "Product successfully added to the history",
      Updatedhistory: history,
    });
  } catch (error) {
    res.json({
      success: false,
      message: "Product wasn't added to history",
      errorMessage: error.message,
    });
  }
});

module.exports = router;
