import React, { useState } from "react";
import { NavLink as RRNavLink } from 'react-router-dom';

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

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


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
            <NavItem>
              <NavLink tag={RRNavLink} exact to="/admin" activeClassName="active" className="navbar-navlink">Admin</NavLink>
            </NavItem>
          </Nav>
          <Form>
            <Input type="search" name="search" id="mySearch" placeholder="Search"/>
          </Form>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
