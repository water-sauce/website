import React, { Component } from "react";

class CustomerQuoteMark extends Component {
    render(props) {
        return (
            <img
                className="img-responsive quotemark"
                src={this.props.src}
                alt={this.props.alt}
            />
        );
    }
}

export default CustomerQuoteMark;
