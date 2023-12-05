import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Dropdown } from 'primereact/dropdown';

function Deal() {
    const location = useLocation();
    const deal = location.state; // Access the state directly

    // We have the current data through deal variable 

    // 1) Creata a form in state 
    const [form, setForm] = useState(deal)
    const [rep, setRep] = useState('')
    const [formStage, setFormStage] = useState([])
    // 2) setState to begin with the deal variable info
    // 3) onSubmit, run PATCH through deal.id to update the existing data in the DB
    // 4) Home will re-render every time we click on it so, the infomation here will update when come back to it. 

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
            last_update: form.last_update,
            name: form.name,
            rep: form.rep,
            users: parseInt(form.users),
            monthly_recurring_revenue: parseInt(form.monthly_recurring_revenue),
            stage_id: form.stage_id,
            close: form.close,
        }

        console.log(postedData)

        //     fetch(dealsUrl, {
        //         method: "PATCH",
        //         headers: {
        //             "content-type": "application/json"
        //         },
        //         body: JSON.stringify()
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //         })
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

    console.log(form.last_update)

    return (
        <div>
            <h2>{deal.name}</h2>
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="last_update">Last Update:</label>
                <input onChange={handleChange} value={form.last_update} type="date" name="last_update" defaultValue={form.last_update} />

                <label htmlFor="name">Deal Name:</label>
                <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Name" />

                <label htmlFor="rep">Rep:</label>
                <Dropdown value={form.rep} name="rep" onChange={handleChange} options={rep} optionLabel="name"
                    placeholder={form.rep} className="w-full md:w-14rem" />

                <label htmlFor="users">Users:</label>
                <input onChange={handleChange} value={form.users} type="number" name="users" placeholder="Users" step="1" />

                <label htmlFor="monthly_recurring_revenue">Monthly Reacurring Revenue:</label>
                <input onChange={handleChange} value={form.monthly_recurring_revenue} type="number" name="monthly_recurring_revenue" placeholder="MRR" step="1" />

                <label htmlFor="stage">Stage:</label>
                <Dropdown value={form.stage_id} name="stageInfo" onChange={handleChange} options={formStage} optionLabel="name"
                    placeholder={getStageNameById(form.stage_id)} className="w-full md:w-14rem" />

                <label htmlFor="close">Close Date:</label>
                <input onChange={handleChange} value={form.close} type="date" name="close" placeholder="Close Date" />

                <button type="submit">Update Deal</button>
            </form>
        </div>
    );
}

export default Deal;
