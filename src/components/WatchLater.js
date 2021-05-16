import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import videos from "../data/videos";
import { Link } from "react-router-dom";
import useWatchLater from "../context/watchLater-context";
import Footer from "./Footer";

function WatchLater() {
  let { watchLater } = useWatchLater();

  return (
    <div>
      {" "}
      <div className="videos-div">
        <div className="footer-div">
          <Footer />
        </div>

        <div className="page-heading">
          <h1 className="page-heading-head">Watch Later</h1>
          {watchLater && watchLater.length === 0 && (
            <p className="no-items">
              Nothing added here yet, Maybe today is the day.
            </p>
          )}
        </div>

        <div className=" component-videos  videos">
          {watchLater &&
            watchLater.map((item) => {
              return (
                <div className="video">
                  <Link
                    className="landing-page-videos"
                    to={`/playvideo/${item.videoId._id}`}
                  >
                    <img
                      className="video-image"
                      src={item.videoId.image}
                      alt="NA"
                    />

                    <div className="video-content">
                      <div className="video-name">{item.videoId.name}</div>
                      <div className="video-channel">
                        {item.videoId.channel}
                      </div>
                      <div className="video-channel">
                        {" "}
                        {item.videoId.views} {item.videoId.uploaded}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default WatchLater;
