import React from 'react';
import { Link } from 'react-router-dom';
import styles from './create-account-page.module.css';

function CreateAccountPage() {
  return (
    <div className={styles.app}>
      <main className={styles.mainSize}>
        <div className={styles.mainContent}>
          <div className={styles.loginText}>
            Create Account
          </div>
          <div className={styles.mainEntry}>
            <form className={styles.loginInfoText} noValidate autoComplete="off">
              <input
                id="username"
                className={styles.requirementText}
                placeholder="Username" // Placeholder for username
              />
              <input
                id="password"
                type="password" // Set type as password for security
                className={styles.requirementText}
                placeholder="Password" // Placeholder for password
              />
              <button type="submit" className={styles.createAccountButton}>Create Account</button>
            </form>
            <div className={styles.loginAssist}>
              <Link to="/login" replace className={styles.loginAssistText}>Already have an account?</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CreateAccountPage;
