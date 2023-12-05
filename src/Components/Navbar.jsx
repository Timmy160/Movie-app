import React, { useState } from "react";
import "./Navbar.css";
import Netflix_Avatar from "../Assets/Images/Netflix_Avatar.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navBar navBar_black">
      <div className="nav_contents">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="Netflix_Logo"
        />
        <img
          onClick={() => navigate("/ProfileScreen")}
          className="nav_avatar"
          src={Netflix_Avatar}
          alt="Netflix_Avatar"
        />
      </div>
    </div>
  );
}

export default Navbar;
