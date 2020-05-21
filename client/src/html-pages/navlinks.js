import React from "react";
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  NavItem,
  NavLink,
} from "reactstrap";

export const DefaultLinks = () => {
    return (
    <React.Fragment>
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
    </React.Fragment>
    )
}

export const AdminLinks = (props) => {
    return (
    <React.Fragment>
        <NavItem>
            <NavLink tag={RRNavLink} exact to="/admin" activeClassName="active" className="navbar-navlink">Admin</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={RRNavLink} exact to="/profile_page" activeClassName="active" className="navbar-navlink">Queue</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={RRNavLink} exact to="/" onClick={props} activeClassName="active" className="navbar-navlink">Logout</NavLink>
        </NavItem>
    </React.Fragment>
    )
}

export const CustomerLinks = (props) => {
    return (
    <React.Fragment>
        <NavItem>
            <NavLink tag={RRNavLink} exact to="/profile_page" activeClassName="active" className="navbar-navlink">Queue</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={RRNavLink} exact to="/" onClick={props} activeClassName="active" className="navbar-navlink">Logout</NavLink>
        </NavItem>
    </React.Fragment> 
    )
}

 export const NotLoggedIn = () => {
     return (
    <React.Fragment>
        <NavItem>
            <NavLink tag={RRNavLink} exact to="/signup" activeClassName="active" className="navbar-navlink">SignUp</NavLink>
        </NavItem>
        <NavItem>
            <NavLink tag={RRNavLink} exact to="/login" activeClassName="active" className="navbar-navlink">Login</NavLink>
        </NavItem> 
    </React.Fragment>
     )
}

 

  export default {
      DefaultLinks, AdminLinks, CustomerLinks, NotLoggedIn,
  }