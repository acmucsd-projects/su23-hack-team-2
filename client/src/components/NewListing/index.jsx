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
                    <div class="v255_1047"></div>
                    <span class="v255_1050">+</span>
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
                    {/* <div class="categorydropdown"> 
                        <button class="categorydropdown-btn" aria-haspopup="menu">
                            <span class="categorydropdowntitle">Category:</span>
                            <span class="categorydropdownarrow"></span>
                        </button>
                        <ul class="categorydropdown-content" role="menu">
                            <li>
                                <a href="#">Academics</a>
                            </li>
                            <li>
                                <a href="#">Furniture</a>
                            </li>
                            <li>
                                <a href="#">Clothing</a>
                            </li>
                            <li>
                                <a href="#">More</a>
                            </li>
                        </ul>
                    </div>
                    <div class="conditiondropdown"> 
                        <button class="conditiondropdown-btn" aria-haspopup="menu">
                            <span class="conditiondropdowntitle">Condition:</span>
                            <span class="conditiondropdownarrow"></span>
                        </button>
                        <ul class="conditiondropdown-content" role="menu">
                            <li>
                                <a href="#">New</a>
                            </li>
                            <li>
                                <a href="#">Used - Like New</a>
                            </li>
                            <li>
                                <a href="#">Used - Pretty Good</a>
                            </li>
                            <li>
                                <a href="#">Used - Fair</a>
                            </li>
                            <li>
                                <a href="#">Used - Poor</a>
                            </li>
                        </ul>
                    </div> */}
                    <input type="text" class="descriptioninput" placeholder="Description:"></input>
                </div>
            </div>
        </body>
    </html>
  );
};

export default NewListing;