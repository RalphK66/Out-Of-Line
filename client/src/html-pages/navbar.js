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
import "../css/navbar.css"

// Navbar component, will display differently depending on authentication and authorization status 
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

  // Checks whether or not the user is logged in or not, and as an employee or customer
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
    if (checkSession()) {
      setIsEmployeeLoggedIn(true);
    } else {
      console.log(Cookies.get("token"));
      if (Cookies.get("token") !== undefined) {
        console.log(Cookies.get("token"));
        setIsCustomerLoggedIn(true);
      }
    }
  }, []);

  // Navbar for customers
  if (isCustomerLoggedIn) {
    return (
      <div>
      <Navbar dark expand="md" className="shadow my-navbar" id="navbar" >
        <NavbarBrand tag={RRNavLink} exact to="/"><img src={logo} alt="logo" className="shadow navbar-logo" ></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar >
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/" activeClassName="active" className="navbar-navlink">Home</NavLink>
            </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/about" activeClassName="active" className="navbar-navlink">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/contact" activeClassName="active" className="navbar-navlink">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={RRNavLink} exact to="/stores" activeClassName="active" className="navbar-navlink">Stores</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/" onClick={Logout} activeClassName="active" className="navbar-navlink">Logout</NavLink>
              </NavItem>
            </Nav>
            <Form>
              <Input type="search" name="search" id="mySearch" placeholder="Search"/>
            </Form>
          </Collapse>
        </Navbar>
      </div>
    );
  } else if (isEmployeeLoggedIn) {
    // Navbar for employees
    return (
      <div>
      <Navbar dark expand="md" className="shadow my-navbar" id="navbar" >
        <NavbarBrand tag={RRNavLink} exact to="/"><img src={logo} alt="logo" className="shadow navbar-logo" ></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar >
          <NavItem>
          <NavLink tag={RRNavLink} exact to="/" activeClassName="active" className="navbar-navlink">Home</NavLink>
      </NavItem>
              <NavItem>
              <NavLink tag={RRNavLink} exact to="/about" activeClassName="active" className="navbar-navlink">About</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={RRNavLink} exact to="/contact" activeClassName="active" className="navbar-navlink">Contact</NavLink>
            </NavItem>
              <NavItem>
              <NavLink tag={RRNavLink} exact to="/stores" activeClassName="active" className="navbar-navlink">Stores</NavLink>
              </NavItem>
              <NavItem>
              <NavLink tag={RRNavLink} exact to="/admin" activeClassName="active" className="navbar-navlink">Admin</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink tag={RRNavLink} exact to="/" onClick={Logout} activeClassName="active" className="navbar-navlink">Logout</NavLink>
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
    // Navbar for no auth
    return (
      <div>
      <Navbar dark expand="md" className="shadow my-navbar" id="navbar" >
        <NavbarBrand tag={RRNavLink} exact to="/"><img src={logo} alt="logo" className="shadow navbar-logo" ></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar >
          <NavItem>
          <NavLink tag={RRNavLink} exact to="/" activeClassName="active" className="navbar-navlink">Home</NavLink>
      </NavItem>
                <NavItem>
                <NavLink tag={RRNavLink} exact to="/about" activeClassName="active" className="navbar-navlink">About</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={RRNavLink} exact to="/contact" activeClassName="active" className="navbar-navlink">Contact</NavLink>
              </NavItem>
                <NavItem>
                <NavLink tag={RRNavLink} exact to="/stores" activeClassName="active" className="navbar-navlink">Stores</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={RRNavLink} exact to="/signup" activeClassName="active" className="navbar-navlink">Sign Up</NavLink>
                </NavItem>
                <NavItem>
                <NavLink tag={RRNavLink} exact to="/login" activeClassName="active" className="navbar-navlink">Login</NavLink>
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
