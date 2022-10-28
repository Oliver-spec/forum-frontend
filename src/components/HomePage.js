import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ user }) {
  return (
    <div>
      {user ? <Link to="/profilePage">{user.username}</Link> : (
        <>
          <div><Link to="/loginPage">Login</Link></div>
          <div><Link to="/signUpPage">Sign Up</Link></div>
        </>
      )}
      <div>Home</div>
    </div>
  );
}

export default HomePage;
