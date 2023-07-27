import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import Searchbar from "../SearchBar";

const Navbar = () => {
  return (
    <div class="navbar">
      <img className="navlogo" src={logo} alt="Logo"></img>
      <nav class="navlinks">
        <a href="/">School</a>
        <a href="/">Furniture</a>
        <a href="/">Electronics</a>
        <a href="/">More</a>
        <Searchbar/>
      </nav>
    </div>
  );
};

export default Navbar;