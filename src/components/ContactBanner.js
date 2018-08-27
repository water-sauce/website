import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ContactModal from "../components/ContactModal";

class ContactBanner extends Component {
    render(props) {
        return (
            <div className={this.props.cta_banner + " cta-banner"}>
                <img src={this.props.img_src_1} alt={this.props.img_alt_1} id={this.props.img_id_1}/>
                <img src={this.props.img_src_2} alt={this.props.img_alt_2} id={this.props.img_id_2}/>
                <Grid>
                    <Row className="cta-wrapper">
                        <h4>{this.props.title}</h4>
                        <div className="cta-information">
                            <ContactModal
                                cta={this.props.cta}
                                class={this.props.cta_contact_us_class}
                            />
                        </div>
                    </Row>
                </Grid>
            </div>
        );
    }
}

ContactBanner.propTypes = {
    cta: PropTypes.string
};

export default ContactBanner;
