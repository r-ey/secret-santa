import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './login-page.module.css';
import { loginFailure, loginSuccess } from '../../services/actions/account';

function LoginPage() {
  const dispatch = useDispatch();
  const { accountData, loginStatus } = useSelector((state) => state.accountStore);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (event.target.username.value === accountData.username
      && event.target.password.value === accountData.password) {
      dispatch(loginSuccess());
    } else {
      dispatch(loginFailure());
    }
  };

  useEffect(() => {
    if (loginStatus === true) {
      navigate('/', { replace: true });
    } else if (loginStatus !== 'initial') {
      alert('Incorrect username or password');
    }
  }, [loginStatus, navigate]);

  return (
    <div className={styles.app}>
      <main className={styles.mainSize}>
        <div className={styles.mainContent}>
          <div className={styles.loginText}>
            Login
          </div>
          <div className={styles.mainEntry}>
            <form className={styles.loginInfoText} onSubmit={handleSubmit} noValidate autoComplete="off">
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
