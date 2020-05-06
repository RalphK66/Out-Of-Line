import React, { Component } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
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

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {},
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      password: this.state.password,
    };

    // logs username & password to console
    console.log(userData);
    this.setState({
      username: "",
      password: ""
    });
  };
  render() {
    const { errors } = this.state;

    return (
      <div className="container col-sm-8 shadow box">
        <Form noValidate onSubmit={this.onSubmit}>
          <FormGroup>
            <div className="container shadow form-box">
              <Label className="display-4 login-label">
                Login
              </Label>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaUser className="icon"/>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="username"
                  name="username"
                  id="username"
                  placeholder="username"
                  bsSize="lg"
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                />
                <br />
              </InputGroup>
              <br />
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <FaLock className="icon"/>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="password"
                  bsSize="lg"
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}/>
                <br />
              </InputGroup>
              <br />
              <Button
                type="submit"
                size="lg">Login</Button>
              <br />
            </div>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Login;
