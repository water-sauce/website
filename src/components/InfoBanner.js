import React from "react";

function InfoBanner(props) {
    let ProdLayout = props.product_banners.map((info, index) => (
        <div 
            className="info-grid"
             key={index}
             >
            <div className={`accent accent-${info.color || props.color}`}></div>
            <title-block id={index + 1}>
                {info.title_block}``
            </title-block>
            <p>{info.description}</p>
        </div>
    ));

    return <div className="info-wrapper">
        <div className="info-background">
            {props.title ? <h3 className="info-grid-title">{props.title}</h3> : ""}
            {ProdLayout}
        </div>
    </div>;
}

export default InfoBanner;
