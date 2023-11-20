import React from 'react';
import { useSelector } from 'react-redux';
import AppHeader from '../../components/app-header/app-header';
import styles from './profile-page.module.css';

function ProfilePage() {
  const { accountData } = useSelector((state) => state.accountStore);

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
              <p className={styles.ml10}>Enjoys reading and gardening</p>
            </div>
            <div>
              <h3 className={styles.aboutHeader}>Allergies</h3>
              <p className={styles.ml10}>N/A</p>
            </div>
          </div>
        </div>
        <div className={styles.contentSection}>
          <h1 className={styles.headerOne}>Info</h1>
          <form className={styles.textBox}>
            <input className={styles.input} type="text" value={accountData.username} />
            <input className={styles.input} type="password" value={accountData.password} />
            <input className={styles.input} type="email" value={accountData.email} />
            <button className={styles.submitButton} type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
}

export default ProfilePage;
