import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import './App.css';
import AboutPage from '../../pages/home-page/about-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/login" element={<LoginPage />} /> */}
      {/* <Route path="/profile" element={<ProfilePage />} /> */}
      {/* <Route path="/create-account" element={<CreateAccountPage />} /> */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default App;
