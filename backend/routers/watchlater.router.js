const express = require("express");
const router = express.Router();
const privateRoute = require("../middlewares/verifyToken");
const User = require("../models/user.model");
const Video = require("../models/video.model");
const { extend } = require("lodash");

const isvideoInWatchLaterArrFun = async (userId, videoId) => {
  let user = await User.findById(userId);
  let watchLater = user.watchLater;
  const isvideoInWatchLaterArr = watchLater.filter(
    (item) => JSON.stringify(item.videoId) === JSON.stringify(videoId)
  );
  if (isvideoInWatchLaterArr.length !== 0) {
    return true;
  }
  return false;
};

router.get("/", privateRoute, async (req, res) => {
  const userId = req.user._id;
  try {
    let user = await User.findById(userId).populate("watchLater.videoId");

    let watchLater = user.watchLater;

    res.json({
      success: true,
      message: "Watch Later Videos fetched Successfully",
      watchLater: watchLater,
    });
  } catch (error) {
    res.json({
      success: true,
      errorMessage: error.message,
      message: "Error occured while getting Watch later",
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
    let watchLater = user.watchLater;

    const isVideoInWatchLater = await isvideoInWatchLaterArrFun(
      userId,
      videoId
    );

    if (isVideoInWatchLater) {
      let UpdatedwatchLater = watchLater.filter(
        (item) => JSON.stringify(item.videoId) !== JSON.stringify(videoId)
      );
      user.watchLater = UpdatedwatchLater;
      await user.save();
      let Returnuser = await User.findById(userId).populate(
        "watchLater.videoId"
      );
      watchLater = Returnuser.watchLater;
      res.json({
        success: true,
        message: "Product successfully deleted from the watchLater",
        UpdatedwatchLater: watchLater,
      });
    } else {
      let newwatchLaterItem = {
        videoId: videoId,
        quantity: 1,
      };
      watchLater.push(newwatchLaterItem);
      user.watchLater = watchLater;
      await user.save();
      let Returnuser = await User.findById(userId).populate(
        "watchLater.videoId"
      );
      watchLater = Returnuser.watchLater;

      res.json({
        success: true,
        message: "Product successfully added to the watchLater",
        UpdatedwatchLater: watchLater,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Product wasn't added to watchLater",
      errorMessage: error.message,
    });
  }
});

module.exports = router;
