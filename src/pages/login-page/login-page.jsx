import React from 'react';
import styles from './login-page.module.css';

function LoginPage() {
  return (
    <div className={styles.app}>
      <main className={styles.mainSize}>
        <div className={styles.mainContent}>
          <h3 className={styles.loginText}>Login</h3>
          <div className={styles.mainEntry}>
            <div className={styles.loginInfoText}>
              <h5 className={styles.requirementText}>Username</h5>
              <h5 className={styles.requirementText}>Password</h5>
              <div className={styles.loginButton}>Login</div>
            </div>
            <div className={styles.loginAssist}>
              <p className={styles.loginAssistText}>Don&apos;t have an account?</p>
              <p className={styles.loginAssistText}>Forgot password?</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
