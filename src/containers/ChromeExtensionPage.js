import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Grid, Row, Col } from "react-bootstrap";

import InfoBanner from "../components/InfoBanner";
import PortfolioInfoSection from "../components/PortfolioInfoSection";

import cx_1 from '../images/portfolio/chrome-extension-before.jpg';
import cx_2 from '../images/portfolio/chrome-extension-after.jpg';
import cx_3 from '../images/portfolio/cx_3.png';
import cx_4 from '../images/portfolio/cx_4.png';
import cx_5 from '../images/portfolio/cx_5.png';

const title = "Water Sauce | Datanyze Chrome Extension Design";
const description = "Calvin Jhunjhnuwala | A focus on a product I designed and developed while working at Datanyze | Chrome Extension";


const project_info_1 = [
    {
        title: "My Role",
        description: <Fragment><p>As the lead front-end developer and eventual lead designer in an ever-evolving product, it was important to have a vision of where the product would end up after several iterations. We wanted to add more and more data points while very aware that thousands of users would be impacted. Any change would need every data point to be easy to access and digest. We had to create a design system that was scalable.</p></Fragment>
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
                <li>Redesign and build the Chrome Extension to take on more data points</li>
                <li>Enable users to focus on the data set they want</li>
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
            Design teamed up with Marketing and Customer Success to see how the Chrome Extension was being used.  We had known for a while that our Chrome Extension was being used by hundreds of sales and marketeers everyday. We wanted to get a full understanding of how users were using the tool as a supplement in their prospecting work flow. We spoke with power users and newly on-boarded to get their feedback on the current iteration.
            </Fragment>
        )
    },
    {
        title_block: "Put Firmographics At the Forefront",
        description: (
            <Fragment>
            After interviewing and gathering feedback, we discovered that most of our users were using the Chrome Extension for the firmographics data. We decided to focus on building out the Chrome Extension to be “tabbed” allowing for future data sets to slide right in. Additionally, this would allow the user to chose the data set of their preference while removing unnecessary noise.
            </Fragment>
        )
    }
];

const product_info_2 = [
    {
        title_block: "The Results",
        description: (
            <Fragment>
            It took a complete team effort to promote this very powerful tool, but the results paid off. The overall star rating in the Google Chrome Store rose by 0.3 to 4.4 over a year period. Today, the current iteration of the Chrome Extension is still running successfully with over 48,000+ users and 7 data tabs (Firmographics, Technographics, Employees, Tweets, Salesforce, SEO, In the News).
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
