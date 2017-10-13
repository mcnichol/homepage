import React from "react";
import CustomReactLink from "../common/CustomReactLink/CustomReactLink";

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
                    <CustomReactLink to="#">
                        <span className="fa fa-twitter"/>
                        <span className={"media-count"}>{getShareCount()}</span>
                    </CustomReactLink>
                </div>
                <div className="media-container">
                    <CustomReactLink to="#">
                        <span className="fa fa-linkedin"/>
                        <span className="count">{getShareCount()}</span>
                    </CustomReactLink>
                </div>
                <div className="media-container">
                    <CustomReactLink to="#">
                        <span className="fa fa-reddit"/>
                        <span className="count">{getShareCount()}</span>
                    </CustomReactLink>
                </div>
                <div className="media-container">
                    <CustomReactLink to="#">
                        <span className="fa fa-google-plus"/>
                        <span className="count">{getShareCount()}</span>
                    </CustomReactLink>
                </div>
                <div className="media-container">
                    <CustomReactLink to="#">
                        <span className="fa fa-facebook"/>
                        <span className="count">{getShareCount()}</span>
                    </CustomReactLink>
                </div>
                <div className="media-container">
                    <CustomReactLink to="#">
                        <span className="fa fa-y-combinator"/>
                        <span className="count">{getShareCount()}</span>
                    </CustomReactLink>
                </div>
                <div className="media-container">
                    <CustomReactLink to="mailto:mcnichol.m@#gmail.com">
                        <span className="fa fa-envelope"/>
                        <span className="count">{getShareCount()}</span>
                    </CustomReactLink>
                </div>
            </div>
        </div>
        <div className="keywords">
            <span className="fa fa-tags"/>
            {keywords.map((word, i) => <span key={i}>{word + " "}</span>)}
        </div>
    </div>;

export default ArticleHead;
