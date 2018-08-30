import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";


const title = "SEO optimization & SEO auditing as a service";
const description =
    "Water Sauce will provide a free site audit.";



const product_info = [
    {
        title_block: "Strategic SEO Optimization",
        description:
            "SEO Optimization is a whole examination of how the various parts of a website contribute to the overall SEO and discoverability strategy. This means (1) optimizing HTML for search engines with the proper markup language, (2) having images compressed, (3) writing meta titles correctly, and (4) a million other things."
    },
    {
        title_block: "SEO Auditing",
        description:
            "Your website’s overall SEO HTML structure needs help! Google is the ever-revolving algorithm that constantly changes. Water Sauce can help you figure out the best way to format your HTML and drive inbound leads. It’s more important than ever to have a web presence and a strong one at that."
    }
];


class SEOPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <SubHeroServicesBanner paragraph="Not every SEO strategy is the same. Each company needs a catered, detailed game plan to help them rank high for certain keywords. When Water Sauce audits a website, the audit is strategic to your inbound marketing strategy. Having a solid SEO game plan helps sync all your goals." />

                <InfoBanner product_banners={product_info} />
                
            </div>
        );
    }
}

export default SEOPage;
