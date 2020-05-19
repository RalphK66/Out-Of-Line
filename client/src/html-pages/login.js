import React from "react";
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "../css/login.css";
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
import { loginFailCredentials, loginFailEmpty, alreadyLoggedIn, } from "../notifications/toasts";

// Login component
function Login() {
  const [loginRedirectState, setLoginRedirectState] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handles login event
  const PostLogin = (event) => {
    event.preventDefault()

    if (Cookies.get("token")) {
      return alreadyLoggedIn();
    }
    
    if (!username.length > 0 || !password.length > 0) {
      loginFailEmpty();
    } else {
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
            setLoginRedirectState(true);
          } else if (res.status === 401) {
            loginFailCredentials();
          }
        })
        .catch((err) => {
          if (err) console.error(err);
        });
    }
  };

  // Redirects to landing page once logged in/out
  if (loginRedirectState) {
    window.location.replace("/");
  }

  // Front-end component
  return (
    <div className="container col-sm-8 shadow login-box">
      <AvForm>
        <AvGroup>
          <div className="container shadow login-form-box">
            <Label className="display-4 login-form-label">Login</Label>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaUser className="login-form-icon" />
                </InputGroupText>
              </InputGroupAddon>
              <AvInput
                required
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
              <AvFeedback>Username cannot be empty</AvFeedback>
            </InputGroup>
            <br />
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaLock className="login-form-icon" />
                </InputGroupText>
              </InputGroupAddon>
              <AvInput
                required
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
              <AvFeedback>Password cannot be empty</AvFeedback>
            </InputGroup>
            <br />
            <Button
              className="login-btn"
              type="submit"
              size="lg"
              onClick={PostLogin}
            >
              Login
            </Button>
            <br />
            <br />
            <Link to={"/password_reset"}>Forgot Password?</Link>
          </div>
        </AvGroup>
      </AvForm>
    </div>
  );
}

export default Login;
