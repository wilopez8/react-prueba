import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
      <Navbar.Brand href="#">BootstrapCreative</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="../../homepage/layout/" target="_blank" rel="noopener noreferrer">Visit Site</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link href="#">Link</Nav.Link>
          <Nav.Link><i className="fa fa-bell text-warning" aria-hidden="true"></i> <span className="badge-pill badge-danger text-light">3</span></Nav.Link>
          <NavDropdown title={<img src="https://secure.gravatar.com/avatar/38eff4a7ab7f391783f71ccb38508df6?s=30" alt="" className="rounded-circle"/>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Edit My Profile</NavDropdown.Item>
            <NavDropdown.Item href="#">Log Out</NavDropdown.Item>
            <NavDropdown.Item href="#">Help</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;