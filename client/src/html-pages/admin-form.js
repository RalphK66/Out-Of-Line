import React from "react";
import {
  Form,
  FormGroup,
  Input,
  Button,
  Label,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
} from "reactstrap";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";
import "../css/admin-form.css";
import { adminAddUser } from "../notifications/toasts";

class Tags extends React.Component {
  constructor(props) {
    super(props);

    this.handleText = this.handleText.bind(this);
    this.handleSubmission = this.handleSubmission.bind(this);

    this.emailField = React.createRef();
    this.phoneNumberField = React.createRef();
    this.nameField = React.createRef();
  }

  // Change the form input into an object where name: value
  handleText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmission(event) {
    event.preventDefault();

    // Send information to database
    fetch(process.env.REACT_APP_API_URL + "/adminAdd", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        name: this.state.name,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          adminAddUser(this.state.name);
          setTimeout(() => {
            window.location.replace("/admin");
          }, 2000);
        }
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <Container className="col-sm-8 shadow add-user-box">
        <Form onSubmit={this.handleSubmission}>
          <FormGroup>
            <Container className="shadow add-user-form">
              <Label className="display-4 add-user-form-label">
                Add to Queue
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaEnvelope className="add-user-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="add-user-form-input"
                  name="email"
                  type="text"
                  onChange={this.handleText}
                  ref={this.emailField}
                  placeholder="Email"
                  bsSize="lg"
                />{" "}
                <br />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaPhone className="add-user-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="add-user-form-input"
                  name="phoneNumber"
                  type="text"
                  onChange={this.handleText}
                  ref={this.phoneNumberField}
                  placeholder="Phone Number"
                  bsSize="lg"
                />{" "}
                <br />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaUser className="add-user-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="add-user-form-input"
                  name="name"
                  type="text"
                  onChange={this.handleText}
                  ref={this.nameField}
                  placeholder="Name"
                  bsSize="lg"
                />{" "}
                <br />
              </InputGroup>
              <br />
              <Button className="add-user-btn" size="lg">
                Submit
              </Button>
            </Container>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Tags;
