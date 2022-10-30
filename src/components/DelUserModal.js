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
      return;
    }

    setDelNotice(res.data);
    setPassword('');
  };

  if (modalOpen) {
    return (
      <div className="modal-background">
        <div className="modal-container">
          <button className="cancel-button" onClick={() => { setModalOpen(false); }} type="button">X</button>
          <form onSubmit={sendDelUserRequest} className="form">
            <input className="del-user-pw-input" type="password" onChange={(event) => { setPassword(event.target.value); }} value={password} placeholder="Password" />
            <button className="del-btn" type="submit">DELETE ACCOUNT</button>
          </form>
          <div className="del-notice">{delNotice}</div>
        </div>
      </div>
    );
  }
}

export default DelUserModal;
