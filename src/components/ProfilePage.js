import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function ProfilePage({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('forumLoggedInUser');

    navigate('/');
  };

  if (user) {
    return (
      <div>
        <div><Link to="/">Home</Link></div>
        <div>Profile</div>
        <div>
          Username:
          {' '}
          {user.username}
        </div>
        <button onClick={handleLogout} type="submit">Logout</button>
      </div>
    );
  }
}

export default ProfilePage;
