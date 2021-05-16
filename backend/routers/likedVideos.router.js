const express = require("express");
const router = express.Router();
const privateRoute = require("../middlewares/verifyToken");
const User = require("../models/user.model");
const Video = require("../models/video.model");
const { extend } = require("lodash");

const isVideoInLikeVideosFun = async (userId, videoId) => {
  let user = await User.findById(userId);
  let likedVideos = user.likedVideos;
  const isvideoInLikeVideoArr = likedVideos.filter(
    (item) => JSON.stringify(item.videoId) === JSON.stringify(videoId)
  );
  if (isvideoInLikeVideoArr.length !== 0) {
    return true;
  }
  return false;
};

router.get("/", privateRoute, async (req, res) => {
  const userId = req.user._id;
  try {
    let user = await User.findById(userId).populate("likedVideos.videoId");

    let likedVideos = user.likedVideos;

    res.json({
      success: true,
      message: "Like Videos fetched Successfully",
      likedVideos: likedVideos,
    });
  } catch (error) {
    res.json({
      success: true,
      errorMessage: error.message,
      message: "Error occured while getting Liked Videos",
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
    let likedVideos = user.likedVideos;

    const isVideoInLikeVideos = await isVideoInLikeVideosFun(userId, videoId);

    if (isVideoInLikeVideos) {
      let UpdatedlikedVideos = likedVideos.filter(
        (item) => JSON.stringify(item.videoId) !== JSON.stringify(videoId)
      );
      user.likedVideos = UpdatedlikedVideos;
      await user.save();
      let Returnuser = await User.findById(userId).populate(
        "likedVideos.videoId"
      );
      likedVideos = Returnuser.likedVideos;
      res.json({
        success: true,
        message: "Product successfully deleted from the likedVideos",
        UpdatedlikedVideos: likedVideos,
      });
    } else {
      let newlikedVideosItem = {
        videoId: videoId,
        quantity: 1,
      };
      likedVideos.push(newlikedVideosItem);
      user.likedVideos = likedVideos;
      await user.save();
      let Returnuser = await User.findById(userId).populate(
        "likedVideos.videoId"
      );
      likedVideos = Returnuser.likedVideos;

      res.json({
        success: true,
        message: "Product successfully added to the likedVideos",
        UpdatedlikedVideos: likedVideos,
      });
    }
  } catch (error) {
    res.json({
      success: false,
      message: "Product wasn't added to likedVideos",
      errorMessage: error.message,
    });
  }
});

module.exports = router;
