import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import CustomerImage from "../components/SuperComponents/CustomerImage";
import CustomerLogo from "../components/SuperComponents/CustomerLogo";
import CustomerQuote from "../components/SuperComponents/CustomerQuote";
import CustomerQuotee from "../components/SuperComponents/CustomerQuotee";
import CustomerQuoteMark from "../components/SuperComponents/CustomerQuoteMark";

class QuoteBanner extends Component {
    render(props) {
        let placement_under_rep_photo = this.props.under_image;

        return (
            <div className={this.props.quote_banner_class + " quote-banner"}>
                <div
                    className={
                        "quote-image quote-image-" + this.props.quote_banner
                    }
                />
                <Grid>
                    <Row className="show-grid">
                        <Col
                            sm={placement_under_rep_photo ? 4 : 5}
                            className="quote-section hidden-xs"
                        >
                            {placement_under_rep_photo ? (
                                <div className="vertical-align-middle">
                                    <div className="pull-right p-r-1 m-r-1">
                                        <CustomerImage
                                            src={this.props.rep_img_src}
                                            alt={this.props.rep_img_alt}
                                            id={this.props.rep_img_id}
                                            extraImgClass="quote-rep-circle"
                                        />
                                        <CustomerQuotee
                                            quotee={this.props.rep_quotee}
                                            title={this.props.rep_title}
                                            extraClass="text-white text-align-center under-rep-photo"
                                        />
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <CustomerImage
                                        src={this.props.rep_img_src}
                                        alt={this.props.rep_img_alt}
                                        id={this.props.rep_img_id}
                                        extraImgClass="quote-rep-photo"
                                    />
                                </div>
                            )}
                        </Col>
                        <Col
                            sm={placement_under_rep_photo ? 8 : 7}
                            xs={12}
                            className={"quote-section " + this.props.text_type}
                        >
                            <div className="vertical-align-middle padding-column">
                                <CustomerLogo
                                    src={this.props.logo_img_src}
                                    alt={this.props.logo_img_alt}
                                />
                                <CustomerQuote quote={this.props.rep_quote} />
                                <CustomerQuoteMark
                                    src={this.props.quotemark_img_src}
                                    alt={this.props.quote_img_alt}
                                />
                                {placement_under_rep_photo ? (
                                    ""
                                ) : (
                                    <CustomerQuotee
                                        quotee={this.props.rep_quotee}
                                        title={this.props.rep_title}
                                    />
                                )}
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default QuoteBanner;
