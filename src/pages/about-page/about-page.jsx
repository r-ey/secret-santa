import React from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './about-page.module.css';

function AboutPage() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainSize}>
        <div className={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quod, sit. Atque eum quia
          temporibus. Autem dolore id iure. Accusantium consequatur cupiditate deleniti
          distinctio eum impedit porro provident, quisquam recusandae reprehenderit tempora tempore
          voluptas, voluptate! Aliquid corporis cumque, deleniti doloremque esse et nisi officiis
          possimus quasi soluta unde veniam, voluptas?
        </div>
      </main>
    </div>
  );
}

export default AboutPage;
