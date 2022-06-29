import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Login.css";
import google from "../../images/google.svg";
import facebook from "../../images/facebook.svg";
import apple from "../../images/apple.svg";

const Login = () => {
  const { login, setLoggedIn, googleSignIn, facebookSignIn } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    try {
      if (email == null || email === "") {
        alert("Please enter the email");
      } else if (password == null || password === "") {
        alert("please enter the password");
      } else if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= email.length
      ) {
        alert("Please enter a valid email address");
      } else {
        try {
          await login(email, password);
          navigate("/account");
          setLoggedIn(false);
        } catch (e) {
          alert(e.message);
        }
      }
    } catch (e) {
      alert(e.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/account");
      setLoggedIn(false);
    } catch (error) {
      alert(error.message);
    }
  };
  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      navigate("/account");
      setLoggedIn(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="right-container">
          <div className="text-container float">
            <span className="text">&#60; &#62;</span>
            <span className="text indent1">Welcome,</span>
            <span className="text indent2">to Code Community</span>
            <span className="text indent3">Let's get started!</span>
            <span className="text">&#60; &#8725; &#62;</span>
          </div>
        </div>
        <div className="right-container">
          <h1 className="slide-left">Login to your Account</h1>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                id="email"
                className="input"
              />
              <label htmlFor="pass">password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="pass"
                className="input"
              />
              <div className="button-container">
                <input
                  type="submit"
                  className="button"
                  value="Login"
                  id="login"
                />
              </div>
            </form>
            <p>
              Need an Account? <Link to="/signup">SignUp</Link>
            </p>
            <p className="or">
              <span>or</span>
            </p>
            <span>Signin with</span>
          </div>
          <div className="login-icons">
            
              <img
                id="google-btn"
                className="login-icon"
                onClick={handleGoogleSignIn}
                src={google}
                alt="google"
              />
              <img
                id="facebook-btn"
                className="login-icon"
                onClick={handleFacebookSignIn}
                src={facebook}
                alt="facebook"
              />
              <img className="login-icon" id="apple-btn" src={apple} alt="apple" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
