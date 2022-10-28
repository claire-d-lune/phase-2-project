import React, { useState } from "react";
// import {cups2, cups3} from "../assets/Cups/Cups.js"
import { imageObject } from "../assets/Cups/Cups.js"

const TarotCard = ({name, type, shortName, zIndex = 100, description, meaningUp, meaningRev}) => {

    // console.log(imageObject[shortName])
    const [isOpen, setIsOpen] = useState(false);
    // const [showDetails, setShowDetails] = useState(false)

    const toggleIsOpen = () => {
        console.log("toggling")
		setIsOpen(!isOpen);
	};


    return (
        <div class="max-w-sm rounded overflow-hidden shadow-md p-3" onClick={toggleIsOpen}>
            <div class="font-bold text-xl mt-2">{name}</div>
            <img class="w-full" src={imageObject[shortName]} alt={name}></img>
            <p class="text-gray-700 text-base">{`Arcana: ${type}`}</p>
            {isOpen ?
                <div class="w-screen h-screen fixed left-0 top-0 z-20" onClick={toggleIsOpen}>
                    <div
                        style={{
                        border: "solid",
                        border_color: "black",
                        border_radius: "40px",
                        position: 'fixed',
                        top: '10vw',
                        left: '20vw',
                        height: '35vw',
                        width: '60vw',
                        backgroundColor: 'rgba(252, 245, 229,1)',
                        cursor: 'pointer',
                        zIndex
                    }}>
                        <img 
                            class="border-solid border-black rounded-sm"
                            src={imageObject[shortName]}
                            alt={name}
                            style={{
                                height: 'auto',
                                width: '30%',
                                top: '5em',
                                left:"18em"
                            }}
                        />

                        <div class="font-bold text-xl text-black underline mt-2 overflow-y-scroll"
                        style={{
                        position: 'fixed',
                        top: '11vw',
                        left: '27vw',
                        height: '30vw',
                        width: '60vw' }}>{name}</div>

                        <div 
                        class="overflow-scroll"
                        style={{
                        position: 'fixed',
                        top: '14vw',
                        left: '40vw',
                        height: '30vw',
                        width: '35vw' }}>
                                {/* <h2 class="font-bold text-xl text-black underline mt-2" >{name}</h2> */}
                                <p class="font-bold text-l text-black underline ">Description:</p>
                                <p>{description}</p>
                                <br></br>
                                <p class="font-bold text-l text-black underline ">Meaning, Facing Up:</p>
                                <p>{meaningUp}</p>
                                <br></br>
                                <p class="font-bold text-l text-black underline ">Meaning, Inverted:</p>
                                <p>{meaningRev}</p>
                        </div>
                    </div> 
				</div>
				: null}
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
