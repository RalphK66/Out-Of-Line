import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import Cookies from "js-cookie";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Form,
  Input
} from "reactstrap";

import logo from "../images/logo.png";
import '../index.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = React.useState(false);
  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  // Logout component 
  const Logout = () => {
    console.log("Logged out");
    Cookies.remove('token');
    setIsEmployeeLoggedIn(false);
    setIsCustomerLoggedIn(false);
  }

  const checkSession = () => {
    const jwt = Cookies.get('token')
    let session;
  try {
      if (jwt) {
        const base64Url = jwt.split('.')[1]
        const base64 = base64Url.replace('-', '+').replace('_', '/')
        // what is window.atob ?
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob
        session = JSON.parse(window.atob(base64))
        console.log(session);
      }
    } catch (error) {
      console.log(error)
    }
    if (session !== undefined && session.isEmployee) {
      return true;
    } else {
      return false;
    }
  }

  // Checks whether or not the user is authenticated, and as an employee or customer
  React.useEffect(() => {
    console.log("Do I get in here?");
    if (checkSession()) {
      console.log("Do I get in here?");
      setIsEmployeeLoggedIn(true);
    } else {
      console.log("Do I get in here?");
      console.log(Cookies.get("token"));
      if (Cookies.get("token") !== undefined) {
        console.log(Cookies.get("token"));
        setIsCustomerLoggedIn(true);
      }
    }
  }, []);

  console.log(isEmployeeLoggedIn);
  console.log(isCustomerLoggedIn);  

  if (isCustomerLoggedIn) {
    return (
      <div>
        <Navbar dark expand="md" className="shadow" >
          <NavbarBrand tag={RRNavLink} exact to="/"><img src={logo} style={{width: '60px', height: '60px'}} alt="logo" className="shadow"></img></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar >
            <Nav className="mr-auto" navbar >
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/about" activeClassName="active">About</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/stores" activeClassName="active">Stores</NavLink>
              </NavItem>
              {/* <NavItem>
                  <NavLink tag={RRNavLink} exact to="/signup" activeClassName="active">Sign Up</NavLink>
              </NavItem> */}
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/" onClick={Logout} activeClassName="active">Logout</NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink tag={RRNavLink} exact to="/admin" activeClassName="active">Admin</NavLink>
              </NavItem> */}
            </Nav>
            <Form>
              <Input type="search" name="search" id="mySearch" placeholder="Search"/>
            </Form>
          </Collapse>
        </Navbar>
      </div>
    );
  } else if (isEmployeeLoggedIn) {
    return (
      <div>
        <Navbar dark expand="md" className="shadow" >
          <NavbarBrand tag={RRNavLink} exact to="/"><img src={logo} style={{width: '60px', height: '60px'}} alt="logo" className="shadow"></img></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar >
            <Nav className="mr-auto" navbar >
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/about" activeClassName="active">About</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/stores" activeClassName="active">Stores</NavLink>
              </NavItem>
              {/* <NavItem>
                  <NavLink tag={RRNavLink} exact to="/signup" activeClassName="active">Sign Up</NavLink>
              </NavItem> */}
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/" onClick={Logout} activeClassName="active">Logout</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/admin" activeClassName="active">Admin</NavLink>
              </NavItem>
            </Nav>
            <Form>
              <Input type="search" name="search" id="mySearch" placeholder="Search"/>
            </Form>
          </Collapse>
        </Navbar>
      </div>
    );
  } else {
    return (
      <div>
          <Navbar dark expand="md" className="shadow" >
            <NavbarBrand tag={RRNavLink} exact to="/"><img src={logo} style={{width: '60px', height: '60px'}} alt="logo" className="shadow"></img></NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar >
              <Nav className="mr-auto" navbar >
                <NavItem>
                    <NavLink tag={RRNavLink} exact to="/" activeClassName="active">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} exact to="/about" activeClassName="active">About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} exact to="/stores" activeClassName="active">Stores</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} exact to="/signup" activeClassName="active">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RRNavLink} exact to="/login" activeClassName="active">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} exact to="/admin" activeClassName="active">Admin</NavLink>
                </NavItem>
              </Nav>
              <Form>
                <Input type="search" name="search" id="mySearch" placeholder="Search"/>
              </Form>
            </Collapse>
          </Navbar>
        </div>
      );
  }
  
};

export default NavBar;
