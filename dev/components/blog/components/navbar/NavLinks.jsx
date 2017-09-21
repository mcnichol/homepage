import React from "react";
import NavLink from "./NavLink";

const NavLinks = (props) =>
    <div className="nav-links">
        <NavLink title="home" url="#home"/>
        <NavLink title="articles" url="#articles"/>
        <NavLink title="about me" url="#about"/>
    </div>;

export default NavLinks;