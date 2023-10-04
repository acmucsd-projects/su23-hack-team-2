import React from "react";
import "./style.css";

const NewListing = () => {
  return (
    <html>
        <head>
            <link href="https://fonts.googleapis.com/css?family=Inria+Sans&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css?family=Abel&display=swap" rel="stylesheet" />
            <link href="./css/main.css" rel="stylesheet" />
            <title>Document</title>
        </head>
        <body>
            <div class="v254_921">
                <div class="newlistingbody">
                    <div class="v255_1047">
                        <span class="v255_1050">+</span>
                    </div>
                    <input type="text" class="titleinput" placeholder="Title:"></input>
                    <input type="text" class="priceinput" placeholder="Price (USD):"></input>
                    <select name="categories" class="categoriesdropdown">
                        <option value="selection">Select a category:</option>
                        <option value="academics">Academics</option>
                        <option value="furniture">Furniture</option>
                        <option value="clothing">Clothing</option>
                        <option value="more">More</option>
                    </select>
                    <select name="condition" class="conditionsdropdown">
                        <option value="selection">Select the item's condition:</option>
                        <option value="brandnew">Brand New</option>
                        <option value="likenew">Like New</option>
                        <option value="good">Good</option>
                        <option value="acceptable">Acceptable</option>
                        <option value="For Parts/Not Working">For Parts/Not Working</option>
                    </select>
                    <input type="text" class="descriptioninput" placeholder="Description:"></input>
                </div>
            </div>
        </body>
    </html>
  );
};

export default NewListing;