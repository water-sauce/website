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
                                title="We are Water Sauce"
                                description="At Water Sauce, we believe in bucking cliches."
                            />
                        )}
                    />
                </Switch>
                <AboutNav />
                <Switch>
                    <Route exact path="/our-team" component={TeamPage} />
                </Switch>
                <Switch>
                    {["/our-team"].map(path => (
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
