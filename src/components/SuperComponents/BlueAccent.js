import React, { Component } from "react";

class BlueAccent extends Component {
    render(props) {
        return <div className={`blue-accent ${this.props.class}`} />;
    }
}

export default BlueAccent;
