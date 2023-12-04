import React, { useState, useEffect } from 'react';
import Deals from './Deals';
import Search from './Search';
import NewDealForm from './NewDealForm';

function PipelineContainer() {
    const url = "http://localhost:3001/deals"
    const [deals, setDeals] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setDeals(data))
    }, [])

    function newDealHandler(newDeal) {
        setDeals([...deals, newDeal])
    }

    const filteredDeals = deals.filter(deal => deal.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <NewDealForm url={url} newDealHandler={newDealHandler} />
            <Search setSearchTerm={setSearchTerm} />
            <table className="ui celled striped padded table">
                <tbody>
                    <tr>
                        <th>
                            <h3 className="ui center aligned header">Date</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">Name</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">Rep</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">Users</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">MRR</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">Stage</h3>
                        </th>
                        <th>
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