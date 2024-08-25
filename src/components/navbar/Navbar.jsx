import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  return (
    <>
      <Navbar className="navbar-custom" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Tri Dental Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-items">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#testimonial">Testimoni</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style jsx>{`
        .navbar-custom {
          background-color: #007bff !important;
          padding: 0 10%;
        }

        .navbar-custom .navbar-brand {
          font-size: 1.5em;
          font-weight: bold;
          color: #fff !important;
        }

        .navbar-custom .nav-items {
          margin-left: auto;
          margin-right: 0;
        }

        .navbar-custom .nav-link {
          font-size: 1em;
          color: #fff !important;
        }

        .navbar-custom .nav-link:hover {
          color: #ddd !important;
        }
      `}</style>
    </>
  );
}

export default CustomNavbar;
