import React from "react";
import SideBar from "./SideBar";

function PlayVideo() {
  return (
    <div className="playvideo-div">
      <SideBar />
      <div className="playvideo">
        <iframe
          width="1020"
          height="500"
          src="https://www.youtube.com/embed/XVxhE3MIjFU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="1"
        ></iframe>
        <div className="video-content">
          <div className="video-name">
            30-Minute HIIT Cardio Workout with Warm Up
          </div>
          <div className="video-play-actions">
            <div className="video-play-views">
              <div className="video-channel">SELF</div>
              <div className="video-channel">31M views 2 years ago</div>
            </div>
            <div>
              <i class="fa fa-thumbs-o-up fa-lg" aria-hidden="true"></i>
            </div>
            <div>
              <i class="fa fa-thumbs-o-down fa-lg" aria-hidden="true"></i>
            </div>
            <div>
              <i class="fa fa-clock-o fa-lg" aria-hidden="true"></i>
              Watch later
            </div>
            <div>
              <i class="fa fa-play-circle fa-lg" aria-hidden="true">
                {" "}
              </i>
              Add to Playlist
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;
