import React, { Component } from "react";
import { Helmet } from "react-helmet";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import butterfly from "../images/icons/simple-butterfly.png";

const title = "Web Design";
const description = "Water Sauce helps companies with Web Design";

const product_info = [
    {
        title_block: "Information Architecture — The Blueprints",
        description:
            "Information Architecture is all about the structuring of the content on a page. Good information architecture helps a user find what they’re looking for with ease. What will a new user see when they land on the page?... Where are they intended to navigate to?... And so forth. Like a house’s blueprints, it is very important to decide where to put the front door, kitchen, and living room before beginning construction."
    },
    {
        title_block: "Web Development & Design — The Construction",
        description:
            "Web Development is a process that requires front & back-end web development, as well as an SEO strategy. At a minimum, any new website will need HTML5 and CSS3. HTML is the house’s framing, while CSS is the roofing, windows, and doors. After this is complete, you’ll have a fully functioning website…. But with no style- that’s where web design comes in! Like a houses interior design, that last step is crucial in setting the mood and telling a product’s story."
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

                <SubHeroServicesBanner
                    icon={butterfly}
                    alt="web design icon as a butterfly"
                    paragraph="We understand the pain points of updating a website and walk our clients through every step of the process. In our years in the tech industry, we’ve worked with e-commerce websites, service industries, startups, and mom-and-pop shops. Boost your company profile with a gorgeous interface!" 
                />

                <InfoBanner product_banners={product_info} color="yellow" />
            </div>
        );
    }
}

export default WebDesignPage;
