import React from 'react';
import { useState, useEffect } from 'react';

function StagePage() {

    const dealsUrl = "http://localhost:3001/deals"
    const [dealReps, setDealReps] = useState([])


    useEffect(() => {
        fetch(dealsUrl)
            .then(res => res.json())
            .then(data => setDealReps(data))
    }, [])


    const totalMRRByRepArray = [];

    // Iterate through the deals and sum up MRR for each rep
    dealReps.forEach(deal => {
        const stageId = deal.stage_id;
        const mrr = deal.monthly_recurring_revenue;

        // Check if rep already exists in the array
        const existingRepIndex = totalMRRByRepArray.findIndex(item => item.stage_id === stageId);

        if (existingRepIndex !== -1) {
            // If rep exists, update the MRR
            totalMRRByRepArray[existingRepIndex].mrr += mrr;
        } else {
            // If rep doesn't exist, add a new object to the array
            totalMRRByRepArray.push({ stageId, mrr });
        }
    });

    console.log(totalMRRByRepArray)


    return (
        <div className="RepPage">
            <h2>Sales Reps</h2>
            {totalMRRByRepArray.map((repData) => (
                <h3 key={repData.stageId}>{`${repData.stageId}: $${repData.mrr}`}</h3>
            ))}


        </div>
    );
}

export default StagePage;