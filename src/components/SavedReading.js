import React, {useState} from "react";
import TarotCard from "./TarotCard";

const SavedReading = ({reading}) =>  {

    console.log(reading)

    const myCards = [reading[0], reading[1], reading[2]]
    const interpretation = reading.interpretation

    console.log(interpretation)
    
    const cardList = myCards.map((card) => {
        return (
            <TarotCard 
            key={card.name} 
            name={card.name} 
            suit={card.suit}
            type={card.type}
            description={card.desc}
            shortName={card.name_short}
            meaningUp={card.meaning_up}
            meaningRev={card.meaning_rev}
            />
        )
    })

    return (
        <div class="container mx-auto bg-inherit">
            <h3>Your Reading:</h3>
            <div class="grid grid-flow-row grid-cols-3">
                {cardList}
            </div>
            <br></br>
            <form action="/action_page.php">
                <label>Your Fate is Written:</label>
                    <br></br>
                   <p class="text-center">{interpretation}</p>
            </form>
            <button>Delete</button>
        </div>
    )

}

export default SavedReading;