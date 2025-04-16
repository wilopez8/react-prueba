// src/components/Sidebar.js
import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { FiHome, FiUsers, FiBox, FiSettings } from 'react-icons/fi';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Sidebar header */}
      <Row className="mb-4">
        <Col className="d-flex align-items-center">
          <Nav.Brand href="#home" className="d-flex align-items-center">
            <span className="ms-2 sidebar-header">My App</span>
          </Nav.Brand>
        </Col>
      </Row>

      {/* Sidebar navigation*/}
      <Nav className="flex-column">
        <Nav.Link href="#home" className="d-flex align-items-center">
          <FiHome className="me-2 icon" />
          Dashboard
        </Nav.Link>
        <Nav.Link href="#users" className="d-flex align-items-center">
          <FiUsers className="me-2 icon" />
          Users
        </Nav.Link>
        <Nav.Link href="#products" className="d-flex align-items-center">
          <FiBox className="me-2 icon" />
          Products
        </Nav.Link>
        <Nav.Link href="#settings" className="d-flex align-items-center">
          <FiSettings className="me-2 icon" />
          Settings
        </Nav.Link>
      </Nav> 
    </div>
  );
}

export default Sidebar;
