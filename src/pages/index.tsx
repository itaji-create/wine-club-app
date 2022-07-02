import Link from 'next/link';
import React, { useState } from 'react';

import handleClick from '../utils/handleClickLoginPage';

// eslint-disable-next-line max-lines-per-function
const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [off, setOff] = useState(true);

  const user = { username, password };

  function handleChange(e: unknown): void {
    const { value, name } = e.target;
    setOff(false);
    if (name === 'username') {
      setUsername(value);
      if (!username || username.length < 6) setOff(true);
    }
    if (name === 'password') {
      setPassword(value);
    }
  }

  return (
    <div id='loginPage'>
      <h1>Wine</h1>
      <div id='loginContainer'>
        <input value={ username } placeholder="username" id="username" name="username"
          onChange={ handleChange }
          data-testid="username-input"
          className='loginItem loginItem-ipt'
        />
        <br />
        <input
          value={ password } placeholder="senha" className='loginItem loginItem-ipt'
          onChange={ handleChange }
          name="password"
          data-testid="pw-input"
        />
        <br />
        <Link href='/catalog'>
          <button type="button" className='loginItem' onClick={ () => handleClick(user) }
            data-testid="login-btn"
            disabled={ off }
          >
            Login
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Home;
