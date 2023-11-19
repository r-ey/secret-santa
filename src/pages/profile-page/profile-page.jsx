import React from 'react';
import AppHeader from '../../components/app-header/app-header';
import styles from './profile-page.module.css';

function ProfilePage() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main className={styles.mainSize}>
        <div className={styles.profileSideBar}>
          <div className={styles.avatarCircle} />
          <div className={styles.profileNickname}>
            My profile
          </div>
          <div className={styles.aboutTab}>
            <div>
              <h3 className={styles.aboutHeader}>Preferences</h3>
              <p>tmp</p>
            </div>
            <div>
              <h3 className={styles.aboutHeader}>Allergies</h3>
              <p>tmp</p>
            </div>
          </div>
        </div>
        <div className={styles.contentSection}>
          <h1 className={styles.headerOne}>Info</h1>
          <div className={styles.profileCards}>
            <div className={styles.card}>
              <h3 className={styles.cardHeader}>Groups Joined</h3>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardHeader}>Gifts Given</h3>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardHeader}>Gifts Received</h3>
            </div>
          </div>
          {/* eslint-disable-next-line react/button-has-type */}
          <button className={styles.profileButton}>
            <p className={styles.buttonText}>
              Join Group
            </p>
          </button>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
