import React from "react";
import SideBar from "./SideBar";
import videos from "../data/videos";
import { useParams } from "react-router-dom";
import useLikedVideos from "../context/likevideos-context";
import useWatchLater from "../context/watchLater-context";
import NavBar from "./NavBar";

import usePlaylist from "../context/playlist-context";
import { useState } from "react";
import Footer from "./Footer";

function PlaylistModule({ showModule, setShowModule }) {
  const createPlaylistFunc = (id, playlistName) => {
    playlistdispatch({ TYPE: "CREATE", PAYLOAD: { id, playlistName } });
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
          class="fa fa-times-circle-o fa-lg"
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
                  onChange={(e) =>
                    playlistdispatch({
                      TYPE: "TOGGLE",
                      PAYLOAD: { id, playlistName: item.name },
                    })
                  }
                  checked={item.id.includes(id)}
                />
                <small>{item.name}</small>
              </div>
            );
          })}
      </div>
      <input
        name="playlist-name"
        onChange={(e) => setPlaylistName(e.target.value)}
        className="create-playlist-input"
        type="text"
        placeholder="Enter playlist name"
      ></input>
      <button
        className="create-playlist-btn"
        onClick={(e) => createPlaylistFunc(id, playlistName)}
        disabled={playlistName.length === 0}
      >
        Create
      </button>
    </div>
  );
}

function PlayVideo() {
  const { id } = useParams();

  const video = videos.find((item) => item.id === id);

  let { likevideos, likevideosdispatch } = useLikedVideos();
  let { watchLater, watchLaterDispatch } = useWatchLater();
  let isVideoLiked = likevideos.find((item) => item === video.id);
  let inWatchLater = watchLater.find((item) => item === video.id);
  let [showModule, setShowModule] = useState(false);

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
                      onClick={(e) =>
                        likevideosdispatch({ type: "LIKE", payload: video.id })
                      }
                    >
                      {isVideoLiked ? (
                        <i class="fa fa-thumbs-up fa-lg" aria-hidden="true"></i>
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
                      onClick={(e) =>
                        watchLaterDispatch({
                          type: "WATCHLATER",
                          payload: video.id,
                        })
                      }
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
          </div>
        )}
      </div>
    </div>
  );
}

export default PlayVideo;
