import React from 'react';
import { ReactComponent as AppLogo } from '../../images/appLogo.svg';
import styles from './app-header.module.css';

function AppHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <p className={`${styles.navLink}`}>
          <a className={`${styles.linkNoDecoration} ${styles.homeLink} ${styles.mr60px}`} href="/">
            Home
          </a>
        </p>
        <p className={styles.navLink}>
          <a className={`${styles.linkNoDecoration} ${styles.homeLink}`} href="/">
            About
          </a>
        </p>
      </div>
      <div className={styles.logo}>
        <AppLogo />
      </div>
      <div className={styles.flex}>
        <p className={`${styles.navLink}`}>
          <a className={`${styles.linkNoDecoration} ${styles.homeLink} ${styles.mr60px}`} href="/login">
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
