import React from "react";

const TarotCard = ({name, arcana, description}) => {


    return (
        <div class="container mx-auto p-3">
            {/* <p>{arcana}</p> */}
            <img src={require("../assets/tarot-back.jpeg")} alt={"Picture of:" + name} class=""></img>
            <p class="xl ">{name}</p>
            {/* <p>{description}</p> */}
        </div>
    )
}

export default TarotCard;