import React from "react";

function SideBar() {
  return (
    <div className="action-bar">
      <div className="actions-div">
        <div className="actions-types">
          <i class="fa fa-home fa-2x badge-icons" aria-hidden="true"></i>{" "}
          <label className="sidebar-label">Home</label>
        </div>
        <div className="actions-types">
          <i class="fa fa-history fa-2x badge-icons" aria-hidden="true"></i>{" "}
          <label className="sidebar-label">History</label>
        </div>
        <div className="actions-types">
          <i class="fa fa-play-circle fa-2x badge-icons" aria-hidden="true"></i>{" "}
          <label className="sidebar-label">Playlist</label>
        </div>
        <div className="actions-types">
          <i class="fa fa-clock-o fa-2x badge-icons" aria-hidden="true"></i>
          <label className="sidebar-label">Watch Later</label>
        </div>
        <div className="actions-types">
          <i class="fa fa-thumbs-up fa-2x badge-icons" aria-hidden="true"></i>
          <label className="sidebar-label">Liked Videos</label>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
