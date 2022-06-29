import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { loggedIn, setLoggedIn, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await logout();
      setLoggedIn(true);
      navigate("/");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="navbar-wrapper">
      <div className="navbar-left">
        <div className="navbar-left-name">
          <p>
            <span>&#60;</span> Code-Community<span> &#8725; &#62;</span>
          </p>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-list">
          <ul>
            {loggedIn ? (
              <>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "rgb(255, 239, 148)",
                    }}
                    to="/"
                  >
                    Login
                  </Link>
                </li>
                <li id="signup">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: " rgb(255, 239, 148)",
                    }}
                    to="/signup"
                  >
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>Account</li>
                <li onClick={handleSignout}>Logout</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
