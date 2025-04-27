import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Mi Aplicación</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown id="nav-dropdown-dark-example" title="Agenda" menuVariant="light">
                <NavDropdown.Item as={Link} to="/agenda">
                  Programación de Agenda
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/calendar">
                  Calendario
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/clients">
                Clientes
              </Nav.Link>
              <Nav.Link as={NavLink} to="/cartera">
                Cartera
              </Nav.Link>
              <NavDropdown id="nav-dropdown-dark-example" title="Usuario" menuVariant="light">
                <NavDropdown.Item as={Link} to="/login">
                  Login
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/configuracion">
                  Configuración
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/propiedades">
                  Propiedades
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;