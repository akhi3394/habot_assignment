import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import logo from '/src/assets/habot-logo.png';

const Header = () => {
  return (
    <Navbar bg="white" variant="light" expand="lg" style={{ height: '100px' }} className='mx-5'>
      <Navbar.Brand href="#home" >
        <img src={logo} alt="" style={{ height: '80px',width:'150px' }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link href="#find-suppliers">Find Suppliers</Nav.Link>
          <NavDropdown title="Find Service Tags" id="basic-nav-dropdown">
            <NavDropdown.Item href="#tag1">Tag1</NavDropdown.Item>
            <NavDropdown.Item href="#tag2">Tag2</NavDropdown.Item>
            <NavDropdown.Item href="#tag3">Tag3</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Link to="/login">
          <Button variant="outline-success">Login / Sign Up</Button>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
