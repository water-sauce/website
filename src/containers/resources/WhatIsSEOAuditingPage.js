import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import SubHeroServicesBanner from "../../components/SubHeroServicesBanner";
import InfoBanner from "../../components/InfoBanner";
import HeroBanner from "../../components/HeroBanner";

import binoculars from "../../images/resource-icons/binoculars.jpg";

const title = "What is SEO Auditing";
const description = "Water Sauce helps companies with SEO Auditing";

const product_info = [
    {
        title_block: "",
        description: (
            <Fragment>
                Based on the roadmap created from the SEO audit, we will help you determine keyword research and present the results generated from competitive analysis. An SEO competitive analysis is important because it gives data on what is being used in the industry at that point to improve on better rankings.<br/><br/>
                Here are the steps to competitive analysis that we take:
            </Fragment> )
    },
    {
        color: "true-blue",
        title_block: "Identify your Competitor",
        description:
            "First and foremost, we need to determine who your biggest competitor is. From there on, you’ll have a foundation about where you can start from."
    },
    {
        color: "teal",
        title_block: "Using Competitor Analysis Templates",
        description:
            "A clear, defined process is crucial for SEO auditing. Not only does it give repeated results, it also helps you to scale efforts. With this in mind, we managed to create a Competitor Analysis Template. This will make it easier for us to follow a strategic process and concentrate more on analyzing the results rather than finding out what to search for each and every time we repeat the process."
    },
    {
        color: "light-purple",
        title_block: "Backlink Analysis",
        description:
            "Backlink analysis will help us determine which links are missing from our own websites but are existent with your competitors. We will figure out how to determine which links are frequently appearing on your competitors’ list."
    },
    {
        color: "purple",
        title_block: "Keyword Analysis",
        description:
            "Basically, this analysis will help us determine which keywords your competitors are using to get better ranks. It could actually be configuring metadata, editing site architecture, renewing an existing piece of content, coming up with a new piece of content specific to certain keywords, or building links to your content containing these desirable keywords."
    }
];

class WhatIsSEOAuditingPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <HeroBanner 
                    title="What is SEO Auditing?"
                    description={
                        <Fragment><b>SEO auditing</b> means having someone, or a service, go through your website’s pages to make sure valuable landing pages are optimized for SEO. SEO auditing can be done through an application such as Google Chrome, Moz, or an agency like Water Sauce. What Google Chrome and Moz cannot provide is the human touch needed to understand the context of your service, product, or information. <br/><br/>

                        SEO audits are done to help you get a better insight into your website. In case you had a good stream of traffic that is now degrading, perhaps it’s time to do an SEO audit. Because of the ever-changing algorithm put out by search engines such as Google, Yahoo, or Bing, SEO done right can help carve a long-term path to success.</Fragment>
                    }
                    src={binoculars}
                    alt="binoculars representing search engine optimization">
                </HeroBanner>

                <SubHeroServicesBanner
                    title="Water Sauce provides SEO Auditing as a service"
                    paragraph="We aim to help companies and businesses rank high in search results. We provide a personalized road map that addresses the competition, rate factors based on our internal algorithm (and a lot of practice), and suggestions for keywords."
                    cta_button={true}
                />
                <InfoBanner product_banners={product_info} title="SEO Auditing the Competition" />
            </div>
        );
    }
}

export default WhatIsSEOAuditingPage;
