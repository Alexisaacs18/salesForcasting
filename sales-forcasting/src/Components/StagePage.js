import React from 'react';
import { useState, useEffect } from 'react';

function StagePage() {

    const dealsUrl = "http://localhost:3001/deals"
    const stageUrl = "http://localhost:3001/stages"
    const [dealReps, setDealReps] = useState([])
    const [stages, setStages] = useState([])


    useEffect(() => {
        fetch(dealsUrl)
            .then(res => res.json())
            .then(data => setDealReps(data))
    }, [])

    useEffect(() => {
        fetch(stageUrl)
            .then(res => res.json())
            .then(data => setStages(data))
    }, [])

    function getStageNameById(id) {
        const stage = stages.find((s) => s.id === id);
        return stage ? stage.name : "Stage not found";
    }


    const totalMRRByRepArray = [];

    dealReps.forEach(deal => {
        const stage = deal.stage_id;
        const mrr = deal.monthly_recurring_revenue;

        const existingRepIndex = totalMRRByRepArray.findIndex(item => item.stage === stage);

        if (existingRepIndex !== -1) {
            totalMRRByRepArray[existingRepIndex].mrr += mrr;
        } else {
            totalMRRByRepArray.push({ stage, mrr });
        }
    });


    return (
        <div className="RepPage">
            <h2>Sales Reps</h2>
            {totalMRRByRepArray.map((repData) => (
                <h3 key={repData.stage}>{`${getStageNameById(repData.stage)}: $${repData.mrr}`}</h3>
            ))}


        </div>
    );
}

export default StagePage;