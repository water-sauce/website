import React, { Component } from "react";
// import { Grid, Row, Col } from "react-bootstrap";

class SubHeroServicesBanner extends Component {
    render(props) {
        return (
            <div className="sub-hero-services-banner">
            	<img src={this.props.icon} alt={this.props.alt}/>
                <p>{this.props.paragraph}</p>
            </div>
        );
    }
}

export default SubHeroServicesBanner;
