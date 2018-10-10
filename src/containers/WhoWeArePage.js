import React, { Component } from "react";
import { Helmet } from "react-helmet";
import { Grid, Row, Col } from "react-bootstrap";

import kevin from '../images/photos/kevin.jpg';

const title = "Water Sauce | About Us Page";
const description = "Water Sauce is an agency that helps every company become both a need and a want to its target audience.";

class WhoWeArePage extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>{title}</title>
                    <link rel="canonical" href="https://www.watersauce.com/who-we-are" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                </Helmet>

                <div className="filler" />
                
                <section className="sub-hero-about">
                    <Grid>
                        <Row>
                            <Col xs={12} sm={4} md={6}>
                                <img src={kevin} alt="Kevin the cat" />
                                
                            </Col>
                            <Col xs={12} sm={8} md={6}>
                                <p>
                                Headquartered in San Francisco, we are a team of bold, passionate, and idealistic thinkers who understand the ever changing environment of… have you fallen asleep yet? We don’t want to waste your time with meaningless fluff. And lets be real, we know what you’re thinking, “OK, it’s a full service design agency… but what does Water Sauce even mean?”<br/><br/>

                                At Water Sauce, we recognize the core economic philosophy that all products fall into two categories: needs & wants. Needs are things one has to do in order to survive while wants are what one desires to live more comfortably. If your product is bottled water, you are in the “need” business. If you make gourmet sauce, you are in the “want” business.<br/><br/>

                                We build brands that transcend these categories. Whether your product is a need or want, we want your end users to feel both. You need to stay hydrated to survive but also want that awesome brand of bottled water. You want to taste that delicious sauce but also need it- food has become too bland without it! Once your brand becomes a Water Sauce, you’re delivering something truly unforgettable to your customers.
                                </p>
                            </Col>
                        </Row>
                    </Grid>
                </section>

            </div>
        );
    }
}

export default WhoWeArePage;
