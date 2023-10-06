import "./style.css";
import React from "react";
import ProductListingFilter from "../ProductListingFilter";

const listingData = [
  {
    name: "Uniqlo T-Shirt",
    img: "https://image.uniqlo.com/UQ/ST3/WesternCommon/imagesgoods/437838/item/goods_03_437838.jpg", 
    cost: 25,
  },
  {
    name: "H&M Skirt",
    img: "https://di2ponv0v5otw.cloudfront.net/posts/2023/04/04/642c99dff644e5428f591aee/m_642c9f9832c1dc7f632061c1.jpg",
    cost: 25,
  },
  {
    name: "TNA Sweatshirt",
    img: "https://i.etsystatic.com/35888832/r/il/effe8d/3988715169/il_340x270.3988715169_gia0.jpg",
    cost: 50,
  },
  {
    name: "UCSD Sweatshirt",
    img: "https://i.etsystatic.com/23271237/r/il/8c515e/3848102824/il_570xN.3848102824_9vmb.jpg",
    cost: 30,
  },
  {
    name: "Levi's Jeans",
    img: "https://lsco.scene7.com/is/image/lsco/295070980-front-pdp?fmt=jpeg&qlt=70&resMode=bisharp&fit=crop,0&op_usm=1.25,0.6,8&wid=2000&hei=1800",
    cost: 45
  },
  {
    name: "Dress Shirt",
    img: "https://ae01.alicdn.com/kf/HTB1wpUzQxjaK1RjSZKzq6xVwXXaf.jpg_640x640Q90.jpg_.webp",
    cost: 20
  },
];

const ClothingPage = () => {
  return (
    <div class="page">
        <div class="sidebar"><ProductListingFilter/></div>
        <div class="product-listing">
        <h1 class="cat-name">Clothing</h1>
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

export default ClothingPage;