import React from "react";
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import '../css/login.css'
import {useAuth} from "../context/auth";
import {Redirect} from "react-router-dom";
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
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(result => {
        if (result.status === 200) {
          console.log("Got!");
          setAuthTokens(result.data);
          setLoggedIn(true);
        } else {
          setIsError(true);
        }
      })
      .catch(e => {
        setIsError(true);
      });

    // Clear input values
    setUsername('');
    setPassword('');
  };

  if (isLoggedIn) {
    return <Redirect to="/"/>;
  }

  return (
    <div className="container col-sm-8 shadow box">
      <Form>
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
                id="Username"
                placeholder="username"
                bsSize="lg"
                value={username}
                onChange={event => {
                  setUsername(event.target.value);
                }}
              />
              <br/>
            </InputGroup>
            <br/>
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
                value={password}
                onChange={event => {
                  setPassword(event.target.value);
                }}
              />
              <br/>
            </InputGroup>
            <br/>
            <Button
              type="submit"
              size="lg" onClick={PostLogin}>Login</Button>
            <br/>
            <br/>
            <a href="/signup">Sign-Up</a>
            <br/>
            <br/>
            <Button size="lg">Logout</Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Login;
