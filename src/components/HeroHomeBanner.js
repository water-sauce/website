import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PropTypes from "prop-types";

class HeroHomeBanner extends Component {
    render() {
        return (
            <div className={`hero ${this.props.class}`}>
                <div
                    className={`vertical-align-middle ${this.props.vert_class}`}
                >
                    <Grid>
                        <Row className="m-b-1">
                            <h1>{this.props.title}</h1>
                            <h4>{this.props.description}</h4>
                            {this.props.children}
                        </Row>
                        <div className="bg-header-home hidden-xs">
                            <div className="dial-spin" />
                            <div className="dial-spin-2" />
                            <div className="dial-spin-3" />
                        </div>
                    </Grid>
                </div>
                <div className="home-triangle home-triangle-left" />
                <div className="home-triangle home-triangle-right" />
            </div>
        );
    }
}

HeroHomeBanner.propTypes = {
    class: PropTypes.string,
    title: PropTypes.any.isRequired,
    description: PropTypes.any.isRequired
};

HeroHomeBanner.defaultProps = {
    class: ""
};

export default HeroHomeBanner;
