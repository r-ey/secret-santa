import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as AppLogo } from '../../images/appLogo.svg';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      {/* Left buttons */}
      <div className={`${styles.flex} ${styles.leftNav}`}>
        <div className={`${styles.navLink}`}>
          {
            (window.location.pathname === '/') ? (
              <Link to="/" replace className={`${styles.linkNoDecoration} ${styles.LinkActive} ${styles.mr30}`}>
                Home
              </Link>
            ) : (
              <Link to="/" replace className={`${styles.linkNoDecoration} ${styles.mr30}`}>
                Home
              </Link>
            )
          }
        </div>
        <div className={styles.navLink}>
          {
            (window.location.pathname.includes('/about')) ? (
              <Link to="/about" replace className={`${styles.linkNoDecoration} ${styles.LinkActive} ${styles.mr30}`}>
                About
              </Link>
            ) : (
              <Link to="/about" replace className={`${styles.linkNoDecoration} ${styles.mr30}`}>
                About
              </Link>
            )
          }
        </div>
      </div>

      {/* Logo */}
      <div className={styles.logo}>
        <AppLogo />
      </div>

      {/* Right buttons */}
      <div className={`${styles.flex} ${styles.rightNav}`}>
        <div className={`${styles.navLink}`}>
          {
            (window.location.pathname.includes('/profile')) ? (
              <Link to="/profile" replace className={`${styles.linkNoDecoration} ${styles.LinkActive} ${styles.mr30}`}>
                My Profile
              </Link>
            ) : (
              <Link to="/profile" replace className={`${styles.linkNoDecoration} ${styles.mr30}`}>
                My Profile
              </Link>
            )
          }
        </div>
        <div className={styles.navLink}>
          {/* TODO: Change to hero link */}
          {
            (window.location.pathname.includes('/login')) ? (
              <Link to="/login" replace className={`${styles.linkNoDecoration} ${styles.LinkActive} ${styles.mr30}`}>
                Log out
              </Link>
            ) : (
              <Link to="/login" replace className={`${styles.linkNoDecoration}`}>
                Log out
              </Link>
            )
          }
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
