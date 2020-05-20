import "../css/sign-up.css";
import React from "react";
import {
  Input,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Button,
  Label,
  CustomInput,
} from "reactstrap";
import { FaUser, FaLock, FaPhone, FaEnvelope } from "react-icons/fa";
import {
  usernameTakenMessage,
  emailAlreadyInUse,
  registerMessage,
} from "../notifications/toasts";
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from "availity-reactstrap-validation-safe";


// Sign-up component
class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isEmployee: false,
    };

    this.handleText = this.handleText.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);

    this.emailField = React.createRef();
    this.phoneNumberField = React.createRef();
    this.usernameField = React.createRef();
    this.passwordField = React.createRef();
    this.isEmployeeField = React.createRef();
  }

  // Handles changed text for forms
  handleText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Handles the value of the checkbox when changed
  handleCheckbox(event) {
    if (event.target.checked) {
      this.setState({ [event.target.name]: true });
    } else {
      this.setState({ [event.target.name]: false });
    }
  }

  // Handles the submission of values from the forms
  handleSubmission(event) {
    event.preventDefault();

    console.log(this.state);

    // Fetch request to the backend
    fetch(process.env.REACT_APP_API_URL + "/signup", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email, // handle empty fields
        phoneNumber: this.state.phoneNumber,
        username: this.state.username,
        password: this.state.password,
        isEmployee: this.state.isEmployee,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        // Redirects after successful sign-up
        if (res.status === 409) {
          // Duplicate entry
          res.json().then((data) => {
            if (data.errno === 1) {
              emailAlreadyInUse(this.state.email);
              this.setState({ invalidEmail: true });
            } else if (data.errno === 2) {
              usernameTakenMessage(this.state.username);
              this.setState({ invalidUsername: true });
            }
          });
        } else {
          // Successful login (status 200)
 
          this.setState({ isLoggedIn: true });
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // Front-end component
  render() {
    // Will redirect once successfully signed up
    if (this.state.isLoggedIn) {
      registerMessage()
      setTimeout(function () {
      window.location.replace("/");
    }, 2000);
    }
  

 

    return (
      <div className="container col-sm-8 shadow signup-box">
        <AvForm onSubmit={this.handleSubmission}>
          <AvGroup>
            <div className="container shadow signup-form-box">
              <Label className="display-4 signup-form-label">Sign Up</Label>
              <AvGroup className="signup-input">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaEnvelope className="signup-form-icons" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <AvInput
                    name="email"
                    type="email"
                    onChange={this.handleText}
                    ref={this.emailField}
                    placeholder="Email"
                    bsSize="lg"
                  />{" "}
                  <br />
                  <AvFeedback>Please enter a valid email address</AvFeedback>
                </InputGroup>
              </AvGroup>
              <AvGroup className="signup-input">
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaPhone className="signup-form-icons" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <AvInput
                    name="phoneNumber"
                    type="tel"
                    onChange={this.handleText}
                    ref={this.phoneNumberField}
                    placeholder="Phone Number"
                    bsSize="lg"
                  />{" "}
                  <br />
                  <AvFeedback>Please enter a valid 10-digit number</AvFeedback>
                </InputGroup>
              </AvGroup>
              <InputGroup className="signup-input">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaUser className="signup-form-icons" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="username"
                  type="text"
                  onChange={this.handleText}
                  ref={this.usernameField}
                  placeholder="Username"
                  bsSize="lg"
                  required
                  invalid={this.state.invalidUsername}
                />{" "}
                <br />
              </InputGroup>
              <br />
              <InputGroup className="signup-input">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaLock className="signup-form-icons" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  name="password"
                  type="password"
                  onChange={this.handleText}
                  ref={this.passwordField}
                  placeholder="Password"
                  bsSize="lg"
                  required
                />{" "}
                <br />
              </InputGroup>
              <br />
              <div>
                <CustomInput
                  className="custom-checkbox-lg employee-checkbox"
                  name="isEmployee"
                  id="isEmployee"
                  type="checkbox"
                  onChange={this.handleCheckbox}
                  innerRef={this.isEmployeeField}
                  label="Grocery Store Employee"
                />
              </div>
              <br />
              <Button className="signup-btn" size="lg">
                Submit
              </Button>
            </div>
          </AvGroup>
        </AvForm>
      </div>
    );
  }
}

export default Signup;
