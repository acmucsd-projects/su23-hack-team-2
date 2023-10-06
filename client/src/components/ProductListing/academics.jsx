import "./style.css";
import React from "react";
import ProductListingFilter from "../ProductListingFilter";

const listingData = [
  {
    name: "iClicker",
    img: "https://images-na.ssl-images-amazon.com/images/I/71qGzBstZaL._AC_UL600_SR600,600_.jpg", 
    cost: 20,
  },
  {
    name: "TI-30XS",
    img: "https://target.scene7.com/is/image/Target/GUEST_72d1d64c-cff3-4843-ae95-6a296b7ecefb?wid=488&hei=488&fmt=pjpeg",
    cost: 20,
  },
  {
    name: "Hi-Polymer Erasers",
    img: "https://target.scene7.com/is/image/Target/GUEST_cf8cc8ee-a119-4c35-bee9-ba47f49db2e7",
    cost: 8,
  },
  {
    name: "Pilot G305 Black Pens",
    img: "https://de2wfhoo6xqi5.cloudfront.net/size/600/2d1/dbc/ad9312b8640ec2648422147ece5a9e0cbd.jpg",
    cost: 10,
  },
  {
    name: "Sketchbook",
    img: "https://m.media-amazon.com/images/I/51rWP77gfhL._AC_.jpg",
    cost: 23,
  },
  {
    name: "Papermate 0.7 Lead Pencils",
    img: "https://s7d9.scene7.com/is/image/NewellRubbermaid/1759214_Front_VFIN?wid=1000&hei=1000",
    cost: 5,
  },
];

const Academics = () => {
  return (
    <div class="page">
        <div class="sidebar"><ProductListingFilter/></div>
        <div class="product-listing">
        <h1 class="cat-name">Academics</h1>
          {listingData.map((listing, index) => {
          return (
              <div class="product">
                  <img src={listing.img} class="product-img" alt="product"/>
                  <div class="product-info">
                      <p class="product-name">{listing.name}</p>
                      <p class="product-price">${listing.cost}</p>
                  </div>
              </div>
          );
          })}
        </div>
    </div>
  );
};

export default Academics;