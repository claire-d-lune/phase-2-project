import React, {useState} from "react";

const NewCardPage = () => {

    const [newCardInfo, setNewCard] = useState({
        type: "",
        name_short: "ar00",
        name: "",
        meaning_up: "",
        meaning_rev: "",
        suit:"",
        desc: ""
    })

    console.log(newCardInfo)

    const handleInfoChange = (e) => {
       let deltaCard = {...newCardInfo}
       deltaCard[e.target.id] = e.target.value
       setNewCard(deltaCard)
    }


    const handleOnSelect = (e) => {
        let deltaCard = {...newCardInfo}
        if (e.target.value.toLowerCase() === "major"){
            deltaCard.type = "major"
            setNewCard(deltaCard)
            return
        }
        deltaCard.type = "minor"
        deltaCard.suit = e.target.value.toLowerCase()
        setNewCard(deltaCard)
    }

    const handleSubmitCard = () => {
        
    }

    return  (
        <div className="primary-content">
            <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
                <form>
                    <div class="mb-5">
                        <label id="name" class="mb-3 block text-base font-medium text-[#07074D]">
                        Name Your Card:
                        </label>
                        <input 
                        onChange={handleInfoChange}
                        type="text"
                        name="name"
                        id="name"
                        value={newCardInfo.name}
                        placeholder="Card Name"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div>
                        <label class="mb-3 block text-base font-medium text-[#07074D]">Select Arcana and Suit: </label>
                        <select onChange={handleOnSelect} id="type" defaultValue="DEFAULT" class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                            <option value="DEFAULT" disabled hidden>Select arcana and suit</option>
                            <optgroup label="Major">
                                <option id="major">Major</option>
                            </optgroup>
                                <optgroup label="Minor Arcana">
                                <option id="cups">Cups</option>
                                <option id="pentacles">Pentacles</option>
                                <option id="swords">Swords</option>
                                <option id="Wands">Wands</option>
                            </optgroup>
                        </select>   
                    </div>
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Meaning-Upright
                        </label>
                        <input
                        onChange={handleInfoChange}
                        value={newCardInfo.meaning_up}
                        type="email"
                        name="email"
                        id="meaning_up"
                        placeholder="Enter a meaning when pulled upright"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Meaning-Reverse: 
                        </label>
                        <input
                        onChange={handleInfoChange}
                        value={newCardInfo.meaning_rev}
                        type="text"
                        name="subject"
                        id="meaning_rev"
                        placeholder="Enter meaning for card reverse"
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                        class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                        Give your Card a Description: 
                        </label>
                        <textarea
                        rows="4"
                        name="message"
                        id="message"
                        placeholder="Provide a description of your card"
                        class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div>
                        <button
                        class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
                        >
                        Submit
                        </button>
                    </div>
                </form>
            </div>
            </div>
        </div>)
}

export default NewCardPage;