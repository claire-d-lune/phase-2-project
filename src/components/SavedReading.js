import React, {useState} from "react";
import TarotCard from "./TarotCard";

const SavedReading = ({reading, savedFortunes, setSavedFortunes}) =>  {

    console.log(reading.id)
    const myCards = [reading[0], reading[1], reading[2]]
    const interpretation = reading.interpretation

    
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

    const handleDelete = () => {

        const deltaFortunes = [...savedFortunes].filter(fortune => {
            return fortune.id !== reading.id
        })
        fetch(`http://localhost:4000/fortunes/${reading.id}`, {method: "DELETE"})
        console.log(deltaFortunes)
        setSavedFortunes(deltaFortunes)
    }

    return (
        <div class="container mx-auto bg-inherit">
            <h3>Your Reading:</h3>
            <div class="grid grid-flow-row grid-cols-3 place-items-center">
                {cardList}
            </div>
            <br></br>
            <form action="/action_page.php">
                <label>Your Fate is Written:</label>
                    <br></br>
                   <p class="text-center">{interpretation}</p>
            </form>
            <br></br>
            <button onClick={handleDelete} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Delete</button>
        </div>
    )

}

export default SavedReading;