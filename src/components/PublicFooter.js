import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Grid } from "react-bootstrap";
import PageLinks from "../routers/PageLinks";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

const CurrentYear = new Date().getFullYear();

const Footer = props => (
    <footer className="public-footer">
        <div className="footer-map" />
        <Grid>
            <Row>
                {Object.keys(PageLinks).map(section_name => {
                    return (
                        <Col xs={6} sm={2} key={section_name}>
                            <ul>
                                <li>{section_name}</li>
                                {PageLinks[section_name].map(ref => (
                                    <li key={ref.name}>
                                        {ref.type === "link" ? (
                                            <Link to={ref.link}>
                                                {ref.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={ref.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {ref.name}
                                            </a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </Col>
                    );
                })}
                <Col xs={6} sm={2}>
                    <ul>
                        <li>Contact Us</li>
                        <li>
                            Sales:{" "}
                            <a href="tel:1-650-393-5177">+1 650 393 5177</a>{" "}
                        </li>
                        <li>
                            Support:{" "}
                            <a href="mailto:support@datanyze.com?Subject=Hello%20Datanyze">
                                support@datanyze.com
                            </a>
                        </li>
                        <br />
                        <li>Address:</li>
                        <li className="footer-info">4 W 4th Ave, Suite 501</li>
                        <li className="footer-info">San Mateo, CA 94402</li>
                    </ul>
                </Col>
            </Row>
            <hr />
            <Row id="omega-section">
                <Col xs={12}>
                    <ul className="copyright-footer">
                        <li className=" preserve-text margin-zero">
                            ©{CurrentYear} Datanyze. All rights reserved.
                        </li>
                        <li>
                            | <a href="/privacy">Privacy</a>
                        </li>
                        <li>
                            | <a href="/tos">Terms</a>
                        </li>
                        <li>
                            | <a href="/site-map">Site Map</a>
                        </li>
                    </ul>
                    <ul className="social-links-footer">
                        <li className="inline-block">
                            <a
                                href="https://www.linkedin.com/company/datanyze-inc."
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    size="2x"
                                    icon={["fab", "linkedin"]}
                                />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="http://feeds.feedburner.com/datanyze/niRP"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon size="2x" icon="rss" />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="https://www.google.com/+Datanyze"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    size="2x"
                                    icon={["fab", "google-plus"]}
                                />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="https://www.twitter.com/datanyze"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    size="2x"
                                    icon={["fab", "twitter"]}
                                />
                            </a>
                        </li>
                        <li className="inline-block">
                            <a
                                href="https://www.facebook.com/datanyze"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon
                                    size="2x"
                                    icon={["fab", "facebook"]}
                                />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Grid>
    </footer>
);

export default Footer;
