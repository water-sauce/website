import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import butterfly from "../images/icons/simple-butterfly.png";

const title = "Water Sauce | Web Design as a digital design agency service";
const description = "Web Design is so much more than colors, lines, and graphics. Your website is a story which requires proper information architecture as well as the correct design to tie it all together.";
const product_info = [
    {
        title_block: "From Blueprints to Completion",
        description:(
            <Fragment>
                Information Architecture is the blueprint for a website. It provides a solid foundation on how to structure content throughout its individual pages as well as overall site navigation. Good information architecture enables a user find what they’re looking for with ease.
                <br/>
                <br/>
                If Information Architecture is the blueprint of the site, then Web Development provides the framing while Web Design is the artist's final rendition of the product. A website's look and feel can tell a company's story without too many words — if Web Design and Development are done correctly and inline with your <Link to="/branding">branding</Link>, it should be many years before you need another update.
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
                    <meta property="og:url" content="https://www.watersauce.com/web-design" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
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
