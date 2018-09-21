import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
// import arrow from "../images/icons/down-arrow.png";

class HeroBanner extends Component {
    render() {
        return (
            <div className={`hero ${this.props.class}`}>
                <Grid>
                    <Row>
                        <Col xs={12} sm={8}>
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </Col>
                        <Col xs={12} sm={4}>
                            <img src={this.props.src} alt={this.props.alt}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

HeroBanner.propTypes = {
    class: PropTypes.string,
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired
};

HeroBanner.defaultProps = {
    class: ""
};

export default HeroBanner;
