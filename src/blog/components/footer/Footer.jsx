import React from "react";
import {Link} from "react-router-dom";

function getCurrentYear() {
    return new Date().getFullYear()
}

const Footer = (props) =>
    <div className="footer">
        <div><span className="call-out">mcnichol.rocks</span> and all content copyright © 1984-{getCurrentYear()},
            Michael McNichol
        </div>
        <ul className="contact-bar">
            <li>Contact</li>
            <li><a href="https://github.com/mcnichol"><span className="fa fa-github"/></a></li>
            <li><a href="https://twitter.com/codingtogether"><span className="fa fa-twitter"/></a></li>
            <li className="fa fa-linkedin"/>
            <li className="fa fa-reddit"/>
            <li className="fa fa-google-plus"/>
            <li className="fa fa-facebook"/>
            <li className="fa fa-envelope"/>
        </ul>
    </div>;

export default Footer;