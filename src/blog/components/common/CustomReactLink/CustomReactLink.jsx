import React from "react";
import {Link} from "react-router-dom";

export default class CustomReactLink extends React.Component {

    parseTo(to) {
        let parser = document.createElement('a');
        parser.href = to === undefined ? "#" : to;
        return parser;
    }

    isInternal(toLocation) {
        return window.location.host === toLocation.host;
    }

    render() {
        const {to, children, ...rest} = this.props;
        const toLocation = this.parseTo(to);
        const isInternal = this.isInternal(toLocation);
        if (isInternal) {
            return (<Link to={toLocation.pathname} {...rest}>{children}</Link>);
        } else {
            return (<a href={to} target="_blank" {...rest}>{children}</a>);
        }
    }
}