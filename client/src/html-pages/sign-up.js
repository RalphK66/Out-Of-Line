import React from 'react';

import { Form, FormGroup, Input, InputGroup, InputGroupText, InputGroupAddon, Button, Label } from 'reactstrap'
import { FaUser, FaLock, FaPhone, FaEnvelope } from 'react-icons/fa';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleText = this.handleText.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);

        this.emailField = React.createRef();
        this.phoneNumberField = React.createRef();
        this.usernameField = React.createRef();
        this.passwordField = React.createRef();
    }

    handleText(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmission(event) {
        event.preventDefault();
        let self = this;

        console.log(this);
        // POST http://localhost:3000/signup 404 (Not Found) <- there is an error with the route here
        fetch('http://localhost:9000/signup', {
            method: "POST",
            body: JSON.stringify({
                email: self.emailField.current.value,
                phoneNumber: self.phoneNumberField.current.value,
                username: self.usernameField.current.value,
                password: self.passwordField.current.value
            }),
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(response => {
            console.log(response.json());
          })
        .catch(function(err) {
            console.error(err);
        });
    }

    render() {
        return (
            <div className="container col-sm-8 shadow" style={{marginTop: '50px', border: '20px solid #AAD2A9', borderRadius: '10px', padding: '20px'}}>
                <Form onSubmit={this.handleSubmission}>
                    <FormGroup>
                        <div className="container shadow" style={{textAlign: 'center', padding: '20px', borderRadius: '10px'}}>
                            <Label style={{color: "#6A6A6A"}} className="display-4">SignUp</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><FaEnvelope/></InputGroupText>
                                </InputGroupAddon>
                                <Input name="email" type="email" onChange={this.handleText} ref={this.emailField} placeholder="Email" bsSize="lg"/> <br />
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><FaPhone/></InputGroupText>
                                </InputGroupAddon>
                                <Input name="phoneNumber" type="text" onChange={this.handleText} ref={this.phoneNumberField} placeholder="Phone Number" bsSize="lg"/> <br />
                            </InputGroup>   
                            <br/>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><FaUser/></InputGroupText>
                                </InputGroupAddon>
                                <Input name="username" type="text" onChange={this.handleText} ref={this.usernameField} placeholder="Username" bsSize="lg"/> <br />
                            </InputGroup>
                            <br/>                
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><FaLock/></InputGroupText>
                                </InputGroupAddon>
                                <Input name="password" type="password" onChange={this.handleText} ref={this.passwordField} placeholder="Password" bsSize="lg"/> <br />
                            </InputGroup>
                            <br/>
                        </div>

                    </FormGroup>
                    <Button style={{backgroundColor: '#AAD2A9', fontWeight: 'bolder', border: 'none', width: '150px'}} size="lg">Submit</Button>
                </Form>
            </div>

        );
    }
}

export default SignUp;