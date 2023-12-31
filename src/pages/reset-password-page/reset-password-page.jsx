import React from 'react';
import { Link } from 'react-router-dom';
import styles from './reset-password-page.module.css';

function ResetPasswordPage() {
  return (
    <div className={styles.app}>
      <main className={styles.mainSize}>
        <div className={styles.mainContent}>
          <div className={styles.resetPasswordText}>
            Reset Password
          </div>
          <div className={styles.mainEntry}>
            <form className={styles.resetInfoText} noValidate autoComplete="off">
              <input
                id="newPassword"
                className={styles.requirementText}
                placeholder="New Password" // Placeholder for username
              />

              <input
                id="code"
                className={styles.requirementText}
                placeholder="Confirmation Code" // Placeholder for username
              />
              <button type="submit" className={styles.resetCodeButton}>Send Reset Code</button>
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

export default ResetPasswordPage;
