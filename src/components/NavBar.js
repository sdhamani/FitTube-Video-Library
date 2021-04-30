import { React, useState, useEffect } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import "./components.css";
import useVideos from "../context/videos-context";
function NavBar() {
  const [searchText, setSearchText] = useState("");
  const { videosdispatch } = useVideos();
  const SearchVideos = () => {
    videosdispatch({ TYPE: "SEARCH", PAYLOAD: searchText });
  };

  useEffect(() => {
    videosdispatch({ TYPE: "SEARCH", PAYLOAD: searchText });
    // return () => {
    //   cleanup;
    // };
  }, [searchText]);

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
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="input-search-btn" onClick={(e) => SearchVideos()}>
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>

        <ul className="list-no-bullets nav-pills nav-list-ecom">
          <li className="list-item-inline">
            <NavLink
              to="/"
              className="list-item-inline-link"
              activeClassName="nav-active-icon"
            >
              {" "}
              <div className="badge-div">
                <i class="fa fa-home fa-lg badge-icons" aria-hidden="true"></i>{" "}
              </div>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/history" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-history fa-lg badge-icons"
                  aria-hidden="true"
                ></i>{" "}
              </div>
            </NavLink>
          </li>

          <li className="list-item-inline">
            <NavLink to="/playlist" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-play-circle fa-lg badge-icons"
                  aria-hidden="true"
                ></i>
              </div>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/watchlater" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-clock-o fa-lg badge-icons"
                  aria-hidden="true"
                ></i>
              </div>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/likedvideos" activeClassName="nav-active-icon">
              <div className="badge-div">
                <i
                  class="fa fa-thumbs-up fa-lg badge-icons"
                  aria-hidden="true"
                ></i>
              </div>
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink to="/user" activeClassName="nav-active-icon">
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
