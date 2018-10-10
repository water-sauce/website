import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SubHeroServicesBanner from "../../components/SubHeroServicesBanner";
import InfoBanner from "../../components/InfoBanner";
import HeroBanner from "../../components/HeroBanner";
import binoculars from "../../images/resource-icons/binoculars.jpg";

const title = "What is SEO Auditing?";
const description = "SEO Auditing means having a service or provider go through your website to figure out how best to optimize your website for speed and dsicoverability.";
const product_info = [
    {
        title_block: "",
        description: (
            <Fragment>
                Identifying your competitors, keyword research, a well-defined roadmap, and thereafter focused content will all help improve your SEO rankings. Having key landing pages seen on the first page is crucial since <a href="https://www.protofuse.com/blog/details/first-page-of-google-by-the-numbers/" target="_blank" rel="noopener noreferrer">less than 10% or people advance to Page 2</a>.
                <br/><br/>
                Here are the steps to competitive analysis that we take:
            </Fragment> 
        )
    },
    {
        color: "true-blue",
        title_block: "Competitive Analysis",
        description: (
            <Fragment>
                Competition is only natural and beating them at the game of SEO should be your goal. One must determine who your biggest competitors are, how they rank with certain keywords, and <a href="https://searchengineland.com/build-seo-strategy-dominate-market-274681" target="_blank" rel="noopener noreferrer">what tactics are working within your industry</a>. Once you analyze why and how their site is getting traffic, you can then move onto the next step, keyword research.
            </Fragment>
        )
    },
    {
        color: "teal",
        title_block: "Keyword Research",
        description: (
            <Fragment>
            Keyword Research is the process of understanding what people are searching for within your industry or topics related to your industry. Learning about search frequencies, keyword phrases, and noting the top pages of search results will give you a better idea of where your opportunities lay. It can be a tedious process, but doing so provides a higher return for copy-edited or new content.
            </Fragment>
        )
    },
    {
        color: "light-purple",
        title_block: "Building an SEO Roadmap",
        description: (
            <Fragment>
                Determining which meta titles and descriptions need to change, building a thorough backlink and internal link tree, and understanding key landing pages that need focused content should all part of the SEO Roadmap. It’s important to understand that making changes on the site will slow down traffic as search engines re-index your pages, so things like an <Link to="/email-campaigns">email campaign newsletter</Link> or an increase in Google Adwords can offset this.
            </Fragment>
        )
    },
    {
        color: "purple",
        title_block: "Re-focused Content",
        description: (
            <Fragment>
                Good keyword-focused content should be the primary goal of every SEO strategy. As Google’s algorithm has evolved, this has been an increasing focus within on how they rank pages. <a href="https://audseo.com/blog/why-content-matters-in-a-local-seo-strategy/" target="_blank" rel="noopener noreferrer">Pages with great content</a> that provide relevant results from search queries will be rewarded with more points, thus ranking higher. 
                <br/><br/>
                Like going to the gym consistently, results will eventually show overtime as long as the content stays consistent and fresh. <a href="mailto:info@watersauce.com">Contact Us</a> if you’re interested in seeing how we can help.
            </Fragment> 
        )        
    }
];

class WhatIsSEOAuditingPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://wwww.watersauce.com/what-is-seo-auditing" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <main>
                    <HeroBanner 
                        title="What is SEO Auditing?"
                        description={
                            <Fragment>
                                <b>SEO auditing</b> means having a service or agency go through your website, page-by-page, to make sure the content and HTML formatting is optimized for SEO. <Link to="/seo">SEO audits</Link> are done to help your company gain better insight into your site’s organic traffic. If you once had a good stream of traffic that is now slowing down, the best time to do an SEO audit is now.

                                Building an SEO plan can and should be done with the helps of tools such as <a href="https://searchengineland.com/google-adds-new-seo-audit-category-chromes-lighthouse-extension-291303" target="_blank" rel="noopener noreferrer">Google Chrome</a> or <a href="https://moz.com/free-seo-tools" target="_blank" rel="noopener noreferrer">Moz</a>. What an agency like Water Sauce can provide that Google Chrome and Moz cannot is the human touch needed to understand the context of your service, product, and industry.
                            </Fragment>
                        }
                        src={binoculars}
                        alt="binoculars representing search engine optimization">
                    </HeroBanner>
                    <SubHeroServicesBanner
                        title="Water Sauce SEO Auditing"
                        paragraph="We provide a personalized road map that addresses the competition, rates factors based on our internal algorithm, and optimal suggestions for keywords in industry-related search results. We also have a team of writers who can help with SEO-optimized content."
                        cta_button={true}
                    />
                    <InfoBanner product_banners={product_info} title="Your Personalized SEO Roadmap" />
                </main>
            </div>
        );
    }
}

export default WhatIsSEOAuditingPage;
