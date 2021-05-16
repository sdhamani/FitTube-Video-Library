import { React, useState, useEffect } from "react";
import { Routes, Route, NavLink, Link, useNavigate } from "react-router-dom";
import "./components.css";
import SideBar from "./SideBar";
import useVideos from "../context/videos-context";
import useLogin from "../context/login-context";
import useData from "../context/data-context";

function NavBar() {
  const { data, setData } = useData();
  const [searchText, setSearchText] = useState("");
  const { videosdispatch } = useVideos();
  const navigate = useNavigate();
  const [logoutBtn, setlogoutBtn] = useState(true);
  const [hamDisplay, setHamDisplay] = useState(false);
  const { loggedIn, setloggedIn, userName } = useLogin();

  const SearchVideos = () => {
    videosdispatch({ TYPE: "SEARCH", PAYLOAD: searchText });
  };

  function myFunction() {
    setHamDisplay(!hamDisplay);
  }

  useEffect(() => {
    videosdispatch({ TYPE: "SEARCH", PAYLOAD: searchText });
  }, [searchText]);

  function logoutFun() {
    setlogoutBtn(true);
    setloggedIn(false);
    localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: false }));
    localStorage?.setItem(
      "localUserName",
      JSON.stringify({ localUserName: "" })
    );
    localStorage?.setItem("token", JSON.stringify({ token: "" }));
    navigate("/");
    // dispatch({ type: "USERCART", payload: [] });
    // wishlistdispatch({ type: "USERWISHLIST", payload: [] });
  }
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
          <h1 className={loggedIn ? "nav-heading-loggedin" : "nav-heading"}>
            <i className="fa fa-youtube-play" aria-hidden="true"></i>
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
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>

        {loggedIn && (
          <div>
            <div
              className="loggedin-Name"
              onClick={(e) => setlogoutBtn(!logoutBtn)}
            >
              <div className="nav-username">Hi {userName}!</div>
              <div className="badge-div">
                <i
                  className="fa fa-user-circle fa-lg badge-icons logged-in-user"
                  aria-hidden="true"
                >
                  {" "}
                </i>
              </div>
            </div>
            <div
              onClick={(e) => logoutFun()}
              className={
                logoutBtn ? "logout-btn-div  nodisplay " : "logout-btn-div"
              }
            >
              <button className="logout_btn">Logout</button>
            </div>
          </div>
        )}

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
                    className="fa fa-home fa-lg badge-icons"
                    aria-hidden="true"
                  ></i>{" "}
                </div>
              </NavLink>
            </li>
            <li className="list-item-inline">
              <NavLink to="/history" activeClassName="nav-active-icon">
                <div className="badge-div">
                  <i
                    className="fa fa-history fa-lg badge-icons"
                    aria-hidden="true"
                  ></i>{" "}
                </div>
              </NavLink>
            </li>

            <li className="list-item-inline">
              <NavLink to="/playlist" activeClassName="nav-active-icon">
                <div className="badge-div">
                  <i
                    className="fa fa-play-circle fa-lg badge-icons"
                    aria-hidden="true"
                  ></i>
                </div>
              </NavLink>
            </li>
            <li className="list-item-inline">
              <NavLink to="/watchlater" activeClassName="nav-active-icon">
                <div className="badge-div">
                  <i
                    className="fa fa-clock-o fa-lg badge-icons"
                    aria-hidden="true"
                  ></i>
                </div>
              </NavLink>
            </li>
            <li className="list-item-inline">
              <NavLink to="/likedvideos" activeClassName="nav-active-icon">
                <div className="badge-div">
                  <i
                    className="fa fa-thumbs-up fa-lg badge-icons"
                    aria-hidden="true"
                  ></i>
                </div>
              </NavLink>
            </li>
            {!loggedIn && (
              <li className="list-item-inline">
                <NavLink to="/login" activeClassName="nav-active-icon">
                  <div className="badge-div">
                    <i
                      className="fa fa-user-circle-o fa-lg badge-icons"
                      aria-hidden="true"
                    ></i>
                  </div>
                </NavLink>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
