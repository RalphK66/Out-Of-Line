import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "../css/login.css";
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
import { Link } from "react-router-dom";

import { loginMessage } from "../notifications/toasts";

// Login component
function Login() {
  const [loginRedirectState, setLoginRedirectState] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handles login event
  const PostLogin = (event) => {
    event.preventDefault();

    // Fetch request to the backend
    fetch(process.env.REACT_APP_API_URL + "/login", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          // Redirects after successful login
          loginMessage(username.toUpperCase());
          setLoginRedirectState(true);
        }
      })
      .catch((err) => {
        // loginFail();
        console.error(err);
      });

    // Clear input values
    setUsername("");
    setPassword("");
  };

  // Redirects to landing page once logged in/out
  if (loginRedirectState) {
    window.location.replace('/');
  }

  // Front-end component
  return (
    <div className="container col-sm-8 shadow login-box">
      <Form>
        <FormGroup>
          <div className="container shadow login-form-box">
            <Label className="display-4 login-form-label">Login</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaUser className="login-form-icon" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                className="login-form-input"
                type="username"
                name="username"
                id="Username"
                placeholder="username"
                bsSize="lg"
                value={username}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              <br />
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaLock className="login-form-icon" />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                className="login-form-input"
                type="password"
                name="password"
                id="password"
                placeholder="password"
                bsSize="lg"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <br />
            </InputGroup>
            <br />
            <Button
              className="login-btn"
              type="submit"
              size="lg" onClick={PostLogin}>Login</Button>
            <br/>
            <br/>
            <Link to={"/password_reset"}>Forgot Password?</Link>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Login;
