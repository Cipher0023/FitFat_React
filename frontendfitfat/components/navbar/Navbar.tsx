import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
      <nav className={styles.navbarContainer}>
        <div className={styles.navContent}>
          <a className={styles.navLink} href="/">
            Home
          </a>
        </div>
      </nav>
    );
  };

export default Navbar