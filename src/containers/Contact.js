import React, { Component } from "react";
import { Form, FormGroup, FormControl, ControlLabel, Button, Label } from "react-bootstrap";
import SubHeroServicesBanner from "../components/SubHeroServicesBanner";
import axios from 'axios';

class ContactPage extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            email: '',
            message: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.name]: [e.target.value] })
    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, message } = this.state

        const form = await axios.post('/api/form', {
            name: name,
            email: email,
            message: message
        })
    }

    render() {
        return (
            <div>
                <SubHeroServicesBanner paragraph="Suppose you have a new product and a list of existing clients, leads, etc. How do you communicate this to them? You could send a mass email, but in the United States, the average clickthrough rate for these types of strategies is a measly 3.1%. How do you beat these odds? Through strategic audience segmentation, content development, campaign execution, and thoughtful campaign evaluation." />

                <Form onSubmit={this.handleSubmit} style={{ width: '1000px', maxWidth: '100%', margin: '20px auto', padding: '0 25px' }}>
                    <FormGroup>
                        <Label for="name">Name:</Label>
                        <FormControl 
                            className="form-group"
                            type="text"
                            name="name"
                            // value={this.state.value}
                            onChange={this.handleChange}>
                        </FormControl>
                        <Label for="email">Email Address:</Label>
                        <FormControl 
                            className="form-group"
                            type="email"
                            name="email"
                            // value={this.state.value}
                            onChange={this.handleChange}
                        >
                        </FormControl>
                        <Label for="message">Message:</Label>
                        <FormControl 
                            className="form-group"
                            type="textarea"
                            name="message"
                            // value={this.state.value}
                            onChange={this.handleChange}
                        >
                        </FormControl>
                    </FormGroup>
                    <p className="text-white font-size-12">* Required</p>
                    <Button>Submit</Button>
                </Form>
            </div>
        );
    }
}


export default ContactPage;
