import React, { Component } from "react";
// import { Grid, Row, Col } from "react-bootstrap";

class SubHeroServicesBanner extends Component {
    render(props) {
        return (
            <section className="sub-hero-services-banner">
            	<img src={this.props.icon} alt={this.props.alt}/>
                { this.props.title ? ( <h2>{this.props.title}</h2> ) : "" }
                <p>{this.props.paragraph}</p>
                { this.props.cta_button == true ? ( <a className="button button-blue">Contact Us</a> ) : "" }
            </section>
        );
    }
}

export default SubHeroServicesBanner;
