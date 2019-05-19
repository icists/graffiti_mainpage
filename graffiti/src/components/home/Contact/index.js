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
        <div className="col-lg-6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3212.4882808349876!2d127.35828995115261!3d36.37317197994088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35654bb5e3ad0faf%3A0x4f870cb62b1f55f!2z7ZWc6rWt6rO87ZWZ6riw7Iig7JuQIOyepeyYgeyLoO2VmeyDne2ajOq0gA!5e0!3m2!1sko!2skr!4v1558276197354!5m2!1sko!2skr" frameborder="0" style={{border:'0', width:'100%', height:'100%'}} allowfullscreen></iframe>
        </div>
        <div className="col-lg-6">
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

            
            <button type="submit" class="btn btn-primary" style={{width:'100%', marginTop:'10px'}}>Send Message</button>
        </Form>
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