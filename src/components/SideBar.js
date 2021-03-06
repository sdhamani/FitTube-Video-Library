import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

function SideBar({ hamDisplay, setHamDisplay }) {
  return (
    <div className="action-bar">
      <div className="actions-div">
        <hr></hr>
        <nav>
          <br></br>
          <div
            className="actions-types"
            onClick={(e) => setHamDisplay(!hamDisplay)}
          >
            <NavLink
              className="link-no-decoration"
              activeClassName="nav-active-icon"
              to="/"
            >
              <i
                className="fa fa-home fa-lg badge-icons"
                aria-hidden="true"
              ></i>{" "}
              <label className="sidebar-label">Home</label>
            </NavLink>
          </div>
          <div
            className="actions-types"
            onClick={(e) => setHamDisplay(!hamDisplay)}
          >
            <NavLink
              activeClassName="nav-active-icon"
              className="link-no-decoration"
              to="/history"
            >
              <i
                className="fa fa-history fa-lg badge-icons"
                aria-hidden="true"
              ></i>{" "}
              <label className="sidebar-label">History</label>
            </NavLink>
          </div>
          <div
            className="actions-types"
            onClick={(e) => setHamDisplay(!hamDisplay)}
          >
            <NavLink
              className="link-no-decoration"
              activeClassName="nav-active-icon"
              to="/playlist"
            >
              <i
                className="fa fa-play-circle fa-lg badge-icons"
                aria-hidden="true"
              ></i>{" "}
              <label className="sidebar-label">Playlist</label>
            </NavLink>
          </div>
          <div
            className="actions-types"
            onClick={(e) => setHamDisplay(!hamDisplay)}
          >
            <NavLink
              className="link-no-decoration"
              activeClassName="nav-active-icon"
              to="/watchlater"
            >
              <i
                className="fa fa-clock-o fa-lg badge-icons"
                aria-hidden="true"
              ></i>
              <label className="sidebar-label">Watch Later</label>
            </NavLink>
          </div>
          <div
            className="actions-types"
            onClick={(e) => setHamDisplay(!hamDisplay)}
          >
            <NavLink className="link-no-decoration" to="/likedvideos">
              <i
                className="fa fa-thumbs-up fa-lg badge-icons"
                aria-hidden="true"
              ></i>
              <label className="sidebar-label">Liked Videos</label>
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default SideBar;
