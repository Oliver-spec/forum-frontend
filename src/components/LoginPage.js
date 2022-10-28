import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

function LoginPage({ setUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginNotice, setLoginNotice] = useState('');

  const navigate = useNavigate();

  const sendLoginRequest = async (event) => {
    event.preventDefault();

    const res = await axios.post('http://localhost:3001/login', { username, password });

    if (!(res.data instanceof Object)) {
      setLoginNotice(res.data);
      return;
    }

    localStorage.setItem('forumLoggedInUser', JSON.stringify(res.data));

    setUser(res.data);
    setLoginNotice('');

    navigate('/');
  };

  return (
    <div>
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
