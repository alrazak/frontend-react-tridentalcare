import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function CustomNavbar() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Navbar className="navbar-custom" expand="lg" fixed="top" collapseOnSelect>
        <Navbar.Brand href="#home">Tri Dental Care</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-items">
            <Nav.Link href="#about">Tentang Kami</Nav.Link>
            <Nav.Link href="#testimonial">Testimoni</Nav.Link>
            <Nav.Link href="#contact">Hubungi Kami</Nav.Link>
            {/* Menu Register dengan dropdown */}
            <div
              className="nav-link-dropdown"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <Nav.Link href="#register">Register</Nav.Link>
              {isHovering && (
                <div className="dropdown-menu">
                  <Nav.Link href="#buat-akun">Buat Akun</Nav.Link>
                  <Nav.Link href="#login">Login</Nav.Link>
                </div>
              )}
            </div>
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
          margin-right: 15px;
        }

        .navbar-custom .nav-link:hover {
          color: #ddd !important;
        }

        .nav-link-dropdown {
          position: relative;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #007bff;
          padding: 10px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .dropdown-menu .nav-link {
          margin-right: 0;
          padding: 5px 10px;
          font-size: 0.9em;
          color: #fff;
        }

        .dropdown-menu .nav-link:hover {
          color: #ddd;
        }
      `}</style>
    </>
  );
}

export default CustomNavbar;
