import React from "react";
import { Col, Grid } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeCards(props) {
    let services = props.services.map((service, index) => (
        <Col xs={12} sm={6} md={4} className="cards-wrapper" key={index}>
            <Link to={service.link} className={"home-card home-card-" + index}>
                <div className="button-wrap">
                    <h2 className="banner-title text-align-center-ipad white">
                        {service.title}
                    </h2>
                </div>
                <img src={service.src} alt="Water Sauce services"/>
            </Link>
        </Col>
    ));

    return <Grid className="cards-home"><h4>Our Services</h4>{services}</Grid>;
}

export default HomeCards;


// <span className="button button-true-blue margin-zero-auto">
//     Learn More
// </span>