import { React, useState } from 'react';
import axios from 'axios';
import './DelUserModal.css';

function DelUserModal({
  modalOpen, setModalOpen, user, handleLogout,
}) {
  const [password, setPassword] = useState('');
  const [delNotice, setDelNotice] = useState('');

  const sendDelUserRequest = async (event) => {
    event.preventDefault();

    const res = await axios.post('http://localhost:3001/deleteUser', { id: user.id, password });

    if (res.data === 'User deleted') {
      handleLogout();
    }

    setDelNotice(res.data);
  };

  if (modalOpen) {
    return (
      <div className="modal-background">
        <div className="modal-container">
          <form onSubmit={sendDelUserRequest}>
            <input type="password" onChange={(event) => { setPassword(event.target.value); }} value={password} placeholder="Password" />
            <button type="submit">DELETE ACCOUNT</button>
            <button onClick={() => { setModalOpen(false); }} type="button">Cancel</button>
          </form>
          <div>{delNotice}</div>
        </div>
      </div>
    );
  }
}

export default DelUserModal;
