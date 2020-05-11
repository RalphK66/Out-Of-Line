import React from "react";
import {FaUser} from "react-icons/fa";
import {FaLock} from "react-icons/fa";
import '../css/login.css'
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
import Cookies from "js-cookie";

function Login() {
  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const PostLogin = (event) => {
    event.preventDefault();

    console.log(process.env.LOCALHOST_URL);

    // fetch(process.env.LOCALHOSTURL + '/login', {
    //   method: "POST",
    //   body: JSON.stringify({
    //     username: username,
    //     password: password
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Accept': 'application/json'
    //   },
    //   credentials: 'include'
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       setLoggedIn(true);
    //     } else {
    //       throw Error(res.statusText);
    //     }
    //   });

    // Clear input values
    setUsername('');
    setPassword('');
  };

  const Logout = () => {
    Cookies.remove('token');    
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
            <Button style={{backgroundColor: "#AAD2A9", border: "2px solid #FFFFFF"}} onClick={Logout}>Logout</Button>
          </div>
        </FormGroup>
      </Form>
    </div>
  );
}

export default Login;
