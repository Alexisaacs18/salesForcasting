import React from 'react';
import { useState, useEffect } from 'react';

function RepPage() {

    const repsUrl = "http://localhost:3001/reps"
    const dealsUrl = "http://localhost:3001/deals"

    const [reps, setReps] = useState([])
    const [dealReps, setDealReps] = useState([])

    useEffect(() => {
        fetch(repsUrl)
            .then(res => res.json())
            .then(data => setReps(data))
    }, [])

    useEffect(() => {
        fetch(dealsUrl)
            .then(res => res.json())
            .then(data => setDealReps(data))
    }, [])

    const total = dealReps.filter((rep) => {
        if (rep.rep === reps[0].name) {
            return rep.monthly_recurring_revenue
        }
    })

    console.log(total)

    return (
        <div className="RepPage">
            {reps.map((rep) => (
                <h3 key={rep.id}>{`${rep.name}: $${rep.monthly_recurring_revenue}`}</h3>
            ))}
        </div>
    );
}

export default RepPage;