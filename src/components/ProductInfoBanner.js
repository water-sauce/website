import React from "react";
import { Grid, Row } from "react-bootstrap";
import ContactModal from "../components/ContactModal";
import H2Common from "../components/SuperComponents/H2Common";
import BlueAccent from "../components/SuperComponents/BlueAccent";

function ProductInfoBanner(props) {
    const ProdLayout = props.product_banners.map((product_banner, index) => (
        <div
            className={product_banner.outerClass}
            id={product_banner.id}
            key={index}
        >
            <Grid>
                <Row className="show-grid">
                    <div className={product_banner.class1}>
                        <img
                            src={product_banner.src}
                            alt={product_banner.alt}
                        />
                    </div>
                    <div className={product_banner.class2}>
                        {product_banner.title !== undefined ? (
                            <H2Common title={product_banner.title} />
                        ) : (
                            ""
                        )}
                        {product_banner.hideMark === true ? (
                            ""
                        ) : (
                            <BlueAccent class="blue-accent-margin" />
                        )}
                        <p>{product_banner.description}</p>
                        <ContactModal cta_type="contact_us" cta="Contact Us" />
                    </div>
                </Row>
            </Grid>
        </div>
    ));

    return ProdLayout;
}

export default ProductInfoBanner;
