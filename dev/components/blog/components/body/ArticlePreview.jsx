import React from "react";

const extractFirst140Words = function (content) {
    return content.join(" ").split(" ").slice(0, 140).join(" ");
};

const getShareCount = function () {
    return -1;
};

const ArticlePreview = ({title, category, content, keywords, date}) =>
    <div className="article-preview">
        <h1 className="title">{title}</h1>

        <div className="detail-info">
            <p className="category">{category}</p>
            <p className="date">{date}</p>
            <div className="social-media-share">
                <div className="media-container">
                    <span className="fa fa-twitter"/>
                    <span className={"media-count"}>{getShareCount()}</span>
                </div>
                <div className="media-container">
                    <span className="fa fa-linkedin"/>
                    <span className="count">{getShareCount()}</span>
                </div>
                <div className="media-container">
                    <span className="fa fa-reddit"/>
                    <span className="count">{getShareCount()}</span>
                </div>
                <div className="media-container">
                    <span className="fa fa-google-plus"/>
                    <span className="count">{getShareCount()}</span>
                </div>
                <div className="media-container">
                    <span className="fa fa-facebook"/>
                    <span className="count">{getShareCount()}</span>
                </div>
                <div className="media-container">
                    <span className="fa fa-y-combinator"/>
                    <span className="count">{getShareCount()}</span>
                </div>
                <div className="media-container">
                    <span className="fa fa-envelope"/>
                    <span className="count">{getShareCount()}</span>
                </div>
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
    </div>
;

export default ArticlePreview;