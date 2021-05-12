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

// router.param("videoId", async (req, res, next, id) => {
//   try {
//     const video = await Video.findById(id);
//     if (!video) {
//       return res
//         .status(400)
//         .json({ success: false, message: "video not found" });
//     }

//     req.video = video;
//     next();
//   } catch {
//     res
//       .status(400)
//       .json({ success: false, message: "could not retrieve video " });
//   }
// });

// router
//   .route("/:videoId")
//   .get(async (req, res) => {
//     const { video } = req;
//     video.__v = undefined;
//     res.json({ success: true, message: "Video route with VideoId", video });
//   })
//   .post(async (req, res) => {
//     try {
//       console.log("trying to post");
//       const newProduct = req.body;
//       console.log(newProduct);
//       let { product } = req;
//       product = extend(product, newProduct);
//       product = await product.save();
//       res.json({ success: true, product, message: "Product Added" });
//     } catch (error) {
//       res.json({ success: false, errorMessage: error.message });
//     }
//   })
//   .delete(async (req, res) => {
//     let { product } = req;
//     await product.remove();
//     res.json({ success: true, message: "delete" });
//   });

// router.route("/").post(async (req, res) => {
//   try {
//     const product = req.body;
//     const newProduct = new Product(product);
//     const saveProduct = await newProduct.save();
//     console.log(newProduct);
//     res.json({ success: true, saveProduct });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Not able to add product",
//       errorMessage: error.message,
//     });
//   }
// });

module.exports = router;
