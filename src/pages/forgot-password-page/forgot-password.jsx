import React from 'react';
import { Link } from 'react-router-dom';
import styles from './forgot-password-page.module.css';

function ForgotPasswordPage() {
  return (
    <div className={styles.app}>
      <main className={styles.mainSize}>
        <div className={styles.mainContent}>
          <div className={styles.forgotPasswordText}>
            Forgot Password
          </div>
          <div className={styles.mainEntry}>
            <form className={styles.forgotInfoText} noValidate autoComplete="off">
              <input
                id="email"
                className={styles.requirementText}
                placeholder="Recovery Email" // Placeholder for username
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

export default ForgotPasswordPage;
