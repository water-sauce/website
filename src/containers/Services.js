import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import HeroBanner from "../components/HeroBanner";
import HeroLeftBanner from "../components/HeroLeftBanner";
import ProductNav from "../components/ProductNav";
import ContactBanner from "../components/ContactBanner";

// pages
import AllSolutionsPage from "./AllSolutionsPage";
import SEOPage from "./SEOPage";
import FundraisingMaterialsPage from "./FundraisingMaterialsPage";
import DataEnrichmentPage from "./DataEnrichmentPage";

class Services extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route
                        exact
                        path="/all-solutions"
                        render={() => (
                            <HeroBanner
                                title="All Services"
                                description="Powering a new era for sales and marketing teams, Datanyze is the leading CRM data enrichment company. As your prospects evolve, so should your data. Datanyze provides accurate, real-time information on 40+ million companies, so you always have a competitive edge."
                            >
                            </HeroBanner>
                        )}
                    />
                    <Route
                        exact
                        path="/seo"
                        render={() => (
                            <HeroLeftBanner
                                title="SEO optimization for any site"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                                id="seo-hero"
                            >
                            </HeroLeftBanner>
                        )}
                    />
                    <Route
                        exact
                        path="/fundraising-materials"
                        render={() => (
                            <HeroBanner
                                title="Fundraising Materials"
                                description="It takes the average sales rep 6 hours to book 1 appointment. And most of that time is spent prospecting. Datanyze combines all prospecting tasks into one simple workflow so your reps can cover more accounts in less time."
                            >
                            </HeroBanner>
                        )}
                    />
                    <Route
                        exact
                        path="/data-enrichment"
                        render={() => (
                            <HeroBanner
                                title="Data Enrichment That Helps You Win"
                                description="Powering a new era for sales and marketing teams, Datanyze is the leading CRM data enrichment company. As your prospects evolve, so should your data. Datanyze provides accurate, real-time information on 40+ million companies, so you always have a competitive edge."
                            >
                            </HeroBanner>
                        )}
                    />
                </Switch>
                <Switch>
                    <Route
                        exact
                        path="/all-solutions"
                        component={AllSolutionsPage}
                    />
                    <Route
                        exact
                        path="/seo"
                        component={SEOPage}
                    />
                    <Route
                        exact
                        path="/fundraising-materials"
                        component={FundraisingMaterialsPage}
                    />
                    <Route
                        exact
                        path="/data-enrichment"
                        component={DataEnrichmentPage}
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

export default connect(mapStateToProps, mapDispatchToProps)(Services);
