import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="navbar">
            <NavLink to="">Home</NavLink>
            <NavLink to="fortune_teller">Tell my Fortune</NavLink>
            <NavLink to="my_fortunes">Saved Fortunes</NavLink>
            <NavLink to="custom_card">Add a Custom Card</NavLink>
        </div>
    );
}

export default NavBar;