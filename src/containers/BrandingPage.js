import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import lion from "../images/icons/simple-lion.png";

const title = "Branding is storytelling through content";
const description = "Water Sauce helps our clients define its brand. ";

const product_info = [
    {
        title_block: "Branding to find your voice",
        description: (
            <Fragment>
            Through a combination of market, user, and design research, we help companies define their brand. A brand is unique through its messaging, content, and of course its product(s). We help our clients figure out the story they want to tell their customers across all user experiences and touchpoints.
            <br/>
            <br/>
            Content Creation is a more than just an inbound marketing strategy. It’s about creating words, stories, and articles that will inform and/or inspire a company’s target audience and brand loyalists. Words for words’ sake is a dangerous game to flirt with. Long-term, purpose-driven content helps any business become an authority on topics related to its industry.
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
