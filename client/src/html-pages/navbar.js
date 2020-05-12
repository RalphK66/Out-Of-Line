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
import "../css/navbar.css"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  function Germ(e) {
      e.preventDefault();
      let gif = document.getElementById("gif")
      let page = document.getElementById("annimation")
      if (e.detail === 5) {
        gif.hidden = false;
        page.style.animationPlayState = "running";
        gif.style.animationPlayState = "running";
        setTimeout(() => {
          page.style.animationPlayState = "paused";
          gif.hidden = true;
        }, 8000);
      }

    }


  return (
    <div>
    <img id="gif" src='https://media.giphy.com/media/d55y3M7J6ECPh3zGD9/source.gif' />
      <Navbar dark expand="md" className="shadow" id="navbar">
        <NavbarBrand tag={RRNavLink} exact to="/"><img onClick={Germ} src={logo} style={{width: '60px', height: '60px'}} alt="logo" className="shadow"></img></NavbarBrand>
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
};

export default NavBar;
