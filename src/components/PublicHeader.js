import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.svg";
import PageLinks from "../routers/PageLinks";
import MobileMenu from "../components/MobileMenu";

class Header extends Component {
    render(props) {
        return (
            <Navbar sticky="top" collapseOnSelect>
                <Navbar.Brand>
                    <NavItem href="/">
                        <img src={logo} className="logo" alt="Water Sauce logo" />
                    </NavItem>
                </Navbar.Brand>
                <MobileMenu />
                <Nav pullRight>
                    {Object.keys(PageLinks).map((section_name, index) => {
                        return (
                            <NavDropdown
                                title={section_name}
                                id={section_name}
                                key={section_name}
                                className="nav-dropdown-wrapper"
                            >
                                {PageLinks[section_name].map(
                                    (ref, index) =>
                                    <NavItem
                                        href={ref.link}
                                        key={`link_` + index}
                                    >
                                        {ref.name}
                                    </NavItem>
                                )}
                            </NavDropdown>
                        );
                    })}
                    <NavItem className="contact-us-header" href="mailto:info@watersauce.com">
                        Contact Us
                    </NavItem>
                </Nav>
        </Navbar>
        );
    }
}

export default Header;
