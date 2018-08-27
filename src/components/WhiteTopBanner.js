import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PropTypes from "prop-types";

class WhiteTopBanner extends Component {
    render() {
        return (
            <Grid>
                <div className="m-t-5" />
                <Row className="text-align-center m-b-2">
                    <h1 className="m-t-2 banner-h1">{this.props.title}</h1>
                    <h4 className="p-style">{this.props.description}</h4>
                    {this.props.children}
                </Row>
            </Grid>
        );
    }
}

WhiteTopBanner.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.any.isRequired
};

export default WhiteTopBanner;
