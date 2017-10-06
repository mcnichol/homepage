import React from "react";
import ContainerPad from "./ContainerPad";
import BodyContainer from "./BodyContainer";
import {BrowserRouter, Route} from "react-router-dom";
import Article from "./Article";

const Body = (props) =>
    <div className="body">
        <ContainerPad/>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={BodyContainer}/>
                <Route path="/article/:id" component={Article}/>
            </div>
        </BrowserRouter>
        <ContainerPad/>
    </div>;

export default Body;