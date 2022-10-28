import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage({ user, setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginNotice, setLoginNotice] = useState('');

  const sendLoginRequest = async (event) => {
    event.preventDefault();

    const res = await axios.post('http://localhost:3001/login', { username, password });

    if (!(res.data instanceof Object)) {
      setLoginNotice(res.data);
      return;
    }

    setUser(res.data);
    setLoginNotice('');
  };

  return (
    <div>
      {user ? <div>{user.username}</div> : <div>Register placeholder</div>}
      <Link to="/">Home</Link>
      <div>Login</div>
      <div>{loginNotice}</div>
      <form onSubmit={sendLoginRequest}>
        <div>
          Username:
          <input type="text" value={username} onChange={(event) => { setUsername(event.target.value); }} />
        </div>
        <div>
          Password:
          <input type="password" value={password} onChange={(event) => { setPassword(event.target.value); }} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
