import React from 'react';
import { useState, useEffect } from 'react';

function RepPage() {

    const dealsUrl = "http://localhost:3001/deals"
    const [dealReps, setDealReps] = useState([])

    const nick = 'https://cdn.discordapp.com/attachments/1180185809832382465/1181678528073318541/Sette_Nicholas.jpg?ex=6581eee3&is=656f79e3&hm=1570e12b68abfa9ee2ba2ec3749c8005d3c56e2d71a3177f8db7f629f90a4b00&'
    const sean = 'https://media.discordapp.net/attachments/1180185809832382465/1181679149740462080/pic_for_sales_forcasting.jpeg?ex=6581ef77&is=656f7a77&hm=d0c967dda48b6d43bac28e365572ba282535aa5a4b97ffa952b9447defff66c6&=&format=webp&width=1060&height=1060'
    const alex = 'https://media.discordapp.net/attachments/1180185809832382465/1181680935616401549/IMG_1235.jpg?ex=6581f121&is=656f7c21&hm=a4ca45b4814c2722dabb22ede013097324b0aac01cc836859dbbe4e7c4e4a9d5&=&format=webp&width=934&height=1060'


    useEffect(() => {
        fetch(dealsUrl)
            .then(res => res.json())
            .then(data => setDealReps(data))
    }, [])


    const totalMRRByRepArray = [];

    dealReps.forEach(deal => {
        const rep = deal.rep;
        const mrr = deal.monthly_recurring_revenue;

        const existingRepIndex = totalMRRByRepArray.findIndex(item => item.rep === rep);

        if (existingRepIndex !== -1) {
            totalMRRByRepArray[existingRepIndex].mrr += mrr;
        } else {
            totalMRRByRepArray.push({ rep, mrr });
        }
    });

    return (
        <div className="RepPage">
            <h2>Sales Reps</h2>
            <img src={nick} height={100} width={100} />
            <img src={sean} height={100} width={100} />
            <img src={alex} height={100} width={100} />
            {totalMRRByRepArray.map((repData) => (
                <h3 key={repData.rep}>{`${repData.rep}: $${repData.mrr}`}</h3>
            ))}


        </div>
    );
}

export default RepPage;