import React from "react";
// import { Grid, Row } from "react-bootstrap";

function InfoBanner(props) {
    let ProdLayout = props.product_banners.map((info, index) => (
        <div 
            className="info-grid"
             key={index}
             >
            <div className={"accent accent-" + info.color}></div>
            <title-block id={index + 1}>
                {info.title_block}
            </title-block>
            <p>{info.description}</p>
        </div>
    ));

    return <div className="info-wrapper">{ProdLayout}</div>;
}

export default InfoBanner;
