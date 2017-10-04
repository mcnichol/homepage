import React from "react";

const extractFirst140Words = function (content) {
    return content.join(" ").split(" ").slice(0, 140).join(" ");
};

const getCount = function () {
    return 0;
};

const ArticlePreview = ({title, category, content, keywords, date}) =>
    <div className="article-preview">
        <h1 className="title">{title}</h1>

        <div className="detail-info">
            <p className="category">{category}</p>
            <p className="date">{date}</p>
            <div className="social-media-share">
                <div className="fa fa-twitter">{getCount()}</div>
                <div className="fa fa-linkedin">{getCount()}</div>
                <div className="fa fa-reddit">{getCount()}</div>
                <div className="fa fa-google-plus">{getCount()}</div>
                <div className="fa fa-facebook">{getCount()}</div>
                <div className="fa fa-y-combinator">{getCount()}</div>
                <div className="fa fa-envelope">{getCount()}</div>
            </div>
        </div>

        <div className="keywords">
            {keywords.map((word, i) => <span key={i}>{word + " "}</span>)}
        </div>

        <div className="content">
            <p>{extractFirst140Words(content) + "..."}</p>
            <a href="#">Continue Reading</a>
        </div>

        <div className="dividing-line"/>
    </div>;

export default ArticlePreview;