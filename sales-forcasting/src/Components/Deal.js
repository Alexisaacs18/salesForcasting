import React from 'react';
import { useLocation } from 'react-router-dom';

function Deal() {
    const location = useLocation();
    const deal = location.state; // Access the state directly

    return (
        <div>
            <h2>{deal.name}</h2>
            {/* Render other deal properties as needed */}
        </div>
    );
}

export default Deal;
