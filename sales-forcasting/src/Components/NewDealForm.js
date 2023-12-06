import React from 'react';
import { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown';
import Collapsible from 'react-collapsible';
import '../index.css';

import Select from 'react-select';



function NewDealForm({ url, newDealHandler }) {
    // fetch call to the stages engpoint and save those values in state
    // use that state to populate a stage drop down in form
    // before our post call match our form

    const stageUrl = "http://localhost:3001/stages"
    const repsUrl = "http://localhost:3001/reps"

    const [formStage, setFormStage] = useState('')
    const [rep, setRep] = useState('')
    const [favorite, setFavorite] = useState(false)



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
            rep: form.rep.name,
            users: parseInt(form.users),
            monthly_recurring_revenue: parseInt(form.monthly_recurring_revenue),
            stage_id: form.stageInfo.id,
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



    function clickFavorite(e) {
        e.preventDefault()
        console.log("clickFavorite called");
        setFavorite((prev) => !prev);
    }




    return (
        <div className="NewDealForm">
            <Collapsible trigger={<button className="btn-23">
                <span className="marquee" aria-hidden>Add Deal</span></button>}>

                <form onSubmit={handleSubmit} className='form'>
                    <input onChange={handleChange} value={form.last_update} type="date" name="last_update" placeholder="Last Update" />
                    <input onChange={handleChange} value={form.name} type="text" name="name" placeholder="Name" />

                    <Dropdown value={form.rep} name="rep" onChange={handleChange} onClick={clickFavorite} options={rep} optionLabel="name"
                        placeholder="Select a Rep" className={favorite ? "r-full md:w-14rem" : ""}
                    />

                    <input className='bump' onChange={handleChange} value={form.users} type="number" name="users" placeholder="Users" step="1" />
                    <input onChange={handleChange} value={form.monthly_recurring_revenue} type="number" name="monthly_recurring_revenue" placeholder="MRR" step="1" />

                    <Dropdown value={form.stageInfo} name="stageInfo" onChange={handleChange} options={formStage} optionLabel="name"
                        placeholder="Select a Stage" className="f-full md:w-14rem" />

                    <input onChange={handleChange} value={form.close} type="date" name="close" placeholder="Close Date" />
                    <button className="formButton" type="submit">Submit Deal</button>
                </form>
            </Collapsible>

        </div>
    );
}

export default NewDealForm;