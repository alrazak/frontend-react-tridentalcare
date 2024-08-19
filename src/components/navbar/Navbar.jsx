import React from 'react';

function CustomNavbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navbarBrand}>
        <a href="#home" style={styles.brandLink}>Tri Dental Care</a>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
        <li style={styles.navItem}><a href="#testimonial" style={styles.navLink}>Testimoni</a></li>
        <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        <li style={styles.navItem}><a href="#register" style={styles.navLink}>Register</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
  },
  navbarBrand: {
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  brandLink: {
    color: '#fff',
    textDecoration: 'none',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1em',
  },
};

export default CustomNavbar;
