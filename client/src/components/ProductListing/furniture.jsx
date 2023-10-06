import "./style.css";
import React from "react";
import ProductListingFilter from "../ProductListingFilter";

const listingData = [
  {
    name: "Black Couch",
    img: "https://www.ikea.com/us/en/images/products/paerup-sofa-vissle-gray__1041907_pe841187_s5.jpg", 
    cost: 50,
  },
  {
    name: "Black Office Chair",
    img: "https://madisonliquidators.com/images/p/1150/5053-small-black-rolling-office-chair-1.jpg",
    cost: 25,
  },
  {
    name: "Twin Sized Matress",
    img: "https://www.ikea.com/us/en/images/products/underlig-foam-mattress-for-junior-bed-white__0748964_pe745354_s5.jpg?f=s",
    cost: 40,
  },
  {
    name: "Metal Bed Frame",
    img: "https://m.media-amazon.com/images/I/9183FBhpEDL._AC_UF894,1000_QL80_.jpg",
    cost: 30,
  },
  {
    name: "Black Coffee Table",
    img: "https://static.zara.net/photos///2023/V/4/1/p/6344/072/800/2/w/1920/6344072800_6_1_1.jpg?ts=1672843240641",
    cost: 15,
  },
  {
    name: "Wooden Dining Table",
    img: "https://cdn-images.article.com/products/SKU448/2890x1500/image82251.jpg",
    cost: 70,
  },
];

const Furniture = () => {
  return (
    <div class="page">
        <div class="sidebar"><ProductListingFilter/></div>
        <div class="product-listing">
        <h1 class="cat-name">Furniture</h1>
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

export default Furniture;