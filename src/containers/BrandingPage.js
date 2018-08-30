import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";


const title = "Branding is storytelling through content";
const description = "Water Sauce will help with branding";


const product_info = [
    {
        title_block: "Branding to find your voice",
        description:
            "Through a combination of market, user, and design research, we help companies define their brand. A brand is unique through its messaging, content, and of course its product. Every touch point across a brand should be enjoyable. Your brand is a form of a user experience - whether it’s a physical product you sell or a software, your brand needs to be part of your overall story."
    },
    {
        title_block: "Content Creation for your brand",
        description:
            "Content is a way to engage your audience and user base as well a stream for revenue and traffic. Content Creation is a more than just an inbound marketing strategy. It’s about creating words that will inform or inspire your target audience."
    }
];


class BrandingPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <SubHeroServicesBanner paragraph="The word brand means “kind, grade, or make, as indicated by a stamp, trademark, or the like: the best brand of coffee.” Branding is all about authenticity. More than ever with millenials, generation Z, etc. can tell when a brand is original. The internet is a critic on its own- being a voice true to company values speaks volumes." />

                <InfoBanner product_banners={product_info} />
            </div>
        );
    }
}

export default BrandingPage;