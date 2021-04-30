import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { LikedVideosProvider } from "./context/likevideos-context";
import { WatchLaterProvider } from "./context/watchLater-context";

import { HistoryProvider } from "./context/history-context";

import { PlaylistProvider } from "./context/playlist-context";

import { VideosProvider } from "./context/videos-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideosProvider>
        <PlaylistProvider>
          <HistoryProvider>
            <WatchLaterProvider>
              <LikedVideosProvider>
                <App />
              </LikedVideosProvider>
            </WatchLaterProvider>
          </HistoryProvider>
        </PlaylistProvider>
      </VideosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
