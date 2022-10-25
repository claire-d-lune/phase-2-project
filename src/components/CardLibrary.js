import React, {useState} from "react";
import SearchBar from "../components/SearchBar";
import TarotCard from "../components/TarotCard";

const CardLibrary = ({deck, searchTerm, setSearch}) => {
    const [arcanaFilter, setArcana] = useState("All")
    
    
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
        <>
            <SearchBar searchTerm={searchTerm} setSearch={setSearch}/>
            <div className="primary-content">
                
                <div class="grid grid-flow-row grid-cols-4">        
                {cardList}
                </div>
            </div>
        </>
    )
}


export default CardLibrary;