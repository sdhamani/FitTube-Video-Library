import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useLogin from "../context/login-context";
import { useLocation, useNavigate } from "react-router-dom";
import LoginUser from "../api/login-api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const { state } = useLocation();
  const [passwordError, setPasswordError] = useState("");
  const [credentialsError, setCredentialsError] = useState("");
  const { setloggedIn, setToken, setuserName } = useLogin();
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [showLoading, setshowLoading] = useState(false);
  const navigate = useNavigate();

  const getCartAndWishlist = async (token) => {
    // const apicart = await Getcart(token);

    // dispatch({ type: "USERCART", payload: apicart });
    // const apiwishlist = await Getwishlist(token);

    // wishlistdispatch({ type: "USERWISHLIST", payload: apiwishlist });
    navigate(state?.from ? state.from : "/");
  };

  const signInUser = async () => {
    setshowLoading(true);
    // sac

    const response = await LoginUser(email, password);
    if (response.success === true) {
      setToken(response.token);
      setloggedIn(true);
      setuserName(response.userName);
      localStorage?.setItem("token", JSON.stringify({ token: response.token }));
      localStorage?.setItem("login", JSON.stringify({ isUserLoggedIn: true }));
      localStorage?.setItem(
        "localUserName",
        JSON.stringify({ localUserName: response.userName })
      );
      navigate(state?.from ? state.from : "/");
      // getCartAndWishlist(response.token);
    } else {
      setCredentialsError(response);
      setloggedIn(false);
    }
    setshowLoading(false);
  };

  useEffect(() => {
    setCredentialsError("");
    var re = /\S+@\S+\.\S\S+/;
    if (email.length === 0) {
      setEmailError("This field is required");
    } else if (!re.test(email)) {
      setEmailError("Not a valid email");
    } else {
      setEmailError("");
    }
  }, [email]);

  useEffect(() => {
    setCredentialsError("");
    let special = /[\W]{1,}/;
    if (password.length === 0) {
      setPasswordError("This field is required");
    } else {
      setPasswordError("");
    }
    if (emailError === "" && passwordError === "") {
      setIsSubmitDisabled(false);
    } else {
      setIsSubmitDisabled(true);
    }
  }, [password, emailError, passwordError]);

  return (
    <div className="login-div">
      <div className="login-center-div">
        <div className="login-card">
          <h1 className="login-account">Login Account</h1>

          <div className="login-input-div">
            <input
              placeholder="Enter an email Id"
              className="login-input"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            ></input>
          </div>
          {emailError !== "" ? (
            <p className="input-check">*{emailError}</p>
          ) : null}
          <div className="login-input-div">
            <input
              id="login-password"
              placeholder="Enter Password"
              className="login-input"
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
          </div>

          {passwordError !== "" ? (
            <p className="input-check">*{passwordError}</p>
          ) : null}

          {credentialsError !== "" ? (
            <p className="input-check">*{credentialsError}</p>
          ) : null}

          <input
            type="submit"
            value={showLoading ? "SIGNING IN" : "SIGN IN"}
            className={
              isSubmitDisabled
                ? "disabled-btn signin"
                : "btn primary-button signin"
            }
            onClick={(e) => signInUser()}
            disabled={isSubmitDisabled}
          ></input>

          <button className="login-actions">
            <Link className="login-actions-link" to="/signup">
              Don't have an account? Create an account
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
