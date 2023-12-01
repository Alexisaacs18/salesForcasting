import React from 'react';
import Deals from './Deals';

function PipelineContainer() {
    return (
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
    );
}

export default PipelineContainer;