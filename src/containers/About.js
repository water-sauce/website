import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import AboutHeroBanner from "../components/AboutHeroBanner";
import ContactBanner from "../components/ContactBanner";

import WhoWeArePage from "./WhoWeArePage";

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
                                banner_class="banner-who-we-are"
                                class="hero-about"
                                title="We are Water Sauce"
                                description={
                                    <Fragment>
                                        Headquartered in San Francisco, we are a team of bold, passionate, and idealistic thinkers who understand the ever changing environment of… have you fallen asleep yet? We don’t want to waste your time with meaningless fluff. And lets be real, we know what you’re thinking, “OK, it’s a full service design agency… but what does Water Sauce even mean?”<br/><br/>

                                        At Water Sauce, we recognize the core economic philosophy that all products fall into two categories: needs & wants. Needs are things one has to do in order to survive while wants are what one desires to live more comfortably. If your product is bottled water, you are in the “need” business. If you make gourmet sauce, you are in the “want” business.<br/><br/>

                                        We build brands that transcend these categories. Whether your product is a need or want, we want your end users to feel both. You need to stay hydrated to survive but also want that awesome brand of bottled water. You want to taste that delicious sauce but also need it- food has become too bland without it! Once your brand becomes a Water Sauce, you’re delivering something truly unforgettable to your customers.

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
