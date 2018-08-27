import React from "react";
import { Col, Grid, Thumbnail } from "react-bootstrap";
import { Link } from "react-router-dom";

function Cards(props) {
    let infoCards = props.infoCards.map(infoCard => (
        <Col
            xs={12}
            sm={6}
            md={infoCard.md}
            className="cards-wrapper"
            key={infoCard.type}
        >
            <div className="cards text-align-center-ipad">
                <img
                    src={infoCard.src}
                    alt={infoCard.type + " logo"}
                    id={infoCard.type}
                />
                <h3>{infoCard.title}</h3>
                <p>{infoCard.description}</p>
            </div>
        </Col>
    ));

    return <Grid className={`cards-${props.extraClass}`}>{infoCards}</Grid>;
}

export default Cards;
