import React from 'react';
import ReactDOM from 'react-dom';

import Blog from "./components/blog/Blog";

class App extends React.Component {
    render() {
        return (
            <Blog/>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));

