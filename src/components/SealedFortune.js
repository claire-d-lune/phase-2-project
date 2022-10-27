import React, {useState} from "react";
import TarotCard from "./TarotCard";

const SealedFortune = ({reading}) =>  {

    
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

    const handleChangeInterpretation = (e) => {
        setInterpretation(e.target.value)
    }

    return (
        <div class="container mx-auto">
            <h3>Your Reading:</h3>
            <div class="grid grid-flow-row grid-cols-3">
                {cardList}
            </div>
            <br></br>
            <form action="/action_page.php">
                <label>Your Fate is Written:</label>
                    <br></br>
{                   <textarea onChange={handleChangeInterpretation} rows="3" cols="150" value={myInterpretation}></textarea>
}                <input type="submit" value="Submit"/>
            </form>
            <button onClick={handleFave}>Delete</button>
        </div>
    )

}

export default SealedFortune;