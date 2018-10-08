import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import parrot from "../images/icons/simple-parrot.png";

const title = "SEO optimization & SEO auditing as a service";
const description =
    "Water Sauce will provide a free site audit.";



const product_info = [
    {
        title_block: "Strategic SEO Optimization",
        description:
            "SEO Optimization requires an examination of how the various parts of a website contribute to the overall SEO and discoverability strategy. This means optimizing HTML for search engines with the proper markup language, having images compressed, writing meta titles correctly, and a million other things. No worries, there’s a science to it and we’ve got the formula."
    },
    {
        title_block: "SEO Auditing",
        description:
            "Your website’s overall SEO HTML structure needs help! Google is the ever-evolving algorithm constantly changing, and it’s now more important than ever to have a strong web presence. With decades of combined experience in the startup world and an expansive network of marketeers and engineers, we have the resources and connections to make sure that your website’s SEO is ahead of the curve."
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
