import React from "react";

import { Link } from "react-router-dom";
import useHistory from "../context/history-context";
import useVideos from "../context/videos-context";
import Footer from "./Footer";
import ToggleVideos from "./ToggleVideos";
function LandingPage() {
  let { historydispatch } = useHistory();
  let { videos } = useVideos();
  return (
    <div className="landing-page-main">
      <div className="landing-page-div">
        <div>
          <ToggleVideos />
        </div>

        <div className="">
          <div className="footer-div">
            <Footer />
          </div>
          <div className="landing-page-main-videos videos">
            {videos &&
              videos.map((item) => {
                return (
                  <div
                    className="video"
                    onClick={(e) =>
                      historydispatch({
                        type: "ADDTOHISTORY",
                        payload: item.id,
                      })
                    }
                  >
                    <Link
                      className="landing-page-videos"
                      to={`/playvideo/${item.id}`}
                    >
                      <img className="video-image" src={item.image} alt="NA" />

                      <div className="video-content">
                        <div className="video-name">{item.name}</div>
                        <div className="video-channel">{item.channel}</div>
                        <div className="video-channel">
                          {item.views} {item.uploaded}
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
