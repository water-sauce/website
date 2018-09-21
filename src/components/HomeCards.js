import React from "react";
import { Col, Grid } from "react-bootstrap";
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
        <h3>Our Design &amp; Marketing Services</h3>
        <p>Water Sauce is a full service digital design agency. Our clients are our partners — we are invested in their success and look to form lasting relationships. <br/> Find out more about the services our team offers.</p>
        {services}
    </Grid>;
}

export default HomeCards;


// <span className="button button-true-blue margin-zero-auto">
//     Learn More
// </span>