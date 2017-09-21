import React from "react";
import Logo from "./Logo"
import NavLinks from "./NavLinks"

const NavBar = (props) =>
    <div className="nav-bar">
        <Logo/>
        <NavLinks/>
    </div>;

export default NavBar;