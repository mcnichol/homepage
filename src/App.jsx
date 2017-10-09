import React, {Component} from 'react';
import './blog/styles/styles.scss';
import WebFont from 'webfontloader';
import Blog from "./blog/Blog"
import {BrowserRouter} from "react-router-dom";

WebFont.load({
    google: {
        families: ['Droid Sans Mono', 'Droid Serif']
    }
});

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Blog/>
            </BrowserRouter>
        );
    }
}

export default App;