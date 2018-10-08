import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

class Dictionary extends Component {
    render(props) {
        return (
            <section className="definition-section">
                <Grid>
                    <Row>
                        <Col xs={12} smOffset={2}>
                            <h2><dfn title="water sauce">Water Sauce</dfn></h2>
                            <p><i>noun</i>  |  wah-ter, saws</p>
                            <ol>
                                <li>A full service digital design agency that elevates brands and achieves the spectacular.</li>
                                <li>The perfect blend of making your product a need and a want.</li>
                            </ol>
                        </Col>
                    </Row>
                </Grid>
            </section>
        );
    }
}

export default Dictionary;
