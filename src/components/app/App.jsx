import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/home-page/home-page';
import ProfilePage from '../../pages/profile-page/profile-page';
import AboutPage from '../../pages/about-page/about-page';
import LoginPage from '../../pages/login-page/login-page';
import CreateAccountPage from '../../pages/create-account-page/create-account-page';
import HeroPage from '../../pages/hero-page/hero-page';
import ForgotPasswordPage from '../../pages/forgot-password-page/forgot-password';
import ResetPasswordPage from '../../pages/reset-password-page/reset-password-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      <Route path="/hero" element={<HeroPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/create-account" element={<CreateAccountPage />} />
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
