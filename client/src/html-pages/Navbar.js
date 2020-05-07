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
import '../index.css'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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
                <NavLink tag={RRNavLink} exact to="/signup" activeClassName="active">SignUp</NavLink>
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
};

export default NavBar;
