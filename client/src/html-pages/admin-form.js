import React from "react";
import { Form, FormGroup, Input, Button, Label, Container, InputGroup, InputGroupText, InputGroupAddon } from 'reactstrap';
import { FaUser, FaPhone, FaEnvelope } from 'react-icons/fa';
import "../css/admin-form.css"

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
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmission(event) {
    event.preventDefault();

    // Send information to database
    fetch(process.env.REACT_APP_API_URL + '/adminAdd', {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        name: this.state.name
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        console.log(response.json());
      })
      .catch(function (err) {
        console.error(err);
      });

    window.location.replace("/admin");
  }



    render() {
        return(
            <Container className="col-sm-8 shadow wrapper">
                <Form onSubmit={this.handleSubmission}>
                    <FormGroup>
                        <Container className="shadow content">
                            <Label className="display-4">Add to Queue</Label>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><FaEnvelope/></InputGroupText>
                                </InputGroupAddon>
                                <Input name="email" type="text" onChange={this.handleText} ref={this.emailField} placeholder="Email"/> <br />
                            </InputGroup>
                            <br/>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText><FaPhone/></InputGroupText>
                                </InputGroupAddon>
                                <Input name="phoneNumber" type="text" onChange={this.handleText} ref={this.phoneNumberField} placeholder="Phone Number"/> <br />
                            </InputGroup>
                            <br/>
                            <InputGroup>
                            <InputGroupAddon addonType="prepend">
                                    <InputGroupText><FaUser/></InputGroupText>
                                </InputGroupAddon>
                                <Input name="name" type="text" onChange={this.handleText} ref={this.nameField} placeholder="Name"/> <br />
                            </InputGroup>
                            <br/>
                            <Button className="submit-btn">Submit</Button>
                        </Container>
                    </FormGroup>
                </Form>
            </Container>
            )
    }
}

export default Tags;