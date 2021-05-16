import React from "react";
import SideBar from "./SideBar";
// import videos from "../data/videos";
import { useNavigate, useParams } from "react-router-dom";
import useLikedVideos from "../context/likevideos-context";
import useWatchLater from "../context/watchLater-context";
import NavBar from "./NavBar";
import useData from "../context/data-context";
import { ToggleLikeVideosAPI } from "../api/likevideos-api";

import usePlaylist from "../context/playlist-context";
import { useState } from "react";
import Footer from "./Footer";
import useLogin from "../context/login-context";
import { ToggleWatchLaterAPI } from "../api/watchlater-api";
import { updatePlaylistAPI } from "../api/playlist-api";

function PlaylistModule({ showModule, setShowModule }) {
  const { token, loggedIn } = useLogin();
  const updatePlaylistFunc = async (id, playlistName) => {
    try {
      if (loggedIn) {
        const response = await updatePlaylistAPI(token, id, playlistName);

        if (response.success) {
          playlistdispatch({
            type: "USERPLAYLIST",
            payload: response.updatedPlaylist,
          });
        }
      }
      setPlaylistName("");
    } catch (err) {
      console.log(err);
    }
  };

  const { id } = useParams();
  let { playlist, playlistdispatch } = usePlaylist();
  const [playlistName, setPlaylistName] = useState("");

  return (
    <div className="playlist-popup">
      <div className="playlist-popup-head">
        <h3>Create Playlist</h3>
        <i
          onClick={(e) => setShowModule(false)}
          className="fa fa-times-circle-o fa-lg"
          aria-hidden="true"
        ></i>
      </div>
      <div className="playlist-names">
        {playlist &&
          playlist.map((item) => {
           
            return (
              <div className="playlist-name">
                <input
                  className="playlist-radio"
                  type="checkbox"
                  onChange={(e) => updatePlaylistFunc(id, item.name)}
                  checked={item.id.find((play) => play._id === id)}
                />
                <small>{item.name}</small>
              </div>
            );
          })}
      </div>
      <input
        name="playlist-name"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        className="create-playlist-input"
        type="text"
        placeholder="Enter playlist name"
      ></input>
      <button
        className="create-playlist-btn"
        onClick={(e) => updatePlaylistFunc(id, playlistName)}
        disabled={playlistName.length === 0}
      >
        Create
      </button>
    </div>
  );
}

function PlayVideo() {
  const { data, setData } = useData();
  const { id } = useParams();
  const { token, loggedIn } = useLogin();

  const video = data.find((item) => item._id === id);

  let { likevideos, likevideosdispatch } = useLikedVideos();
  let { watchLater, watchLaterDispatch } = useWatchLater();

  let isVideoLiked = likevideos.find((item) => item.videoId._id === video._id);
  let inWatchLater = watchLater?.find((item) => item.videoId._id === video._id);
  let [showModule, setShowModule] = useState(false);
  const [showalert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  function AlertComp() {
    return (
      <div className="alert">
        <h3 className="alert-warning">{showalert}</h3>
      </div>
    );
  }

  const signinAlert = (text) => {
    setShowAlert(text);
    setTimeout(() => {
      setShowAlert(false);
      navigate("/login");
    }, 2000);
  };

  const likeVideosFun = async () => {
    try {
      if (loggedIn) {
        const response = await ToggleLikeVideosAPI(token, id);

        if (response.success) {
          likevideosdispatch({
            type: "LIKEVIDEOS",
            payload: response.updatedLikeVideos,
          });
        }
      } else {
        signinAlert("You need to sign it first");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const watchLaterFun = async () => {
    try {
      if (loggedIn) {
        const response = await ToggleWatchLaterAPI(token, id);

        if (response.success) {
          watchLaterDispatch({
            type: "WATCHLATER",
            payload: response.updatedWatchLater,
          });
        }
      } else {
        signinAlert("You need to sign it first");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main">
      {showModule && (
        <PlaylistModule showModule={showModule} setShowModule={setShowModule} />
      )}

      <div className="playvideo-div">
        <div className="footer-div">
          <Footer />
        </div>
        {video && (
          <div className="playvideo">
            <iframe
              className="video-iframe"
              src={video.videoLink}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-content">
              <div className="video-name">{video.name}</div>
              <div className="video-play-actions">
                <div className="video-play-views">
                  <div className="video-channel">{video.channel}</div>
                  <div className="video-channel">
                    {" "}
                    {video.views} {video.uploaded}
                  </div>
                </div>
                <div className="video-play-actions-icons">
                  <div>
                    <button
                      className="actionbtn"
                      onClick={(e) => likeVideosFun()}
                    >
                      {isVideoLiked ? (
                        <i
                          className="fa fa-thumbs-up fa-lg"
                          aria-hidden="true"
                        ></i>
                      ) : (
                        <i
                          className="fa fa-thumbs-o-up fa-lg"
                          aria-hidden="true"
                        ></i>
                      )}
                    </button>
                  </div>
                  <div>
                    <button
                      className={
                        inWatchLater ? " actionbtn watchlater" : "actionbtn"
                      }
                      onClick={(e) => watchLaterFun()}
                    >
                      <i className="fa fa-clock-o fa-lg" aria-hidden="true"></i>
                      Watch later
                    </button>
                  </div>
                  <div>
                    <button
                      className="actionbtn"
                      onClick={(e) => setShowModule(true)}
                    >
                      <i className="fa fa-play-circle fa-lg" aria-hidden="true">
                        {" "}
                      </i>
                      Add to Playlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {showalert && <AlertComp />}
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayVideo;
