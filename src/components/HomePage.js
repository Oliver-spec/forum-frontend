import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ user, setUser }) {
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('forumLoggedInUser');
  };

  const showLoginStatus = () => {
    if (user) {
      return (
        <>
          <div>{user.username}</div>
          <button onClick={handleLogout} type="submit">Logout</button>
        </>
      );
    }

    return (
      <>
        <div>Guest</div>
        <div><Link to="/loginPage">Login</Link></div>
        <div><Link to="/signUpPage">Sign Up</Link></div>
      </>
    );
  };

  return (
    <div>
      {showLoginStatus()}
      <div>Home</div>
    </div>
  );
}

export default HomePage;
