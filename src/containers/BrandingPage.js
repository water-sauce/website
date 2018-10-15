import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import lion from "../images/icons/simple-lion.png";

const title = "Water Sauce | Branding as a service";
const description = "Defining a brand is never easy — Water Sauce helps our clients find its voice with market and user research. We do our best to help companies be bold and true to their values.";
const product_info = [
    {
        title_block: "Branding to find your voice",
        description: (
            <Fragment>
            Through a combination of market, user, and design research, we help companies define their brand. Whether you are <Link to="/fundraising-materials">fundraising for a new idea</Link> or are an established company, we help our clients figure out the story they want to tell their customers across all <Link to="/ux-design">user experiences</Link> and touchpoints.
            <br/>
            <br/>
            Content Creation is a more than just an inbound marketing strategy- It’s about creating words, stories, and articles that will inform and inspire a company’s target audience. Long-term, purpose-driven content helps any business become an authority on topics related to its industry.
            </Fragment>
        )
    }
];

class BrandingPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/branding" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta property="og:url" content="https://www.watersauce.com/branding" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <SubHeroServicesBanner 
                    icon={lion}
                    alt="branding as a lion"
                    paragraph="Branding is all about authenticity — more than ever the internet is an increasingly loud critic. Being a voice true to company values speaks volumes. It can be hard to separate yourself from your competitors, but through branding or a rebranding, you can define your company values and make your product exude this." 
                />
                <InfoBanner product_banners={product_info} color="orange" />
            </div>
        );
    }
}

export default BrandingPage;
