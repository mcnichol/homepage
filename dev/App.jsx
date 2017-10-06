import React from 'react';
import ReactDOM from 'react-dom';

import Blog from "./components/blog/Blog";
import styles from "./components/blog/styles/styles.scss";
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Droid Sans Mono', 'Droid Serif']
    }
});

const preventImportFromBeingDeletedByIntellij = styles;

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Blog/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

