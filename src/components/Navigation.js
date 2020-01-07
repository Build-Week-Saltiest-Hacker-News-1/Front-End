import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './../actions'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const Navigation = (props) => {

  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const AuthLinks = () => {
      const message = useSelector(state => state.message)
      return (
          <>
            <NavItem>
              <NavLink>
                {message}
              </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/" onClick={e => {
                  e.preventDefault();
                  localStorage.clear()
                  dispatch(logout())
                }}>Logout</NavLink>
            </NavItem>
          </>
      )
  }

  const VisitLinks = () => {
      return (
          <>
            <NavItem>
                <NavLink href="/signin/">Sign In</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/signup">Sign Up</NavLink>
            </NavItem>
          </>
      )
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Salt Mine</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { props.loggedIn ?
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