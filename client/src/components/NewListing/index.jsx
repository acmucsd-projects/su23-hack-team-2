import React, { useState } from "react";
import "./style.css";
import API from '../API';

const NewListing = () => {
  const initialFormData = {
    title: "",
    price: "",
    category: "",
    condition: "",
    description: "",
    picture: "",
  };
  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    const req = e.target;
    console.log(req.name);
    const newPost = {
      purchase: formData,
    };
    console.log(JSON.stringify(newPost.post));
    console.log(req);
    console.log(e);
    await API.createPost(newPost);
    alert("Created successfully");
  };
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Inria+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Abel&display=swap"
          rel="stylesheet"
        />
        <link href="./css/main.css" rel="stylesheet" />
        <title>Document</title>
      </head>
      <body>
        <div class="newlistingbody">
          <div class="v255_1047">
            <span class="v255_1050">+</span>
          </div>
          <input
            type="text"
            class="titleinput"
            placeholder="Title:"
            onChange={handleChange}
          ></input>
          <input
            type="text"
            class="priceinput"
            placeholder="Price (USD):"
            onChange={handleChange}
          ></input>
          <select name="categories" class="categoriesdropdown">
            {" "}
            onChange={handleChange}
            <option value="selection">Select a category:</option>
            <option value="academics">Academics</option>
            <option value="furniture">Furniture</option>
            <option value="clothing">Clothing</option>
            <option value="more">More</option>
          </select>
          <select name="condition" class="conditionsdropdown">
            {" "}
            onChange={handleChange}
            <option value="selection">Select the item's condition:</option>
            <option value="brandnew">Brand New</option>
            <option value="likenew">Like New</option>
            <option value="good">Good</option>
            <option value="acceptable">Acceptable</option>
            <option value="For Parts/Not Working">For Parts/Not Working</option>
          </select>
          <input
            type="text"
            class="descriptioninput"
            placeholder="Description:"
            onChange={handleChange}
          ></input>
          <button className="postbutton" onClick={handleCreatePost}>
            Submit New Post
          </button>
        </div>
      </body>
    </html>
  );
};

export default NewListing;
