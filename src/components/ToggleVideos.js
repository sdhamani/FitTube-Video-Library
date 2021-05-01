import React from "react";
import allVideos from "../data/videos";
import Swipe from "react-easy-swipe";

import { useState } from "react";
function ToggleVideos() {
  const [counter1, Setcounter1] = useState(1);
  const [counter2, Setcounter2] = useState(2);
  const [counter3, Setcounter3] = useState(3);
  const [counter4, Setcounter4] = useState(4);
  const [counter5, Setcounter5] = useState(5);

  let videos = allVideos;

  const leftCounter = (counter, Setcounter) => {
    console.log(counter);
    if (counter === 1) {
      Setcounter(5);
    } else {
      Setcounter(counter - 1);
    }
  };
  const rightCounter = (counter, Setcounter) => {
    console.log(counter, Setcounter);
    if (counter === 5) {
      Setcounter(1);
    } else {
      Setcounter(counter + 1);
    }
  };

  const leftVideoHandler = () => {
    leftCounter(counter1, Setcounter1);
    leftCounter(counter2, Setcounter2);
    leftCounter(counter3, Setcounter3);
    leftCounter(counter4, Setcounter4);
    leftCounter(counter5, Setcounter5);
  };

  const rightVideoHandler = () => {
    rightCounter(counter1, Setcounter1);
    rightCounter(counter2, Setcounter2);
    rightCounter(counter3, Setcounter3);
    rightCounter(counter4, Setcounter4);
    rightCounter(counter5, Setcounter5);
  };
  return (
    <div className="toggle-vidoes">
      <button className="toggle-left-btn" onClick={(e) => leftVideoHandler()}>
        <i class="fa fa-chevron-left fa-2x" aria-hidden="true"></i>
      </button>
      <button
        className="toggle-left-right"
        onClick={(e) => rightVideoHandler()}
      >
        <i class="fa  fa-2x fa-chevron-right" aria-hidden="true"></i>
      </button>
      <div onTouchMove={(e) => rightVideoHandler()}>
        <iframe
          className={`toggle-video-iframe-${counter1}`}
          src={videos[14].videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div onTouchMove={(e) => rightVideoHandler()}>
        <iframe
          className={`toggle-video-iframe-${counter1}`}
          src={videos[14].videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>{" "}
      </div>
      <div onTouchMove={(e) => rightVideoHandler()}>
        <iframe
          className={`toggle-video-iframe-${counter2}`}
          src={videos[7].videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div onTouchMove={(e) => rightVideoHandler()}>
        <iframe
          className={`toggle-video-iframe-${counter3}`}
          src={videos[15].videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div onTouchMove={(e) => rightVideoHandler()}>
        <iframe
          className={`toggle-video-iframe-${counter4}`}
          src={videos[13].videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div onTouchMove={(e) => rightVideoHandler()}>
        <iframe
          className={`toggle-video-iframe-${counter5}`}
          src={videos[6].videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ToggleVideos;
