import React, { useState } from 'react';
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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const AuthLinks = () => {
      return (
          <>
          
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