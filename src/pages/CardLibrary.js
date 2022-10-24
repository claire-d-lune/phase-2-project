import React from "react";
import SearchBar from "../components/SearchBar";
import TarotCard from "../components/TarotCard";

const CardLibrary = ({deck, searchTerm, setSearch}) => {

    console.log("Deck is: ")
    console.log(deck)

    const cardList = deck.map((card) => {
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
        <div>
            <h1>Card Library:</h1>
            <SearchBar searchTerm={searchTerm} setSearch={setSearch}/>
            {cardList}
        </div>
    )
}


export default CardLibrary;