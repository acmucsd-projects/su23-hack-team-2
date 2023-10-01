import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';


const NavBar = () => {
    const handleButtonClick = () => {
        window.location.href = '/accountinfo';
    };
  return (
    <div class="navbardiv">
        <div class="navbar">
            <div class="navbarcategories">
                <a href="/" class="academics">Homepage</a>
                <span class="furniture">Furniture</span>
                <span class="clothing">Clothing</span>
                <span class="more">More</span>
                </div>
            <div class="searchalldiv">
                <div class="searchallicon"></div>
                    <div class="searchall">
                        <input type="text" class="searchinnavbar" placeholder="Search"></input>
                    </div>
                </div>
            <div class="toprighticons">
                <div class="wishlist">
                    <div class="wishlisticon"></div>
                </div>
                <div class="profile">
                    <button className = "profileicon" onClick={handleButtonClick}></button>
                </div>
            </div>
        </div>
        <div class="logo"></div>
    </div>
  );
};

export default NavBar;