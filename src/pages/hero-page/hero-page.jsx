import React from 'react';
import styles from './hero-page.module.css';

function HeroPage() {
  return (
    <div className={styles.app}>
      <main className={styles.mainSize}>
        <div className={styles.loginButton}>Login</div>
      </main>
    </div>
  );
}

export default HeroPage;
