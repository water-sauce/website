import { connect } from "react-redux";
import ProductInfoBanner from "../components/ProductInfoBanner";

const product_info = [
    {
        outerClass: "below-hero-section",
        title: "CRM Enrichment",
        description:
            "Enrich leads, contacts, accounts and opportunities with a new generation of business data that drives actionable insights for sales and marketing success. Integrate Datanyze with Salesforce, Marketo or HubSpot to append accurate technographic and firmographic data. Sales Intelligence has never been so easy.",
        class1: "col-xs-12 col-sm-6 col-sm-push-6",
        class2: "col-xs-12 col-sm-5 col-sm-pull-6",
        src: require("../images/icons/data-enrichment-icon-1.png"),
        alt: "Business data syncing with HubSpot, Marketo, and Salesforce"
    },
    {
        outerClass: "below-hero-section below-hero-section-grey",
        title: "Real-Time Buying Signals",
        description:
            "Ensure that your sales reps stay on top of their account by surfacing key sales triggers like technology changes, traffic increases or funding rounds.",
        class1: "col-xs-12 col-sm-6 col-sm-push-6",
        class2: "col-xs-12 col-sm-5 col-sm-pull-6",
        src: require("../images/icons/data-enrichment-icon-2.png"),
        alt: "Lighthouse looking for prospect buying signals"
    },
    {
        outerClass: "below-hero-section",
        title: "Technographic Data",
        description:
            "Help your reps understand their prospects' current technology profile by appending Datanyze technographics to every account.",
        class1: "col-xs-12 col-sm-6 col-sm-push-6",
        class2: "col-xs-12 col-sm-5 col-sm-pull-6",
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

const mapStateToProps = state => {
    return {
        product_banners: product_info
    };
};

export default connect(mapStateToProps)(ProductInfoBanner);
