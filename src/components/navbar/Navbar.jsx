import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" className="fixed-navbar">
        <Container>
          <Navbar.Brand href="#home" className="text-white">Tri Dental Care</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="text-white">About</Nav.Link>
            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
            <Nav.Link href="#register" className="text-white">Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default CustomNavbar;