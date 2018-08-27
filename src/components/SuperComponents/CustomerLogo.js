import React, { Component } from "react";

class CustomerLogo extends Component {
    render(props) {
        return (
            <img
                className={this.props.extraClass + " img-responsive quote-logo"}
                src={this.props.src}
                alt={this.props.alt}
            />
        );
    }
}

export default CustomerLogo;
