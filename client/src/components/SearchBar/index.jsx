import { React, useState } from "react";
import "./style.css";
import {FaSearch} from "react-icons/fa";

const Searchbar = () => {
    const [input, setInput] = useState("");
    const fetchData = (searchTerm) => {
        // asynch function (needs .then)
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user) => {
                // could also send search term to backend & do filtering there instead of in front end
                // only returns if...
                return (
                    searchTerm && // a search term was inputted
                    user && // there is a user in the data base
                    user.name && // that user has a name
                    user.name.toLowerCase().includes(searchTerm)); // and the name matches the search term
            });
            console.log(results);
        });
        // replace with our actual API eventually
    }
    const handleChange = (value) => {
        setInput(value)
        fetchData(value) // passes in search term & make API call
    }

    return (
        <main class="input-wrapper">
            <FaSearch class="search-icon"/>
            <input placeholder="Search" 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}/>
        </main>
    );
};

export default Searchbar;