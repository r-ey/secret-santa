import React from 'react';
import { Link } from 'react-router-dom';
import styles from './login-page.module.css';

function LoginPage() {
  return (
    <div className={styles.app}>
      <main className={styles.mainSize}>
        <div className={styles.mainContent}>
          <div className={styles.loginText}>
            Login
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
              <button type="submit" className={styles.loginButton}>Login</button>
            </form>
            <div className={styles.loginAssist}>
              <Link to="/create-account" replace className={styles.loginAssistText}>Don&apos;t have an account?</Link>
              <Link to="/forgot-password" replace className={styles.loginAssistText}>Forgot password?</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LoginPage;
