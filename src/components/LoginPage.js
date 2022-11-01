import { React, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login&SignUp.css';

function LoginPage({ setUser, loginNotice, setLoginNotice }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const sendLoginRequest = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:3001/api/login', { username, password });

      localStorage.setItem('forumLoggedInUser', JSON.stringify(res.data));
      setUser(res.data);

      setLoginNotice('');

      navigate('/');
    } catch (err) {
      setLoginNotice(err.response.data);
    }
  };

  return (
    <div className="root-container">
      <form onSubmit={sendLoginRequest} className="login-form">
        <div className="input-container">
          <div className="input-description">Username</div>
          {loginNotice
            ? <input className="login-input-red" type="text" value={username} onChange={(event) => { setUsername(event.target.value); }} />
            : <input className="login-input" type="text" value={username} onChange={(event) => { setUsername(event.target.value); }} />}
        </div>
        <div className="input-container">
          <div className="input-description">Password</div>
          {loginNotice
            ? <input className="login-input-red" type="password" value={password} onChange={(event) => { setPassword(event.target.value); }} />
            : <input className="login-input" type="password" value={password} onChange={(event) => { setPassword(event.target.value); }} />}
        </div>
        <div className="login-notice">{loginNotice}</div>
        <button type="submit" className="login-button">Login</button>
      </form>
      <div className="links-container">
        <div className="link"><Link to="/">Home</Link></div>
        <div className="link"><Link to="/signUpPage">Sign Up</Link></div>
      </div>
    </div>
  );
}

export default LoginPage;
