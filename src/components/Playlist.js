import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import videos from "../data/videos";
import usePlaylist from "../context/playlist-context";
import useHistory from "../context/history-context";

function Playlist() {
  let { playlist, playlistdispatch } = usePlaylist();
  let { history, historydispatch } = useHistory();
  return (
    <div>
      <NavBar />
      <div className="videos-div">
        <SideBar />
        <div className="page-heading">
          <h1 className="page-heading-head">Playlist</h1>
          {playlist.length === 0 && (
            <p className="no-items">
              Nothing added here yet, Maybe today is the day.
            </p>
          )}
        </div>
        <div className="videos">
          {playlist &&
            playlist.map((item) => {
              return (
                <div className="single-playlist">
                  <div className="playlist-Name">{item.name}</div>
                  <div classname="videos">
                    {item.id.map((item) => {
                      const videoObj = videos.find(
                        (value) => value.id === item
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
                              <div className="video-name">{videoObj.name}</div>
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
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
