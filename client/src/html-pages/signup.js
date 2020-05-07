import React from 'react';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap'

class Signup extends React.Component {
  constructor(props) {
    super(props);

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

    fetch('/signup', {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email, // handle empty fields
        phoneNumber: this.state.phoneNumber,
        username: this.state.username,
        password: this.state.password
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      // .then(res => res.text())
      // .then(text => console.log(text));
  }

  render() {
    return (
      <div className="container col-sm-8 shadow"
           style={{marginTop: '50px', border: '20px solid #AAD2A9', borderRadius: '10px', padding: '20px'}}>
        <Form onSubmit={this.handleSubmission}>
          <FormGroup>
            <div className="container shadow" style={{textAlign: 'center', padding: '20px', borderRadius: '10px'}}>
              <Label style={{color: "#6A6A6A"}} className="display-4">Sign Up</Label>
              <Input name="email" type="text" onChange={this.handleText} ref={this.emailField} placeholder="Email"/>
              <br/>
              <Input name="phoneNumber" type="text" onChange={this.handleText} ref={this.phoneNumberField}
                     placeholder="Phone Number"/> <br/>
              <Input name="username" type="text" onChange={this.handleText} ref={this.usernameField}
                     placeholder="Username"/> <br/>
              <Input name="password" type="text" onChange={this.handleText} ref={this.passwordField}
                     placeholder="Password"/> <br/>
              <Button style={{
                backgroundColor: '#AAD2A9',
                fontWeight: 'bolder',
                border: 'none',
                width: '150px'
              }}>Submit</Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Signup;