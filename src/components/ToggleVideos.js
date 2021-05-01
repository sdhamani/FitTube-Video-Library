import React from "react";
import useVideos from "../context/videos-context";
import { useState } from "react";
function ToggleVideos() {
  const [counter, Setcounter] = useState(0);
  let { videos } = useVideos();
  let limit = videos.length - 5;
  const leftCounter = () => {
    if (counter >= 0) {
      Setcounter(counter - 1);
    }
  };
  const rightCounter = () => {
    if (counter < limit) {
      Setcounter(counter + 1);
    }
  };
  return (
    <div className="toggle-vidoes">
      <button className="toggle-left-btn" onClick={(e) => leftCounter()}>
        <i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
      </button>
      <button className="toggle-left-right" onClick={(e) => rightCounter()}>
        <i class="fa  fa-2x fa-chevron-right" aria-hidden="true"></i>
      </button>
      <iframe
        className="toggle-video-iframe-1"
        src={videos[counter].videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className="toggle-video-iframe-2"
        src={videos[counter + 1].videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className="toggle-video-iframe-3"
        src={videos[counter + 2].videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className="toggle-video-iframe-4"
        src={videos[counter + 3].videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className="toggle-video-iframe-5"
        src={videos[counter + 5].videoLink}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default ToggleVideos;
