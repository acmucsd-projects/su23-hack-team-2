import React, {useState, useEffect} from "react";
import "./style.css";
import ProductListingFilter from "../ProductListingFilter";
import API from '../API';

const listingData = [
  {
    name: "Bed",
    img: "https://www.ikea.com/us/en/images/products/hauga-bedroom-furniture-set-of-4-lofallet-beige-white__1101338_pe866602_s5.jpg?f=s",
    cost: 100,
  },
  {
    name: "Desk",
    img: "https://www.whalenfurniture.com/wp-content/uploads/2021/07/SPLS-LTCGD-LEET-Onyx-Gaming-Desk-LS-Hero.jpg",
    cost: 25,
  },
  {
    name: "Chair",
    img: "https://www.ikea.com/us/en/images/products/bergmund-chair-black-orrsta-light-gray__0859542_pe780965_s5.jpg",
    cost: 50,
  },
  {
    name: "Mattress",
    img: "https://i5.walmartimages.com/asr/c1f30486-8da9-4e74-a1f9-fcf3d74da1e0.bc65b28bf279a466f95255f15f94a97a.jpeg",
    cost: 25,
  },
  {
    name: "Rolling Chair",
    img: "https://www.ikea.com/us/en/images/products/hattefjaell-office-chair-with-armrests-smidig-black-black__1019087_pe831296_s5.jpg",
    cost: 10000000,
  },
];

const ProductListing = () => {
  const [body, setBody] = useState([]);

  useEffect(() => {
    API.getPost().then((response) => {
      console.log(response);
      setBody(response.data.post);
    });
  }, []);

  return (
    <div class="page">
      <div class="sidebar">
        <ProductListingFilter />
      </div>
      <div class="product-listing">
        <h1 class="cat-name">Category</h1>
        {body.map((listing) => {
          return (
            <div class="product">
              <img src={listing.img} class="product-img" alt="product" />
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
