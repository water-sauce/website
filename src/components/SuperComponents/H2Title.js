import React, { Component } from "react";

const style = {
    display: "block",
    textAlign: "center",
    fontWeight: "300",
    fontSize: "32px",
    lineHeight: "40px"
};

class H2Title extends Component {
    render(props) {
        return (
            <h2 className={this.props.extraClass} style={style}>
                {this.props.title}
            </h2>
        );
    }
}

export default H2Title;
