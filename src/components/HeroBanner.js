import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PropTypes from "prop-types";
// import arrow from "../images/icons/down-arrow.png";

class HeroBanner extends Component {
    render() {
        return (
            <div className={`hero ${this.props.class}`} id="heroBanner">
                <div
                    className={`vertical-align-middle ${this.props.vert_class}`}
                >
                    <Grid>
                        <Row>
                            {this.props.children}
                            <h1>{this.props.title}</h1>
                            <h4>{this.props.description}</h4>
                        </Row>
                    </Grid>
                </div>
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
