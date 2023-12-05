import React from 'react';
import { useState, useEffect } from 'react';

function RepPage() {

    const dealsUrl = "http://localhost:3001/deals"
    const [dealReps, setDealReps] = useState([])


    useEffect(() => {
        fetch(dealsUrl)
            .then(res => res.json())
            .then(data => setDealReps(data))
    }, [])


    const totalMRRByRepArray = [];

    dealReps.forEach(deal => {
        const rep = deal.rep;
        const mrr = deal.monthly_recurring_revenue;

        const existingRepIndex = totalMRRByRepArray.findIndex(item => item.rep === rep);

        if (existingRepIndex !== -1) {
            totalMRRByRepArray[existingRepIndex].mrr += mrr;
        } else {
            totalMRRByRepArray.push({ rep, mrr });
        }
    });

    console.log(totalMRRByRepArray)


    return (
        <div className="RepPage">
            <h2>Sales Reps</h2>
            {totalMRRByRepArray.map((repData) => (
                <h3 key={repData.rep}>{`${repData.rep}: $${repData.mrr}`}</h3>
            ))}


        </div>
    );
}

export default RepPage;