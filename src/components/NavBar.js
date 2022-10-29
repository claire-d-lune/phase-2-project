import React from "react";
import { NavLink } from "react-router-dom";


//class="grid grid-flow-row grid-cols-4"> 

const NavBar = () => {
    return(
        <div className="navbar">
            <div class="flex flex-row">
                <div class="basis-1/4">
                    <NavLink to="">Home</NavLink>
                </div>
                <div class="basis-1/4">
                    <NavLink to="fortune_teller">Tell my Fortune</NavLink>
                </div>
                <div class="basis-1/4">
                    <NavLink to="my_fortunes">Saved Fortunes</NavLink>
                </div>
                <div class="basis-1/4">
                    <NavLink to="custom_card">Add a Custom Card</NavLink>
                </div>
            </div>
        </div>
    );
}

export default NavBar;