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
            "When raising a round, you will be asked “What is your profit margin?”, “What is your runway forecast for this round?”, and “What are your valuations expectations?” Without adequate support you'll be left out to dry. Our in-house finance team has helped raise millions in seed capital to hundreds of millions in Series C+. We can help develop, refine, or review your financial support."
    }
];

class FundraisingMaterialsPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/fundraising-materials" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <SubHeroServicesBanner
                    icon={shark}
                    alt="Fundraising Materials icon as a shark"
                    paragraph="The journey of fundraising can be many things; the three most noteworthy being difficult, stressful, and confusing. Things can get hectic in the juggling of networking events and meetings, but one thing that should not be neglected is your marketing materials. This is often the make-or-break factor in the fundraising process. Luckily, we’re here to help!" />

                <InfoBanner product_banners={product_info} color="teal" />
            </div>
        );
    }
}

export default FundraisingMaterialsPage;
