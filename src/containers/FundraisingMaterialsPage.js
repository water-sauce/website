import React, { Component } from "react";
import { Helmet } from "react-helmet";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import shark from "../images/icons/simple-shark.png";

const title = "Fundraising Materials";
const description = "Water Sauce helps companies raise money";

const product_info = [
    {
        title_block: "Pitch Deck Collaboration",
        description:
            "Water Sauce will work with your team to create or refine your existing pitch deck whilst developing your brand and voice. This includes creating content, icons, animations, and more in order to tell your story to investors as clear and concise as possible. Our level of involvement is completely circumstantial- we can review & refine existing content, or create one from scratch!"
    },
    {
        title_block: "Financial Models",
        description:
            "Not everyone is an accounting or financial expert, and when bootstrapping a startup you may not have someone on your team with this set of skills. When raising a round, questions like “What is your profit margin?”,  “What is your runway forecast for this round?”, and “What are your valuations expectations?” may seem like straightforward questions, but without adequate support you may be left out to dry. We’ve all seen these types of disasters on Shark Tank. Fortunately, our team of experts can aid in the development and presentation of these various metrics & models."
    }
];

class FundraisingMaterialsPage extends Component {
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
                    icon={shark}
                    alt="Fundraising Materials icon as a shark"
                    paragraph="The journey of fundraising can be many things; the three most noteworthy being difficult, stressful, and confusing. Things can get hectic in the juggling of networking events and meetings, but one thing that should not be neglected is your marketing materials. This is often the make-or-break factor in the fundraising process. Luckily, we’re here to help!" />

                <InfoBanner product_banners={product_info} />
            </div>
        );
    }
}

export default FundraisingMaterialsPage;
