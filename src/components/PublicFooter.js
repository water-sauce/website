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
                            <a href="mailto:calvin@watersauce.com?Subject=Hello%20Water%20Sauce">
                                calvin@watersauce.com
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
            <hr />
            <Row id="omega-section">
                <Col xs={12}>
                    <ul className="copyright-footer">
                        <li className=" preserve-text margin-zero">
                            ©{CurrentYear} Water Sauce, LLC. All rights reserved.
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
                    </ul>
                </Col>
            </Row>
        </Grid>
    </footer>
);

export default Footer;
