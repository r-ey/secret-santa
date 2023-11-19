import React from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './home-page.module.css';

function HomePage() {
  return (
    <div className={styles.app}>
      <AppHeader />
    </div>
  );
}

export default HomePage;
