import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import {
  Form,
  FormGroup,
  Input,
  Container,
  Button,
  InputGroup,
  InputGroupText,
  InputGroupAddon
} from "reactstrap";

const login = () => {
  return (
    <div className="d-flex p-2 bd-highlight flex-row justify-content-center align-items-center">
      <Container
        style={{
          width: "400px",
          marginTop: "50px",
          backgroundColor: "#61dafb",
          padding: "50px 50px",
          border: "10px solid #AAD2A9",
          borderRadius: "5px",
        }}
      >
        <Form>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaUser />
                </InputGroupText>
              </InputGroupAddon>
              <Input
                type="username"
                name="username"
                id="Username"
                placeholder="username"
                bsSize="lg"
              />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroupAddon addonType="prepend">
                <InputGroupText>
                  <FaLock />
                </InputGroupText>
              </InputGroupAddon>
              <Input
              type="password"
              name="password"
              id="Password"
              placeholder="password"
              bsSize="lg"
              />
            </InputGroup>
          </FormGroup>

          <div
            className="container"
            style={{ display: "grid", justifyContent: "center" }}
          >
            <Button
              style={{
                backgroundColor: "#AAD2A9",
                border: "2px solid #FFFFFF",
                padding: "10px 50px",
                borderRadius: "20px",
              }}
            >
              Login
            </Button>
            <br />

            <a
              href="/signup"
              style={{
                color: "#FFFFFF",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              Sign-Up
            </a>
          </div>
        </Form>
      </Container>
      
    </div>
  );
};

export default login;
