import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import head from "../images/icons/simple-head.png";

const title = "Water Sauce | UX Design as a service";
const description = "User Experience is the human experience. Make sure every touchpoint across your products make a lasting and positive impact.";
const product_info = [
    {
        title_block: "Leave a lasting impression",
        description: (
            <Fragment>
            Any touchpoint or interaction a person has with a brand falls under the UX umbrella. This can be as simple as <Link to="/email-campaign">an email</Link> or as complex as a mobile app. Great UX comes from market research, understanding your customer base, and cracking how a product experience can not only match, but exceed their expectations.
            <br/>
            <br/>
            The UI (User Interface), information architecture, and <Link to="/branding">branding</Link> are all integral parts of a much larger whole. It’s crucial to understand that changing UX involves a team effort to understand your customers’ pain points and how to best guide them through your website. Formulating <Link to="/web-design">design</Link> to influence UX is solution we strive at.
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
                    <meta property="og:url" content="https://www.watersauce.com/ux-design" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
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
