import React from "react";
import Article from "./Article"

const Articles = ({articles}) =>
    <div className="articles">
        {articles.map((article, i) => <Article key={i} {...article} />)}
    </div>;

export default Articles;