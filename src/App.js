import React, {Component} from 'react';
import './blog/styles/styles.scss';
import WebFont from 'webfontloader';
import {BrowserRouter as Router} from "react-router-dom";
import Blog from "./blog/Blog"

WebFont.load({
    google: {
        families: ['Droid Sans Mono', 'Droid Serif']
    }
});

class App extends Component {
  render() {
      return (
          <Router>
              <Blog/>
          </Router>
      );
  }
}

export default App;