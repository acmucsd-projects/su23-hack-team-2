import React from "react";
import "./style.css";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div class="navbar">
      <img className="navlogo" src={logo} alt="Logo"></img>
      <nav class="navlinks">
        <a href="/">School</a>
        <a href="/">Furniture</a>
        <a href="/">Electronics</a>
        <a href="/">More</a>
      </nav>
    </div>
  );
};

export default Navbar;