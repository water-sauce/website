import React, { Component } from "react";
import { Helmet } from "react-helmet";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import head from "../images/icons/simple-head.png";

const title = "UX Design";
const description = "Water Sauce helps companies with UX Design";

const product_info = [
    {
        title_block: "Leave a lasting impression",
        description:
            "UX is any touchpoint or interaction a person has with a brand. How does a company make sure that interaction is positive? Great UX comes from market research, learning about the customer base, and figuring out how their product experience can not only match, but exceed their expectations."
    },
    {
        title_block: "UX is more than user stories",
        description:
            "The user interface (UI), information architecture, and branding are all bigger parts of a whole. It’s important to note that changing UX involves a team effort to understand your customers’ pain points and how to best guide them through your product or website. Formulating design to influence UX is solution we strive at."
    }
];

class UXDesignPage extends Component {
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
                    icon={head}
                    alt="UX design icon as a human head"
                    paragraph="UX, or user experience, is just that - an experience. Never underestimate the impact a good experience can have on your branding. Here at Water Sauce, we feel the most important thing when it comes to UX is the consistent reminder that “users” and “customers” are real human beings with real emotions and needs. Great UX comes from market research, learning about the customer base, and figuring out how their online experience can not only match, but exceed their expectations."
                />

                <InfoBanner product_banners={product_info} color="pink" />
            </div>
        );
    }
}

export default UXDesignPage;
