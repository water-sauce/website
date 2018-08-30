import React, { Component, Fragment } from "react";
// import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import InfoBanner from "../components/InfoBanner";


const title = "Email Campaign";
const description =
    "Water Sauce helps companies with email campaigns";

const product_info = [
    {
        title_block: "Pitch Deck Collaboration",
        description:
            "Water Sauce will work with your team to create or refine your existing pitch deck whilst developing your brand and voice. This includes creating content, icons, animations, and more in order to tell your story to investors as clear and concise as possible. Our level of involvement is completely circumstantial- we can review & refine existing content, or create one from scratch!"
    },
    {
        title_block: "Financial Models",
        description:(
            <Fragment>
                
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

                <InfoBanner product_banners={product_info} />
            </div>
        );
    }
}

export default EmailCampaignsPage;
