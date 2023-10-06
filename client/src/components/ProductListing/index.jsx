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

const ProductListing = () => {
  return (
    <div class="page">
        <div class="sidebar"><ProductListingFilter/></div>
        <div class="product-listing">
        <h1 class="cat-name">Homepage</h1>
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

export default ProductListing;