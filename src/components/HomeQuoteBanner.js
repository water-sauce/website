import React from "react";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomerImage from "../components/SuperComponents/CustomerImage";
import CustomerLogo from "../components/SuperComponents/CustomerLogo";
import CustomerQuote from "../components/SuperComponents/CustomerQuote";
import CustomerQuotee from "../components/SuperComponents/CustomerQuotee";
import CustomerQuoteMark from "../components/SuperComponents/CustomerQuoteMark";

function HomeQuoteBanner(props) {
    let section = props.section.map((section, index) => {
        return (
            <div
                className={section.quote_banner_class + " quote-banner"}
                key={index}
            >
                <div
                    className={
                        "quote-image quote-image-" + section.quote_banner
                    }
                />
                <Grid>
                    <Row className="show-grid">
                        <Col
                            xs={12}
                            sm={6}
                            className="quote-section overflow-visible m-t-3"
                        >
                            <div className="vertical-align-middle vertical-align-middle-home-toggle padding-column color-white">
                                <h4 className="h2-title color-white m-b-2">
                                    {section.title}
                                </h4>
                                <CustomerQuote
                                    quote={section.rep_quote}
                                    white={true}
                                />
                                <CustomerQuoteMark
                                    src={section.quotemark_img_src}
                                    alt={section.quote_img_alt}
                                />
                                <CustomerQuotee
                                    quotee={section.rep_quotee}
                                    title={section.rep_title}
                                    extraClass={section.extraClass}
                                />
                                <CustomerLogo
                                    src={section.logo_img_src}
                                    alt={section.logo_img_alt}
                                />
                                <Link
                                    className="button button-primary"
                                    to={section.cta_link}
                                >
                                    {section.cta}
                                </Link>
                            </div>
                        </Col>
                        <Col
                            sm={6}
                            className="quote-section overflow-visible hidden-xs"
                        >
                            <CustomerImage
                                src={section.rep_img_src}
                                alt={section.rep_img_alt}
                                id={section.rep_img_id}
                                extraImgClass="quote-rep-photo"
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    });

    return <div>{section}</div>;
}

export default HomeQuoteBanner;
