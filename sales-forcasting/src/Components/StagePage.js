import React from 'react';
import { useState, useEffect } from 'react';

function StagePage() {

    const stagesUrl = "http://localhost:3001/stages"

    const [stage, setStage] = useState([])

    useEffect(() => {
        fetch(stagesUrl)
            .then(res => res.json())
            .then(data => setStage(data))
    }, [])

    console.log(stage)

    return (
        <div className="StagePage">
            <h2>Pipeline Stages</h2>
            {stage.map((stage) => (
                <h3 key={stage.id}>{`${stage.name}: Revenue`}</h3>
            ))}
        </div>
    );
}

export default StagePage;