import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";


const title = "Web Design";
const description =
    "Water Sauce helps companies with Web Design";

const product_info = [
    {
        title_block: "The Blueprints - Information Architecture",
        description:
            "Information Architecture is all about the structuring of the content on a page- what to show, what’s most important, what needs to be ‘above the fold’, etc. Good information architecture helps a user find what they’re looking for with ease. From a site map perspective, it all starts with a home page. What will a new user see when they land on the page?... Where are they intended to navigate to?...  And so forth. Like a house’s blueprints, it is very important to decide where to put the front door, kitchen, and living room before proceeding to the next phase."
    },
    {
        title_block: "The Construction - Web Development",
        description:
            "Web Development is a process that requires front-end web development, back-end web development, and even an SEO strategy. At a minimum, any website will need HTML and CSS (HTML5 and CSS3 are the latest versions of both). HTML is the house’s framing, while CSS is the roofing, windows, and doors. After this is complete, you’ll have a functioning house… but with no style or furnishings. That leads us to the final step."
    }
];

class WebDesignPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <SubHeroServicesBanner paragraph="What’s a website’s story that needs to be told? Is a website accurately portraying the voice of its product? We understand the pain points of updating a website and walk our clients through every step of the process. In our years in the tech industry, we’ve worked with e-commerce websites, service industries, startups, mom-and-pop shops, and many others. Boost your company profile with a gorgeous interface!" />
                

                <InfoBanner product_banners={product_info} />
            </div>
        );
    }
}

export default WebDesignPage;
