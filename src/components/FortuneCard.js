import React from "react";
import TarotCard from "./TarotCard";

const FortuneCard = ({selection}) =>  {

    const cardList = selection.map((card) => {
        return (
            <TarotCard 
            key={card.name} 
            name={card.name} 
            arcana={card.suit}
            description={card.desc}
            />
        )
    })


    return (
        <>
            <h3>Your Reading:</h3>
            <div class="grid grid-flow-row grid-cols-3">
                {cardList}
            </div>
        </>
    )

}

export default FortuneCard;