const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const videosRouter = require("./routers/videos.router");
const userRouter = require("./routers/users.router");
const likedVideosRouter = require("./routers/likedVideos.router");
const watchLaterRouter = require("./routers/watchlater.router");
const historyRouter = require("./routers/history.router");
const playlistRouter = require("./routers/playlist.router");
const initializeDBConnection = require("./db/db.connection");
const allVideos = require("./data/videos");
const Video = require("./models/video.model");
const PORT = process.env.PORT || 5000;

const app = express();

initializeDBConnection();

app.use(cors());
app.use(bodyParser.json());

app.use("/videos", videosRouter);
app.use("/user", userRouter);
app.use("/likeVideos", likedVideosRouter);
app.use("/watchlater", watchLaterRouter);
app.use("/history", historyRouter);
app.use("/playlist", playlistRouter);

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
