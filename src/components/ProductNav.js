import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Col } from "react-bootstrap";
import MainProdLinks from "../routers/MainProdLinks";

class ProductNav extends Component {
    render(props) {
        const activeStyle = {
            color: "white",
            opacity: "1"
        };

        const product_links = MainProdLinks.map((links, index) => (
            <li
                className={`col-sm-2 ${index === 0 ? "col-sm-offset-2" : ""}`}
                key={index}
            >
                <NavLink
                    to={links.link}
                    exact
                    className="product-nav-icons"
                    activeStyle={activeStyle}
                >
                    <span className="product-icons" id={links.icon} />
                    {links.name}
                </NavLink>
            </li>
        ));

        return (
            <Col sm={12} xsHidden>
                <ul className="product-nav-links clearfix">{product_links}</ul>
            </Col>
        );
    }
}

export default ProductNav;
