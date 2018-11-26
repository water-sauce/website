import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import AboutHeroBanner from "../components/AboutHeroBanner";
import HeroServicesBanner from "../components/HeroServicesBanner";
import WhoWeArePage from "./WhoWeArePage";
import MarketSharePage from "./MarketSharePage";
import ChromeExtensionPage from "./ChromeExtensionPage";

import market_share from '../images/banner/market-share.jpg';
import chrome_extension from '../images/portfolio/cx-technographics.jpg';
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
                                            <li>A digital design agency built on the belief that humanity has limitless creativity</li>
                                            <li>A collective of artists, engineers, financiers, web-afficianados, and cat-lovers</li>
                                        </ol>
                                    </Fragment>
                                }
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/market-share"
                        render={() => (
                            <HeroServicesBanner
                                cta_banner="banner-service-portfolio"
                                title={
                                    <Fragment>
                                        Revamp key traffic pages to maximize inbound traffic
                                    </Fragment>
                                }
                                subtitle={
                                    <Fragment>
                                        The Datanyze Market Share pages brought in a lot of traffic, but the design and layout was not optimized for conversations. The redesign solved this.
                                    </Fragment>
                                }
                                topic="Datanyze Market Share"
                                links={false}
                                img_src_1={market_share}
                                img_id_1="market-share"
                                href="https://www.datanyze.com/market-share"
                            />
                        )}
                    />
                    <Route
                        exact
                        path="/chrome-extension"
                        render={() => (
                            <HeroServicesBanner
                                cta_banner="banner-service-portfolio"
                                title={
                                    <Fragment>
                                        Improving an under-focused product
                                    </Fragment>
                                }
                                subtitle={
                                    <Fragment>
                                        We set out to expand our most used product, The Datanyze Chrome Extension, and the re-design had to keep up with all the data points being added.
                                    </Fragment>
                                }
                                topic="Datanyze Chrome Extension"
                                links={false}
                                img_src_1={chrome_extension}
                                img_id_1="chrome-extension"
                                href="https://chrome.google.com/webstore/detail/sales-prospecting-datanyz/mlholfadgbpidekmhdibonbjhdmpmafd?hl=en-US"
                            />
                        )}
                    />
                </Switch>
                <Switch>
                    <Route exact path="/who-we-are" component={WhoWeArePage} />
                    <Route exact path="/market-share" component={MarketSharePage} />
                    <Route exact path="/chrome-extension" component={ChromeExtensionPage} />
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
