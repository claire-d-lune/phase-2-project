import React, { useState } from "react";
// import {cups2, cups3} from "../assets/Cups/Cups.js"
import { imageObject } from "../assets/Cups/Cups.js"

const TarotCard = ({name, type, shortName, description}) => {

    // console.log(imageObject[shortName])

    const [showDetails, setShowDetails] = useState(false)

    return (
        // <div class="container mx-auto px-3">
        //     <p class="text-lg text-blue-600/100 ">{name}</p>
        //     <img src={imageObject[shortName]} alt={"Picture of:" + name}></img>
        //     {/* <div style={`background-image:${imageObject[shortName]}`}></div> */}
        //     {/* <img src={require("../assets/Major/chariot.jpg")} alt={"Picture of:" + name}></img> */}
        //     <p>Arcana: {type}</p>
        //     {/* <p>{description}</p> */}
        // </div>

        <div class="max-w-sm rounded overflow-hidden shadow-md p-3">
            <div class="font-bold text-xl mt-2">{name}</div>
            <img class="w-full" src={imageObject[shortName]} alt="Sunset in the mountains"></img>
            <p class="text-gray-700 text-base">{`Arcana: ${type}`}</p>
            {/* <div class="px-6 py-4">
                <p class="text-gray-700 text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div> */}
         </div>


    )

}

export default TarotCard;