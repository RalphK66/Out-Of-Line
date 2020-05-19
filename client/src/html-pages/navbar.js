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
  Input,
  NavbarText
} from "reactstrap";
import { logoutMessage } from '../notifications/toasts'
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
      return {state: true, username: session.username};
    } else if (session !== undefined && !session.isEmployee) {
      return {state: true , username: session.username};
    } else return {state: false}
  }

  // Checks whether or not the user is authenticated, and as an employee or customer
  React.useEffect(() => {
    let info = checkSession()
    if (info.state) {
      setIsEmployeeLoggedIn(true);
      setUsername(info.username)
    } else {
      if (Cookies.get("token") !== undefined) {
        setIsCustomerLoggedIn(true);
        setUsername(info.username)
      }
    }
  }, []);

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
            {/* Displays the name of the person that is logged in */}
            <NavbarText className="navbar-text-user" >Hi, {username}</NavbarText>
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
            {/* Displays the name of the person that is logged in */}
            <NavbarText>Hi, {username}</NavbarText>
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
                <NavLink tag={RRNavLink} exact to="/signup" activeClassName="active" className="navbar-navlink">SignUp</NavLink>
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
