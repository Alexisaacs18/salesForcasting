import React from 'react';
import Deals from './Deals';
import Search from './Search';
import NewDealForm from './NewDealForm';

function PipelineContainer({ deals }) {
    return (
        <div>
            <NewDealForm />
            <Search />
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
            {deals.map((deal) => (
                <Deals key={deal.id} deal={deal} />
            ))}
        </div>
    );
}

export default PipelineContainer;