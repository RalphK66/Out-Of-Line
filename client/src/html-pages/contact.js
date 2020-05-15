import React from "react";
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
    e.preventDefault();

    fetch("http://localhost:3000/send", {
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
          alert("Message Sent.");
          this.resetForm();
        } else if (response.status === "fail") {
          alert("Message failed to send.");
        }
      });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="container shadow message-box">
        <Form
          id="contact-form"
          onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="container shadow message-form-box">
            <Label className="display-4 message-form-label">Contact Us</Label>
            <br />
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaUser className="message-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="message-form-input"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  bsSize="lg"
                  value={this.state.name}
                  onChange={this.onNameChange.bind(this)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaEnvelope className="message-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="message-form-input"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  bsSize="lg"
                  value={this.state.email}
                  onChange={this.onEmailChange.bind(this)}
                />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaCommentAlt className="message-form-icon" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  className="message-form-input message-area"
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Write your message here..."
                  value={this.state.message}
                  onChange={this.onMessageChange.bind(this)}
                  rows="6"
                />
              </InputGroup>
              <br />
              <Button
                className="send-btn"
                type="submit"
                size="lg"
              >
                Send
              </Button>
            </FormGroup>
          </div>
        </Form>
      </div>
    );
  }
}

export default Contact;
