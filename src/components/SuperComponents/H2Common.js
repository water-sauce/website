import React, { Component } from "react";

class H2Common extends Component {
    render(props) {
        return (
            <h2 className={`h2-common ` + this.props.extraClass}>
                {this.props.title}
            </h2>
        );
    }
}

export default H2Common;
