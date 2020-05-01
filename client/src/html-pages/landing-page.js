import React, { useState } from "react";

import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
} from "reactstrap";

const LandingPage = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <div>
        <Navbar light expand="md" className="color-nav">
          <NavbarBrand href="/">
            <img src="/images/logo.png" className="logo"></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink
                  href="/"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "larger",
                    fontWeight: "bolder",
                  }}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/stores/"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "larger",
                    fontWeight: "bolder",
                  }}
                >
                  Stores
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/admin/"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "larger",
                    fontWeight: "bolder",
                  }}
                >
                  Admin
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/login/"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "larger",
                    fontWeight: "bolder",
                  }}
                >
                  Login
                </NavLink>
              </NavItem>
            </Nav>
            <Form>
              <FormGroup>
                <Input
                  type="search"
                  name="search"
                  id="exampleSearch"
                  placeholder="Search"
                />
              </FormGroup>
            </Form>
          </Collapse>
        </Navbar>
      </div>

      <div>
        <Jumbotron>
          <h1 className="display-3">Out-of-Line</h1>
          <p className="lead">Need to wait in line? Do it online!</p>
          <hr className="my-2" />
          <p>
            Virtually queue at your favourite or local grocery store and take
            your social distancing to a whole new level while simultaneously
            increasing the effeciency of getting what you need.
          </p>
        </Jumbotron>
      </div>
      <CardGroup className="card-group">
        <Card>
          <CardImg
            top
            width="100%"
            src="/images/map-1.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Interctive Map</CardTitle>
            <CardText>
              Find the grocery stores quickly and easily with this interactive
              map.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/images/map-2.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Grocery Store Info</CardTitle>
            <CardText>
              Clicking on a grocery store will display that store's relevant
              information, including:
              <ul>
                <li>Estimated wait times</li>
                <li>Number of people currently in line</li>
                <li>Health & Safety Information</li>
                <li>Contact Information & Directions</li>
              </ul>
              Place yourself in line at the store you choose by hitting the{" "}
              <strong>"Queue"</strong> button.
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/images/map-3.png"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>In Line</CardTitle>
            <CardText>
              Track your position in line and get notifed when it is your turn
              to enter the store.
            </CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <div>
        <Navbar>
          <Container>
            <NavbarBrand>© 2020 Copyright: out-of-line.ca</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    </Container>
  );
};

export default LandingPage;
