import React from "react";
import { Col, Grid } from "react-bootstrap";
import { Link } from "react-router-dom";

function HomeCards(props) {
    let services = props.services.map((service, index) => (
        <Col xs={12} sm={6} md={4} className="cards-wrapper"  key={index}>
            <Link to={service.link} className={"home-card home-card-" + index}>
                <div className="button-wrap">
                    <h3 className="banner-title text-align-center-ipad">
                        {service.title}
                    </h3>
                    <span className="button button-true-blue margin-zero-auto">
                        Learn More
                    </span>
                </div>
                <img src={service.src} />
            </Link>
        </Col>
    ));

    return <Grid className="cards-home">{services}</Grid>;
}

export default HomeCards;
