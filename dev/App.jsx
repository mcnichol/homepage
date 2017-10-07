import React from 'react';
import styles from "./components/blog/styles/styles.scss";
import WebFont from 'webfontloader';
import {BrowserRouter as Router} from "react-router-dom";
import Blog from "./components/blog/Blog";
import * as ReactDOM from "react-dom";

WebFont.load({
    google: {
        families: ['Droid Sans Mono', 'Droid Serif']
    }
});

const preventImportFromBeingDeletedByIntellij = styles;

class App extends React.Component {

    render() {

        return (
            <Router>
                <Blog/>
            </Router>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

