import React from 'react';
import {
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Button,
  Label,
  CustomInput
} from 'reactstrap'
import {FaUser, FaLock, FaPhone, FaEnvelope} from 'react-icons/fa';
import '../css/sign-up.css'
import {Redirect} from "react-router-dom";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleText = this.handleText.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);

    this.emailField = React.createRef();
    this.phoneNumberField = React.createRef();
    this.usernameField = React.createRef();
    this.passwordField = React.createRef();
    this.isEmployeeField = React.createRef();
  }

  handleText(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleCheckbox(event) {
    if (event.target.checked) {
      this.setState({[event.target.name]: true});
    } else {
      this.setState({[event.target.name]: false});
    }
  }

  handleSubmission(event) {
    event.preventDefault();

    console.log(this.state);

    fetch('/api/signup', {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email, // handle empty fields
        phoneNumber: this.state.phoneNumber,
        username: this.state.username,
        password: this.state.password,
        isEmployee: this.state.isEmployee
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'include'
    })
      .then(response => {
        if (response.status === 200) {
          localStorage.setItem("token", document.cookie);
          this.isLoggedIn = true;

          if (this.isLoggedIn) {
            return <Redirect to="/"/>;
          }
        } else {
          this.error = false;
        }
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return (
      <div className="container col-sm-8 shadow box">
        <Form onSubmit={this.handleSubmission}>
          <FormGroup>
            <div className="container shadow form-box">
              <Label className="display-4 form-label">Sign Up</Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><FaEnvelope/></InputGroupText>
                </InputGroupAddon>
                <Input name="email" type="email" onChange={this.handleText} ref={this.emailField} placeholder="Email"
                       bsSize="lg"/> <br/>
              </InputGroup>
              <br/>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><FaPhone/></InputGroupText>
                </InputGroupAddon>
                <Input name="phoneNumber" type="text" onChange={this.handleText} ref={this.phoneNumberField}
                       placeholder="Phone Number" bsSize="lg"/> <br/>
              </InputGroup>
              <br/>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><FaUser/></InputGroupText>
                </InputGroupAddon>
                <Input name="username" type="text" onChange={this.handleText} ref={this.usernameField}
                       placeholder="Username" bsSize="lg"/> <br/>
              </InputGroup>
              <br/>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><FaLock/></InputGroupText>
                </InputGroupAddon>
                <Input name="password" type="password" onChange={this.handleText} ref={this.passwordField}
                       placeholder="Password" bsSize="lg"/> <br/>
              </InputGroup>
              <br/>
              <div>
                <CustomInput className="custom-checkbox-lg" name="isEmployee" id="isEmployee" type="checkbox"
                             onChange={this.handleCheckbox} innerRef={this.isEmployeeField} label="Employee"/>
              </div>
              <br/>
              <Button size="lg">Submit</Button>
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default SignUp;
