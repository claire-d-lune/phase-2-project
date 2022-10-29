import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import TarotCard from "../components/TarotCard";



const CardLibrary = ({deck, searchTerm, setSearch, newCards}) => {
    
    const cardList = deck.map((card) => {
        return (
            <TarotCard 
            key={card.name} 
            name={card.name} 
            suit={card.suit}
            type={card.type}
            meaningUp={card.meaning_up}
            meaningRev={card.meaning_rev}
            description={card.desc}
            shortName={card.name_short}
            />
        )
    })

    const newCardList = newCards.map((card) => {
        return (
            <TarotCard 
            key={card.name} 
            name={card.name} 
            suit={card.suit}
            type={card.type}
            meaningUp={card.meaning_up}
            meaningRev={card.meaning_rev}
            description={card.desc}
            shortName={card.name_short}
            />
        )
    })

    return (
        <>
            <SearchBar searchTerm={searchTerm} setSearch={setSearch}/>
            <div className="primary-content">
                <div class="grid grid-flow-row grid-cols-4 gap-x-4 gap-y-4 bg-indigo-50">        
                {cardList}
                {newCardList}
                </div>
            </div>
        </>
    )
}
export default CardLibrary;