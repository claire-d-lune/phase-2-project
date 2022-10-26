import React from "react";

const TarotDetails = ({name, type, image, arcana, description}) => {


    //I want to try changing the image on this one to a div, so I can work out the layout of information. 
    //hopefully I can use tailwind to add the background. 
    return (
        <div class="container mx-auto p-3">
            <p class="text-lg">{name}</p>
            
            <img src={require("../assets/tarot-back.jpg")} alt={"Picture of:" + name}></img>
            <p>Arcana: {type}</p>
            {/* <p>{description}</p> */}
        </div>
    )
    }