import React from 'react';
import { Link } from 'react-router-dom';

function HomePage({ user }) {
  return (
    <div>
      {user ? <div>{user.username}</div> : <div>Guest</div>}
      <Link to="loginPage">Login</Link>
      <div>Home</div>
    </div>
  );
}

export default HomePage;
