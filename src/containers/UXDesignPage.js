import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import head from "../images/icons/simple-head.png";

const title = "UX Design";
const description = "Water Sauce helps companies with UX Design";
const product_info = [
    {
        title_block: "Leave a lasting impression",
        description: (
            <Fragment>
            Any touchpoint or interaction a person has with a brand falls under the UX umbrella. How does a company make sure this interaction is positive? Great UX comes from market research, understanding your customer base, and cracking how a product experience can not only match, but exceed their expectations.
            <br/>
            <br/>
            The UI (user interface), information architecture, and <Link to="/branding">branding</Link> are all integral parts of a much larger whole. It’s crucial to understand that changing UX involves a team effort to understand your customers’ pain points and how to best guide them through your product or website. Formulating design to influence UX is solution we strive at.
            </Fragment>
        )
    }
];

class UXDesignPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/ux-design" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>
                <main>
                    <SubHeroServicesBanner 
                        icon={head}
                        alt="UX design icon as a human head"
                        paragraph="UX, or user experience, is just that - an experience. Never underestimate the impact a good experience can have on your branding. The most important thing when it comes to UX is the consistent reminder that “users” and “customers” are real human beings with real emotions and needs. Great UX comes from market research, learning about the customer base, and figuring out how their online experience produces a positive outcome."
                    />
                    <InfoBanner product_banners={product_info} color="pink" />
                </main>
            </div>
        );
    }
}

export default UXDesignPage;
