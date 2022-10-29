import { React, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import ProfilePage from './components/ProfilePage';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem('forumLoggedInUser')) {
      setUser(JSON.parse(localStorage.getItem('forumLoggedInUser')));
    }
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
        <Route path="/loginPage" element={<LoginPage setUser={setUser} />} />
        <Route path="/signUpPage" element={<SignUpPage />} />
        <Route path="/profilePage" element={<ProfilePage user={user} setUser={setUser} />} />
      </Routes>
    </div>
  );
}

export default App;
