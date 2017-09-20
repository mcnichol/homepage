import React from "react";
import NavBar from "./components/00_nav/NavBar";
import Header from "./components/01_head/Header";
import styles from "./styles/styles.scss";

class Blog extends React.Component {
    render() {
        return (
            <div>
                <NavBar/>
                <Header/>
            </div>
        );
    }

}

export default Blog;