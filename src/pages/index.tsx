import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

// eslint-disable-next-line max-lines-per-function
const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  function handleChange({ target }: any): void {
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setPassword(target.value);
  }

  function handleClick(): void {
    const user = { email, password };
    const usersString = localStorage.getItem('users');
    if (!email || !password) throw new Error('Não esqueça de preencher os campos email e senha ;)');

    localStorage.setItem('userOnline', JSON.stringify(user));
    if (usersString) {
      const users = JSON.parse(usersString);
      const exist = users.some((e: { email: string; }) => e.email === user.email);
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
    <div>
      <h1>Wine</h1>
      <input
        placeholder="email"
        id="email"
        name="email"
        onChange={ handleChange }
        data-testid="email-input"
      />
      <br />
      <input
        placeholder="senha"
        onChange={ handleChange }
        name="password"
        data-testid="pw-input"
      />
      <br />
      <button
        type="button"
        onClick={ handleClick }
        data-testid="login-btn"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
