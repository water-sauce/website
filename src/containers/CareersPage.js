import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import H2Title from "../components/SuperComponents/H2Title";

const iframeStyling = {
    width: "100%",
    border: "0",
    overflow: "hidden"
};


class CareersPage extends Component {
    render() {
        return (
            <div className="under-banner-padding">
                <H2Title title={"Perks & Benefits"} />
            </div>
        );
    }
}

export default CareersPage;
