import React from "react";
import Alert from "./Alert";
import Article from "./Article";

const BodyContainer = (props) =>
    <div className="body-container">
        <Alert/>
        <Article/>
    </div>;

export default BodyContainer;