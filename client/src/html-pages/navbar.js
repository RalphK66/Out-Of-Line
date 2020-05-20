import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import Cookies from "js-cookie";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Form,
  Input,
  NavbarText
} from "reactstrap";
import { logoutMessage } from '../notifications/toasts'
import { DefaultLinks, AdminLinks, CustomerLinks, NotLoggedIn, } from './navlinks'
import logo from "../images/logo.png";
import "../css/navbar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isCustomerLoggedIn, setIsCustomerLoggedIn] = React.useState(false);
  const [isEmployeeLoggedIn, setIsEmployeeLoggedIn] = React.useState(false);
  const [username, setUsername] = React.useState("not logged in");
  const toggle = () => setIsOpen(!isOpen);

 
  // Logout component 
  const Logout = () => {
    console.log("Logged out");
    Cookies.remove('token');
    setIsEmployeeLoggedIn(false);
    setIsCustomerLoggedIn(false);
    logoutMessage()
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
      }
    } catch (error) {
      console.log(error)
    }
    if (session !== undefined && session.isEmployee) {
      return {state: true, username: session.username, isEmployee: session.isEmployee};
    } else if (session !== undefined && !session.isEmployee) {
      return {state: true , username: session.username, isEmployee: session.isEmployee};
    } else return {state: false}
  }

  // Checks whether or not the user is authenticated, and as an employee or customer
  React.useEffect(() => {
    let info = checkSession()
    if (info.state && info.isEmployee) {
      setIsEmployeeLoggedIn(true);
      setUsername(info.username)
    } else if (info.state && !info.isEmployee) {
        setIsCustomerLoggedIn(true);
        setUsername(info.username)
    }
  }, []);


    return (
      <div>
      <Navbar dark expand="md" className="shadow my-navbar" id="navbar" >
        <NavbarBrand tag={RRNavLink} exact to="/"><img src={logo} alt="logo" className="shadow navbar-logo" ></img></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar >
            <DefaultLinks />
            { isEmployeeLoggedIn ? AdminLinks(Logout) : null }
            { isCustomerLoggedIn ? CustomerLinks(Logout) : null }
            { !isEmployeeLoggedIn && !isCustomerLoggedIn ? <NotLoggedIn /> : null }
          </Nav>
            {/* Displays the name of the person that is logged in */} 
            {isCustomerLoggedIn || isEmployeeLoggedIn ? <NavbarText className="navbar-text-user">Hi, {username}</NavbarText> : null}
          <Form>
            <Input type="search" name="search" id="mySearch" placeholder="Search"/>
          </Form>
        </Collapse>
      </Navbar>
      </div>
    );
};

export default NavBar;
