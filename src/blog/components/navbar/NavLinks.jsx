import React from "react";
import CustomReactLink from "../common/CustomReactLink/CustomReactLink";

const NavLinks = (props) =>
    <div className="nav-links">
        <CustomReactLink exact className="nav-link" to="/">Home</CustomReactLink>
        <CustomReactLink exact className="nav-link" to="/articles">Articles</CustomReactLink>
        <CustomReactLink className="nav-link" to="/about-me">About Me</CustomReactLink>
    </div>;

export default NavLinks;