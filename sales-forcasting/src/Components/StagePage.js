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
        <div className="StagePage">
            <h2>
                <div className="waviy">
                    <span style={{ '--i': 1 }}>S</span>
                    <span style={{ '--i': 2 }}>t</span>
                    <span style={{ '--i': 3 }}>a</span>
                    <span style={{ '--i': 4 }}>g</span>
                    <span style={{ '--i': 5 }}>e</span>
                    <span style={{ '--i': 6 }}>&nbsp;</span>
                    <span style={{ '--i': 7 }}>R</span>
                    <span style={{ '--i': 8 }}>e</span>
                    <span style={{ '--i': 9 }}>v</span>
                    <span style={{ '--i': 10 }}>e</span>
                    <span style={{ '--i': 11 }}>n</span>
                    <span style={{ '--i': 12 }}>u</span>
                    <span style={{ '--i': 13 }}>e</span>
                </div>
            </h2>

            {totalMRRByRepArray.map((repData) => (
                <h3 key={repData.stage}>{`${getStageNameById(repData.stage)}: $${repData.mrr}`}</h3>
            ))}


        </div>
    );
}

export default StagePage;