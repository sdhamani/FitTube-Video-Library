import React from "react";

import { Link } from "react-router-dom";
import useLikedVideos from "../context/likevideos-context";
import videos from "../data/videos";
import Footer from "./Footer";

function LikedVideos() {
  let { likevideos } = useLikedVideos();

  let likdeVideosObj = videos.filter((item) => likevideos.includes(item.id));
  return (
    <div>
      {" "}
      <div className="videos-div">
        <div className="footer-div">
          <Footer />
        </div>
        <div className="page-heading">
          <h1 className="page-heading-head">Liked Videos</h1>
          {likevideos.length === 0 && (
            <p className="no-items">
              Nothing added here yet, Maybe today is the day.
            </p>
          )}
        </div>
        <div className="component-videos videos">
          {likdeVideosObj &&
            likdeVideosObj.map((item) => {
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

export default LikedVideos;
