import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar">
            <div class="flex-basis-auto">
                <NavLink class="p-6"to="">Home</NavLink>
            </div>
            <div class="flex-basis-auto">
                <NavLink class="p-6" to="fortune_teller">Tell my Fortune</NavLink>
            </div>
            <div class="flex-basis-auto">
                <NavLink class="p-6" to="my_fortunes">Saved Fortunes</NavLink>
            </div>
            <div class="flex-basis-auto">
                <NavLink class="p-6" to="custom_card">Add a Custom Card</NavLink>
            </div>
        </div>
    );
}

export default NavBar;