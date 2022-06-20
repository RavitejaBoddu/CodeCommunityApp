import { UserAuth } from "../../context/AuthContext";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import icon from "../../images/coding-icons.png";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, setLoggedIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
      setLoggedIn(false);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      alert(e.message);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="left-container">
          {/* <img className="coding-icons" src={icon} alt="coding icons" /> */}
          <div className="text-container float">
            <span className="text">&#60; &#62;</span>
            <span className="text indent1">Join</span>
            <span className="text indent2">to explore</span>
            <span className="text indent3">the coding Community!</span>
            <span className="text">&#60; &#8725; &#62;</span>
          </div>
        </div>
        <div className="right-container">
          <h1 className="slide-left">Signup Here</h1>
          <div className="form-container">
            <form name="myform" onSubmit={handleSubmit}>
              <label htmlFor="name">Full name:</label>
              <input
                onChange={(e) => setName(e.target.value)}
                type="text"
                name="fullname"
                id="uname"
                className="input"
              />
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
              <label htmlFor="pass1">Re-enter password:</label>
              <input type="password" name="password1" id="pass1" className="input" />
              <div className="button-container">
                <input type="submit" className="button" value="Signup" />
              </div>
            </form>
            <p>
              Already have an account! <Link to="/">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
