import React, { Component } from 'react'
import { Form, FormGroup, Input, Label } from 'reactstrap'

class Contact extends Component {
    render(){
        return (
<section id="contact">
<div className="row">
<div className="col-lg-2"></div>
<div className="col-lg-8">
<h1>Contact</h1>
    <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
        <Form className="contact-form" style={{ width: '100%'}}>
            <div className="form-group">
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    type="text"
                    name ="name"
                    placeholder="Your Name"
                    />
            </FormGroup>
            </div>
            
            <div className="form-group">
            <FormGroup>
                <Label for="name">Phone Number:</Label>
                <Input
                    type="number"
                    name ="phone"
                    placeholder="Phone no."
                    />
            </FormGroup>
            </div>
            
            <div className="form-group">
            <FormGroup>
                <Label for="email">Email:</Label>
                <Input
                    type="email"
                    name ="email"
                    placeholder="Email id"
                    />
            </FormGroup>
            </div>

            <div className="form-group">
            <FormGroup>
                <Label for="message">Message:</Label>
                <textarea rows="4" className="form-control text-uppercase">Message</textarea>
            </FormGroup>
            </div>

            
            <button type="submit" class="btn btn-primary">Send Message</button>
        </Form>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
        </div>
    </div>
</div>
<div className="col-lg-2"></div>
</div>
</section>
        );
    }
}

export default Contact