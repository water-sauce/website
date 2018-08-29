import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ContactModal from "../components/ContactModal";

class HeroServicesBanner extends Component {
    render(props) {
        return (
            <div className={this.props.cta_banner + " banner-service"}>
                <Grid className="position-relative">
                    <Row className="cta-wrapper">
                        <h4>{this.props.title}</h4>
                        <div className="cta-information">
                            <ContactModal
                                cta={this.props.cta}
                                class={this.props.cta_contact_us_class}
                            />
                        </div>
                    </Row>
                    <img src={this.props.img_src_1} alt={this.props.img_alt_1} id={this.props.img_id_1}/>
                </Grid>
            </div>
        );
    }
}

HeroServicesBanner.propTypes = {
    cta: PropTypes.string
};

export default HeroServicesBanner;
