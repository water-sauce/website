import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

import HeroServicesBanner from "../components/HeroServicesBanner";
// import { CSSTransitionGroup } from 'react-transition-group';

// pages
import SEOPage from "./SEOPage";
import WebDesignPage from "./WebDesignPage";
import FundraisingMaterialsPage from "./FundraisingMaterialsPage";
import BrandingPage from "./BrandingPage";
import EmailCampaignsPage from "./EmailCampaignsPage";
import UXDesignPage from "./UXDesignPage";

import butterfly from "../images/banner/butterfly-2.png";
import parrot from "../images/banner/parrot-6.png";
import shark from "../images/banner/shark-2.png";
import lion from "../images/banner/lion.png";
import snail from "../images/banner/snail-4.png";
import face from "../images/banner/face-2.png";

class Services extends Component {
	render() {
		return (
			<div>
				<Switch>

					<Route
						exact
						path="/web-design"
						render={() => (
							<HeroServicesBanner
								cta_banner="banner-service-web-design"
								title={
									<Fragment>
										Transform into a <br /> thing of beauty
									</Fragment>
								}
								subtitle={
									<Fragment>
										A website's design should captivate and inspire its audience. Making it memorable and easy to use are integral to growing a web presence.
									</Fragment>
								}
								topic="web design"
								img_src_1={butterfly}
								img_id_1="contact-butterfly"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
							/>
						)}
					/>

					<Route
						exact
						path="/seo"
						render={() => (
							<HeroServicesBanner
								cta_banner="banner-service-seo"
								title={
									<Fragment>
										Birds of a feather <br /> do SEO together
									</Fragment>
								}
								subtitle={
									<Fragment>
										SEO is a strategy to help grow a customer base through organic traffic. Implementing an effective SEO strategy is where the magic happens.
									</Fragment>
								}
								topic="seo"
								img_src_1={parrot}
								img_id_1="contact-parrot"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
							/>
						)}
					/>

					<Route
						exact
						path="/fundraising-materials"
						render={() => (
							<HeroServicesBanner
								cta_banner="banner-service-fundraising"
								title={
									<Fragment>
										Be prepared when <br /> entering the tank
									</Fragment>
								}
								subtitle={
									<Fragment>
										Is your pitch deck going to impress potential investors? Design and presentation mean everything when trying to close a round of funding.
									</Fragment>
								}
								topic="fundraising materials"
								img_src_1={shark}
								img_id_1="contact-shark"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
							/>
						)}
					/>

					<Route
						exact
						path="/branding"
						render={() => (
							<HeroServicesBanner
								cta_banner="banner-service-branding"
								title={
									<Fragment>
										Let your <br /> brand roar
									</Fragment>
								}
								subtitle={
									<Fragment>
										Apple, Nike, Water Sauce — what do these have in common? Humble beginnings and lots of ambition. Branding to become a household name.
									</Fragment>
								}
								topic="branding"
								img_src_1={lion}
								img_id_1="contact-lion"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
							/>
						)}
					/>

					<Route
						exact
						path="/email-campaigns"
						render={() => (
							<HeroServicesBanner
								cta_banner="banner-service-email-campaigns"
								title={
									<Fragment>
										Snail mail is <br /> <i>so</i> last century
									</Fragment>
								}
								subtitle={
									<Fragment>
										Email campaigns are now a science with lots of moving parts and data. The days of "spray-and-pray" are long gone — efficiency is the word.
									</Fragment>
								}
								topic="email campaigns"
								img_src_1={snail}
								img_id_1="contact-snail"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
							/>
						)}
					/>

					<Route
						exact
						path="/ux-design"
						render={() => (
							<HeroServicesBanner
								cta_banner="banner-service-ux-design"
								title={
									<Fragment>
										UX is the <br /> human experience
									</Fragment>
								}
								subtitle={
									<Fragment>
										UX design is much more than visual design. It is a process with the overall aim of helping your users navigate your products in a delightful way.
									</Fragment>
								}
								topic="ux design"
								img_src_1={face}
								img_id_1="contact-face"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
							/>
						)}
					/>

				</Switch>
				<Switch>
					<Route
						exact
						path="/web-design"
						component={WebDesignPage}
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
						path="/branding"
						component={BrandingPage}
					/>
					<Route
						exact
						path="/email-campaigns"
						component={EmailCampaignsPage}
					/>
					<Route
						exact
						path="/ux-design"
						component={UXDesignPage}
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
