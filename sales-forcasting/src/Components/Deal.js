import React from 'react';
import { useLocation } from 'react-router-dom';

function Deal() {
    const location = useLocation();
    const deal = location.state; // Access the state directly

    // We have the current data through deal variable 

    // 1) Creata a form in state 
    // 2) setState to begin with the deal variable info
    // 3) onSubmit, run PATCH through deal.id to update the existing data in the DB
    // 4) Home will re-render every time we click on it so, the infomation here will update when come back to it. 

    return (
        <div>
            <h2>{deal.name}</h2>
            {/* Render other deal properties as needed */}
        </div>
    );
}

export default Deal;
