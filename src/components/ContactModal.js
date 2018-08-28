import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

Modal.setAppElement("#app");

const h4Style = {
    color: "#FFFFFF",
    fontSize: "28px",
    margin: "20px 0"
};

const closeIconStyle = {
    color: "#FFFFFF",
    float: "right",
    fontSize: "24px"
};

class ContactModal extends React.Component {
    constructor() {
        super();

        this.state = {
            ContactModalIsOpen: false
        };

        this.openContactModal = this.openContactModal.bind(this);
        this.afterOpenContactModal = this.afterOpenContactModal.bind(this);
        this.closeContactModal = this.closeContactModal.bind(this);
    }

    openContactModal() {
        this.setState({ ContactModalIsOpen: true });
    }

    afterOpenContactModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = "#f00";
    }

    closeContactModal() {
        this.setState({ ContactModalIsOpen: false });
    }

    render(props) {
        return (
            <span>
                <button
                    onClick={this.openContactModal}
                    className={this.props.class + " button"}
                >
                    {this.props.cta}
                </button>
                <Modal
                    isOpen={this.state.ContactModalIsOpen}
                    onAfterOpen={this.afterOpenContactModal}
                    onRequestClose={this.closeContactModal}
                    contentLabel="Contact Modal"
                    className="main-contact-modal"
                >
                    <div className="demo-modal-message">
                        <h4
                            ref={subtitle => (this.subtitle = subtitle)}
                            className="text-white-important"
                            style={h4Style}
                        >
                            Get a free SEO Audit
                        </h4>
                    </div>
                    <FontAwesomeIcon
                        onClick={this.closeContactModal}
                        icon="times"
                        style={closeIconStyle}
                    />

                    <form id="slide-in-contact-form">
                        <div className="form-group">
                            <input
                                className="form-control input-lg required"
                                placeholder="First Name*"
                                type="text"
                                name="c_contact_firstname"
                                value=""
                                id="c_contact_firstname"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control input-lg required"
                                placeholder="Last Name*"
                                type="text"
                                name="c_contact_lastname"
                                value=""
                                id="c_contact_lastname"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control input-lg required email"
                                placeholder="Company Email*"
                                type="text"
                                name="c_email"
                                value=""
                                id="c_email"
                            />
                            <p className="hidden user-notification font-weight-500 font-size-13 m-l-half red-warning" />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control input-lg"
                                placeholder="Phone"
                                type="text"
                                name="c_phone"
                                value=""
                                id="c_phone"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="c_message"
                                placeholder="Which technology providers are you interested in?"
                                id="c_message"
                                className="form-control input-lg"
                            />
                        </div>
                        <p className="text-white font-size-12">* Required</p>
                        <div className="form-group">
                            <div className="ac text-center">
                                <input
                                    type="submit"
                                    value="Request Demo"
                                    className="button button-large button-primary submit-demo-request"
                                    id="request-demo-btn-desktop"
                                />
                            </div>
                        </div>
                    </form>
                </Modal>
            </span>
        );
    }
}

export default ContactModal;
