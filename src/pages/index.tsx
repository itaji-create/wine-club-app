import { useRouter } from 'next/router';
import React, { useState } from 'react';

// eslint-disable-next-line max-lines-per-function
const Home: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [off, setOff] = useState(true);

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

  function handleClick(): void {
    const user = { username, password };
    const usersString = localStorage.getItem('users');

    localStorage.setItem('userOnline', JSON.stringify(user));
    if (usersString) {
      const users = JSON.parse(usersString);
      const exist = users.some((e: { username: string; }) => e.username === user.username);
      if (!exist) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      }
    } else {
      localStorage.setItem('users', JSON.stringify([user]));
    }
    router.push('/catalog');
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
        <button type="button" className='loginItem' onClick={ handleClick }
          data-testid="login-btn"
          disabled={ off }
        >
          Login
        </button>
      </div>

    </div>
  );
};

export default Home;
