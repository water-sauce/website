import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

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
                                description=""
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/what-is-web-design"
                        render={() => (
                            <HeroBanner
                                title="Web Design"
                                description=""
                            />
                        )}
                    />
                </Switch>
                <Switch>
                    <Route
                        render={() => (
                            <ContactBanner
                                title="Ready for a free SEO Audit?"
                                description=""
                                cta="Contact Us"
                                cta_type="contact_us"
                                cta_contact_us_class="button-large button-pink"
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
