import React from "react";
import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";

class Blog extends React.Component {

    render() {
        return (
            <div className="blog">
                <NavBar/>
                <Header/>
                <Body/>
                <Footer/>
            </div>
        );
    }

}

export default Blog;