import React from 'react';
import { useState, useEffect } from 'react';
import Collapsible from 'react-collapsible';
import '../index.css';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';



function NewDealForm({ url, newDealHandler }) {
    // fetch call to the stages engpoint and save those values in state
    // use that state to populate a stage drop down in form
    // before our post call match our form

    const stageUrl = "http://localhost:3001/stages"
    const repsUrl = "http://localhost:3001/reps"

    const [formStage, setFormStage] = useState([])
    const [rep, setRep] = useState([])



    useEffect(() => {
        fetch(stageUrl)
            .then(res => res.json())
            .then(data => setFormStage(data))
    }, [])

    useEffect(() => {
        fetch(repsUrl)
            .then(res => res.json())
            .then(data => setRep(data))
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

        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(postedData)
        })
            .then(res => res.json())
            .then(data => {
                newDealHandler(data)
                setForm(formOutline)
            })
    }


    const formOutline = {
        last_update: '',
        name: '',
        rep: '',
        users: 0,
        monthly_recurring_revenue: 0,
        close: '',
        stage_id: ''
    }

    //When doing the post call, parse id from stageInfo 

    const [form, setForm] = useState(formOutline)

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
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
        <div className="NewDealForm">
            <Collapsible trigger={<button className="btn-23">
                <span className="marquee" aria-hidden>Add Deal</span></button>}>

                <form onSubmit={handleSubmit} >
                    <div>
                        <p>Last Update:</p>
                    </div>
                    <input className="form-element" onChange={handleChange} value={form.last_update} type="date" name="last_update" placeholder="Last Update" />
                    <input className="form-element" onChange={handleChange} value={form.name} type="text" name="name" placeholder="Name" />

                    <div className="button-text">
                        <p>Choose an rep:</p>
                    </div>
                    <ToggleButtonGroup
                        type="radio"
                        name="rep"
                        value={form.rep}
                        onChange={handleRepChange}
                        style={{ display: 'flex', flexDirection: 'row', lineHeight: '1em', margin: 0, padding: 0 }}

                    >
                        {rep.map((repOption) => (
                            <ToggleButton
                                key={repOption.id}
                                value={repOption.name}
                                variant="dark"
                            >
                                {repOption.name}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>

                    <input className='form-element' onChange={handleChange} value={form.users} type="number" name="users" placeholder="Users" step="1" />
                    <input className="form-element" onChange={handleChange} value={form.monthly_recurring_revenue} type="number" name="monthly_recurring_revenue" placeholder="MRR" step="1" />
                    {/* 
                    <Dropdown value={form.stageInfo} name="stageInfo" onChange={handleChange} options={formStage} optionLabel="name"
                        placeholder="Select a Stage" className="form-element" /> */}

                    <div>
                        <p>Select a Stage:</p>
                    </div>
                    <ToggleButtonGroup
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

                    <div>
                        <p>Close Date:</p>
                    </div>
                    <input className="form-element" onChange={handleChange} value={form.close} type="date" name="close" placeholder="Close Date" />
                    <button className="formButton" type="submit">Submit Deal</button>
                </form>
            </Collapsible>

        </div >
    );
}

export default NewDealForm;