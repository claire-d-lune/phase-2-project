import React, {useState} from "react";
import FortuneCard from "./FortuneCard"


const FortuneTeller = ({deck}) => {
    
    const [fortuneList, setFortuneList] = useState([])
    //Shuffle the Deck
    const shuffleDeck = deck.sort((a, b) => 0.5 - Math.random());
    
    //Slice three from shuffled deck, update list of fortunes. 
    const handleClick = () => {
        const newFortune = shuffleDeck.slice(0,3)
        setFortuneList([...fortuneList, newFortune])
    }

    console.log(fortuneList)


    const fortuneCards = fortuneList.map((selection) => {
        return <FortuneCard selection={selection} />
    })



    return (
    <div className="primary-content">
        <h1>Zoltana</h1>
        <button onClick={handleClick} >Read My Cards: </button>
        {fortuneCards}
    </div>
    )
}

export default FortuneTeller;