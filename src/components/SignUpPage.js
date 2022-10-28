import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [signUpNotice, setSignUpNotice] = useState('');

  const navigate = useNavigate();

  const sendSignUpRequest = async (event) => {
    event.preventDefault();

    if (password !== repeatPassword) {
      setSignUpNotice('Password does not match with repeated password');
      return;
    }

    const res = await axios.post('http://localhost:3001/register', { username, password });

    if (res.data !== 'Sign up successful') {
      setSignUpNotice(res.data);
      return;
    }

    setSignUpNotice('');

    navigate('/loginPage');
  };

  return (
    <div>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/loginPage">Login</Link></div>
      <div>Sign Up</div>
      <div>{signUpNotice}</div>
      <form onSubmit={sendSignUpRequest}>
        <div>
          Username:
          <input type="text" value={username} onChange={(event) => { setUsername(event.target.value); }} />
        </div>
        <div>
          Password:
          <input type="password" value={password} onChange={(event) => { setPassword(event.target.value); }} />
        </div>
        <div>
          Repeat Password:
          <input type="password" value={repeatPassword} onChange={(event) => { setRepeatPassword(event.target.value); }} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUpPage;
