import React, { Component } from "react";

class CustomerQuotee extends Component {
    render(props) {
        return (
            <div className={this.props.extraClass}>
                <p className="customer-quotee">{this.props.quotee}</p>
                <p className="customer-title">{this.props.title}</p>
            </div>
        );
    }
}

export default CustomerQuotee;
