import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import usePlaylist from "../context/playlist-context";
import useHistory from "../context/history-context";
import Footer from "./Footer";
import { useState } from "react";
import useData from "../context/data-context";
import useLogin from "../context/login-context";
import { renamePlaylistAPI, updatePlaylistAPI } from "../api/playlist-api";
import { updateHistoryAPI } from "../api/history-api";

function Playlist() {
  const { data, setData } = useData();
  let { playlist, playlistdispatch } = usePlaylist();
  let { history, historydispatch } = useHistory();
  let [showplay, setShowPlay] = useState([]);
  let [playlistName, setplaylistName] = useState("");
  let [editplaylists, seteditplaylists] = useState([]);
  const { token, loggedIn } = useLogin();

  const toggleShowPlaylist = (id) => {
    if (showplay.includes(id)) {
      const newArray = showplay.filter((item) => item !== id);
      setShowPlay(newArray);
    } else {
      const newArray = [...showplay, id];
      setShowPlay(newArray);
    }
  };

  const addToHistory = async (id) => {
    try {
      if (loggedIn) {
        const response = await updateHistoryAPI(token, id);

        if (response.success) {
          historydispatch({
            type: "USERHISTORY",
            payload: response.updatedHistory,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

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
    } catch (err) {
      console.log(err);
    }
  };

  const renamePlaylistFunc = async (playlistName, newName) => {
    try {
      if (loggedIn) {
        const response = await renamePlaylistAPI(token, playlistName, newName);

        if (response.success) {
          playlistdispatch({
            type: "USERPLAYLIST",
            payload: response.updatedPlaylist,
          });
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  const toggleEditPlaylist = (id) => {
    if (editplaylists.includes(id)) {
      const newArray = editplaylists.filter((item) => item !== id);
      seteditplaylists(newArray);
    } else {
      const newArray = [...editplaylists, id];
      seteditplaylists(newArray);
    }
  };
  return (
    <div>
      <NavBar />
      <div className="videos-div">
        <div className="footer-div">
          <Footer />
        </div>

        <div className="page-heading">
          <h1 className="page-heading-head">Playlist</h1>
          {playlist.length === 0 && (
            <p className="no-items">
              Nothing added here yet, Maybe today is the day.
            </p>
          )}
        </div>
        <div className="component-videos videos">
          {playlist &&
            playlist.map((item) => {
              return (
                <div className="single-playlist">
                  {item.id.length > 0 && (
                    <div className="single-playlist">
                      {!editplaylists.includes(item.playlistId) && (
                        <div className="playlist-headers">
                          <div
                            className="playlist-Name"
                            onClick={(e) => {
                              toggleShowPlaylist(item.playlistId);
                            }}
                          >
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            ></i>
                            {item.name}
                          </div>
                          {showplay.includes(item.playlistId) && (
                            <i
                              onClick={(e) => {
                                setplaylistName(item.name);
                                toggleEditPlaylist(item.playlistId);
                              }}
                              className="fa fa-pencil"
                              aria-hidden="true"
                            ></i>
                          )}
                        </div>
                      )}
                      {editplaylists.includes(item.playlistId) && (
                        <div className="playlist-headers">
                          <div className="playlist-Name">
                            <i
                              className="fa fa-angle-double-right"
                              aria-hidden="true"
                            ></i>
                            <input
                              readOnly={false}
                              className="edit-playlist-name-input"
                              placeholder="Playlist Name"
                              onChange={(e) => setplaylistName(e.target.value)}
                              value={playlistName}
                              type="text"
                            ></input>
                            <button
                              disabled={playlistName.length === 0}
                              className="seconday-button edit-playlist-name-btn"
                              onClick={(e) => {
                                toggleEditPlaylist(item.playlistId);

                                renamePlaylistFunc(item.name, playlistName);
                              }}
                            >
                              Update
                            </button>
                          </div>
                        </div>
                      )}
                      <div>
                        {showplay.includes(item.playlistId) && (
                          <div className="videos">
                            {item.id.map((item1) => {
                              const videoObj = data.find(
                                (value) => value._id === item1._id
                              );
                              return (
                                <div
                                  className="video"
                                  onClick={(e) => addToHistory(videoObj._id)}
                                >
                                  <div
                                    onClick={(e) => {
                                      updatePlaylistFunc(
                                        videoObj._id,
                                        item.name
                                      );
                                    }}
                                  >
                                    <i
                                      className="fa fa-times playlist-delete"
                                      aria-hidden="true"
                                    ></i>
                                  </div>
                                  <Link
                                    className="landing-page-videos"
                                    to={`/playvideo/${videoObj._id}`}
                                  >
                                    <img
                                      className="video-image"
                                      src={videoObj.image}
                                      alt="NA"
                                    />

                                    <div className="video-content">
                                      <div className="video-name">
                                        {videoObj.name}
                                      </div>
                                      <div className="video-channel">
                                        {videoObj.channel}
                                      </div>
                                      <div className="video-channel">
                                        31M views 2 years ago
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
