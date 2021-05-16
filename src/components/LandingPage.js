import React from "react";

import { Link } from "react-router-dom";
import useHistory from "../context/history-context";

import useData from "../context/data-context";
import Footer from "./Footer";
import ToggleVideos from "./ToggleVideos";
import { updateHistoryAPI } from "../api/history-api";
import useLogin from "../context/login-context";

function LandingPage() {
  const { data } = useData();
  let { historydispatch } = useHistory();
  const { token, loggedIn } = useLogin();

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

  return (
    <div className="landing-page-main">
      <div className="landing-page-div">
        {data && data.length > 0 && (
          <div>
            <ToggleVideos />
          </div>
        )}
        <div className="">
          <div className="footer-div">
            <Footer />
          </div>
          <div className="landing-page-main-videos videos">
            {!data && <div>Loading</div>}
            {data &&
              data.length > 0 &&
              data.map((item) => {
                return (
                  <div
                    className="video"
                    onClick={(e) => addToHistory(item._id)}
                  >
                    <Link
                      className="landing-page-videos"
                      to={`/playvideo/${item._id}`}
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
