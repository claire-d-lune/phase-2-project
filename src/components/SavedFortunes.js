import React from "react";
import FortuneCard from "./FortuneCard";
import SavedReading from "./SavedReading";


const SavedFortunes = ({savedFortunes}) => {
    
    const fortuneCards = savedFortunes.map((selection) => {
        return <SavedReading key={Math.random() * 100} reading={selection} />
    })

    return(
    <div className="primary-content">
        <div class="h-screen bg-indigo-50">
            <h3>My Fortunes</h3>
            {fortuneCards}
        </div>
    </div>

    ) 
}

export default SavedFortunes;