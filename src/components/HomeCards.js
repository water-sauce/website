import React from "react";
import { Row, Col, Grid } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeCards(props) {
    let services = props.services.map((service, index) => (
        <Col xs={12} sm={6} md={4} className="cards-wrapper" key={index}>
            <Link to={service.link} className={"home-card home-card-" + index}>
                <h2 className="banner-title white">
                    {service.title}
                </h2>
                <img src={service.src} alt="Water Sauce services"/>
            </Link>
        </Col>
    ));

    return <Grid className="cards-home">
        {props.src ? <img src={props.src} alt={props.alt} id={props.img_id} /> : ""}
        <h3>Our Design &amp; Marketing Services</h3>
        <Row>
        {services}
        </Row>
    </Grid>;
}

export default HomeCards;