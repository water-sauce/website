import React, { Component } from "react";

class PopSection extends Component {
    render(props) {
        return (
            <section className="pop-section">
                <div className="">
                    <h1>{this.props.message}</h1>
                </div>
            </section>
        );
    }
}

export default PopSection;
