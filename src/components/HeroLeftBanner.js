import React, { Component } from "react";
// import { Grid, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import ContactModal from "../components/ContactModal";

class HeroLeftBanner extends Component {
    render() {
        return (
            <div className="flex-container hero-left">
                <div className="hero-flex-left flex-item">
                    <div className="hero-text">
                        <h1>{this.props.title}</h1>
                        <h4>{this.props.description}</h4>
                    </div>
                </div>
                <div className="hero-flex-right flex-item" id={this.props.id}></div>
            </div>
        );
    }
}

HeroLeftBanner.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.any.isRequired
};

export default HeroLeftBanner;
