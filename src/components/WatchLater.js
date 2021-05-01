import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import videos from "../data/videos";
import { Link } from "react-router-dom";
import useWatchLater from "../context/watchLater-context";
import Footer from "./Footer";

function WatchLater() {
  let { watchLater } = useWatchLater();

  let watchLaterObj = videos.filter((item) => watchLater.includes(item.id));
  return (
    <div>
      {" "}
      <NavBar />
      <div className="videos-div">
        <SideBar />
        <div className="footer-div">
          <Footer />
        </div>

        <div className="page-heading">
          <h1 className="page-heading-head">Watch Later</h1>
          {watchLater.length === 0 && (
            <p className="no-items">
              Nothing added here yet, Maybe today is the day.
            </p>
          )}
        </div>

        <div className="videos">
          {watchLaterObj &&
            watchLaterObj.map((item) => {
              return (
                <div className="video">
                  <Link
                    className="landing-page-videos"
                    to={`/playvideo/${item.id}`}
                  >
                    <img className="video-image" src={item.image} alt="NA" />

                    <div className="video-content">
                      <div className="video-name">{item.name}</div>
                      <div className="video-channel">{item.channel}</div>
                      <div className="video-channel">31M views 2 years ago</div>
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
