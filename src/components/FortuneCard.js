import React, {useState} from "react";
import TarotCard from "./TarotCard";

const FortuneCard = ({selection, savedFortunes, setSavedFortunes}) =>  {
    const [interpretation, setInterpretation] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
   
    const handleFave = () => {
        //I am adding the interpretation to the selection to store in my Json. 
        const myPost = {...selection, interpretation}
        const configurationObject = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(myPost)
        }
        fetch("http://localhost:4000/fortunes", configurationObject)
        .then(res => res.json())
        .then(data => console.log(data))
        setSavedFortunes([myPost, ...savedFortunes])
        alert("Your fate is sealed!!!!! (don't worry, there's a delete button)")
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
            meaningUp={card.meaning_up}
            meaningRev={card.meaning_rev}
            />
        )
    })

    const handleChangeInterpretation = (e) => {
        setInterpretation(e.target.value)
    }

    return (
        <div class="container mx-auto bg-inherit">
            <h3>Your Reading:</h3>
            <div class="grid grid-flow-row grid-cols-3 place-items-center">
                {cardList}
            </div>
            <br></br>
            <label>Your Fate is Written(but feel free to change it:) </label>
            <br></br>
            <textarea onChange={handleChangeInterpretation} rows="5" cols="120" value={interpretation}></textarea>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFave}>Save this Fortune</button>
        </div>
    )

}

export default FortuneCard;