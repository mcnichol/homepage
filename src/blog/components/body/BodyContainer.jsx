import React from "react";
import articles from "../../data/articles"
import {Route, Switch} from "react-router-dom";
import AboutMe from "./AboutMe";
import Article from "./Article";
import Articles from "./Articles";
import FrontPage from "./FrontPage";


const BodyContainer = () =>
    <div className="body-container">
        <Switch>
            <Route exact={true} path="/" render={() => <FrontPage articles={articles}/>}/>
            <Route exact={true} path="/articles" component={Articles}/>
            <Route path="/about-me" component={AboutMe}/>
            <Route path="/articles/:id" component={Article}/>
        </Switch>
    </div>;

export default BodyContainer;