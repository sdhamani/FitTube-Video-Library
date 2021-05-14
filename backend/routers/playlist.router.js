const express = require("express");
const router = express.Router();
const privateRoute = require("../middlewares/verifyToken");
const User = require("../models/user.model");
const Video = require("../models/video.model");
const { extend } = require("lodash");

const isProductInCartFun = async (userId, productId) => {
  let user = await User.findById(userId);
  let cart = user.cart;
  const isProductInCartArr = cart.filter(
    (item) => JSON.stringify(item.productId) === JSON.stringify(productId)
  );
  console.log("in ipc");
  if (isProductInCartArr.length !== 0) {
    return true;
  }
  return false;
};

router.get("/", privateRoute, async (req, res) => {
  const userId = req.user._id;
  try {
    let user = await User.findById(userId).populate("playlist.id");
    let playlist = user.playlist;
    res.json({
      success: true,
      message: "playlist Items fetched Successfully",
      playlist: playlist,
    });
  } catch (error) {
    res.json({
      success: true,
      message: "Error occured while getting products from playlist",
      userId: req.user._id,
    });
  }
});

router.param("videoId", async (req, res, next, id) => {
  try {
    const video = await Video.findById(id);
    console.log(id);
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

router.post("/create/:videoId", privateRoute, async (req, res) => {
  try {
    const videoId = req.video._id;
    const { playlistName } = req.body;
    const userId = req.user._id;
    let user = await User.findById(userId);
    const isPlaylistAlreadyPresent = user.playlist.find(
      (list) => list.name === playlistName
    );

    if (isPlaylistAlreadyPresent) {
      const updatedPlaylist = user.playlist.map((list) => {
        if (list.name === playlistName) {
          let newPlaylist = [];

          if (list.id.includes(videoId)) {
            const updatedIds = list.id.filter(
              (item) => JSON.stringify(item) !== JSON.stringify(videoId)
            );
            newPlaylist = extend(list, {
              id: updatedIds,
            });
          } else {
            const updatedIds = [...list.id, videoId];
            newPlaylist = extend(list, {
              id: updatedIds,
            });
          }

          return newPlaylist;
        } else {
          return list;
        }
      });

      const newPlaylist = updatedPlaylist.filter((item) => item.id.length > 0);
      user.playlist = newPlaylist;

      await user.save();
      user = await User.findById(userId).populate("playlist.id");
      res.json({
        success: true,
        message: "Playlist Updated Successfully11",
        playlist: user.playlist,
      });
    } else {
      user.playlist = [
        ...user.playlist,
        {
          name: playlistName,
          id: [videoId],
        },
      ];
      await user.save();
      user = await User.findById(userId).populate("playlist.id");
      res.json({
        success: true,
        message: "Playlist Created Successfully11",
        playlist: user.playlist,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured while creating playlist",
      userId: req.user._id,
    });
  }
});

router.post("/rename", privateRoute, async (req, res) => {
  try {
    const { playlistName, newName } = req.body;
    const userId = req.user._id;
    let user = await User.findById(userId).populate("playlist.id");
    const isPlaylistAlreadyPresent = user.playlist.find(
      (list) => list.name === playlistName
    );

    if (isPlaylistAlreadyPresent) {
      const updatedPlaylist = user.playlist.map((list) => {
        if (list.name === playlistName) {
          return extend(list, {
            name: newName,
          });
        } else {
          return list;
        }
      });
      console.log(updatedPlaylist);
      user.playlist = updatedPlaylist;

      await user.save();
      user = await User.findById(userId).populate("playlist.id");
      res.json({
        success: true,
        message: "Playlist Renamed Successfully",
        playlist: user.playlist,
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: "Error occured while renaming playlist",
      userId: req.user._id,
    });
  }
});

module.exports = router;
