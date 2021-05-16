import React from "react";

import videos from "../data/videos";
import useHistory from "../context/history-context";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function History() {
  let { history } = useHistory();

  return (
    <div>
      {" "}
      <div className="videos-div">
        <div className="footer-div">
          <Footer />
        </div>

        <div className="page-heading">
          <h1 className="page-heading-head">History</h1>
          {history && history.length === 0 && (
            <p className="no-items">
              Nothing added here yet, Maybe today is the day.
            </p>
          )}
        </div>

        <div className="component-videos videos">
          {history &&
            history.map((item) => {
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

export default History;
