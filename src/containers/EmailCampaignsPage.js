import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import snail from "../images/icons/simple-snail.png";

const title = "Water Sauce | Email Campaign Management";
const description = "Email campaigns can be tricky to implement and design - we're here to help you get the most opens and segment your audience into groups for more targeted messaging.";
const product_info = [
    {
        title_block: "Segmentation, Content Design, and Evaluation",
        description: (
            <Fragment>
            There are many things to consider when designing email templates, but the most important concept to keep in mind is crafting content & tailoring a <Link to="ux-design">User Experience</Link> for each persona within an audience. That is, segmenting your subscribers (based on age, gender, location, etc.) and sending more targeted messages.
            <br/>
            <br/>
            Once a campaigned is launched, it is crucial to define the metrics for success and collect data accordingly. This may be sales for promotional emails, subscription bumps for relational emails, or simply delivery for transactional emails. Compiling this data of past successes + failures and applying them to the future is critical in having ongoing successful campaigns.
            </Fragment>
        )
    }
];

class EmailCampaignsPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/email-campaigns" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta property="og:url" content="https://www.watersauce.com/email-campaigns" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>

                <main>
                    <SubHeroServicesBanner
                        icon={snail}
                        alt="email campaign icon as a snail"
                        paragraph="Say you have a new product and a list of existing clients, leads, etc. How do you spread awareness? You could send a mass email, but the average clickthrough rate for these types of strategies is a measly 3.1%. We can help you beat these odds through strategic audience segmentation, content development, campaign execution, and thoughtful campaign evaluation." 
                    />
                    <InfoBanner product_banners={product_info} color="purple" />
                </main>
            </div>
        );
    }
}

export default EmailCampaignsPage;
