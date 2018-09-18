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
            "Are you planning to segment your subscribers to send more targeted messages? What are your metrics for success? These are some of many questions we’ll address when tailoring an email campaign. There are many things to consider when designing email templates. For one, mobile optimization is key as 55% of emails are opened on personal devices… success is based on recipients to open & engage in emails, to eventually lead to sales."
    },
    {
        title_block: "Campaign Execution and Evaluation",
        description:(
            <Fragment>
                Our campaigns are designed for higher conversion across email lists through:<br/><br/>

                1. Audience Segmentation - age, gender, location, etc<br/>
                2. Content Development<br/>
                3. Email automation - Segmentation and delivery to happen automatically<br/>
                4. Message personalization<br/>
                5. Analytics - how many people a campagin reached <br/>

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
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <SubHeroServicesBanner
                    icon={snail}
                    alt="email campaign icon as a snail"
                    paragraph="Suppose you have a new product and a list of existing clients, leads, etc. How do you communicate this to them? You could send a mass email, but in the United States, the average clickthrough rate for these types of strategies is a measly 3.1%. How do you beat these odds? Through strategic audience segmentation, content development, campaign execution, and thoughtful campaign evaluation." 
                />

                <InfoBanner product_banners={product_info} />
            </div>
        );
    }
}

export default EmailCampaignsPage;
