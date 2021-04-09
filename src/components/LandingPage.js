import React from "react";
import SideBar from "./SideBar";

import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page-main">
      <SideBar />
      <div className="landing-page-div">
        <Link className="landing-page-videos" to="/playvideo">
          <div>
            <div className="video">
              <img
                className="video-image"
                src="https://i.ytimg.com/an_webp/ml6cT4AZdqI/mqdefault_6s.webp?du=3000&sqp=CLiGw4MG&rs=AOn4CLB-LaZUNk58eM1NuzaqAD6cM8Yqsw"
                alt="NA"
              />
              <div className="video-content">
                <div className="video-name">
                  30-Minute HIIT Cardio Workout with Warm Up
                </div>
                <div className="video-channel">SELF</div>
                <div className="video-channel">31M views 2 years ago</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
