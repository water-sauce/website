import React, { Component } from "react";
import { Helmet } from "react-helmet";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import lion from "../images/icons/simple-lion.png";

const title = "Branding is storytelling through content";
const description = "Water Sauce will help with branding";

const product_info = [
    {
        title_block: "Branding to find your voice",
        description:
            "Through a combination of market, user, and design research, we help companies define their brand. A brand is unique through its messaging, content, and of course its product. We help our clients figure out the story they want to tell their customers across all user experiences and touchpoints."
    },
    {
        title_block: "Content Creation for your brand",
        description:
            "Content Creation is a more than just an inbound marketing strategy. It’s about creating words, stories, and articles that will inform and/or inspire a company’s target audience and brand loyalists. Words for words’ sake is a dangerous game to flirt with. Long-term, purpose-driven content helps any business become an authority on topics related to its industry."
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

                <SubHeroServicesBanner 
                    icon={lion}
                    alt="branding as a lion"
                    paragraph="The word brand means “kind, grade, or make, as indicated by a stamp, trademark, or the like: the best brand of coffee.” Branding is all about authenticity — more than ever the internet is an increasingly loud critic. Being a voice true to company values speaks volumes." 
                />
                <InfoBanner product_banners={product_info} color="orange" />
            </div>
        );
    }
}

export default BrandingPage;
