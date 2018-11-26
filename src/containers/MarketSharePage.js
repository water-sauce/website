import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Grid, Row, Col } from "react-bootstrap";

import HeroServicesBanner from "../components/HeroServicesBanner";
import InfoBanner from "../components/InfoBanner";
import PortfolioNumbersSection from "../components/PortfolioNumbersSection";
import PortfolioInfoSection from "../components/PortfolioInfoSection";


import ms_1 from '../images/portfolio/single-tech-before.jpg';
import ms_2 from '../images/portfolio/single-tech-after.jpg';
import ms_3 from '../images/portfolio/ms-versus.png';
import ms_4 from '../images/portfolio/landing.png';

const title = "Water Sauce | About Us page";
const description = "Water Sauce is a digital design agency that makes brands extraordinary. We help everyday companies and products become both a need and a want with its target audience.";

const numbers = [
    {
        title: "Page Views",
        stat: "+17%"
    },
    {
        title: "Sign Ups",
        stat: "+12%"
    },
    {
        title: "Session Time",
        stat: "+1.4 sec"
    },
    {
        title: "Bounce Rate",
        stat: "-8%"
    },
]

const project_info_1 = [
    {
        title: "My Role",
        description: <Fragment><p>I played the role of project manager and main developer. It started with a conversation between our Marketing Manager and I. He wanted to revamp these pages, but due to other features being ahead in the Product pipeline, it was not a high priority. I sat down with him and our VP of Product to create an overall vision of what we wanted to accomplish. We came up with a game plan to introduce more graphs, improve the overall user flow, and create stronger CTAs.</p></Fragment>
    }
]
const project_info_2 = [
    {
        title: "Technologies Used",
        description: <Fragment><p>Javascript, D3, jQuery, PHP, CSS3, HTML</p></Fragment>
    },
    {
        title: "The Goals",
        description: <Fragment>
            <ol>
                <li>Visualize the data in a more compelling way</li>
                <li>Give potential customers insight without revealing too much</li>
                <li>Make sure the pages are responsive and look good on Mobile</li>
            </ol>
        </Fragment>
    }
]

const product_info = [
    {
        title_block: "The Process",
        description: (
            <Fragment>
            The first thing we needed to do was to define and understand the scope of the project. What were the main goals, how were changes going to affect SEO, and what elements could we improve upon. I printed out pages for the 4 different page types and started to go over each element with Marketing and Product to see what was still necessary.
            <br />
            <br />
            After that, it was a matter of understanding which components could be reused and restyled and what needed to be built. It was also important that we build an ideal user flow that was consistent and increased the likelihood of sign ups.
            </Fragment>
        )
    },
    {
        title_block: "Entice with Data Visualization",
        description: (
            <Fragment>
            I ran a small User Feedback session for the mock ups and gathered information on which data points were most important. For us, it was evident that we needed a modern JS library to let the data tell a story in a more compelling way. I knew that D3.js would be perfect for implementing and Improving the visuals. D3 was a relatively newer library at the time, and because the charts are built in SVGs, it seemed like the best JS library to build with. I implemented a variety of Pie Charts, Donut Charts, and Bar Graphs.
            </Fragment>
        )
    }
];

const product_info_2 = [
    {
        title_block: "The Results",
        description: (
            <Fragment>
            The redesign proved easier to navigate and the numbers were able to back up our research and assumptions. It was an all-around success that involved every team pitching in.
            </Fragment>
        )
    }
]

class MarketSharePage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/market-share" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta property="og:url" content="https://www.watersauce.com/market-share" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                </Helmet>
                
                <main>
                    
                    <div className="portfolio-info-section">
                        <Grid>
                            <h2>The Impact</h2>
                            <Row>
                                <PortfolioNumbersSection numbers={numbers} />
                            </Row>
                            <hr />
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
                                <img src={ms_1} alt="Datanyze Market Share Technologies Page - Before" className="portfolio-screenshots" />
                            </Col>
                            <Col xs={12} sm={6}>
                                <h5>After</h5>
                                <img src={ms_2} alt="Datanyze Market Share Technologies Page - After" className="portfolio-screenshots" />
                            </Col>
                        </Row>
                    </Grid>
                    <div className="light-grey-bg p-1px">
                        <InfoBanner product_banners={product_info} color="true-blue" />
                    </div>
                    <div className="image-row m-t-2">
                        <img src={ms_3} alt="Datanyze Market Share Versus Page" className="first-img" />
                        <img src={ms_4} alt="Datanyze Market Share Landing Page"  />
                    </div>
                    <InfoBanner product_banners={product_info_2} color="true-blue" />
                </main>

            </div>
        );
    }
}

export default MarketSharePage;
