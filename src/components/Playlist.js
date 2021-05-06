import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import videos from "../data/videos";
import usePlaylist from "../context/playlist-context";
import useHistory from "../context/history-context";
import Footer from "./Footer";
import { useState } from "react";

function Playlist() {
  let { playlist, playlistdispatch } = usePlaylist();
  let { history, historydispatch } = useHistory();
  let [showplay, setShowPlay] = useState([]);
  let [editplaylist, setEditPlaylist] = useState(false);

  const toggleShowPlaylist = (id) => {
    if (showplay.includes(id)) {
      const newArray = showplay.filter((item) => item !== id);
      setShowPlay(newArray);
    } else {
      const newArray = [...showplay, id];
      setShowPlay(newArray);
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
                        <div className="videos">
                          {item.id.map((item1) => {
                            const videoObj = videos.find(
                              (value) => value.id === item1
                            );
                            return (
                              <div
                                className="video"
                                onClick={(e) =>
                                  historydispatch({
                                    type: "ADDTOHISTORY",
                                    payload: videoObj.id,
                                  })
                                }
                              >
                                <div
                                  onClick={(e) => {
                                    playlistdispatch({
                                      TYPE: "REMOVE",
                                      PAYLOAD: {
                                        id: item.playlistId,
                                        videoId: videoObj.id,
                                      },
                                    });
                                  }}
                                >
                                  <i
                                    class="fa fa-times playlist-delete"
                                    aria-hidden="true"
                                  ></i>
                                </div>
                                <Link
                                  className="landing-page-videos"
                                  to={`/playvideo/${videoObj.id}`}
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
                                      {videoObj.views} {videoObj.uploaded}
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      )}
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
