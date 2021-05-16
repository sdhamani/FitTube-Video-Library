import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import useLikedVideos from "../context/likevideos-context";
import Footer from "./Footer";
import useData from "../context/data-context";
import { getLikeVideos } from "../api/likevideos-api";

function LikedVideos() {
  let { likevideos } = useLikedVideos();

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
          {likevideos &&
            likevideos.map((item) => {
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

export default LikedVideos;
