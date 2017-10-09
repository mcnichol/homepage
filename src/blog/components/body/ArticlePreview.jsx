import React from "react";
import CustomReactLink from "../common/CustomReactLink/CustomReactLink";
import ArticleHead from "./ArticleHead";

const extractFirst140Words = function (content) {
    return content.join(" ").split(" ").slice(0, 140).join(" ");
};

const ArticlePreview = ({id, title, category, content, keywords, date}) =>
    <div className="article-preview">
        <ArticleHead id={id} title={title} date={date} category={category} keywords={keywords}/>


        <div className="content">
            <p>{extractFirst140Words(content) + "..."}</p>
            <CustomReactLink to={'/articles/' + id}>Continue Reading</CustomReactLink>
        </div>

        <div className="dividing-line"/>
    </div>
;

export default ArticlePreview;