import React, {useState} from "react";
import TarotCard from "./TarotCard";

const FortuneCard = ({selection}) =>  {
    const [myInterpretation, setInterpretation] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
    const handleFave = () => {
        //I am adding the interpretation to the selection to store in my Json. 
        const myPost = {...selection, myInterpretation}
        const configurationObject = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(myPost)
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
            <button onClick={handleFave}>Save this Fortune</button>
        </div>
    )

}

export default FortuneCard;