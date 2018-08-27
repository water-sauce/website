import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import AboutNav from "../components/AboutNav";
import ContactBanner from "../components/ContactBanner";

import TeamPage from "./TeamPage";
import CareersPage from "./CareersPage";
class About extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/our-team"
                        render={() => (
                            <HeroBanner
                                class="hero-about"
                                title="Meet the Team"
                                description="Meet team Datanyze. We set hard goals, work hard to achieve them and play harder when all's said and done."
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/careers"
                        render={() => (
                            <HeroBanner
                                class="hero-about"
                                title="Careers"
                                description="Datanyze is a small, profitable Silicon Valley startup and we’re looking for A+ talent. Our mission is to empower modern sales and marketing professionals to make smarter data-driven decisions. We choose to be great, not big. We want to grow through making our customers successful, not by raising another round of funding. We value our employees’ efforts and unlike any other company in Silicon Valley, share our profits with our employees. Do you share our values? Join Datanyze and test your limits."
                            />
                        )}
                    />
                </Switch>
                <AboutNav />
                <Switch>
                    <Route exact path="/our-team" component={TeamPage} />
                    <Route exact path="/careers" component={CareersPage} />
                </Switch>
                <Switch>
                    {["/our-team", "/careers"].map(path => (
                        <Route
                            key={`cb_${path}`}
                            exact
                            path={path}
                            render={() => (
                                <ContactBanner
                                    title="We want you here!"
                                    description="You’ll find we’re a bunch of misfits who do awesome things together. Don’t miss out on all the fun."
                                    cta="View All Open Positions"
                                    ctaLink="https://angel.co/datanyze/jobs/"
                                    showPhoneNumber={false}
                                />
                            )}
                        />
                    ))}
                    <Route
                        render={() => (
                            <ContactBanner
                                title="Ready to try technographics?"
                                description="Get in touch with a Datanyze rep today!"
                                cta="Contact Us"
                                cta_type="contact_us"
                                cta_contact_us_class="button-white inline-block"
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
