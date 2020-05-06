import React, { Component } from "react";

import { Form, FormGroup, Input, Button, Label } from "reactstrap";


class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errors: {}
    };
  }
  onChange = e => {
      this.setState({ [e.target.id]: e.target.value });
    };
  onSubmit = e => {
      e.preventDefault();
  const userData = {
        username: this.state.username,
        password: this.state.password
      };
  console.log(userData);
    };
  render() {
      const { errors } = this.state;

    return (

      <div className="container col-sm-8 shadow" style={{marginTop: '50px', border: '20px solid #AAD2A9', borderRadius: '10px', padding: '20px'}}>
      <Form noValidate onSubmit={this.onSubmit}>
          <FormGroup>
              <div className="container shadow" style={{textAlign: 'center', padding: '20px', borderRadius: '10px'}}>
                  <Label style={{color: "#6A6A6A"}} className="display-4">Login</Label>
                  <Input type="username" name="username" id="Username" placeholder="username" bsSize="lg" onChange={this.onChange} value={this.state.username} error={errors.username}/> <br/>
                  <Input type="password" name="password" id="Password" placeholder="password" bsSize="lg" onChange={this.onChange} value={this.state.password} error={errors.password}/><br/>
                  <Button style={{backgroundColor: '#AAD2A9', fontWeight: 'bolder', border: 'none', width: '150px'}}>Login</Button><br/>
              </div>
          </FormGroup>
      </Form>
     </div>
    );
  };
}
export default Login;
