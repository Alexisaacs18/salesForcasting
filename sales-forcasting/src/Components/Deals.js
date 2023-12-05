import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import '../index.css';


function Deals({ deal }) {

    const stageUrl = "http://localhost:3001/stages"
    const [stage, setStage] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`${stageUrl}/${deal.stage_id}`)
            .then(res => res.json())
            .then(data => setStage(data.name))
    }, [])

    //Link to Individual Deal
    function individualDeal() {
        navigate(`/deal/${deal.id}`, { state: deal });

    }

    return (
        <div className="Deals">
            <table className="Deal">
                <tbody>
                    <tr className='trs' onClick={individualDeal}>
                        <th className='tds'>
                            <h3 className="ui center aligned header">{deal.last_update}</h3>
                        </th>
                        <th className='tds'>
                            <h3 className="ui center aligned header">{deal.name}</h3>
                        </th>
                        <th className='tds'>
                            <h3 className="ui center aligned header">{deal.rep}</h3>
                        </th>
                        <th className='tds'>
                            <h3 className="ui center aligned header">{deal.users}</h3>
                        </th>
                        <th className='tds'>
                            <h3 className="ui center aligned header">{`$${deal.monthly_recurring_revenue}`}</h3>
                        </th>
                        <th className='tds'>
                            <h3 className="ui center aligned header">{stage}</h3>
                        </th>
                        <th className='tds'>
                            <h3 className="ui center aligned header">{deal.close}</h3>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Deals;