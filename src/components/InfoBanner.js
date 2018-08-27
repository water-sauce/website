import React from "react";
import { Grid, Row } from "react-bootstrap";
import ContactModal from "../components/ContactModal";
import H2Common from "../components/SuperComponents/H2Common";
import BlueAccent from "../components/SuperComponents/BlueAccent";

function InfoBanner(props) {
    let ProdLayout = props.product_banners.map((info, index) => (
        <div 
            className="info-grid"
             key={index}
             >
            <title-block id={index + 1}>
                {info.title_block}
            </title-block>
            <p>{info.description}</p>
        </div>
    ));

    return <div className="info-wrapper">{ProdLayout}</div>;
}

export default InfoBanner;
