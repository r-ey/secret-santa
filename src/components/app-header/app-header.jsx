import React from 'react';
import { ReactComponent as AppLogo } from '../../images/appLogo.svg';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      {/* Left buttons */}
      <div className={`${styles.flex} ${styles.leftNav}`}>
        <p className={`${styles.navLink}`}>
          <a className={`${styles.linkNoDecoration} ${styles.homeLink} ${styles.mr30}`} href="/">
            Home
          </a>
        </p>
        <p className={styles.navLink}>
          <a className={`${styles.linkNoDecoration} ${styles.homeLink}`} href="/">
            About
          </a>
        </p>
      </div>

      {/* Logo */}
      <div className={styles.logo}>
        <AppLogo />
      </div>

      {/* Right buttons */}
      <div className={`${styles.flex} ${styles.rightNav}`}>
        <p className={`${styles.navLink}`}>
          <a className={`${styles.linkNoDecoration} ${styles.homeLink} ${styles.mr30}`} href="/login">
            My Profile
          </a>
        </p>
        <p className={styles.navLink}>
          <a className={`${styles.linkNoDecoration} ${styles.homeLink}`} href="/sign-up">
            Log out
          </a>
        </p>
      </div>
    </header>
  );
}

export default AppHeader;
