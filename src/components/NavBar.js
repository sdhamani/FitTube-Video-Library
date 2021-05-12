import { React, useState, useEffect } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import "./components.css";
import SideBar from "./SideBar";
import useVideos from "../context/videos-context";
function NavBar() {
  const [searchText, setSearchText] = useState("");
  const { videosdispatch } = useVideos();
  const [hamDisplay, setHamDisplay] = useState(false);

  const SearchVideos = () => {
    videosdispatch({ TYPE: "SEARCH", PAYLOAD: searchText });
  };

  function myFunction() {
    setHamDisplay(!hamDisplay);
  }

  useEffect(() => {
    videosdispatch({ TYPE: "SEARCH", PAYLOAD: searchText });
  }, [searchText]);

  return (
    <div>
      <nav className="navigation nav-ecom">
        {hamDisplay && (
          <SideBar hamDisplay={hamDisplay} setHamDisplay={setHamDisplay} />
        )}
        <div
          className={hamDisplay ? "container change" : "container"}
          id="ham-container"
          onClick={() => myFunction()}
        >
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
        <Link className="link-no-decoration" to="/">
          <h1 className="nav-heading">
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
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

        <div className="nav-icons">
          <ul className="list-no-bullets nav-pills nav-list-ecom">
            <li className="list-item-inline">
              <NavLink
                to="/"
                className="list-item-inline-link"
                activeClassName="nav-active-icon"
              >
                {" "}
                <div className="badge-div">
                  <i
                    class="fa fa-home fa-lg badge-icons"
                    aria-hidden="true"
                  ></i>{" "}
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
              <NavLink to="/" activeClassName="nav-active-icon">
                <div className="badge-div">
                  <i
                    class="fa fa-user-circle-o fa-lg badge-icons"
                    aria-hidden="true"
                  ></i>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
