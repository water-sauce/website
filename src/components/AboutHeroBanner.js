import React, { Component } from "react";
import PropTypes from "prop-types";

class AboutHeroBanner extends Component {
    render(props) {
        return (
            <div className={this.props.banner_class + " about-banner"} >
                <div className="grid-container">
                    <div className="content-wrapper content-wrapper-2">
                        <img src={this.props.src} alt={this.props.alt} id={this.props.img_id} />
                    </div>
                    <div className="content-wrapper content-wrapper-1">
                        <div className="content">
                            <div className={"accent " + this.props.accent_class} />
                            <h1>{this.props.title}</h1>
                            <p>{this.props.description}</p>
                        </div>
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