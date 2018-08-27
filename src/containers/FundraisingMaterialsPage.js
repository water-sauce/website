import React, { Component } from "react";
import QuoteBanner from "../components/QuoteBanner";
import ProductInfoBanner from "../components/ProductInfoBanner";

import quote_rep from "../images/quote-banner/reps/outreach-rep.png";
import quote_logo from "../images/quote-banner/logos/outreach-logo.png";
import quote_quotemark from "../images/quote-banner/quotemarks/quotemark.png";

const product_info = [
    {
        outerClass: "below-hero-section",
        title: "Instant Account Data",
        description:
            "Whether you're prospecting inside Datanyze or out on a company's website, we provide one-click access to company, social and technology insights.",
        class1: "col-xs-12 col-sm-6",
        class2: "col-xs-12 col-sm-5 col-sm-offset-1",
        src: require("../images/icons/prospecting-icon-1.png"),
        alt: "Business data syncing with HubSpot, Marketo, and Salesforce"
    },
    {
        outerClass: "below-hero-section below-hero-section-grey",
        title: "Prospect Anywhere",
        description:
            "Search any contact’s email address without leaving the page you’re browsing. Simply highlight their name and click to reveal our best suggestion.",
        class1: "col-xs-12 col-sm-6 col-sm-push-6",
        class2: "col-xs-12 col-sm-5 col-sm-pull-6",
        src: require("../images/icons/prospecting-icon-2.png"),
        alt: "Lighthouse looking for prospect buying signals"
    },
];

class FundraisingMaterialsPage extends Component {
    render() {
        return (
            <div>
                <ProductInfoBanner product_banners={product_info} />
                <QuoteBanner
                    quote_banner="outreach"
                    text_type="text-white"
                    rep_img_src={quote_rep}
                    rep_img_id="Outreach-rep"
                    rep_img_alt="Mark Kosoglow - VP of Sales, Outreach"
                    rep_quote="“Within 2 weeks of using Datanyze, sales rep productivity in 3 key areas increased by nearly 50%, leading to a 50% increase in meetings booked.”"
                    rep_quotee="Mark Kosoglow"
                    rep_title="VP of Sales, Outreach"
                    logo_img_src={quote_logo}
                    logo_img_alt="Outreach logo"
                    quotemark_img_src={quote_quotemark}
                    quote_img_alt="Outreach quotemark"
                />
            </div>
        );
    }
}

export default FundraisingMaterialsPage;
