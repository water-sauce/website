import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import ContactBanner from "../components/ContactBanner";

import parrot from "../images/banner/parrot-3.png";
import owl from "../images/banner/owl-4.png";

const title = "SEO optimization & SEO auditing as a service";
const description =
    "Datanyze monitors 40+ million websites every day to help companies sell and market more effectively based on their prospects’ technology stack.";



const product_info = [
    {
        title_block: "Strategic SEO Optimization",
        description:
            "SEO Optimization is a whole examination of how the various parts of a website contribute to the overall SEO and discoverability strategy. This means (1) optimizing HTML for search engines with the proper markup language, (2) having images compressed, (3) writing meta titles correctly, and (4) a million other things."
    },
    {
        title_block: "SEO Auditing",
        description:
            "Your website’s overall SEO HTML structure needs help! Google is the ever-revolving algorithm that changes annually. Water Sauce can help you figure out the best way to format your HTML and drive inbound leads. It’s more important than ever to have a web presence and a strong one at that."
    },
    {
        title_block: "Free SEO Audit (on the house)",
        description:
            "By contacting us for a free SEO audit, we can help point your company and website in the right direction. Not ready for a third party audit? No worries, download our free SEO checklist for a quick guide. With over a decade of combined experience in the startup world and an expansive network of marketeers and engineers, we have the resources and connections to make sure that your website’s SEO game plan is a winning one."
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
                <SubHeroServicesBanner 
                    paragraph={"Not every SEO strategy is the same. Each company needs a catered, detailed game plan to help them rank high for scertain keywords. When Water Sauce audits a website, the audit is strategic to your inbound marketing strategy. Having a solid SEO game plan helps sync all your goals."}
                />
                <InfoBanner product_banners={product_info} />
                <ContactBanner
                    cta_banner="cta-banner-seo"
                    title={
                        <Fragment>
                            Birds of a feather <br /> do SEO together
                        </Fragment>
                    }
                    img_src_1={parrot}
                    img_id_1="contact-parrot"
                    img_src_2={owl}
                    img_id_2="contact-owl"
                    cta="Contact Us"
                    cta_type="contact_us"
                    cta_contact_us_class="button-salmon button-large"
                    showPhoneNumber={true}
                />
            </div>
        );
    }
}

export default SEOPage;
