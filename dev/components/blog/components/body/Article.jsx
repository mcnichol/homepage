import React from "react";

const Article = ({title, category, content, keywords}) =>
    <div className="article">
        <h1 className="title">{title}</h1>
        <p>{category}</p>
        <div>
            {content.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
        </div>

    </div>;

export default Article;