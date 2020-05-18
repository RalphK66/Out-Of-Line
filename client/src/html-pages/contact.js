import React from "react";
import {
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

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(e) {
    e.persist()
    if (!this.state.message || !this.state.email || !this.state.name) {
      emptyFields()
    } else {
      fetch(process.env.REACT_APP_API_URL + "/send", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.status === "success") {
            messageSent(this.state.name);
            this.resetForm();
          } else if (response.status === "fail") {
            alert("Message failed to send.");
          }
        });
    }
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="container shadow message-box">
        <AvForm
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="post"
        >
          <div className="container shadow message-form-box">
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
                  id="name"
                  placeholder="Name"
                  bsSize="lg"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />{" "}
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
                  id="email"
                  placeholder="Email"
                  bsSize="lg"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />{" "}
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
                  id="message"
                  placeholder="Write your message here..."
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                  rows="6"
                />{" "}
                <AvFeedback>Please enter your message</AvFeedback>
              </InputGroup>
              <br />
              <Button className="send-btn" type="submit" size="lg">
                Send
              </Button>
            </AvGroup>
          </div>
        </AvForm>
      </div>
    );
  }
}

export default Contact;
