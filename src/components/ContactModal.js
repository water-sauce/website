import React from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button, Label } from "react-bootstrap";
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
        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    closeContactModal() {
        this.setState({ ContactModalIsOpen: false });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: [e.target.value] })
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

                    <Form id="slide-in-contact-form">
                        <FormGroup>
                            <Label>Name:</Label>
                            <FormControl 
                                className="form-group"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}>
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <Label>Email Address:</Label>
                            <FormControl 
                                className="form-group"
                                type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                            </FormControl>
                        </FormGroup>
                        <FormGroup>
                            <Label>Message:</Label>
                            <FormControl 
                                className="form-group"
                                type="textarea"
                                value={this.state.value}
                                onChange={this.handleChange}
                            >
                            </FormControl>
                        </FormGroup>
                        <p className="text-white font-size-12">* Required</p>
                        <Button>Submit</Button>
                        
                    </Form>
                </Modal>
            </span>
        );
    }
}

export default ContactModal;
