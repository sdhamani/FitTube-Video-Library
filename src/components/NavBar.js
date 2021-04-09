import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import "./components.css";

function NavBar() {
  return (
    <div>
      <nav className="navigation nav-ecom">
        <Link className="link-no-decoration" to="/">
          <h1 className="nav-heading">
            Fit<small className="nav-half-heading">Tube</small>
          </h1>
        </Link>

        <div className="input">
          <input
            type="text"
            name="search"
            placeholder="Search FitTube"
            className="input-search"
          />
          <button className="input-search-btn">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>

        <ul className="list-no-bullets nav-pills nav-list-ecom">
          <li className="list-item-inline">
            <NavLink to="/home" activeClassName="nav-active-icon">
              {" "}
              <div className="badge-div">
                <i class="fa fa-home fa-lg badge-icons" aria-hidden="true"></i>{" "}
              </div>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/wishlist" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-history fa-lg badge-icons"
                  aria-hidden="true"
                ></i>{" "}
              </div>
            </NavLink>
          </li>

          <li className="list-item-inline">
            <NavLink to="/cart" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-play-circle fa-lg badge-icons"
                  aria-hidden="true"
                ></i>
              </div>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/cart" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-clock-o fa-lg badge-icons"
                  aria-hidden="true"
                ></i>
              </div>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/cart" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-thumbs-up fa-lg badge-icons"
                  aria-hidden="true"
                ></i>
              </div>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/cart" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-user-circle-o fa-lg badge-icons"
                  aria-hidden="true"
                ></i>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
