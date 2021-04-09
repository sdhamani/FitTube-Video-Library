import React from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import "./components.css";

function NavBar() {
  return (
    <div>
      <nav className="navigation nav-ecom">
        <h1 className="nav-heading">Soul Fitness</h1>
        <div className="nav-cateogory">
          <NavLink to="/mens" activeClassName="nav-active">
            MEN
          </NavLink>
          <NavLink to="/womens" activeClassName="nav-active">
            WOMEN
          </NavLink>
          <NavLink to="/equipments" activeClassName="nav-active">
            EQUIPMENT
          </NavLink>
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
                <i class="fa fa-heart fa-lg badge-icons" aria-hidden="true">
                  {" "}
                </i>
              </div>
            </NavLink>
          </li>

          <li className="list-item-inline">
            <NavLink to="/cart" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-shopping-cart fa-lg badge-icons"
                  aria-hidden="true"
                >
                  {" "}
                </i>
              </div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
