import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PropTypes from "prop-types";

class AboutHeroBanner extends Component {
    render(props) {
        return (
            <div className={this.props.banner_class + " banner"} >
                <div className={"width-50 " + this.props.hero_class}>
                    <div className="content">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.description}</p>
                    </div>
                </div>
                <div className="width-50">
                    <div className="vertical-align-middle">
                        <img src={this.props.src} alt={this.props.alt} id={this.props.img_id} />
                    </div>
                </div>
            </div>
        );
    }
}

AboutHeroBanner.propTypes = {
    
};

export default AboutHeroBanner;


// <ContactModal
//     cta={this.props.cta}
//     class={this.props.cta_contact_us_class}
// />