import React from "react";
import { Col } from "react-bootstrap";

function PortfolioNumbersSection(props) {
    let numbers = props.numbers.map((number, index) => (
        <Col xs={6} sm={3} className="portfolio-numbers" key={index}>
            <h4>{number.title}</h4>
            <p>{number.stat}</p>
        </Col>
    ));

    return numbers;
}

export default PortfolioNumbersSection;