import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import AboutHeroBanner from "../components/AboutHeroBanner";
import ContactBanner from "../components/ContactBanner";

import WhoWeArePage from "./WhoWeArePage";
import ws_bottle from "../images/icons/ws-bottle.png";

class About extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/who-we-are"
                        render={() => (
                            <AboutHeroBanner
                                banner_class="about-banner-who-we-are"
                                class="hero-about"
                                title="Water Sauce"
                                src={ws_bottle}
                                alt="Water Sauce Bottle"
                                accent_class="accent-white"
                                description={
                                    <Fragment>
                                        <p><i>noun</i> | wah-ter, saws</p>
                                        <ol>
                                            <li>A digital design agency built on the belief that humanity should never limit our creativity</li>
                                            <li>A collective of artists, engineers, financiers, web-afficianados, and cat-lovers</li>
                                        </ol>
                                    </Fragment>
                                }
                            />
                        )}
                    />
                </Switch>
                <Switch>
                    <Route exact path="/who-we-are" component={WhoWeArePage} />
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
