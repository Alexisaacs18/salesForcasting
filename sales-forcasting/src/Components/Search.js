import React from 'react';

function Search({ setSearchTerm }) {
    return (
        <div className="Search">
            <input type="text" placeholder="Search by deal name" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    );
}

export default Search;