import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import usePlaylist from "../context/playlist-context";

function Playlist() {
  let { playlist, playlistdispatch } = usePlaylist();
  return (
    <div>
      <NavBar />
      <div>
        <SideBar />
        {playlist.length === 0 && (
          <p className="no-items">
            Nothing added here yet, Maybe today is the day.
          </p>
        )}
        <div>
          {playlist.map((item) => {
            return <div>{item.name}</div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Playlist;
