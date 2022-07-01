import type { NextPage } from "next";
import Link from "next/link";
import React, { useState } from 'react';

const Login: NextPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange({ target }: any): void {
    console.log(target.name);
    if (target.name === 'email') setEmail(target.value);
    if (target.name === 'password') setPassword(target.value);  
  }

  function handleClick(): void {
    const user = { email, password };
    const usersString = localStorage.getItem('users');

    if (!email || !password) throw new Error('Não esqueça de preencher os campos email e senha ;)');

    if (usersString) {
      const users = JSON.parse(usersString);
      const exist = users.some((e: { email: string; }) => e.email === user.email);
      console.log(exist);
      if (!exist) {
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
      }
    } else {
      localStorage.setItem('users', JSON.stringify([user]));
    }
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
      />
      <br />
      <Link href="/catalog">
      <button
        type="button"
        onClick={ handleClick }
        data-testid="login-btn"
      >
        Login
      </button>
      </Link>
    </div>
  )
}

export default Login;
