import React, { useState } from "react";
import "./style.css";
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';

const searchClient = algoliasearch('BF6BAXRV38', '9ab225dfafbf63a1619c25d83a7518f0');

const NavBar = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {
            // Perform a search query using Algolia's search client
            const index = searchClient.initIndex('tritontrade'); // Use the correct index name
            const { hits } = await index.search(query);

            // Update the search results in the state
            setSearchResults(hits);
        } catch (error) {
            console.error('Error fetching search results:', error);
        }
    };

    return (
        <div className="navbardiv">
            <div className="navbar">
                <div className="navbarcategories">
                    <span className="academics">Academics</span>
                    <span className="furniture">Furniture</span>
                    <span className="clothing">Clothing</span>
                    <span className="more">More</span>
                </div>
                <div className="searchalldiv">
                    <InstantSearch searchClient={searchClient} indexName="tritontrade">
                        <SearchBox
                            onSubmit={handleSearch}
                            onChange={(e) => setQuery(e.currentTarget.value)}
                            value={query}
                            placeholder="Search for products" 
                        />
                        <Hits hitComponent={SearchResult} />
                    </InstantSearch>
                </div>
                <div className="toprighticons">
                    <div className="wishlist">
                        <div className="wishlisticon"></div>
                    </div>
                    <div className="profile">
                        <div className="profileicon"></div>
                    </div>
                </div>
            </div>
            <div className="logo"></div>
        </div>
    );
};

const SearchResult = ({ hit }) => {
    return (
        <div>
            {/* Display search results here */}
        </div>
    );
};

export default NavBar;
