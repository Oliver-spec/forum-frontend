import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login&SignUp.css';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [signUpNotice, setSignUpNotice] = useState('');

  const navigate = useNavigate();

  const sendSignUpRequest = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setSignUpNotice('Passwords does not match');

      setPassword('');
      setRepeatPassword('');

      return;
    }

    const res = await axios.post('http://localhost:3001/register', { username, password });

    if (res.data !== 'Sign up successful') {
      setSignUpNotice(res.data);

      setUsername('');
      setPassword('');
      setRepeatPassword('');

      return;
    }

    setSignUpNotice('');

    navigate('/loginPage');
  };

  return (
    <div className="root-container">
      <form onSubmit={sendSignUpRequest} className="login-form">
        <div className="input-container-sign-up">
          <div className="input-description">Username</div>
          {signUpNotice ? <input className="login-input-red" type="text" value={username} onChange={(event) => { setUsername(event.target.value); }} />
            : <input className="login-input" type="text" value={username} onChange={(event) => { setUsername(event.target.value); }} />}
        </div>
        <div className="input-container-sign-up">
          <div className="input-description">Password</div>
          {signUpNotice ? <input className="login-input-red" type="password" value={password} onChange={(event) => { setPassword(event.target.value); }} />
            : <input className="login-input" type="password" value={password} onChange={(event) => { setPassword(event.target.value); }} />}
        </div>
        <div className="input-container-sign-up">
          <div className="input-description">Repeat Password</div>
          {signUpNotice ? <input className="login-input-red" type="password" value={repeatPassword} onChange={(event) => { setRepeatPassword(event.target.value); }} />
            : <input className="login-input" type="password" value={repeatPassword} onChange={(event) => { setRepeatPassword(event.target.value); }} />}
        </div>
        <div className="login-notice">{signUpNotice}</div>
        <button type="submit" className="login-button">Sign Up</button>
      </form>
      <div className="links-container">
        <div className="link"><Link to="/">Home</Link></div>
        <div className="link"><Link to="/loginPage">Login</Link></div>
      </div>
    </div>
  );
}

export default SignUpPage;
