import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";

import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import snail from "../images/icons/simple-snail.png";

const title = "Email Campaign Management";
const description = "Water Sauce helps companies with email campaigns";

const product_info = [
    {
        title_block: "Email Template and Content Design",
        description:
            "There are many things to consider when designing email templates. Sure, there are the basics like mobile optimization (55% of emails are opened on mobile devices) but the most important concept to keep in mind is crafting content for each segment of your audience. That is, segmenting your subscribers and sending more targeted messages. This content can be made based on age, gender, location, and more."
    },
    {
        title_block: "Campaign Execution and Evaluation",
        description: "Once the audience is segmented & the content is created accordingly, it is time to launch the campaign! But before doing this, one must ask “what are the metrics for success?” and collect data accordingly. This may be sales for promotional emails (offers/discounts), subscriptions for relational emails (newsletters), or delivery for transactional emails (welcome messages/ receipts). Compiling this data of past successes and failures and then applying them to the future is critical in having ongoing successful campaigns."
    }
];

class EmailCampaignsPage extends Component {
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
                    icon={snail}
                    alt="email campaign icon as a snail"
                    paragraph="Suppose you have a new product and a list of existing clients, leads, etc. How do you communicate this to them? You could send a mass email, but in the United States, the average clickthrough rate for these types of strategies is a measly 3.1%. How do you beat these odds? Through strategic audience segmentation, content development, campaign execution, and thoughtful campaign evaluation." 
                />

                <InfoBanner product_banners={product_info} color="purple" />
            </div>
        );
    }
}

export default EmailCampaignsPage;
