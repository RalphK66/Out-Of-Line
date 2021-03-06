import React from "react";
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import '../css/login.css'
import {
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";

// Resets the password if the inputted username is correct
class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false, 
        }

        this.handleText = this.handleText.bind(this);
        this.handleSubmission = this.handleSubmission.bind(this);

        this.usernameField = React.createRef();
        this.newPassField = React.createRef();
    }

    // Handles changed text for forms
    handleText(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    // Handles the submission of values from the forms
    handleSubmission(event) {
        event.preventDefault();

        console.log(this.state);
        fetch(process.env.REACT_APP_API_URL + '/password_reset', {
            method: "POST",
            body: JSON.stringify({
                username: this.state.username,
                newPass: this.state.newPass
            }), 
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
              },
              credentials: 'include'
        })
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                this.setState({isLoggedIn: true});
            }
        })
        .catch(err => {
            console.error(err);
          });
    }

    render() {
      // Redirects if the user is logged in
        if (this.state.isLoggedIn) {
            window.location.replace('/');
        }

        return(
        <div className="container col-sm-8 shadow box">
        <Form onSubmit={this.handleSubmission}>
          <FormGroup>
            <div className="container shadow form-box">
              <Label className="display-4 form-label">Please enter your username and a new password</Label>
              <br/>
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
                <Input name="newPass" type="password" onChange={this.handleText} ref={this.newPassField}
                       placeholder="New Password" bsSize="lg"/> <br/>
              </InputGroup>
              <br/>
              <Button size="lg">Change Password</Button>
            </div>
          </FormGroup>
        </Form>
      </div>
        );
    }
} 

export default ResetPassword;