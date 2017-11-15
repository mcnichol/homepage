import React from "react";
import CustomReactLink from "../common/CustomReactLink/CustomReactLink";

const Footer = (props) =>
    <div className="footer">
        <ul className="contact-bar">
            <li>Contact</li>
            <li><CustomReactLink to="https://github.com/mcnichol"><span className="fa fa-github"/></CustomReactLink></li>
            <li><CustomReactLink to="https://twitter.com/codingtogether"><span className="fa fa-twitter"/></CustomReactLink></li>
            <li><CustomReactLink to="https://www.linkedin.com/in/mcnicholm/"><span className="fa fa-linkedin"/></CustomReactLink></li>
            {/*<li><CustomReactLink to="https://www.linkedin.com/in/mcnicholm/"><span className="fa fa-reddit"/></CustomReactLink></li>*/}
            {/*<li><CustomReactLink to="https://www.linkedin.com/in/mcnicholm/"><span className="fa fa-google-plus"/></CustomReactLink></li>*/}
            {/*<li><CustomReactLink to="https://www.linkedin.com/in/mcnicholm/"><span className="fa fa-facebook"/></CustomReactLink></li>*/}
            <li><CustomReactLink to="mailto:mcnichol.m@gmail.com"><span className="fa fa-envelope"/></CustomReactLink></li>
        </ul>
    </div>;

export default Footer;