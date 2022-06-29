import React from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import "./Account.css";

const Account = () => {
  const navigate = useNavigate();

  const { user, logout, setLoggedIn } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      setLoggedIn(true);
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="main-container">
      <div className="user-container">
        <h1>Welcome User</h1>
        <p id="user_Email">User Email:{user && user.email}</p>
        <button className="button" id="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Account;
