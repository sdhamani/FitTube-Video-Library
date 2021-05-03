import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <ul className="list-no-bullets nav-pills nav-list-ecom">
        <li className="list-item-inline">
          <NavLink
            to="/"
            className="list-item-inline-link"
            activeClassName="nav-active-icon"
          >
            {" "}
            <div className="badge-div">
              <i class="fa fa-home  badge-icons" aria-hidden="true"></i>{" "}
            </div>
          </NavLink>
        </li>
        <li className="list-item-inline">
          <NavLink to="/history" activeClassName="nav-active-icon">
            <div className="badge-div">
              <i class="fa fa-history  badge-icons" aria-hidden="true"></i>{" "}
            </div>
          </NavLink>
        </li>

        <li className="list-item-inline">
          <NavLink to="/playlist" activeClassName="nav-active-icon">
            <div className="badge-div">
              <i class="fa fa-play-circle  badge-icons" aria-hidden="true"></i>
            </div>
          </NavLink>
        </li>
        <li className="list-item-inline">
          <NavLink to="/watchlater" activeClassName="nav-active-icon">
            <div className="badge-div">
              <i class="fa fa-clock-o  badge-icons" aria-hidden="true"></i>
            </div>
          </NavLink>
        </li>
        <li className="list-item-inline">
          <NavLink to="/likedvideos" activeClassName="nav-active-icon">
            <div className="badge-div">
              <i class="fa fa-thumbs-up badge-icons" aria-hidden="true"></i>
            </div>
          </NavLink>
        </li>
        {/* <li className="list-item-inline">
          <NavLink to="/" activeClassName="nav-active-icon">
            <div className="badge-div">
              <i
                class="fa fa-user-circle-o fa-lg badge-icons"
                aria-hidden="true"
              ></i>
            </div>
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}

export default Footer;
