import React from "react";
import { Col } from "react-bootstrap";

function PortfolioInfoSection(props) {
    console.log( props );

    let information = props.information.map((info, index) => {
        return <div key={info + index}>
            <h3>{info.title}</h3>
            {info.description}
        </div>
    });

    return <Col xs={12} sm={6} className="portfolio-info">
        {information}
    </Col>;
}

export default PortfolioInfoSection;