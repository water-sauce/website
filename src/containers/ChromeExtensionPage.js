import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Grid, Row, Col } from "react-bootstrap";

import HeroServicesBanner from "../components/HeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import PortfolioNumbersSection from "../components/PortfolioNumbersSection";
import PortfolioInfoSection from "../components/PortfolioInfoSection";

import cx_1 from '../images/portfolio/chrome-extension-before.jpg';
import cx_2 from '../images/portfolio/chrome-extension-after.jpg';
import cx_3 from '../images/portfolio/cx_3.png';
import cx_4 from '../images/portfolio/cx_4.png';
import cx_5 from '../images/portfolio/cx_5.png';

const title = "Water Sauce | About Us page";
const description = "Water Sauce is a digital design agency that makes brands extraordinary. We help everyday companies and products become both a need and a want with its target audience.";


const project_info_1 = [
    {
        title: "My Role",
        description: <Fragment><p>As the lead front-end developer and eventual lead designer in an ever-evolving product, it was important to plan ahead and visualize where the product would end up after several iterations. We wanted to add more and more data points with the knowledge that thousands of users would be impacted. Any change would have to allow the data to be easy to digest and access. We had to create a design system that was scalable.</p></Fragment>
    }
]
const project_info_2 = [
    {
        title: "Technologies Used",
        description: <Fragment><p>Javascript, jQuery, PHP, CSS3, HTML</p></Fragment>
    },
    {
        title: "The Goals",
        description: <Fragment>
            <ol>
                <li>Redesign and build the Chrome Extension to take on more data</li>
                <li>Enable users to focus on the data they want</li>
                <li>Focus on upsells via a freemium model</li>
            </ol>
        </Fragment>
    }
]

const product_info = [
    {
        title_block: "The Process",
        description: (
            <Fragment>
            The design team teamed up with Marketing and Customer Success to see how the Chrome Extension was being used. We wanted to get a full understanding of how users were using the tool as a supplement in their prospecting work flow. We had known for a while that our Chrome Extension was being used by hundreds of sales and marketeers everyday, but had been highly under-valued within the company.
            </Fragment>
        )
    },
    {
        title_block: "Put Firmographics At the Forefront",
        description: (
            <Fragment>
            We decided to focus on building out the Chrome Extension to be “tabbed” allowing for future data sets to slide right in. Making it modular was essential. We interviewed and gathered feedback from current customers, discovering that most of them were using it for the firmographics. We had to create a design system that removed noise and would allow the user to chose the tool of their preference.
            </Fragment>
        )
    }
];

const product_info_2 = [
    {
        title_block: "The Results",
        description: (
            <Fragment>
            With over 48,000+ users and 4.5+ stars in the Google Chrome Store, it took a complete team effort to promote this very powerful tool. Today, the current iteration of the Chrome Extension is still running successfully and has 7 data tabs (Firmographics, Technographics, Employees, Tweets, Salesforce, SEO, In the News).
            </Fragment>
        )
    }
]

class ChromeExtensionPage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/chrome-extension" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta property="og:url" content="https://www.watersauce.com/chrome-extension" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>
                
                <main>
                    
                    <div className="portfolio-info-section">
                        <Grid>
                            <h2>The Scope</h2>
                            <Row>
                                <PortfolioInfoSection information={project_info_1} />
                                <PortfolioInfoSection information={project_info_2} />
                            </Row>
                        </Grid>
                    </div>
                    <Grid className="padding-info">
                        <Row>
                            <Col xs={12} sm={6}>
                                <h5>Before</h5>
                                <img src={cx_1} alt="Datanyze Market Share Chrome Extension - Before" className="portfolio-screenshots" />
                            </Col>
                            <Col xs={12} sm={6}>
                                <h5>After</h5>
                                <img src={cx_2} alt="Datanyze Market Share Chrome Extension - After" className="portfolio-screenshots" />
                            </Col>
                        </Row>
                    </Grid>
                    <div className="light-grey-bg p-1px">
                        <InfoBanner product_banners={product_info} color="true-blue" />
                    </div>
                    <div className="image-row m-t-2">
                        <img src={cx_3} alt="Datanyze Market Share Versus Page" className="first-img" />
                        <img src={cx_4} alt="Datanyze Market Share Landing Page"  />
                        <img src={cx_5} alt="Datanyze Market Share Landing Page"  />
                    </div>
                    <InfoBanner product_banners={product_info_2} color="true-blue" />
                </main>

            </div>
        );
    }
}

export default ChromeExtensionPage;
