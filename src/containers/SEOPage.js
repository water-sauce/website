import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import parrot from "../images/icons/simple-parrot.png";

const title = "Water Sauce | SEO optimization as a service";
const description = "Your website's SEO strategy should be well thought out and executed in order to help gain website traffic. We can help with auditing your current pages to optimize for search engines.";
const product_info = [
    {
        title_block: "Strategic SEO Optimization",
        description: (
            <Fragment>
            SEO Optimization requires an examination of how the various parts of a website contribute to the overall discoverability strategy. This means optimizing HTML for search engines with the proper markup language, compressing images, writing meta titles correctly, etc. There’s a science to it and we’ve got the formula!
            <br/>
            <br/>
            Google is the ever-evolving algorithm that's constantly changing, and it’s now more important than ever to have a <Link to="/web-design">strong web presence</Link>. With ample experience in the startup world and an expansive network of marketers and engineers, we have the resources and connections to make sure that your website’s SEO is ahead of the curve.
            </Fragment>
        )
    }
];

class SEOPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/seo" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta property="og:url" content="https://www.watersauce.com/seo" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>
                <main>
                    <SubHeroServicesBanner 
                        icon={parrot}
                        alt="SEO icon as a parrot"
                        paragraph="Not every SEO strategy is or should be the same. Each company needs a catered, detailed game plan to help them rank high for certain keywords. Water Sauce can help you figure out the best way to build content, format your HTML, and drive inbound leads. Having a solid SEO game is essential to reaching your overall goals." 
                    />
                    <InfoBanner product_banners={product_info} color="light-purple" />
                </main>
            </div>
        );
    }
}

export default SEOPage;
