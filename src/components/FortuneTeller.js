import React, {useState} from "react";
import FortuneCard from "./FortuneCard"


const FortuneTeller = ({deck, savedFortunes, setSavedFortunes}) => {
    //State is used to store reading history
    const [fortuneList, setFortuneList] = useState([])

    //Shuffle the Deck -- I forgot to use spread before and kept shuffling my library.
    const shuffleDeck = [...deck].sort((a, b) => 0.5 - Math.random())

    //Slice three from shuffled deck, update list of fortunes. 
    const handleClick = () => {
        const newFortune = shuffleDeck.slice(0,3)
        setFortuneList([newFortune, ...fortuneList])
    }

    //Mapping fortune history on render
    const fortuneCards = fortuneList.map((selection) => {
        return <FortuneCard key={Math.random() * 100} selection={selection} savedFortunes={savedFortunes} setSavedFortunes={setSavedFortunes}/>
    })

    return (
    <div className="primary-content">
        <h1>Zoltana</h1>
        <button onClick={handleClick}>Read My Cards: </button>
        <div class="h-screen bg-indigo-50">
            {fortuneCards}
        </div>
    </div>
    )
}

export default FortuneTeller;