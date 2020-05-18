import React from "react";
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import '../css/password-reset.css'
import "../css/toasts.css"
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
        if (this.state.isLoggedIn) {
            window.location.replace('/');
        }

        return(
        <div className="container col-sm-8 shadow reset-box">
        <Form onSubmit={this.handleSubmission}>
          <FormGroup>
            <div className="container shadow reset-form-box">
              <Label className="display-4 reset-form-label">Reset Password</Label>
              <br/>
              <br/>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><FaUser className="reset-form-icon"/></InputGroupText>
                </InputGroupAddon>
                <Input className="reset-form-input" name="username" type="text" onChange={this.handleText} ref={this.usernameField}
                       placeholder="Username" bsSize="lg"/> <br/>
              </InputGroup>
              <br/>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText><FaLock className="reset-form-icon"/></InputGroupText>
                </InputGroupAddon>
                <Input className="reset-form-input" name="newPass" type="password" onChange={this.handleText} ref={this.newPassField}
                       placeholder="New Password" bsSize="lg"/> <br/>
              </InputGroup>
              <br/>
              <Button size="lg" className="reset-btn">Change Password</Button>
            </div>
          </FormGroup>
        </Form>
      </div>
        );
    }
} 

export default ResetPassword;