import React from "react";

import videos from "../data/videos";
import useHistory from "../context/history-context";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function History() {
  let { history } = useHistory();

  let historyObj = videos.filter((item) => history.includes(item.id));
  return (
    <div>
      {" "}
      <div className="videos-div">
        <div className="footer-div">
          <Footer />
        </div>

        <div className="page-heading">
          <h1 className="page-heading-head">History</h1>
          {history.length === 0 && (
            <p className="no-items">
              Nothing added here yet, Maybe today is the day.
            </p>
          )}
        </div>

        <div className="component-videos videos">
          {historyObj &&
            historyObj.map((item) => {
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
                      <div className="video-channel">
                        {" "}
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
  );
}

export default History;
