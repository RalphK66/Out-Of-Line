import React from 'react';

import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { useAuth } from "../context/auth";

function Login() {

    const [isLoggedIn, setLoggedIn] = React.useState(false);
    const [isError, setIsError] = React.useState(false);
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const { setAuthTokens } = useAuth();

  const PostLogin = (event) => {
    event.preventDefault();

    fetch("http://localhost:9000/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(result => {
      if (result.status === 200) {
        console.log("Got!")
        setAuthTokens(result.data);
        setLoggedIn(true);
      } else {
        setIsError(true);
      }
    })
    .catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

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
                value={username}
                onChange={event => {
                  setUsername(event.target.value);
                }} 
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="password"
                bsSize="lg"
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }} 
              />
            </FormGroup>
            <div>
            <Button style={{backgroundColor: "#AAD2A9", border: "2px solid #FFFFFF"}} onClick={PostLogin}>Login</Button>
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

}

export default Login;
