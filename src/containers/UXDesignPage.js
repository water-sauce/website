import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";

const title = "UX Design";
const description =
    "Water Sauce helps companies with Web Design";

const product_info = [
    {
        title_block: "Leave a lasting impression",
        description:
            "Your user interface, information architecture, and branding are all bigger parts of a whole. It’s important to note that changing UX involves a team effort to understanding your customers’ pain points and how best to guide them on your website or product."
    },
    {
        title_block: "UX is more than user stories",
        description:
            "What is a user experience (UX)? It’s any touchpoint or interaction a person has with a brand. Take Apple, for example - everything from their website, to their ads, to their messaging, and most importantly their packaging and product is consistent in look and feel. Because of this, Apple products have the ability to make users feel empowered."
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

                <SubHeroServicesBanner paragraph="UX is just that - an experience. Never underestimate the feeling a good experience can impact branding. The most important thing to us when it comes to UX is the consistent reminder that “users” and “customers” are real human beings with real emotions and needs. Good UX comes from market research, learning about your customer base, and figuring out how their online experience on your website can not only match, but exceed their expectations." />

                <InfoBanner product_banners={product_info} />
            </div>
        );
    }
}

export default UXDesignPage;
