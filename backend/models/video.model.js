const mongoose = require("mongoose");
const { Schema } = mongoose;

const videoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Why no name?"],
    },
    image: {
      type: String,
      required: true,
    },
    videoLink: {
      type: String,
      required: true,
    },
    channel: {
      type: String,
      required: true,
    },
    views: {
      type: String,
    },
    uploaded: {
      type: String,
    },
    cateogory: {
      type: String,
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;
