import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import useHistory from "../context/history-context";
import useVideos from "../context/videos-context";
function LandingPage() {
  let { history, historydispatch } = useHistory();
  let { videos } = useVideos();
  console.log("videos", videos);
  return (
    <div className="landing-page-main">
      <NavBar />
      <SideBar />
      <div className="landing-page-div">
        <div className=" landing-page-vidoes videos">
          {videos &&
            videos.map((item) => {
              return (
                <div
                  className="video"
                  onClick={(e) =>
                    historydispatch({ type: "ADDTOHISTORY", payload: item.id })
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

export default LandingPage;
