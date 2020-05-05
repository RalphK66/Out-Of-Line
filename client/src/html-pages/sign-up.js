import React from 'react';

import { Form, FormGroup, Input, Button, Label } from 'reactstrap'

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

        console.log(self);
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
                            <Input name="email" type="text" onChange={this.handleText} ref={this.emailField} placeholder="Email"/> <br />
                            <Input name="phoneNumber" type="text" onChange={this.handleText} ref={this.phoneNumberField} placeholder="Phone Number"/> <br />
                            <Input name="username" type="text" onChange={this.handleText} ref={this.usernameField} placeholder="Username"/> <br />
                            <Input name="password" type="text" onChange={this.handleText} ref={this.passwordField} placeholder="Password"/> <br />
                            <Button style={{backgroundColor: '#AAD2A9', fontWeight: 'bolder', border: 'none', width: '150px'}}>Submit</Button>
                        </div>

                    </FormGroup>

                </Form>
            </div>

        );
    }
}

export default SignUp;