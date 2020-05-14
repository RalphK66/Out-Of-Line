import React from "react";
import '../css/login.css';
import { FaUser, FaLock } from "react-icons/fa";
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
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const useAuthObj = useAuth();
  const {setAuthTokens} = useAuth();

  const PostLogin = (event) => {
    event.preventDefault();

    fetch(process.env.REACT_APP_API_URL + '/login', {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 200) {
          console.log(document.cookie);
          console.log(useAuthObj);
          setAuthTokens(document.cookie);
          console.log(useAuthObj);
          setLoggedIn(true);
        } else {
          throw Error(res.statusText);
        }
      });

    // Clear input values
    setUsername('');
    setPassword('');
  };

  function Logout() {
    console.log("Janelle is confused!");
    localStorage.clear();
    return <Redirect to="/"/>;
  }

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
            <Button style={{backgroundColor: "#AAD2A9", border: "2px solid #FFFFFF"}} onClick={Logout}>Logout</Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Login;
