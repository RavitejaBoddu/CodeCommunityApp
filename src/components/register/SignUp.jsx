import { UserAuth } from "../../context/AuthContext";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");
  const [error, setError] = useState("");

  const { createUser, setLoggedIn } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    try {
      if (name == null || name === "") {
        alert("please enter your firstname");
      }else if(email == null || email === ""){
        alert("Please enter your email");
      }else if (password == null || password === "") {
        alert("please enter the password");
      } else if (password1 == null || password1 === "") {
        alert("please re-enter the password");
      } else if (password.length < 6 || password1.length < 6) {
        alert("Password must be at least 6 characters long");
      } else if (password !== password1) {
        alert("Password does not match");
      } else if ( 
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= email.length
      ) {
        alert("Please enter a valid email address");
       }else {
        try {
          await createUser(email, password);
          setLoggedIn(false);
          navigate("/account");
        } catch (e) {
          setError(e.message);
          alert(e.message);
        }
      }
    } catch (e) {
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
                // required
              />
              <label htmlFor="email">Email:</label>
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                name="email"
                id="email"
                className="input"
                // required
              />
              <label htmlFor="pass">password:</label>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password"
                id="pass"
                className="input"
                // required
              />
              <label htmlFor="pass1">Re-enter password:</label>
              <input
                type="password"
                name="password1"
                id="pass1"
                className="input"
                onChange={(e) => setPassword1(e.target.value)}
                // required
              />
              <div className="button-container">
                <input
                  type="submit"
                  className="button"
                  value="Signup"
                  id="signup-btn"
                />
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
