const mongoose = require("mongoose");
const { Schema } = mongoose;
const Video = require("./video.model");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 3,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      min: 4,
    },

    likedVideos: [
      {
        videoId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
      },
    ],

    history: [
      {
        videoId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
      },
    ],

    wishlist: [
      {
        videoId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
      },
    ],
    watchLater: [
      {
        videoId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Video",
        },
      },
    ],
    playlist: [
      {
        id: [
          {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video",
          },
        ],
        name: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
