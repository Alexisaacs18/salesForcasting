import React, { useState, useEffect } from 'react';
import Deals from './Deals';
import Search from './Search';
import NewDealForm from './NewDealForm';
import { Outlet } from 'react-router-dom';

import '../index.css';


function PipelineContainer() {
    const dealsUrl = "http://localhost:3001/deals"
    const stageUrl = "http://localhost:3001/stages"

    const [deals, setDeals] = useState([])
    const [stages, setStages] = useState([])
    const [searchTerm, setSearchTerm] = useState('')


    useEffect(() => {
        fetch(dealsUrl)
            .then(res => res.json())
            .then(data => setDeals(data))
    }, [])

    useEffect(() => {
        fetch(stageUrl)
            .then(res => res.json())
            .then(data => setStages(data))
    }, [])

    function newDealHandler(newDeal) {
        setDeals([...deals, newDeal])
    }


    function getStageNameById(id) {
        const stage = stages.find((s) => s.id === id);
        return stage ? stage.name : "Stage not found"; // Return the name or a default message if ID is not found
    }


    const filteredDeals = deals.filter(deal => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            deal.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            deal.rep.toLowerCase().includes(lowerCaseSearchTerm) ||
            getStageNameById(deal.stage_id).toLowerCase().includes(lowerCaseSearchTerm)
        );
    });

    return (
        <div className="Pipeline">
            <div className='form'>
                <NewDealForm url={dealsUrl} newDealHandler={newDealHandler} />
                <Search setSearchTerm={setSearchTerm} />
            </div>
            <table className='Table'>
                <tbody>
                    <tr className='tr'>
                        <th className='th'>
                            <h3 className="ui center aligned header">Date</h3>
                        </th>
                        <th className='th'>
                            <h3 className="ui center aligned header">Name</h3>
                        </th>
                        <th className='th'>
                            <h3 className="ui center aligned header">Rep</h3>
                        </th>
                        <th className='th'>
                            <h3 className="ui center aligned header">Users</h3>
                        </th>
                        <th className='th'>
                            <h3 className="ui center aligned header">MRR</h3>
                        </th>
                        <th className='th'>
                            <h3 className="ui center aligned header">Stage</h3>
                        </th>
                        <th className='th'>
                            <h3 className="ui center aligned header">Close Date</h3>
                        </th>
                    </tr>
                </tbody>
            </table>
            {filteredDeals.map((deal) => (
                <Deals key={deal.id} deal={deal} />
            ))}
        </div>
    );
}

export default PipelineContainer;