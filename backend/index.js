const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const videosRouter = require("./routers/videos.router");
const userRouter = require("./routers/users.router");
const initializeDBConnection = require("./db/db.connection");
const allVideos = require("./data/videos");
const Video = require("./models/video.model");

const PORT = 3000;

const app = express();

initializeDBConnection();

app.use(cors());
app.use(bodyParser.json());

app.use("/videos", videosRouter);
app.use("/user", userRouter);

const addVideosToDB = async () => {
  try {
    console.log("inside add products");
    allVideos.forEach(async (product) => {
      const newVideo = new Video(product);
      const savedVideo = await newVideo.save();
    });
  } catch (error) {
    console.log("error while populating videos into DB", error.message);
  }
};

// addVideosToDB();

app.get("/", (req, res) => {
  console.log(req);
  res.json({ success: true, message: "Welcome to FitTube" });
});

app.listen(PORT, () => {
  console.log("server started");
});
