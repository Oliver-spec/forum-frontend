import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ user }) {
  const showLoginStatus = () => {
    if (user) {
      return (
        <Link to="/profilePage">{user.username}</Link>
      );
    }

    return (
      <>
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
