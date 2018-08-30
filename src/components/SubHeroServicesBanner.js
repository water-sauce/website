import React, { Component } from "react";
// import { Grid, Row, Col } from "react-bootstrap";

class SubHeroServicesBanner extends Component {
    render(props) {
        return (
            <div className="sub-hero-services-banner">
                <p>{this.props.paragraph}</p>
            </div>
        );
    }
}

export default SubHeroServicesBanner;
