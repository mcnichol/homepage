import React from "react";
import ArticlePreview from "./ArticlePreview"

const Articles = ({articles}) =>
    <div className="articles">
        {articles.map((article, i) => <ArticlePreview key={i} {...article} />)}
    </div>;

export default Articles;