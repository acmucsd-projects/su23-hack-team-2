import React, { useState } from "react";
import "./style.css";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';

const searchClient = algoliasearch('BF6BAXRV38', '9ab225dfafbf63a1619c25d83a7518f0');

const NavBar = () => {

    const [query, setQuery] = useState('');
    const handleSearch = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // You can perform additional actions before submitting the query
        // For example, analytics tracking, validation, etc.
        console.log(`Performing search for: ${query}`);
    };
    
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
            <InstantSearch searchClient={searchClient} indexName="tritontrade">
                <SearchBox
                    onSubmit={handleSearch}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                    value={query}
                    placeholder="Search for products" 
                />
                <Hits />
            </InstantSearch>
            {/*
                <div class="searchallicon"></div>
                    <div class="searchall">
                        <input type="text" class="searchinnavbar" placeholder="Search"></input>
                    </div>
                  */}
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