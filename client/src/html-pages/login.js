import React from 'react';

import { Form, FormGroup, Input, Container, Button } from "reactstrap";
import { useAuth } from "../context/auth";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    
    this.handleText = this.handleText.bind(this);
    this.postLogin = this.postLogin.bind(this);
    
    this.usernameField = React.createRef();
    this.passwordField = React.createRef();
  }

  handleText(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  postLogin(event) {
    event.preventDefault();

    // const [isLoggedIn, setLoggedIn] = React.useState(false);
    // const [isError, setIsError] = React.useState(false);
    // const { setAuthTokens } = React.useState();

    fetch("http://localhost:9000/login", {
      method: "POST",
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(response => {
      console.log(response.json());
    })
    // .then(result => {
    //   if (result.status === 200) {
    //     setAuthTokens(result.data);
    //     setLoggedIn(true);
    //   } else {
    //     setIsError(true);
    //   }
    // })
    // .catch(e => {
    //   setIsError(true);
    // });
  }

  render() {
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
                onChange={this.handleText} 
                ref={this.usernameField}
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                id="Password"
                placeholder="password"
                bsSize="lg"
                onChange={this.handleText} 
                ref={this.passwordField}
              />
            </FormGroup>
            <div>
            <Button style={{backgroundColor: "#AAD2A9", border: "2px solid #FFFFFF"}} onClick={this.postLogin}>Login</Button>
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
  
}

export default Login;
