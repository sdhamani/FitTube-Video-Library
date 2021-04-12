import React from "react";
import SideBar from "./SideBar";
import videos from "../data/videos";
import { useParams } from "react-router-dom";

function PlayVideo() {
  const { id } = useParams();
  console.log(id);
  const video = videos.find((item) => item.id === id);

  return (
    <div className="playvideo-div">
      <SideBar />
      {video && (
        <div className="playvideo">
          <iframe
            width="1020"
            height="500"
            src={video.videoLink}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="video-content">
            <div className="video-name">{video.name}</div>
            <div className="video-play-actions">
              <div className="video-play-views">
                <div className="video-channel">{video.channel}</div>
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
      )}
    </div>
  );
}

export default PlayVideo;
