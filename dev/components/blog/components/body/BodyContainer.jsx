import React from "react";
import Alert from "./Alert";
import Articles from "./Articles";
import articles from "../../data/articles"

const BodyContainer = () =>
    <div className="body-container">
        <Alert/>
        <Articles articles={articles}/>
    </div>;

export default BodyContainer;