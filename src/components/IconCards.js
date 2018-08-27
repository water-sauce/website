import React from "react";
import { Col, Grid } from "react-bootstrap";
import { Link } from "react-router-dom";
import BlueAccent from "../components/SuperComponents/BlueAccent";

function IconCards(props) {
    let infoCards = props.infoCards.map((infoCard, index) => (
        <Col xs={12} sm={6} md={4} key={index} className="text-align-center">
            <div className="p-1-2 cards">
                <img
                    src={infoCard.src}
                    id={`tech_analysis_icon_` + infoCard.step}
                />
                <h2 className="uppercase-small-bold text-align-center m-b-1 ">
                    {infoCard.step}. {infoCard.instruction}
                </h2>
                <BlueAccent class="m-y-1-auto" />
                <p>{infoCard.description}</p>
            </div>
        </Col>
    ));

    return <Grid className="m-b-2">{infoCards}</Grid>;
}

export default IconCards;
