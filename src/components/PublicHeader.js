import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import logo from "../images/logo.svg";
import PageLinks from "../routers/PageLinks";

class Header extends Component {
    render(props) {
        return (
            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <NavLink to="/" exact>
                            <img src={logo} className="logo" alt="Water Sauce logo" />
                            WATER SAUCE
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
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
                                            ref.type === "link" ? (
                                                <NavLink
                                                    to={ref.link}
                                                    exact
                                                    key={`link_` + index}
                                                >
                                                    {ref.name}
                                                </NavLink>
                                            ) : (
                                                <NavItem
                                                    href={ref.link}
                                                    target="_blank"
                                                    key={`link_` + index}
                                                >
                                                    {ref.name}
                                                </NavItem>
                                            )
                                    )}
                                </NavDropdown>
                            );
                        })}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;
