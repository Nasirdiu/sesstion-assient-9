import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/Image/logo.png";
import { Link, NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className="logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="link-container">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/home"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/video"
        >
          Video
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/login"
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
