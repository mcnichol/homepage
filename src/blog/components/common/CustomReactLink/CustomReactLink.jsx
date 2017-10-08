import React from "react";
import {Link} from "react-router-dom";

export default class ProperLink extends React.Component {

    static parseTo(to) {
        let parser = document.createElement('a');
        parser.href = to;
        return parser;
    }

    static isInternal(toLocation) {
        console.log(toLocation);
        return window.location.host === toLocation.host;
    }

    render() {
        const {to, children, ...rest} = this.props;
        const toLocation = ProperLink.parseTo(to);
        const isInternal = ProperLink.isInternal(toLocation);
        if (isInternal) {
            return (<Link to={toLocation.pathname} {...rest}>{children}</Link>);
        } else {
            return (<a href={to} target="_blank" {...rest}>{children}</a>);
        }
    }
}