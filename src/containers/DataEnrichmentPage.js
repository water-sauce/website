import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import QuoteBanner from "../components/QuoteBanner";
import ProductInfoBanner from "../components/ProductInfoBanner";
import FAQ from "../components/FAQ";

import quote_rep from "../images/quote-banner/reps/knowledgetree-rep.png";
import quote_logo from "../images/quote-banner/logos/knowledgetree-logo.png";
import quote_quotemark from "../images/quote-banner/quotemarks/quotemark-light.png";

const title = "What is Data Enrichment?";
const description =
    "Data enrichment helps enhance your business. Datanyze improves your CRM with accurate real-time business data including technographic and firmographic data.";

const faqs = [
    {
        id: "q1",
        question: "How can data enrichment help me?",
        answer: (
            <Fragment>
                Using data enrichment will give your team actionable and
                accurate information where they need it most. Technology and
                company intelligence is continuously updated and appended to
                your records so you always have the most current information and
                insights. That means reps spend less time researching and more
                time selling. And in the case of our robust Salesforce
                integration, users can leverage our Alerts custom object, which
                notifies you when prospects add or drop competitive or
                complementary technology solutions.<br />
                <br />And forget the spray-and-pray approach to outreach. At
                Datanyze, we believe context leads to conversion. Our data
                enrichment solution gives your teams all the information they
                need to have more meaningful, personalized conversations with
                prospects. Dozens of data points, presented in custom fields
                within your own CRM and MA instances so reps can stop clicking
                from tab to tab, and start truly connecting with their
                accounts."
            </Fragment>
        )
    },
    {
        id: "q2",
        question: "How much does it cost? ",
        answer: (
            <Fragment>
                Datanyze will enrich and keep records up-to-date in your
                Salesforce, Marketo or HubSpot instance for{" "}
                <Link to="/pricing/data-enrichment">
                    $0.01 per record per month
                </Link>. Additional costs may also include adding API access (or
                increased access for existing users who currently leverage our
                API) with the platform of your choice, as Data Enrichment will
                use our API to update regularly.
            </Fragment>
        )
    },
    {
        id: "q3",
        question: "How does data enrichment work?",
        answer:
            "Powerfully simplistic, data enrichment enhances your CRM and marketing automation platforms with valuable information that drives business success — adding important insights about leads, contacts and accounts in the systems you use every day. Connecting Datanyze to your CRM or marketing automation platform allows data enrichment to append accurate technographic and firmographic data to any record as frequently as every minute. Once integrated, our best-in-class business data is available for use in your current workflows. Setting up data enrichment takes a few minutes."
    },
    {
        id: "q4",
        question: "Does data enrichment integrate with my other systems?",
        answer:
            "Datanyze seamlessly integrates with Salesforce, Marketo and Hubspot (both CRM and marketing automation products). For all other uses, our API can be leveraged to push powerful technographic and firmographic data to your systems."
    },
    {
        id: "q5",
        question: "Can you export data from Datanyze?",
        answer:
            "Depending on your plan, Datanyze Paid users can export information from Datanyze as part of their access to Data Enrichment. This data includes all available technographic and firmographic information on any given domain, and can be exported as a CSV for Data Enrichment on other platforms, so long as users remain paid users of Datanyze. Datanyze export features offer versatile enrichment options to users who decide against directly integrating their existing platforms with Datanyze."
    },
    {
        id: "q6",
        question:
            "Where can I find additional data enrichment resources and reviews?",
        answer: (
            <Fragment>
                <a
                    href="https://support.datanyze.com/hc/en-us/articles/115001279966-Datanyze-to-Salesforce-Integration"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-block"
                >
                    Datanyze Salesforce Integration
                </a>
                <a
                    href="https://launchpoint.marketo.com/datanyze/datanyze-the-leader-in-technographics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-block"
                >
                    Datanyze Marketo Integration
                </a>
                <a
                    href="https://www.hubspot.com/integrations/datanyze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-block"
                >
                    Datanyze Hubspot Integration
                </a>
                <a
                    href="https://resources.datanyze.com/academy/salesforce-integration-use-cases"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-block"
                >
                    5 Ways to Use the Datanyze Salesforce Integration
                </a>
                <a
                    href="https://resources.datanyze.com/academy/quick-wins-marketo-webhook"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-block"
                >
                    3 Quick Wins With Datanyze's Marketo Webhook
                </a>
                <a
                    href="https://resources.datanyze.com/case-studies/uberflip-improves-lead-scoring-and-refines-account-based-process-using-datanyze"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-block"
                >
                    Uberflip Improves Lead Scoring And Refines Account-Based
                    Process Using Datanyze
                </a>
                <a
                    href="https://resources.datanyze.com/blog/how-to-leverage-technology-data-salesforce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="display-block"
                >
                    How to Leverage Technology Data Using Datanyze’s Salesforce
                    Integration
                </a>
            </Fragment>
        )
    }
];

const product_info = [
    {
        outerClass: "below-hero-section",
        title: "CRM Enrichment",
        description:
            "Enrich leads, contacts, accounts and opportunities with a new generation of business data that drives actionable insights for sales and marketing success. Integrate Datanyze with Salesforce, Marketo or HubSpot to append accurate technographic and firmographic data. Sales Intelligence has never been so easy.",
        class1: "col-xs-12 col-sm-6",
        class2: "col-xs-12 col-sm-5 col-sm-offset-1",
        src: require("../images/icons/data-enrichment-icon-1.png"),
        alt: "Business data syncing with HubSpot, Marketo, and Salesforce"
    },
    {
        outerClass: "below-hero-section below-hero-section-grey",
        title: "Real-Time Buying Signals",
        description:
            "Ensure that your sales reps stay on top of their account by surfacing key sales triggers like technology changes, traffic increases or funding rounds.",
        class1: "col-xs-12 col-sm-6 col-sm-push-6",
        class2: "col-xs-12 col-sm-5 col-sm-pull-5",
        src: require("../images/icons/data-enrichment-icon-2.png"),
        alt: "Lighthouse looking for prospect buying signals"
    },
    {
        outerClass: "below-hero-section",
        title: "Technographic Data",
        description:
            "Help your reps understand their prospects' current technology profile by appending Datanyze technographics to every account.",
        class1: "col-xs-12 col-sm-6",
        class2: "col-xs-12 col-sm-5 col-sm-offset-1",
        src: require("../images/icons/data-enrichment-icon-3.png"),
        alt: "Technology stack icon for a website"
    },
    {
        outerClass: "below-hero-section below-hero-section-grey",
        title: "Firmographic Data",
        description:
            "Identify your best prospects with firmographic data you can trust. Gain helpful insights and segment accounts by geographic area, address, industry, revenue, size, technologies used and more. And as your customers evolve, Datanyze automatically updates and enriches your CRM with up-to-date accurate data.",
        class1: "col-xs-12 col-sm-6 col-sm-push-6",
        class2: "col-xs-12 col-sm-5 col-sm-pull-6",
        src: require("../images/icons/data-enrichment-icon-4.png"),
        alt: "Buildings representing firmographic data icon"
    }
];

class DataEnrichmentPage extends Component {
    render(props) {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>
                <ProductInfoBanner product_banners={product_info} />
                <FAQ questions={faqs} title="data enrichment" />
                <QuoteBanner
                    quote_banner="knowledgetree"
                    text_type="text-white"
                    rep_img_src={quote_rep}
                    rep_img_id="knowledgetree-rep"
                    rep_img_alt="Peter Mollins - VP of Marketing, KnowledgeTree"
                    rep_quote="“Datanyze helped us identify the top 20% of accounts most likely to convert, making it easy for sales to hone their efforts.”"
                    rep_quotee="Peter Mollins"
                    rep_title="VP of Marketing, KnowledgeTree"
                    logo_img_src={quote_logo}
                    logo_img_alt="KnowledgeTree logo"
                    quotemark_img_src={quote_quotemark}
                    quote_img_alt="KnowledgeTree quotemark"
                />
            </div>
        );
    }
}

export default DataEnrichmentPage;
