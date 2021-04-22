import React, {useState} from 'react';
import "./SearchBar.css"

function SearchBar() {

    const [query, setQuery] = useState('');

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
        </div>
    );
};

export default SearchBar;