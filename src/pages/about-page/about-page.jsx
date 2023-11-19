import React from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './about-page.module.css';

function AboutPage() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainSize}>
        <div className={styles.aboutText}>tmp</div>
      </main>
    </div>
  );
}

export default AboutPage;
