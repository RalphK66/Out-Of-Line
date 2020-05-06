import React from "react";

import { Form, FormGroup, Input, Container, Button } from "reactstrap";

const Login = () => {

  return (
    <div className="d-flex p-2 bd-highlight flex-row justify-content-center align-items-center">
      <Container style={{width: "400px", marginTop: "50px"}}>
        <Form>
          <FormGroup>
              <Input
              type="username"
              name="username"
              id="Username"
              placeholder="username"
              bsSize="lg"
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="Password"
              placeholder="password"
              bsSize="lg"
            />
          </FormGroup>
          <div>
          <Button style={{backgroundColor: "#AAD2A9", border: "2px solid #FFFFFF"}}>Login</Button>
          <br />
          <br />
          <a href="/signup">Sign-Up</a>
          <br />
          <br />
          <Button style={{backgroundColor: "#AAD2A9", border: "2px solid #FFFFFF"}}>Logout</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
