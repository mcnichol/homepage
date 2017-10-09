import React from "react";

const getShareCount = function () {
    return -1;
};

const ArticleHead = ({id, title, category, keywords, date}) =>
    <div className="article-metadata">
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
    </div>;

export default ArticleHead;
