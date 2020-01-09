import React, { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { useHistory } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const Navigation = (props) => {
  const { push } = useHistory()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const message = localStorage.getItem('welcomemsg')
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const AuthLinks = () => {
      return (
          <>
            <NavItem style={{float: "right"}}>
              <NavLink onClick={e => {
                e.preventDefault();
                push("/dashboard")
              }}>
                {message}
              </NavLink>
            </NavItem>
            <NavItem style={{float: "right"}}>
                <NavLink onClick={e => {
                  e.preventDefault();
                  dispatch({type: "LOGOUT"})
                  localStorage.clear()
                  push("/")
                }}>Logout</NavLink>
            </NavItem>
          </>
      )
  }

  const VisitLinks = () => {
      return (
          <>
            <NavItem style={{float: "right"}}>
                <NavLink href="/signin/">Sign In</NavLink>
            </NavItem>
            <NavItem style={{float: "right"}}>
                <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
          </>
      )
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href={token ? '/dashboard' : '/'}>Hacker News Salt Mine</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { token ?
                <AuthLinks /> :
                <VisitLinks /> 
            }
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;

/*
<NavbarText>User Name</NavbarText>
*/