import React from "react";
import ContainerPad from "./ContainerPad";
import BodyContainer from "./BodyContainer";

const Body = (props) =>
    <div className="body">
        <ContainerPad/>
        <BodyContainer/>
        <ContainerPad/>
    </div>;

export default Body;