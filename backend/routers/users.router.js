const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router
  .route("/")
  .get(async (req, res) => {
    const users = await User.find();
    res.json({ success: true, message: "Inside Users", users });
  })
  .post(async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(password, salt);
    try {
      const NewUser = new User({
        name,
        email,
        password: hashPassword,
        likedVideos: [],
        history: [],
        wishlist: [],
        playlist: [],
      });

      const savedUser = await NewUser.save();
      const userId = savedUser._id;
      const userName = savedUser.name;
      const token = jwt.sign({ _id: userId }, process.env.tokenSecret);
      res.header("auth-token", token).json({
        success: true,
        userid: userId,
        token: token,
        userName: userName,
      });
    } catch (error) {
      console.log(error);
      res.json({
        successs: false,
        message: "Not able to add User",
        errorMessage: error.message,
      });
    }
  });

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.json({ success: false, message: "User doesn't exist" });
    } else {
      const validPass = await bcrypt.compare(password, user.password);
      if (!validPass) {
        res.json({ success: false, message: "Incorrect Password" });
      } else {
        const userID = user._id;
        const token = jwt.sign({ _id: user._id }, process.env.tokenSecret);
        res.header("auth-token", token).json({
          success: true,
          userid: user._id,
          token: token,
          userName: user.name,
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
});

module.exports = router;
