import React from "react";

const TarotCard = ({name, image="../assets/Cups/cups2.jpg", arcana, description}) => {


    return (
        <div class="container mx-auto p-3">
            {/* <p>{arcana}</p> */}
            <img src={require("../assets/Major/hangedMan.jpg")} alt={"Picture of:" + name} class=""></img>
            <p class="xl ">{name}</p>
            {/* <p>{description}</p> */}
        </div>
    )
}

export default TarotCard;