import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import DelUserModal from './DelUserModal';

function ProfilePage({ user, setUser }) {
  const [modalOpen, setModalOpen] = useState(false);

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
        <button onClick={handleLogout} type="button">Logout</button>
        <button onClick={() => { setModalOpen(true); }} type="button">Delete Account</button>
        <DelUserModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          user={user}
          handleLogout={handleLogout}
        />
      </div>
    );
  }
}

export default ProfilePage;
