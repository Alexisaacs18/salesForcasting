import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

function Deal() {
    const location = useLocation();
    const deal = location.state; // Access the state directly

    const formOutline = {
        id: deal.id,
        last_update: deal.last_update,
        name: deal.name,
        rep: deal.rep,
        users: deal.users,
        monthly_recurring_revenue: deal.monthly_recurring_revenue,
        close: deal.close,
        stage_id: deal.stage_id
    }

    const [form, setForm] = useState(formOutline)
    const [formStage, setFormStage] = useState([])
    const [rep, setRep] = useState([])

    const dealsUrl = "http://localhost:3001/deals"
    const repsUrl = "http://localhost:3001/reps"
    const stageUrl = "http://localhost:3001/stages"

    useEffect(() => {
        fetch(repsUrl)
            .then(res => res.json())
            .then(data => setRep(data))
    }, [])

    useEffect(() => {
        fetch(stageUrl)
            .then(res => res.json())
            .then(data => setFormStage(data))
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        const postedData = {
            id: form.id,
            last_update: form.last_update,
            name: form.name,
            rep: form.rep,
            users: parseInt(form.users),
            monthly_recurring_revenue: parseInt(form.monthly_recurring_revenue),
            stage_id: form.stage_id,
            close: form.close,
        }

        console.log(postedData)


        fetch(`${dealsUrl}/${postedData.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postedData)
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                alert("Successfully Updated Deal!");
            })


    }

    function getStageNameById(id) {
        const stage = formStage.find((s) => s.id === id);
        return stage ? stage.name : "Stage not found"; // Return the name or a default message if ID is not found
    }


    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    function handleRepChange(e) {
        setForm({
            ...form,
            ["rep"]: e
        });
    }

    function handleStageChange(e) {
        setForm({
            ...form,
            ["stage_id"]: e
        });
    }

    return (
        <div className='Pipeline'>

            <div className="NewDealForm">
                <h2>{deal.name}</h2>

                <form onSubmit={handleSubmit} className='form'>
                    <label htmlFor="last_update">Last Update:</label>
                    <input onChange={handleChange} value={form.last_update} type="date" name="last_update" defaultValue={form.last_update} />

                    <label htmlFor="name">Deal Name:</label>
                    <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Name" />

                    <label htmlFor="rep"></label>
                    <div>
                        <p>Select a Rep:</p>
                    </div>
                    <ToggleButtonGroup id="pattern5"
                        type="radio"
                        name="rep"
                        value={form.rep}
                        onChange={handleRepChange}
                        style={{ display: 'flex', flexDirection: 'row', lineHeight: '1em', margin: 0, padding: 0 }}

                    >

                        {rep.map((repOption) => (
                            <ToggleButton
                                key={repOption.id}  // Make sure each option has a unique key
                                value={repOption.name}  // Use the appropriate property from your 'rep' array
                                variant="light"  // You can customize the appearance by changing the variant
                            >
                                {repOption.name}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <label htmlFor="users">Users:</label>
                    <input onChange={handleChange} value={form.users} type="number" name="users" placeholder="Users" step="1" />

                    <label htmlFor="monthly_recurring_revenue">Monthly Reacurring Revenue:</label>
                    <input onChange={handleChange} value={form.monthly_recurring_revenue} type="number" name="monthly_recurring_revenue" placeholder="MRR" step="1" />

                    <label htmlFor="stage"></label>
                    <div>
                        <p>Select a Stage:</p>
                    </div>
                    <ToggleButtonGroup id="pattern5"
                        type="radio"
                        name="stage"
                        value={form.formStage}
                        onChange={handleStageChange}
                        style={{ display: 'flex', flexDirection: 'row', lineHeight: '1em', margin: 0, padding: 0 }}

                    >
                        {formStage.map((repOption) => (
                            <ToggleButton
                                key={repOption.id}  // Make sure each option has a unique key
                                value={repOption.id}  // Use the appropriate property from your 'rep' array
                                variant="light"  // You can customize the appearance by changing the variant
                            >
                                {repOption.name}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <label htmlFor="close">Close Date:</label>
                    <input onChange={handleChange} value={form.close} type="date" name="close" placeholder="Close Date" />

                    <button className="formButton" type="submit">Update Deal</button>
                </form>
            </div>
        </div>

    );
}

export default Deal;
