import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PropTypes from "prop-types";

class LightGreyBanner extends Component {
    render(props) {
        return (
            <div className="bg-light-grey under-banner-padding">
                <Grid>
                    <Row>{this.props.children}</Row>
                </Grid>
            </div>
        );
    }
}

export default LightGreyBanner;
