import React from "react";
import { Link } from "react-router-dom";
import PageLinks from "../routers/PageLinks";

class Popup extends React.Component {
  render() {
    return (
        <div className="mobile-menu-wrapper">
            <button onClick={this.props.closePopup}>X</button>
            <section className="mobile-menu">
                {Object.keys(PageLinks).map((section_name, index) => {
                    return (
                        <div key={"section_" + index}>
                            <p>{section_name}</p>
                            <ul key={section_name} >
                            {PageLinks[section_name].map(
                                (ref, index) =>
                                <li key={`link_` + index}>
                                    <Link
                                        to={ref.link}
                                        onClick={this.props.closePopup}
                                    >
                                        {ref.name}
                                    </Link>
                                </li>
                            )}
                            </ul>
                        </div>
                    );
                })}
                <div>
                    <a className="button button-blue" href="mailto:info@watersauce.com?Subject=Hello%20Water%20Sauce">Contact Us</a>
                </div>
            </section>
        </div>
    );
  }
}

class MobileMenu extends React.Component {
    constructor() {
        super();
        this.state = {
            showPopup: false
        };
    }

    toggleMenu() {
        this.setState({
            showPopup: !this.state.showPopup
        });
        if ( this.state.showPopup === false ){
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
    }

    render(props) {
        return (
            <section>
                <a
                    onClick={this.toggleMenu.bind(this)}
                    className="button button-mobile-menu"
                >
                Menu
                </a>
                {this.state.showPopup ? 
                    <Popup
                        text='Close Me'
                        closePopup={this.toggleMenu.bind(this)}
                    />
                    : null
                }
            </section>
        );
    }
}

export default MobileMenu;
