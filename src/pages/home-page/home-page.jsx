import React from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './home-page.module.css';

function HomePage() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainSize}>
        <div className={styles.cardContainer}>
          <div className={styles.cardCreated}>
            tmp
          </div>
          <div className={styles.cardCreated}>
            tmp
          </div>
          <div className={styles.cardNew}>
            tmp
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
