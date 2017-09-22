import React from 'react';
import ReactDOM from 'react-dom';

import Blog from "./components/blog/Blog";
import styles from "./components/blog/styles/styles.scss";

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

