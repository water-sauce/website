import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";

// import HeroBanner from "../components/HeroBanner";
import HeroServicesBanner from "../components/HeroServicesBanner";

// pages
import SEOPage from "./SEOPage";
import WebDesignPage from "./WebDesignPage";
import FundraisingMaterialsPage from "./FundraisingMaterialsPage";
import BrandingPage from "./BrandingPage";
import EmailCampaignsPage from "./EmailCampaignsPage";
import UXDesignPage from "./UXDesignPage";

import rose from "../images/banner/rose.png";
import parrot from "../images/banner/parrot-4.png";
import shark from "../images/banner/shark.png";
import lion from "../images/banner/lion.png";
import pigeon from "../images/banner/pigeon-2.png";
import face from "../images/banner/face.png";

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
										Design to <br /> captivate &amp; inspire
									</Fragment>
								}
								topic="web design"
								img_src_1={rose}
								img_id_1="contact-rose"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-salmon button-large"
								showPhoneNumber={true}
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
								topic="seo"
								img_src_1={parrot}
								img_id_1="contact-parrot"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
								showPhoneNumber={true}
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
								topic="fundraising materials"
								img_src_1={shark}
								img_id_1="contact-shark"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
								showPhoneNumber={true}
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
								topic="branding"
								img_src_1={lion}
								img_id_1="contact-lion"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
								showPhoneNumber={true}
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
										Pigeon mail is <br /> <i>so</i> last century
									</Fragment>
								}
								topic="email campaigns"
								img_src_1={pigeon}
								img_id_1="contact-pigeon"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
								showPhoneNumber={true}
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
								topic="ux design"
								img_src_1={face}
								img_id_1="contact-face"
								cta="Contact Us"
								cta_type="contact_us"
								cta_contact_us_class="button-true-blue button-large"
								showPhoneNumber={true}
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
