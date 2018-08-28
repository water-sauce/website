import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import HeroLeftBanner from "../components/HeroLeftBanner";
import ProductInfoBanner from "../components/ProductInfoBanner";

import FAQ from "../components/FAQ";
import ContactBanner from "../components/ContactBanner.js";

const bannerStyle = {
    background: "#2b3644",
    padding: "2rem",
    textAlign: "center",
    color: "white"
};

const bannerMessage = {
    fontStyle: "italic",
    fontSize: "24px",
    fontWeight: "200",
    lineHeight: "32px"
};

const product_info_1 = [
    {
        outerClass: "below-hero-section",
        title: "Every business runs on technology.",
        description:
            "The tools and applications companies use provides insight into their tech buying habits, how they work, the challenges they face and what tech they’ll buy next. For technology providers, technographics is your lens into this world. This data provides a competitive advantage for your business.",
        class1: "col-xs-12 col-sm-5 col-sm-push-7",
        class2: "col-xs-12 col-sm-7 col-sm-pull-5",
        alt: "Business data syncing with HubSpot, Marketo, and Salesforce"
    }
];

const product_info_2 = [
    {
        outerClass: "below-hero-section below-hero-section-technographics",
        hideMark: true,
        description:
            "Many technology companies still rely on firmographics data (company size, vertical, location) and demographics data (contact title, work history, social handles) to identify sales targets, to identify ideal customer profiles, total addressable markets and craft marketing messaging. But these data sets don’t tell much about how your prospects work, what tech they use and buy, or what keeps them up at night. Without this context, you’re forced to operate blindly. Companies don’t want to target and sell solutions to prospects who won’t buy. Technographics data solves these business problems.",
        class1: "col-xs-12 col-sm-5",
        class2: "col-xs-12 col-sm-7",
        alt:
            "A person confused about sales prospecting without the context of technographics"
    },
    {
        outerClass:
            "below-hero-section below-hero-section-grey below-hero-section-technographics",
        hideMark: true,
        description:
            "Many technology companies still rely on firmographics data (company size, vertical, location) and demographics data (contact title, work history, social handles) to identify sales targets, to identify ideal customer profiles, total addressable markets and craft marketing messaging. But these data sets don’t tell much about how your prospects work, what tech they use and buy, or what keeps them up at night. Without this context, you’re forced to operate blindly. Companies don’t want to target and sell solutions to prospects who won’t buy. Technographics data solves these business problems.",
        class1: "col-xs-12 col-sm-5 col-sm-push-7",
        class2: "col-xs-12 col-sm-7 col-sm-pull-5",
        alt: "Technographics helps a user understand context and content"
    }
];

const faqs = [
    {
        id: "q1",
        question: "What are technographics?",
        answer:
            "Technographics is a unique and powerful data set that consists of real-time insights based on a company's technology choices and buying signals. Technographics help you find great accounts, engage them in timely, value-driven conversations, and convert them into customers."
    },
    {
        id: "q2",
        question: "How do I use technographics data?",
        answer: (
            <Fragment>
                <b>Marketing</b>
                <br />
                <i>Inbound Marketing and Technographics</i>: Add technographic
                data to any marketing automation platform to enrich inbound
                leads as soon as they submit a form. Once enriched, you can
                segment and nurture leads based on the technologies they use and
                trigger sales notifications when a technology is added or
                dropped.<br />
                <br />
                <i>Account Based Marketing (ABM) and Technographics</i>: Combine
                technographics with{" "}
                to find new and existing accounts that look like your ideal
                customer profile (ICP). Technographics customer profiling helps
                your marketing and sales teams work in a data-driven manner.
                Identify which accounts are most likely to buy by responding to
                buying signals like technology changes, funding rounds and
                company news.<br />
                <br />
                <i>Technographics and Total Addressable Market (TAM)</i>: Use
                technographics data to better identify your total addressable
                market. Tech usage data can identify what companies use specific
                technologies and provide a profile of those organizations. You
                can then identify all other companies that meet the same
                criteria and combine it with firmographic data as well (size,
                revenue, location, etc.). Your total addressable market is more
                accurate and extensive when combined with data models that
                contain technographic data.<br />
                <br />
                <b>Sales</b>
                <br />
                <i>Technographics and Sales Teams</i>: Find and engage accounts
                that use competitive or complementary technologies. Want to
                destroy your competition? Find out who uses your competitor’s
                products and target them. Receive alerts and find out when
                someone adds or drops your competitors technology. Use{" "}
                <Link to="/data-enrichment" target="_blank">
                    data enrichment
                </Link>{" "}
                with CRM records so you can craft pitches that fit with every
                prospect and the solutions they use. Get notified when one of
                your accounts changes technology providers or exhibits other
                buying signals like raising a funding round or opening a new
                office. Combine technographic data with high-quality contact
                data to improve sales development efficiency.<br />
                <br />
                <b>Customer Success</b>
                <br />
                Spot churn risks ahead of time by identifying customers that are
                testing out a technology provider you compete with. Understand
                which customers are strong candidates for upsell based on buying
                signals like technology changes, funding rounds and company
                news. Combine technographics with predictive analytics to
                identify customers with the highest lifetime value.<br />
                <br />
                <b>Business Intelligence</b>
                <br />
                Technographic data is highly valuable for business intelligence
                teams. BI teams can mitigate risks and help their business make
                smart decisions by gathering insights on technology deployments
                around the world or across verticals. With tech usage data, BI
                teams can identify the growth or reduction between different
                customer profiles and their tech purchasing behavior. This data
                can provide data-driven insights on whether a product or R&D
                team should invest in one innovation or pivot to a new
                direction. Adding this data to other data models allows their
                organization to have a better understanding of competition,
                customers, and market opportunities."
            </Fragment>
        )
    },
    {
        id: "q3",
        question: "How to collect technographic data?",
        answer: (
            <Fragment>
                As the leading technographic data company, Datanyze analyzes
                over 35M domains every single day. The Datanyze technographic
                SaaS platform uses several data collection tactics, some listed
                here. The primary methods for collecting technographic data are
                scanning the web using a combination of web crawling, third
                party providers and natural language processing.<br />
                <br />
                <b>Domain Analysis &amp; Web Crawling</b>
                <br />
                Most technologies leave behind a footprint or “signature” that
                helps the crawler identify it from other elements of a website
                or mobile app. Here are a few examples:
                <table className="table table-standard">
                    <thead>
                        <tr>
                            <th>Technology</th>
                            <th>Signature</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>WordPress</td>
                            <td>
                                meta name="generator" content="WordPress..."
                            </td>
                        </tr>
                        <tr>
                            <td>Google Analytics</td>
                            <td>".google-analytics.com/ga.js";</td>
                        </tr>
                        <tr>
                            <td>Marketo</td>
                            <td>src="//munchkin.marketo.net/147"</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <br />
                By finding and cataloging these signatures across millions of
                sites, you can see which companies are using a given technology.
                And better yet -- if the crawler checks each site daily, you can
                take note of when certain technologies appear or disappear.
                These technology “adds” and “drops” are important buying signals
                because they often indicate an immediate or upcoming technology
                change. Imagine knowing exactly when one of your target accounts
                drops a competitor. You now know the right time to reach out,
                and the necessary context to have a meaningful conversation.<br />
                <br />Natural Language Processing (NLP) is an additional method
                for collecting technographic data.
            </Fragment>
        )
    },
    {
        id: "q4",
        question: "What is Natural Language Processing?",
        answer: (
            <Fragment>
                <b>Natural Language Processing (NLP)</b>
                <br /> For technologies that leave no footprint (think
                databases, CRMs and other solutions), natural language
                processing provides an alternative method for identifying
                deployment. This involves scanning and digesting the world of
                unstructured data -- text from job postings, social media, press
                releases and more -- to infer a relationship between a company
                and particular technology.<br />
                <br />
                For example, a job posting for “Salesforce Admin” that appears
                on a company’s careers page indicates that this company is using
                Salesforce for its CRM. The world of unstructured data is vast,
                so this method calls for complex keyword targeting and an eye
                for detail.<br />
                <br />
                Other collection methods like customer surveys and crowdsourcing
                can also produce results. These methods are typically used to
                supplement crawling and NLP because they are often challenging
                to keep updated."
            </Fragment>
        )
    },
    {
        id: "q5",
        question: "Is Datanyze the top technographics company?",
        answer: (
            <Fragment>
                Datanyze is the leading technographics company, analyzing over
                35M companies daily and delivering technographic, firmographic
                and demographic data to over 45,000 top sales, marketing and
                business intelligence team members around the world. Datanyze
                was named{" "}
                <a
                    href="https://resources.datanyze.com/blog/gartner-names-datanyze-a-cool-vendor"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    > Cool Vendor
                </a>{" "}
                by{" "}
                <a
                    href="https://blogs.gartner.com/todd-berkowitz/20160420-cool-vendors/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    > Gartner
                </a>{" "}
                in 2016. Headquartered in Silicon Valley, Datanyze analyzes more
                digital usage habits and technologies than any company in the
                industry. In addition, our technographic SaaS software is fully
                integrated with CRM and marketing automation platforms."
            </Fragment>
        )
    },
    {
        id: "q6",
        question:
            "Is there a difference between technographics and digital usage habits?",
        answer:
            "Technographic data are insights on specific technologies that a company purchases, adds and drops. Digital usage habits refers to the utilization of digital platforms and technologies. This can include social media platforms, engagement patterns and usage models that include time, location, duration, and demographics of users. Technographics data is primarily focused on applications and IT in both digital and non digital environments. For example, Datanyze can look at on-premise (digital and SaaS technologies) as well as premium off-premise technologies such as servers, CRMs, ERPs and other technology."
    },
    {
        id: "q7",
        question: "Who uses Technographics? ",
        answer: (
            <Fragment>
                At Datanyze, over 45,000 marketing, sales and BI team members
                from top brands use technographic data each day. These include
                companies like{" "}
                <a
                    href="https://www.marketo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Marketo
                </a>,{" "}
                <a
                    href="https://www.salesforce.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Salesforce
                </a>,{" "}
                <a
                    href="https://www.hubspot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Hubspot
                </a>,{" "}
                <a
                    href="https://www.outreach.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Outreach
                </a>,{" "}
                <a
                    href="https://www.kissmetrics.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Kissmetrics
                </a>,{" "}
                <a
                    href="https://www.zendesk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Zendesk
                </a>,{" "}
                <a
                    href="https://www.uberflip.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Uberflip
                </a>,{" "}
                <a
                    href="https://dyn.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Dyn
                </a>{" "}
                and thousands of other notable brands. For details on how they
                use technographics, visit our{" "}
                <a
                    href="https://resources.datanyze.com/case-studies"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    technographics case studies
                </a>.
            </Fragment>
        )
    },
    {
        id: "q8",
        question: "Where can I find additional resources on technographics?",
        answer: (
            <Fragment>
                <Link
                    className="display-block"
                    to="/technographic-analysis"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Free Technographic Data Analysis
                </Link>
                <a
                    className="display-block"
                    href="https://www.slideshare.net/jbernoff/social-technographics-explained"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Social Technographics Explained
                </a>
                <a
                    className="display-block"
                    href="https://www.trustradius.com/products/datanyze/reviews"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Technographic Software Reviews
                </a>
                <a
                    className="display-block"
                    href="https://www.capterra.com/p/130387/Datanyze/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Technographic Data Solution Reviews
                </a>
                <a
                    className="display-block"
                    href="https://resources.datanyze.com/sales-development/how-to-divide-sales-territories-using-technographics"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    How to Divide Sales Territories with Technographics
                </a>
                <a
                    className="display-block"
                    href="https://www.datanyze.com/market-share"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Using Data, See Market Share for Technology Companies
                </a>
                <a
                    className="display-block"
                    href="https://resources.datanyze.com/sales-operations/marketing-data-to-accurately-score-leads"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    The Technographic Data Marketing Needs to Qualify Leads
                </a>
                <a
                    className="display-block"
                    href="https://www.inc.com/jonathan-lacoste/balancing-demographic-psychographic-amp-technographic-data-to-deliver-personaliz.html"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Balancing Technographic and Demographic Data to Score Leads
                </a>
                <a
                    className="display-block"
                    href="https://resources.datanyze.com/webinars-and-ebooks/the-modern-ways-big-brands-qualify-accounts-and-leads"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    VIDEO: How Big Brands Qualify with Technographics
                </a>
            </Fragment>
        )
    }
];

const TechnographicsPage = () => (
    <div>
        <HeroLeftBanner
            title="Introduction to Technographics"
            description={
                <Fragment>
                    New to using technographics? Get up to speed on how B2B
                    companies are applying technographic data to their sales and
                    marketing efforts. To see how companies win with
                    technographic data, <a href="#">see a demo</a> of Datanyze.
                </Fragment>
            }
            src={}
            alt="Technographics icon"
            left_col_md={8}
            right_col_md={4}
            right_col_class="text-align-center"
            img_src={}
            include_cta={true}
            cta="Contact Us"
            cta_contact_us_class="m-t-1"
        />
        <ProductInfoBanner product_banners={product_info_1} />
        <div style={bannerStyle}>
            <h4 style={bannerMessage}>
                Technographics: Insights on a company’s current technology
                choices combined with buying signals that indicate future
                technology needs.
            </h4>
        </div>
        <ProductInfoBanner product_banners={product_info_2} />
        <FAQ questions={faqs} title="technographics" />
        <ContactBanner
            title="Ready to try technographics?"
            description="Get in touch with a Datanyze rep today!"
            cta="Contact Us"
            cta_type="contact_us"
            cta_contact_us_class="button-white"
            showPhoneNumber={true}
        />
    </div>
);

export default TechnographicsPage;
