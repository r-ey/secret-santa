import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../../images/appLogo.svg';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      {/* Left buttons */}
      <div className={`${styles.flex} ${styles.leftNav}`}>
        <p className={`${styles.navLink}`}>
          <Link to="/" replace className={`${styles.linkNoDecoration} ${styles.homeLink} ${styles.mr30}`}>
            Home
          </Link>
        </p>
        <p className={styles.navLink}>
          <Link to="/about" replace className={`${styles.linkNoDecoration} ${styles.homeLink}`}>
            About
          </Link>
        </p>
      </div>

      {/* Logo */}
      <div className={styles.logo}>
        <AppLogo />
      </div>

      {/* Right buttons */}
      <div className={`${styles.flex} ${styles.rightNav}`}>
        <p className={`${styles.navLink}`}>
          <Link to="/profile" replace className={`${styles.linkNoDecoration} ${styles.homeLink} ${styles.mr30}`}>
            My Profile
          </Link>
        </p>
        <p className={styles.navLink}>
          {/* TODO: Change to hero link */}
          <Link to="/login" replace className={`${styles.linkNoDecoration} ${styles.homeLink}`}>
            Log out
          </Link>
        </p>
      </div>
    </header>
  );
}

export default AppHeader;
