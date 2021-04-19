import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="action-bar">
      <div className="actions-div">
        <div className="actions-types">
          <Link className="link-no-decoration" to="/">
            <i class="fa fa-home fa-2x badge-icons" aria-hidden="true"></i>{" "}
            <label className="sidebar-label">Home</label>
          </Link>
        </div>
        <div className="actions-types">
          <Link className="link-no-decoration" to="/history">
            <i class="fa fa-history fa-2x badge-icons" aria-hidden="true"></i>{" "}
            <label className="sidebar-label">History</label>
          </Link>
        </div>
        <div className="actions-types">
          <Link className="link-no-decoration" to="/playlist">
            <i
              class="fa fa-play-circle fa-2x badge-icons"
              aria-hidden="true"
            ></i>{" "}
            <label className="sidebar-label">Playlist</label>
          </Link>
        </div>
        <div className="actions-types">
          <Link className="link-no-decoration" to="/watchlater">
            <i class="fa fa-clock-o fa-2x badge-icons" aria-hidden="true"></i>
            <label className="sidebar-label">Watch Later</label>
          </Link>
        </div>
        <div className="actions-types">
          <Link className="link-no-decoration" to="/likedvideos">
            <i class="fa fa-thumbs-up fa-2x badge-icons" aria-hidden="true"></i>
            <label className="sidebar-label">Liked Videos</label>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
