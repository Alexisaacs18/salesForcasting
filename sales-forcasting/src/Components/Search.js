import React from 'react';

function Search({ setSearchTerm }) {
    return (
        <div className="Search">
            <input type="text" placeholder="Search by opportunity name, stage, or rep name" onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
    );
}

export default Search;