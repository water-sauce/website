import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import butterfly from "../images/icons/simple-butterfly.png";

const title = "Web Design";
const description = "Water Sauce helps companies with Web Design";

const product_info = [
    {
        title_block: "Information Architecture — The Blueprints",
        description:(
            <Fragment>
                Information Architecture is the blueprint for a website. It provides a solid foundation on how to structure content throughout its individual pages as well as overall site navigation. Good information architecture enables a user find what they’re looking for with ease. Question such as "What will a new user see when they land on the page?" or <Link to="/ux-design">"Will the user have an easy time navigating the site?"</Link> need to be answered during this process.
            </Fragment>
        )
    },
    {
        title_block: "Web Development & Design — The Construction",
        description: (
            <Fragment>
                Web Design and Development go hand-in-hand. If Information Architecture is the blueprint for the site, then web design is the artist's rendition of the final product. Web development provides the framing and brings the design to life. A website's look and feel can tell a company's story without too many words — if web design and development are done correctly and inline with your <Link to="/branding">branding</Link>, it should be many years before you need another update.
            </Fragment>
            )
    }
];

class WebDesignPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/web-design" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <main>
                    <SubHeroServicesBanner
                        icon={butterfly}
                        alt="web design icon as a butterfly"
                        paragraph="In our many years in the tech industry, we’ve worked with e-commerce websites, service industries, startups, and mom-and-pop shops. We understand the many pain points of updating a website. We make sure to walk our clients through every step of the process to make the update as smooth as possible. Boost your company profile with a gorgeous interface!" 
                    />
                    <InfoBanner product_banners={product_info} color="yellow" />
                </main>
            </div>
        );
    }
}

export default WebDesignPage;
