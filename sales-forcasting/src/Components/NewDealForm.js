import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';


function NewDealForm() {
    // fetch call to the stages engpoint and save those values in state
    // use that state to populate a stage drop down in form
    // before our post call match our form

    const stageUrl = "http://localhost:3001/stages"

    const [formStage, setFormStage] = useState('')

    useEffect(() => {
        fetch(stageUrl)
            .then(res => res.json())
            .then(data => setFormStage(data))
    }, [])



    const formOutline = {
        last_updated: '',
        name: '',
        rep: '',
        users: 0,
        monthly_recurring_revenue: 0,
        close: '',
        stageInfo: {
        }
    }

    //When doing the post call, parse id from stageInfo 

    const [form, setForm] = useState(formOutline)

    function handleChange(e) {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" 
    // placeholder="Select a City" className="w-full md:w-14rem" />

    return (
        <div className="NewDealForm">
            <form >
                <input onChange={handleChange} value={form.last_updated} type="date" name="last_updated" placeholder="Last Updated" />
                <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Name" />
                <input onChange={handleChange} value={form.rep} type="text" name="rep" placeholder="Rep" />
                <input onChange={handleChange} value={form.users} type="number" name="users" placeholder="Users" step="1" />
                <input onChange={handleChange} value={form.monthly_recurring_revenue} type="number" name="monthly_recurring_revenue" placeholder="MRR" step="1" />

                <Dropdown value={form.stageInfo} name="stageInfo" onChange={handleChange} options={formStage} optionLabel="name"
                    placeholder="Select a Stage" className="w-full md:w-14rem" />

                <input onChange={handleChange} value={form.close} type="date" name="close" placeholder="Close Date" />
                <button type="submit">Add Deal</button>
            </form>
        </div>
    );
}

export default NewDealForm;