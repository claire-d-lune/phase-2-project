import React from "react";
import TarotCard from "./TarotCard";

const FortuneCard = ({selection}) =>  {


    const handleFave = () => {
        const configurationObject = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(selection)
        }
        fetch("http://localhost:4000/fortunes", configurationObject)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    const cardList = selection.map((card) => {
        return (
            <TarotCard 
            key={card.name} 
            name={card.name} 
            suit={card.suit}
            type={card.type}
            description={card.desc}
            shortName={card.name_short}
            />
        )
    })


    return (
        <>
            <h3>Your Reading:</h3>
            <div class="grid grid-flow-row grid-cols-3">
                {cardList}
            </div>
            <button onClick={handleFave}>Save this Fortune</button>
        </>
    )

}

export default FortuneCard;