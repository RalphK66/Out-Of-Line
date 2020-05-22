import React, { Component } from "react";
import {
  Container,
  Button,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import {
  AvForm,
  AvGroup,
  AvInput,
  AvFeedback,
} from "availity-reactstrap-validation-safe";
import { messageSent, emptyFields } from "../notifications/toasts";
import { FaUser, FaEnvelope, FaCommentAlt } from "react-icons/fa";
import "../css/contact.css";

// code for SMTP email component was adapted from : 
// Aleksander Varnin's article "Building Contact Form and Handling Emails with Reac"
// from Oct 1, 2019 on
// https://blog.mailtrap.io/react-contact-form/


// class component to manage contat form email sender and responder
class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  // update name
  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }
  // update email
  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }
  // update message content
  handleMessageChange(event) {
    this.setState({ message: event.target.value });
  }
  // send message to backend
  onSubmit(event) {
    event.persist();
    if (!this.state.message || !this.state.email || !this.state.name) {
      // warning message if any fileds are empty
      emptyFields();
    } else {
      // pass message content to backend
      fetch(process.env.REACT_APP_API_URL + "/send", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "success") {
            // success message after email sent
            messageSent(this.state.name);
            this.resetForm();
          } else if (response.status === "fail") {
            alert("Message failed to send.");
          }
        });
    }
  }
  // reset form fields after submit
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <Container className="shadow message-box">
        <AvForm onSubmit={this.onSubmit.bind(this)} method="post">
          <Container className="shadow message-form-box">
            <Label className="display-4 message-form-label">Contact Us</Label>
            <br />
            <AvGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaUser className="message-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <AvInput
                  required
                  className="message-form-input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  bsSize="lg"
                  value={this.state.name}
                  onChange={this.handleNameChange.bind(this)}
                />{" "}
                {/* validation message for name field */}
                <AvFeedback>Name cannot be empty</AvFeedback>
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaEnvelope className="message-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <AvInput
                  required
                  className="message-form-input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  bsSize="lg"
                  value={this.state.email}
                  onChange={this.handleEmailChange.bind(this)}
                />{" "}
                {/* validation messages for email field */}
                {this.state.email === "" ? (
                  <AvFeedback>Email cannot be empty</AvFeedback>
                ) : (
                  <AvFeedback>Please enter a valid email address</AvFeedback>
                )}
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaCommentAlt className="message-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <AvInput
                  required
                  className="message-form-input message-area"
                  type="textarea"
                  name="message"
                  placeholder="Write your message here..."
                  value={this.state.message}
                  onChange={this.handleMessageChange.bind(this)}
                  rows="6"
                />{" "}
                {/* validation message for message field */}
                <AvFeedback>Please enter your message</AvFeedback>
              </InputGroup>
              <br />
              <Button className="send-btn" type="submit" size="lg">
                Send
              </Button>
            </AvGroup>
          </Container>
        </AvForm>
      </Container>
    );
  }
}

export default Contact;
