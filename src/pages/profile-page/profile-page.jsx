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
              <p>Enjoys reading and gardening</p>
            </div>
            <div>
              <h3 className={styles.aboutHeader}>Allergies</h3>
              <p>N/A</p>
            </div>
          </div>
        </div>
        <div className={styles.contentSection}>
          <h1 className={styles.headerOne}>Info</h1>
          <div className={styles.textBox}>
            <input className={styles.input} type="text" placeholder="Enter Name" />
            <input className={styles.input} type="text" placeholder="Enter Password" />
            <input className={styles.input} type="text" placeholder="Enter Preferences" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
