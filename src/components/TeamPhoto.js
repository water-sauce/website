import React from "react";
import { Grid, Col } from "react-bootstrap";

function TeamPhoto(props) {
    let Teammates = props.teammates.map((teammate, index) => {
        return (
            <Col xs={12} sm={6} md={3} key={index} className="datanyzer">
                <div>
                    <p className="about-name">{teammate.employee_name}</p>
                    <p className="about-title">{teammate.employee_title}</p>
                </div>
            </Col>
        );
    });

    return <Grid>{Teammates}</Grid>;
}

export default TeamPhoto;
