import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AboutNav extends Component {
    render(props) {
        const activeStyle = {
            color: "#576677",
            borderBottom: "3px solid #41C3E5"
        };

        return (
            <div className="about-nav-container">
                <ul className="about-nav-links clearfix">
                    <li>
                        <NavLink to="/our-team" exact activeStyle={activeStyle}>
                            Team
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/careers" exact activeStyle={activeStyle}>
                            Careers
                        </NavLink>
                    </li>
                </ul>
            </div>
        );
    }
}

// About.propTypes = {
// 	description: PropTypes.string
// };

export default AboutNav;
