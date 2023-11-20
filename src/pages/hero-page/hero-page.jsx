import React from 'react';
import { Link } from 'react-router-dom';
import styles from './hero-page.module.css';

function HeroPage() {
  return (
    <div className={styles.app}>
      <main className={styles.mainSize}>
        <Link to="/login" className={styles.loginButton}>Login</Link>
      </main>
    </div>
  );
}

export default HeroPage;
