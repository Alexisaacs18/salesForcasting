import React from 'react';

function Deals({ deal }) {

    console.log(deal)
    return (
        <div className="Deals">
            <table className="ui celled striped padded table">
                <tbody>
                    <tr>
                        <th>
                            <h3 className="ui center aligned header">{deal.last_update}</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">{deal.name}</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">{deal.rep}</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">{deal.users}</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">{deal.monthly_recurring_revenue}</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">{deal.stage_id}</h3>
                        </th>
                        <th>
                            <h3 className="ui center aligned header">{deal.close}</h3>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Deals;