import React, { Component } from "react";

class CustomerQuote extends Component {
    render(props) {
        return (
            <p
                className={
                    "customer-quote " +
                    (this.props.white == true ? "color-white" : "")
                }
            >
                {this.props.quote}
            </p>
        );
    }
}

export default CustomerQuote;
