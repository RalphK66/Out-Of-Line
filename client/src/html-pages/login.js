import React, { Component } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { Form, FormGroup, Input, Button, Label, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";

class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };

  }

    render () {
  

      return (
        <div className="container col-sm-8 shadow" style={{marginTop: '50px', border: '20px solid #AAD2A9', borderRadius: '10px', padding: '20px'}}>
          <Form onSubmit={this.onSubmit}>
              <FormGroup>
                  <div className="container shadow" style={{textAlign: 'center', padding: '20px', borderRadius: '10px'}}>
                      <Label style={{color: "#6A6A6A"}} className="display-4">Login</Label>                      
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><FaUser/></InputGroupText>
                        </InputGroupAddon>
                        <Input type="username" name="username" id="Username" placeholder="username" bsSize="lg" onChange={this.handleChange}/> <br/>
                      </InputGroup>
                      <br/>
                      <InputGroup>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><FaLock/></InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" name="password" id="Password" placeholder="password" bsSize="lg" onChange={this.handleChange}/><br/>
                      </InputGroup>
                      <br/>
                      <Button type="submit" style={{backgroundColor: '#AAD2A9', fontWeight: 'bolder', border: 'none', width: '150px'}} size="lg">Login</Button><br/>
                  </div>
              </FormGroup>
          </Form>
        </div>
      );
    };
  }

export default Login;
