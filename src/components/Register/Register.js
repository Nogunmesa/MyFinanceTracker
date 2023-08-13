import React, { useState } from 'react';

async function registerUser(credentials) {
  return fetch('http://localhost:8080/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}

export default function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    
  console.log('Username:', username);
  console.log('Password:', password);
    const response = await registerUser({ username, password });
    if (response.message) {
      onRegister(response.token);
      console.log('registration pending');
    } else {
      console.error('Registration failed:', response.error);
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit">Register</button>
        
      </form>
    </div>
  );
}
