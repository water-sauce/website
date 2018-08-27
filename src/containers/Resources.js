import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch, Link } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import ContactBanner from "../components/ContactBanner";

class Resources extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/what-is-seo-auditing"
                        render={() => (
                            <HeroBanner
                                title="SEO Auditing"
                                description="Datanyze is the fuel for your business strategy. With over 100 billion raw data points, the possibilities for making your organization smarter are endless."
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/what-is-web-design"
                        render={() => (
                            <HeroBanner
                                title="Web Design"
                                description="Datanyze is the fuel for your business strategy. With over 100 billion raw data points, the possibilities for making your organization smarter are endless."
                            />
                        )}
                    />
                </Switch>
                <Switch>
                    <Route
                        render={() => (
                            <ContactBanner
                                title="Ready to try technographics?"
                                description="Get in touch with a Datanyze rep today!"
                                cta="Contact Us"
                                cta_type="contact_us"
                                cta_contact_us_class="button-white"
                                showPhoneNumber={true}
                            />
                        )}
                    />
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
