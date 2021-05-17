import React, {useState} from 'react';
import "./SearchBar.css"
import {useHistory, useLocation} from "react-router-dom";

const SearchBar = () => {

    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('/');

    const history = useHistory();

    const searchItems = (e) => {
        e.preventDefault();
        history.push({
            pathname: category,
            query: query
        });
    }

    return (
        <div className="search-bar">
            <form>
                <input
                    type="text"
                    placeholder="Search for item..."
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                 />
            </form>
                <form onSubmit={searchItems}>
                    <select value={category}
                            onChange={(e) => setCategory(e.target.value)}>
                        <option value="/">Wszystkie</option>
                        <option value="/laptops">Laptopy</option>
                        <option value="/phones">Telefony</option>
                        <option value="/tablets">Tablety</option>
                    </select>
                    <button>Search</button>
                </form>

        </div>
    );
};

export default SearchBar;