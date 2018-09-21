import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PropTypes from "prop-types";

class LongHeroBanner extends Component {
    render(props) {
        return (
            <div className={this.props.banner_class + " banner-service"} >
                <div className="width-50">
                    <h4>{this.props.title}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

LongHeroBanner.propTypes = {
    
};

export default LongHeroBanner;


// <ContactModal
//     cta={this.props.cta}
//     class={this.props.cta_contact_us_class}
// />