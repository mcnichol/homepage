import React from "react";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import styles from "./styles/styles.scss";

const preventImportFromBeingDeletedByIntellij = styles;

class Blog extends React.Component {

    render() {
        return (
            <div>
                <NavBar/>
                <Header/>
                <Body/>
            </div>
        );
    }

}

export default Blog;