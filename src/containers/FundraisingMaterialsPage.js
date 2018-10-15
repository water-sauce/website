import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import shark from "../images/icons/simple-shark.png";

const title = "Water Sauce | Helping with Fundraising Materials as a service";
const description = "We have worked with companies to help raise millions in seed capital to hundreds of millions in Series C+. We provide financial support to companies that need help with projections and sales decks.";
const product_info = [
    {
        title_block: "Pitch Deck Collaboration",
        description: (
            <Fragment>
            Water Sauce will work with your team to create or refine your existing pitch deck whilst developing your <Link to="/branding">brand and voice</Link>. This includes creating content, icons, animations, and more in order to tell your story to investors as clear and concise as possible.
            <br/>
            <br/>
            Our in-house finance team has helped raise millions in seed capital to hundreds of millions in Series C+.  We can help develop, refine, or review your financial support. Our level of involvement is completely circumstantial- we can review & refine existing content, or create one from scratch!
            </Fragment>
        )
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
                    <meta property="og:url" content="https://www.watersauce.com/fundraising-materials" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <main>
                    <SubHeroServicesBanner
                        icon={shark}
                        alt="Fundraising Materials icon as a shark"
                        paragraph="The journey of fundraising can be many things; the three most noteworthy being difficult, stressful, and confusing. Things can get hectic in the juggling of networking events and meetings, but one thing that should not be neglected is your marketing materials. This is often the make-or-break factor in the fundraising process. Luckily, we’re here to help!" />
                    <InfoBanner product_banners={product_info} color="teal" />
                </main>
            </div>
        );
    }
}

export default FundraisingMaterialsPage;
