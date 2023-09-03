import React from "react";
import "./style.css";

const NavBar = () => {
  return (
    <div class="navbardiv">
        <div class="navbar">
            <div class="navbarcategories">
                <span class="academics">Academics</span>
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
                    <div class="profileicon"></div>
                </div>
            </div>
        </div>
        <div class="logo"></div>
    </div>
  );
};

export default NavBar;