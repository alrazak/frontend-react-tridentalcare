import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark" style={styles.navbar} expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={styles.navbarBrand}>Tri Dental Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={styles.navbarCollapse}>
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Styling definitions
const styles = {
  navbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  navbarBrand: {
    flex: 1,
    textAlign: 'left', // Aligns text to the left
  },
  navbarCollapse: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
};

export default CustomNavbar;
