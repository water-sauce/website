import React, { Component } from "react";

class CustomerImage extends Component {
    render(props) {
        return (
            <img
                className={`img-responsive ` + this.props.extraImgClass}
                id={this.props.id}
                src={this.props.src}
                alt={this.props.alt}
            />
        );
    }
}

export default CustomerImage;
