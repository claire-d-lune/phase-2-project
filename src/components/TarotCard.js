import React from "react";

const TarotCard = ({name, arcana, description}) => {


    return (
        <div>
            <p>{arcana}</p>
            <img src="../assets/tarot-back.jpeg"/>
            <h2>{name}</h2>
            <p>{description}</p>
        </div>
    )
}

export default TarotCard;