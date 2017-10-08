import React from "react";
import data from "../../data/articles"
import ArticleHead from "./ArticleHead";

export default class Article extends React.Component {
    matchingArticleId = (a) => a.id === parseInt(this.props.match.params.id, 10);
    mapContent = (paragraphs) => paragraphs.map((paragraph, i) => <div key={i}>{paragraph}</div>);

    render() {
        const {id, title, category, date, content, keywords} = data.find(this.matchingArticleId);

        return (
            <div className="article">
                <ArticleHead id={id} title={title} date={date} category={category} keywords={keywords}/>
                <div className="content">
                    {this.mapContent(content)}
                </div>
            </div>
        );
    }
}
