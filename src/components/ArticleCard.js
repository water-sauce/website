import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

const imageStyle = {
    maxWidth: "100%",
    border: "1px solid #cdd6dc"
};

const nameStyle = {
    color: "#8391A1"
};

function ArticleCard(props) {
    let Articles = props.articles.map((article, index) => (
        <Col
            xs={12}
            sm={4}
            className="about-card about-card-articles"
            itemScope
            itemType="http://schema.org/TechArticle"
            key={index}
        >
            <img src={article.src} alt={article.alt} style={imageStyle} />
            <div>
                <h4 itemProp="description">
                    <a
                        href={article.link}
                        target="_blank"
                        className="cursor-pointer a-none"
                    >
                        {article.description}
                    </a>
                </h4>
                <p className="hidden" itemProp="author">
                    {article.publication}
                </p>
                <p
                    className="about-name"
                    itemProp="datePublished"
                    style={nameStyle}
                >
                    {article.long_date_time}
                </p>
            </div>
        </Col>
    ));

    return (
        <Grid>
            <Row>
                <div className="under-banner-padding clearfix text-align-center-ipad">
                    {Articles}
                </div>
            </Row>
        </Grid>
    );
}

export default ArticleCard;
