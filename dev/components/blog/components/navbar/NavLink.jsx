import React from "react"

const NavLink = (props) =>
    <span className="nav-link">
        <a href={props.url}>{props.title}</a>
    </span>;

export default NavLink;