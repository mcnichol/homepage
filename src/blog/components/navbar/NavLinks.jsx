import React from "react";
import {NavLink} from "react-router-dom";

const NavLinks = (props) =>
    <div className="nav-links">
        <NavLink exact className="nav-link" to="/">Home</NavLink>
        <NavLink exact className="nav-link" to="/articles">Articles</NavLink>
        <NavLink className="nav-link" to="/about-me">About Me</NavLink>
    </div>;

export default NavLinks;