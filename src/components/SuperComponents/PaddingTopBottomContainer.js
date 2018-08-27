import React, { Component } from "react";

const style = {
    paddingTop: "32px",
    paddingBottom: "32px"
};

class PaddingTopBottomContainer extends Component {
    render(props) {
        console.log(props);
        return <div style={style}>{this.props.children}</div>;
    }
}

export default PaddingTopBottomContainer;
