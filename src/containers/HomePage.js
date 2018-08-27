import React, { Component, Fragment } from "react";
import HeroHomeBanner from "../components/HeroHomeBanner";
import ContactBanner from "../components/ContactBanner";
import LightGreyBanner from "../components/LightGreyBanner";
import ToggleBanner from "../components/ToggleBanner";
import H2Title from "../components/SuperComponents/H2Title";
import MainProdLinks from "../routers/MainProdLinks";
import ContactModal from "../components/ContactModal";

import home_animation from "../images/animations/home-page/home-machine.png";

const pStyle = {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "300"
};

const bannerStyle = {
    background: "#2b3644",
    padding: "3rem 1rem",
    textAlign: "center",
    color: "#FFFFFF"
};

const h5Style = {
    marginBottom: "2.5rem",
    color: "#FFFFFF",
    fontWeight: "300",
    fontSize: "24px"
};

class HomePage extends Component {
    render(props) {
        return (
            <div>
                <HeroHomeBanner
                    title={
                        <Fragment>
                            Every business runs on technology.<br />
                            We know who needs yours.
                        </Fragment>
                    }
                    description="Datanyze is the leader in technographics."
                    vert_class="vertical-align-middle-home"
                >
                    <ContactModal cta="contact us" class="m-t-1" />
                </HeroHomeBanner>
                <div className="m-y-4 clearfix" />
                <H2Title title={"Datanyze is the leader in technographics"} />
                <p style={pStyle}>
                    See how technographics are applied to everyday sales and
                    marketing processes.
                </p>
                <div style={bannerStyle}>
                    <h5 style={h5Style}>
                        Datanyze provides top-rated data to thousands of
                        business professionals.
                    </h5>
                </div>

                <ToggleBanner />
                <ContactBanner
                    title="Ready to try technographics?"
                    description="Get in touch with a Datanyze rep today!"
                    cta="Contact Us"
                    cta_type="contact_us"
                    cta_contact_us_class="button-white"
                    showPhoneNumber={true}
                />
            </div>
        );
    }
}

export default HomePage;
